export const projects = [
  {
    "id": 1,
    "slug": "support-desk",
    "title": "SupportDesk \u2014 Ticket & SLA Monitor",
    "subtitle": "IT support operations",
    "description": "Create and triage support tickets, track SLA risk by priority, resolve incidents, and export a queue report. Built with synthetic incidents and browser-local storage.",
    "category": "IT Tech Support",
    "tech": [
      "React",
      "SLA Rules",
      "Local Storage",
      "CSV Export"
    ],
    "problem": "A support team needs a clear view of urgent incidents and response commitments.",
    "approach": "A priority-based SLA rules engine calculates breaches from a fixed scenario age. Queue filters and persistent status changes support triage.",
    "features": [
      "Create incidents with a category and priority",
      "Filter by status and search incident descriptions",
      "Resolve tickets and inspect SLA risk",
      "Export the current queue to CSV"
    ],
    "limitations": "A browser-local simulation with fixed ticket ages; no live clock, shared ticket system, authentication, or email notifications.",
    "image": "/projects/support-desk.svg",
    "link": "/projects/support-desk",
    "year": "Portfolio demo",
    "github": null
  },
  {
    "id": 2,
    "slug": "asset-tracker",
    "title": "AssetOps \u2014 Workstation Lifecycle",
    "subtitle": "IT asset management",
    "description": "Maintain a workstation register, update lifecycle status, identify expired warranties, and export inventory. Inspired by the asset lifecycle responsibilities in my resume.",
    "category": "IT Tech Support",
    "tech": [
      "React",
      "Inventory Rules",
      "Local Storage",
      "CSV Export"
    ],
    "problem": "Hardware ownership, repair status, and warranty dates become difficult to track across a workstation fleet.",
    "approach": "A structured asset register supports validation, search, lifecycle transitions, and warranty checks against the displayed scenario date.",
    "features": [
      "Add uniquely tagged workstation records",
      "Search owner, location, or asset tag",
      "Update deployment and repair status",
      "Identify warranty expiry and export inventory"
    ],
    "limitations": "Demo records are stored in this browser only. Warranty evaluation uses the fixed date shown; no device discovery or enterprise asset synchronization.",
    "image": "/projects/asset-tracker.svg",
    "link": "/projects/asset-tracker",
    "year": "Portfolio demo",
    "github": null
  },
  {
    "id": 3,
    "slug": "data-quality",
    "title": "CleanSheet \u2014 CSV Quality Auditor",
    "subtitle": "Data quality and preparation",
    "description": "Upload a CSV, find missing values, invalid emails, and duplicate IDs, then export a cleaned dataset with a row-level audit report. All processing stays in your browser.",
    "category": "Data Analysis",
    "tech": [
      "JavaScript",
      "CSV Parsing",
      "Validation",
      "Data Cleaning"
    ],
    "problem": "Messy records undermine reports and create avoidable operational rework.",
    "approach": "A repeatable audit normalizes whitespace and email casing, checks required fields, and excludes invalid rows and subsequent duplicate IDs.",
    "features": [
      "Load sample data or upload a CSV",
      "See row-specific issues and quality metrics",
      "Compare source records with accepted clean rows",
      "Download clean records and an audit report"
    ],
    "limitations": "Validation follows the documented four-column schema and practical email checks. Invalid rows are excluded rather than guessed or imputed. Maximum 2,000 rows / 1 MB per upload.",
    "image": "/projects/data-quality.svg",
    "link": "/projects/data-quality",
    "year": "Portfolio demo",
    "github": null
  },
  {
    "id": 4,
    "slug": "sales-analytics",
    "title": "RevenueLens \u2014 Sales Analysis",
    "subtitle": "Revenue and regional performance",
    "description": "Analyze transaction CSVs, filter by region, calculate revenue and order value, and explore monthly and product performance with exportable summaries.",
    "category": "Data Analysis",
    "tech": [
      "JavaScript",
      "Aggregation",
      "CSV Import",
      "Charts"
    ],
    "problem": "Decision makers need consistent sales metrics and visibility into product and regional performance.",
    "approach": "Validated line items are grouped by order, month, and product. Region filters recalculate metrics and summaries directly from source rows.",
    "features": [
      "Upload transaction data using the supplied schema",
      "Filter regions and compare monthly revenue",
      "Calculate distinct orders and average order value",
      "Export product-level revenue and units"
    ],
    "limitations": "Synthetic sales data; revenue is quantity \u00d7 unit price in INR before taxes, discounts, and refunds. This is descriptive analysis, not a prediction model.",
    "image": "/projects/sales-analytics.svg",
    "link": "/projects/sales-analytics",
    "year": "Portfolio demo",
    "github": null
  },
  {
    "id": 5,
    "slug": "api-health",
    "title": "LogScope \u2014 API Reliability Analyzer",
    "subtitle": "Integration troubleshooting",
    "description": "Inspect request logs to find failing endpoints, calculate error rate and p95 latency, filter service behavior, and export reliability summaries.",
    "category": "IT Tech Support",
    "tech": [
      "JavaScript",
      "Log Analysis",
      "Percentiles",
      "CSV Import"
    ],
    "problem": "Integration failures can be hidden in request logs without useful endpoint-level summaries.",
    "approach": "A validated request-log dataset is grouped by endpoint. HTTP 4xx/5xx errors, mean latency, and nearest-rank p95 latency guide investigation.",
    "features": [
      "Load logs or upload a compatible CSV",
      "Filter endpoints and failed requests",
      "Compare endpoint error rate and p95 latency",
      "Review troubleshooting guidance and export findings"
    ],
    "limitations": "Offline log analysis using synthetic samples or your upload. It does not ping endpoints, execute requests, retry production integrations, or monitor a live service.",
    "image": "/projects/api-health.svg",
    "link": "/projects/api-health",
    "year": "Portfolio demo",
    "github": null
  }
];
