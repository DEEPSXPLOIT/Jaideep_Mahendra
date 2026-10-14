import {readFile} from 'node:fs/promises';
import {test} from 'node:test';
import assert from 'node:assert/strict';
const load=async path=>import('data:text/javascript;base64,'+Buffer.from(await readFile(new URL(path,import.meta.url),'utf8')).toString('base64'));
const a=await load('../src/lib/projectAnalytics.js');const d=await load('../src/data/demoData.js');
test('CSV handles BOM, CRLF, escaped quotes, commas, and multiline fields',()=>{
 const rows=a.parseCSV('\uFEFFid,note\r\n1,"Hello, ""world"""\r\n2,"two\nlines"\r\n');
 assert.deepEqual(rows,[{id:'1',note:'Hello, "world"'},{id:'2',note:'two\nlines'}]);
});
test('CSV rejects duplicate headers, ragged rows, unclosed quotes, trailing quoted garbage, and oversized datasets',()=>{
 for(const csv of ['id,id\n1,2','id,name\n1','id,name\n1,"bad','id,name\n1,"value"garbage'])assert.throws(()=>a.parseCSV(csv));
 assert.throws(()=>a.parseCSV('id\n'+Array.from({length:2001},(_,i)=>i).join('\n')),/2,000/);
});
test('CSV export escapes quotes and neutralizes formula prefixes',()=>{
 const csv=a.toCSV([{name:'=SUM(A1:A2)',note:'Hello, "world"'}]);
 assert.equal(a.parseCSV(csv)[0].name,"'=SUM(A1:A2)");assert.equal(a.parseCSV(csv)[0].note,'Hello, "world"');
});
test('SLA counts only unresolved breaches and respects exact target boundary',()=>{
 assert.deepEqual(a.summarizeTickets(d.tickets),{total:6,open:5,resolved:1,breached:3});
 assert.equal(a.summarizeTickets([{status:'Open',priority:'P1',ageHours:4},{status:'Resolved',priority:'P1',ageHours:8}]).breached,0);
});
test('Quality audit produces disjoint invalid and duplicate counts and preserves extra fields',()=>{
 const report=a.auditRows(a.parseCSV(d.qualityCSV));assert.equal(report.clean.length,4);assert.equal(report.invalid,3);assert.equal(report.duplicates,1);assert.equal(report.clean[0].email,'user.a@example.com');assert.equal(report.clean[0].name,'Demo User A');
 const rows=[{id:'A',name:'',email:'bad',department:'IT',extra:' keep '},{id:'A',name:'User',email:'USER@example.com',department:'IT',extra:' keep '}];
 assert.equal(a.auditRows(rows).clean[0].extra,'keep');assert.throws(()=>a.auditRows([{id:'1'}]),/Missing columns/);
});
test('Sales uses distinct order IDs, sums order lines, and recalculates regional metrics',()=>{
 const rows=a.validateSales(a.parseCSV(d.salesCSV));const report=a.analyzeSales(rows);assert.equal(report.revenue,760000);assert.equal(report.orders,11);assert.equal(report.units,46);assert.equal(report.monthly.length,6);
 const south=a.analyzeSales(rows,'South');assert.equal(south.revenue,330000);assert.equal(south.orders,5);assert.equal(south.averageOrderValue,66000);
 const empty=a.analyzeSales(rows,'None');assert.equal(empty.averageOrderValue,0);
});
test('Sales validation rejects invalid dates, blank/negative prices, fractional quantities, and nonfinite revenue',()=>{
 const base={order_id:'1',date:'2026-01-01',region:'South',product:'Laptop',quantity:'1',unit_price:'5'};
 for(const change of [{date:'2026-02-30'},{unit_price:''},{unit_price:'-1'},{quantity:'1.5'},{quantity:'1e308',unit_price:'1e308'}])assert.throws(()=>a.validateSales([{...base,...change}]));
});
test('Log summaries use nearest-rank p95 and correct HTTP error denominator',()=>{
 const rows=a.validateLogs(a.parseCSV(d.logsCSV));const report=a.analyzeLogs(rows);assert.equal(report.total,12);assert.equal(report.errors,5);assert.equal(report.p95,3100);assert.equal(report.endpoints.length,3);
 assert.equal(a.percentile95([5,1,4,2,3]),5);assert.equal(a.analyzeLogs([]).errorRate,0);
 const failed=a.analyzeLogs(rows.filter(row=>row.status>=400));assert.equal(failed.errorRate,100);
 assert.throws(()=>a.validateLogs([{request_id:'1',endpoint:'/api',status:'900',latency_ms:'1'}]));assert.throws(()=>a.validateLogs([{request_id:'1',endpoint:'/api',status:'200',latency_ms:'-1'}]));
});

test('Uploaded product names cannot collide with inherited object keys',()=>{const rows=a.validateSales([{order_id:'1',date:'2026-01-01',region:'South',product:'__proto__',quantity:'2',unit_price:'10'},{order_id:'2',date:'2026-01-01',region:'South',product:'constructor',quantity:'1',unit_price:'5'}]);const report=a.analyzeSales(rows);assert.equal(report.revenue,25);assert.equal(report.products.length,2);assert.equal(report.products[0].revenue,20);});

test('All-empty CSV records remain visible to the quality auditor',()=>{const rows=a.parseCSV('id,name,email,department\n,,,\n1,User,user@example.com,IT');assert.equal(rows.length,2);assert.equal(a.auditRows(rows).invalid,1);});
