# 🏛️ Enterprise Requirements Review Agent (ERGA)

An AI-powered governance agent built on Microsoft Copilot Studio for reviewing enterprise requirements before development.

---

## What This Agent Does

- Reviews business requirements, user stories, epics and features
- Generates structured 10-section governance reports
- Scores requirement maturity and readiness
- Validates against enterprise policies and standards
- Generates concise enhancement summaries
- Provides prioritized next actions (P1/P2/P3)

---

## Agent Output Format

```
1. Full Governance Review Report (10 Sections)
2. Enhancement Summary Brief
3. Priority Actions (P1 / P2 / P3)
4. Effort Estimate
5. Requirement Maturity Score
```

---

## Quick Start

### Prerequisites

- Microsoft Copilot Studio access
- Power Platform environment
- Node.js 18+ (for API wrapper)

### Installation

**1. Clone Repository**
```bash
git clone https://github.com/your-org/enterprise-requirements-review-agent.git
cd enterprise-requirements-review-agent
```

**2. Import Agent Solution**
- Go to make.powerapps.com
- Click Solutions → Import
- Upload solution/EnterpriseRequirementsAgent.zip

**3. Upload Knowledge Base Documents**
- Go to agent Knowledge tab in Copilot Studio
- Upload all documents from /knowledge-base folder

**4. Configure Environment**
```bash
cp .env.example .env
# Add your Direct Line credentials to .env
```

**5. Install Dependencies**
```bash
npm install
```

**6. Test the Agent**
```bash
npm start
```

---

## Project Structure

```
enterprise-requirements-review-agent/
├── solution/
│   └── EnterpriseRequirementsAgent.zip
├── knowledge-base/
│   ├── Enterprise_Requirements_Review_Handbook.docx
│   └── Enterprise_Banking_Sample_Requirements.docx
├── src/
│   ├── agent-wrapper/
│   │   ├── agent.js
│   │   ├── auth.js
│   │   └── config.js
│   └── examples/
│       ├── review-request.js
│       └── sample-output.json
├── topics/
│   ├── enhancement-summary.md
│   └── requirement-enhancement.md
├── instructions/
│   └── agent-instructions.md
├── docs/
│   ├── setup-guide.md
│   ├── deployment-guide.md
│   └── evaluation-results.md
├── .github/workflows/
│   └── test.yml
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Branch Strategy

```
main           → Stable production version
develop        → Work in progress
project/[name] → Project specific branches
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2026-06-15 | Initial release |
| v1.1.0 | 2026-06-15 | Fixed Work IQ looping |
| v1.2.0 | 2026-06-15 | Added tool execution order |
