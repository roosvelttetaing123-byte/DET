---
version: alpha
colors:
  ink: '#17233b'
  paper: '#f5f7fb'
  primary: '#3157d5'
  line: '#dfe5ef'
typography:
  body:
    fontFamily: 'system-ui, sans-serif'
  heading:
    fontFamily: 'Georgia, serif'
rounded:
  card: '16px'
  control: '9px'
omitted:
  - section: spacing
    reason: 'Existing stylesheet owns spacing'
  - section: components
    reason: 'Native HTML controls with shared CSS classes'
---
## Overview
A calm English workbook for a beginner on a one or two week deadline. Preserve the existing navy sidebar, paper background, blue actions and editorial serif headings. Product register; task clarity precedes decoration. English-only teaching interface; Cambodia audience, no Japan-specific flows.
## Colors
Model B: styles.css is the canonical runtime token source. --ink, --paper, --blue and --line map to the values above. Secondary text is #59657b (darkened from #6e7890 after automated contrast verification). Semantic feedback uses pale green and pale red panels with dark text.
## Typography
System sans body text; Georgia headings. No external font requests.
## Layout
Desktop sidebar and natural document scrolling; below 720px, horizontal scrolling navigation and single-column cards. Minimum width 320px. Controls must reflow without document overflow.
## Elevation & Depth
Flat bordered cards, no animated entrances.
## Shapes
16px cards, 9px controls.
## Components
Native labeled fields, buttons, selects and dialog. Shared .btn, .options, .card, .good and .bad classes. Focus-visible uses blue outline. Global visible scrollbars. Media has reserved aspect ratio.
## Do's and Don'ts
Use plain English and specific task instructions. Do not imply lesson completion proves DET readiness or local diagnostics reproduce official scoring. Preserve keyboard access, feedback and reduced motion.
