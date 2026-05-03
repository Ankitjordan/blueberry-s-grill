---
description: Automatically analyze and optimize website performance and SEO using Playwright and Lighthouse without breaking functionality.
---

# AI Performance + SEO Optimization Workflow

## Goal

Improve performance and SEO using Lighthouse and AI analysis without breaking functionality.

---

## Step 1: Open Website

- Use Playwright MCP to open the target URL
- Wait until network is idle (fully loaded)
- Ensure no console errors on initial load

---

## Step 2: Run Lighthouse Audit

- Run Lighthouse using CLI or tool
- Generate JSON report (lighthouse-report.json)
- Extract:
  - Performance score
  - SEO score
  - Accessibility score
  - Best Practices score

---

## Step 3: Extract Key Metrics

- Parse Lighthouse JSON
- Extract:
  - LCP (Largest Contentful Paint)
  - CLS (Cumulative Layout Shift)
  - Speed Index
- Extract issues:
  - Large images
  - Unused JS/CSS
  - Render-blocking resources
  - Missing meta tags

---

## Step 3.5: Analyze Results (Test Results Analyzer)

- Act as Test Results Analyzer
- Input:
  - Extracted metrics
  - Issue list

### Analyze:

- Root cause of performance issues
- Image optimization problems
- LCP / CLS bottlenecks
- SEO issues

### Output:

- Prioritized issue list
- Risk level (Low / Medium / High)
- Safe fix recommendations
- Expected performance improvement

---

## Step 4: Prioritize Fixes

- Focus on:
  - High-impact issues (LCP, images, JS)
  - SEO critical issues
- Ignore:
  - Low-impact issues
  - Risky structural changes

---

## Step 5: Apply Fixes (Safe Mode)

### Performance Fixes:

- Optimize images (resize, compress, responsive sizes)
- Remove unused JS/CSS
- Split large bundles (dynamic imports)
- Reduce render-blocking resources
- Add caching strategies

### SEO Fixes:

- Add meta tags (title, description)
- Fix heading hierarchy (H1, H2)
- Improve semantic HTML

---

## Step 6: Code Safety Rules

- Do NOT break UI or layout
- Do NOT remove essential logic
- Keep changes minimal and reversible
- Prefer incremental improvements

---

## Step 7: Re-test

- Re-run Lighthouse audit
- Generate updated JSON report
- Compare:
  - Before vs After scores
  - LCP improvement
  - Performance improvement

---

## Step 8: Validate Functionality

- Use Playwright MCP:
  - Click buttons
  - Navigate pages
  - Test interactions
- Ensure:
  - No UI break
  - No console errors
  - All features working

---

## Step 9: Final Output

Provide:

- Issues found
- Root causes
- Fixes applied
- Risk level
- Before vs After comparison
- Updated code snippets

---

## Step 10: Store Results

- Extract final Lighthouse scores:
  - Performance
  - SEO
  - Accessibility
  - Best Practices

- Append to:
  /frontend/frontend-logs.txt

### Format:

Timestamp: <current time>  
URL: <tested url>  
Performance: <score>  
SEO: <score>  
Accessibility: <score>  
Best Practices: <score>

- Ensure:
  - Append mode (do not overwrite)
  - Clean readable format

---

## Rules

- Never sacrifice functionality for performance
- Prefer safe and incremental fixes
- Avoid risky refactors
- Always validate after changes
- Always analyze before applying fixes
