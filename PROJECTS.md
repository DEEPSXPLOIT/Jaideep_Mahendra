# IT Support & Data Analysis Showcase

Five runnable browser demos are available under `/projects/<slug>`:

| Project | Route | Workflow |
| --- | --- | --- |
| SupportDesk | /projects/support-desk | Create incidents, change status, filter SLA queue, export CSV |
| AssetOps | /projects/asset-tracker | Register assets, update lifecycle, review warranty, export CSV |
| CleanSheet | /projects/data-quality | Upload CSV, audit fields and duplicates, export clean records and issues |
| RevenueLens | /projects/sales-analytics | Upload sales lines, filter regions, calculate monthly/product performance |
| LogScope | /projects/api-health | Upload logs, filter endpoints/errors, calculate nearest-rank p95 |

Run `npm run dev` and open http://localhost:3000. Run `npm run test:projects` for analytics checks and `npm run build` for the production build.

## Source

- `src/components/projects/ProjectLab.js`: interactive applications and case studies
- `src/lib/projectAnalytics.js`: CSV parser, validators, and metrics
- `src/data/demoData.js`: synthetic datasets
- `src/data/projects.js`: project catalog and documented limitations
- `src/data/experience.js`: career details transcribed from the supplied resume

## Data and implementation

Everything runs in the browser. No data is sent to an API. SupportDesk and AssetOps persist locally; reset restores only their synthetic demo records. Uploaded CSVs are processed in memory (maximum 1 MB / 2,000 rows). Downloaded CSV cells are escaped and spreadsheet formula prefixes are neutralized.

Metrics use only sample or uploaded records. Ticket ages and warranty evaluation use a fixed scenario. Sales values are INR and exclude tax/discount/refund adjustments. Log analysis is offline, with HTTP 400–599 counted as errors. Project previews are original SVG illustrations of sample output, not screenshots of employer systems.

The experience timeline and career metrics come from the supplied resume. New demos are independent portfolio exercises, not claims of company deployment. No employer data is included. Demo technology tags describe the actual JavaScript implementation rather than implying Python/SQL backends.
