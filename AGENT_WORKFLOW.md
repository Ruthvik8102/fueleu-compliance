# AI Agent Workflow Log

## Agents Used
- GitHub Copilot — inline code & folder scaffolding suggestions
- ChatGPT (OpenAI) — architecture planning, documentation, and final polishing
- Local CLI tools (npm, git) — project scaffolding

---

## Prompts & Outputs

### Example 1 — Architecture scaffolding
**Prompt:** "Suggest a hexagonal architecture folder layout for a React + Node FuelEU compliance app."  
**Output used:** Folder layout (core / adapters / infrastructure). Verified and adapted to TypeScript.

### Example 2 — Domain model
**Prompt:** "Create a TypeScript interface for a 'Route' entity using the assignment KPIs."  
**Output used:** `Route` interface (fields: routeId, vesselType, fuelType, year, ghgIntensity, fuelConsumption, distance, totalEmissions, isBaseline).

---

## Validation / Corrections
- All AI-generated snippets were manually reviewed and adjusted to match the assignment schema and CB formula.
- Ensured naming consistency and added optional fields to satisfy seed data.

## Observations
- Agents accelerated boilerplate creation and documentation.
- Small corrections were required for strict TypeScript semantics and domain-specific formulae.

## Best Practices Followed
- Use AI for scaffolding and docs; manual review for domain logic.
- Keep agent prompts specific and verify outputs immediately.
