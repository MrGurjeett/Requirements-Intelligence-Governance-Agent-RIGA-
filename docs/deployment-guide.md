# Deployment Guide - Per Project

## New Project Setup

### Step 1 - Clone and Branch
```bash
git clone https://github.com/your-org/enterprise-requirements-review-agent.git
cd enterprise-requirements-review-agent
git checkout -b project/[your-project-name]
```

### Step 2 - Import to New Environment
1. Go to make.powerapps.com
2. Switch to your project environment
3. Import solution/EnterpriseRequirementsAgent.zip

### Step 3 - Configure .env
```bash
cp .env.example .env
# Add project-specific credentials
```

### Step 4 - Test
```bash
npm install
npm start
```

## Branch Naming Convention
```
project/banking
project/insurance
project/healthcare
project/retail
```

## Access Control Per Project
| Role | GitHub Access | Copilot Studio Access |
|------|--------------|----------------------|
| Project Lead | Write | Full |
| Developer | Read | User only |
| Stakeholder | Read | User only |
