export const tickets = [
{id:'INC-101',subject:'VPN login fails after password change',category:'Access',priority:'P1',status:'Open',ageHours:5},
{id:'INC-102',subject:'ERP purchase screen will not load',category:'ERP',priority:'P2',status:'In progress',ageHours:6},
{id:'INC-103',subject:'Workstation overheating during CAD use',category:'Hardware',priority:'P2',status:'Open',ageHours:10},
{id:'INC-104',subject:'Printer unavailable on shared network',category:'Network',priority:'P3',status:'Resolved',ageHours:8},
{id:'INC-105',subject:'New employee software installation',category:'Software',priority:'P4',status:'Open',ageHours:12},
{id:'INC-106',subject:'Intermittent Wi-Fi disconnects',category:'Network',priority:'P3',status:'In progress',ageHours:25}];
export const assets = [
{tag:'WS-001',owner:'Demo Engineer A',location:'Bengaluru',model:'Engineering workstation',status:'Deployed',warranty:'2027-03-31'},
{tag:'WS-002',owner:'Demo Analyst B',location:'Bengaluru',model:'Business laptop',status:'Repair',warranty:'2026-06-30'},
{tag:'WS-003',owner:'Unassigned',location:'Stores',model:'Engineering workstation',status:'Available',warranty:'2027-12-31'},
{tag:'WS-004',owner:'Demo Engineer C',location:'Bengaluru',model:'Engineering workstation',status:'Deployed',warranty:'2026-11-15'},
{tag:'WS-005',owner:'Unassigned',location:'Stores',model:'Business laptop',status:'Retired',warranty:'2025-09-30'}];
export const qualityCSV = `id,name,email,department
C01,  Demo User A  ,USER.A@example.com,Engineering
C02,Demo User B,user.b@example.com,Operations
C02,Duplicate User,user.b@example.com,Operations
C03,Demo User C,broken-email,Support
C04,,user.d@example.com,Engineering
C05,Demo User E,user.e@example.com,Finance
C06,Demo User F,user.f@example.com,
C07,Demo User G,user.g@example.com,Support`;
export const salesCSV = `order_id,date,region,product,quantity,unit_price
O01,2026-01-08,South,Laptop,2,50000
O02,2026-01-15,North,Monitor,4,12000
O03,2026-02-03,South,Keyboard,10,1500
O04,2026-02-11,West,Laptop,3,50000
O05,2026-03-05,North,Monitor,6,12000
O06,2026-03-12,South,Laptop,1,50000
O06,2026-03-12,South,Keyboard,2,1500
O07,2026-04-10,West,Monitor,3,12000
O08,2026-04-22,South,Keyboard,8,1500
O09,2026-05-02,North,Laptop,2,50000
O10,2026-05-16,West,Monitor,2,12000
O11,2026-06-03,South,Laptop,3,50000`;
export const logsCSV = `request_id,endpoint,status,latency_ms
R01,/api/shipments,200,120
R02,/api/shipments,200,145
R03,/api/shipments,503,1400
R04,/api/inventory,200,80
R05,/api/inventory,200,110
R06,/api/inventory,401,95
R07,/api/vendors,200,250
R08,/api/vendors,500,2200
R09,/api/vendors,200,300
R10,/api/shipments,504,3100
R11,/api/inventory,200,90
R12,/api/vendors,429,180`;
