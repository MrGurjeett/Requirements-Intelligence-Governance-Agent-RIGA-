# Setup Guide

## Prerequisites
- Microsoft Copilot Studio licence
- Power Platform environment access
- Node.js 18+
- Git installed

## Step 1 - Clone Repository
```bash
git clone https://github.com/your-org/enterprise-requirements-review-agent.git
cd enterprise-requirements-review-agent
```

## Step 2 - Import Agent Solution
1. Go to make.powerapps.com
2. Select your environment
3. Click Solutions → Import Solution
4. Upload: solution/EnterpriseRequirementsAgent.zip
5. Wait for import to complete

## Step 3 - Upload Knowledge Base
1. Open agent in Copilot Studio
2. Click Knowledge tab
3. Upload all files from /knowledge-base folder
4. Wait for status to show "Ready"

## Step 4 - Configure Agent Instructions
1. Click Overview tab
2. Scroll to Instructions section
3. Copy content from instructions/agent-instructions.md
4. Paste and save

## Step 5 - Configure Topics
Verify these topics exist and are enabled:
- Enhancement Summary (trigger: The agent chooses)
- Requirement Enhancement (trigger: Redirected to)

## Step 6 - Configure Environment File
```bash
cp .env.example .env
```
Edit .env and add:
- DIRECT_LINE_SECRET (from Settings → Channels → Direct Line)
- BOT_ID (from agent URL)
- TENANT_ID

## Step 7 - Install and Test
```bash
npm install
npm start
```

## Step 8 - Verify Settings
| Setting | Value |
|---------|-------|
| Web Search | OFF |
| Work IQ | ON (fallback only) |
| Knowledge Base | ON |
