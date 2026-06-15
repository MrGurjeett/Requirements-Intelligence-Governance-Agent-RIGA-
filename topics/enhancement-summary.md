# Topic: Enhancement Summary

## Overview
Generates a concise enhancement handoff brief after the full governance review.

## Trigger
- Type: The agent chooses
- Description: After the detailed governance review report is displayed to the user, automatically generate and display a concise enhancement summary showing top fixes, priority actions, effort estimate and agent focus brief. Always run after every governance review.

## Flow
```
1. Trigger fires after governance review
2. Message: "Analyzing your governance review..."
3. Create Generative Answers (strict prompt below)
4. Set Global.EnhancementSummary = Activity.Text
5. Set Global.SummaryDate = System.CurrentDateTime
6. Message: "Enhancement Summary is ready!"
7. Go to Topic: Requirement Enhancement
8. End all topics
```

## Variables
| Variable | Type | Scope | Value |
|----------|------|-------|-------|
| EnhancementSummary | String | Global | Activity.Text |
| SummaryDate | String | Global | System.CurrentDateTime |

## Prompt for Create Generative Answers Node

```
You are preparing a handoff brief for a
Requirement Enhancement Agent.

Using the governance review provided, output
ONLY the following. Be brief. No repetition.
No full analysis.

MATURITY: [Draft/Needs Refinement/Nearly Ready/Ready]
SCORE: [X/100]

TOP 3 FIXES NEEDED:
1. [One line fix]
2. [One line fix]
3. [One line fix]

PRIORITY ACTIONS:
P1 (Before Dev): [Max 3 bullet points, one line each]
P2 (Before Test): [Max 2 bullet points, one line each]
P3 (Before Prod): [Max 2 bullet points, one line each]

EFFORT: [Low/Medium/High]

ENHANCEMENT AGENT FOCUS:
In 2-3 sentences, tell the enhancement agent
exactly what to fix first in the requirement.

Total output must not exceed 250 words.
STOP after Enhancement Agent Focus section.
```

## Notes
- Do NOT trigger for every agent response
- Only trigger after full governance review
- Enhancement summary must appear AFTER full review
