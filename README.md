# ordiss-playwright
This will be complete End to End Automation Framework testing of our ORDISS project

```
ordiss-automation/
├── config/                 # Environment configs (dev, qa, staging)
├── data/                   # CSV files (e.g., unitTypes.csv)
├── pages/                  # Page Object Models (The heart of the UI logic)
│   ├── LoginPage.js        # Login logic
│   └── admin/              # Group admin pages together
│       └── UnitTypesPage.js
├── tests/                  # Actual Test Specifications
│   ├── ui/                 # UI Tests
│   └── api/                # API Tests
├── utils/                  # Helpers (CSV reader, API wrapper)
│   ├── CsvHelper.js
│   └── ApiHelper.js
├── .env                    # Secrets (Username/Password) - NEVER commit this
├── playwright.config.js    # Main Configuration
└── package.json
```