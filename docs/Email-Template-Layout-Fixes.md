# Email Template Layout Fixes Documentation

## Overview

This document details the structural and styling fixes applied to resolve email client compatibility issues in MJML templates. These solutions should be applied to similar problems across all email templates.

---

## Issue #1: Invalid Column Structure in Sections

### Problem

Multiple `mj-column` elements within a single `mj-section` that should be **vertically stacked** instead of **horizontally aligned**.

### Root Cause

MJML sections with multiple columns are meant for side-by-side horizontal layout. When content should stack vertically (like main content + signature), they need separate sections.

### Example of Broken Structure

```mjml
<!-- WRONG: Multiple columns that should stack vertically -->
<mj-section padding="40px" css-class="light-section">
  <mj-column width="100%">
    <!-- Main content -->
  </mj-column>

  <mj-column width="100%" padding-top="40px">
    <!-- Signature (should be below, not beside) -->
  </mj-column>
</mj-section>
```

### Solution

```mjml
<!-- CORRECT: Separate sections for vertical stacking -->
<mj-section padding="40px" css-class="light-section">
  <mj-column width="100%">
    <!-- Main content -->
  </mj-column>
</mj-section>

<mj-section padding="40px" css-class="light-section">
  <mj-column width="100%">
    <!-- Signature in its own section -->
  </mj-column>
</mj-section>
```

### How to Identify

- Look for multiple `mj-column` elements in one `mj-section`
- Check if content appears side-by-side when it should stack vertically
- Linter errors: "mj-section cannot be used inside mj-section"

### Files Fixed

- `templates/6_Presidential.mjml` (presidential signature separation)

---

## Issue #2: Nested Section Structure Breaking Header Layout

### Problem

Header partials containing multiple `mj-section` elements were wrapped in additional `mj-section` containers, causing horizontal display instead of vertical stacking.

### Root Cause

MJML doesn't support nested `mj-section` elements. When a partial with sections is included inside a wrapper section, the layout breaks.

### Example of Broken Structure

```mjml
<!-- WRONG: Wrapper section around header partial -->
<mj-section padding="0" css-class="light-section">
  <mj-include path="./partials/headers/header-presidential.mjml" />
</mj-section>
```

Where `header-presidential.mjml` contains:

```mjml
<mj-section background-color="#013c65"><!-- Logo section --></mj-section>
<mj-section background-color="#f6b000"><!-- Office name section --></mj-section>
```

### Solution

```mjml
<!-- CORRECT: Direct include without wrapper -->
<mj-include path="./partials/headers/header-presidential.mjml" />
```

### How to Identify

- Header sections displaying horizontally instead of vertically
- Partials containing multiple `mj-section` elements wrapped in sections
- Check if includes are wrapped unnecessarily

### Files Fixed

- `templates/6_Presidential.mjml` (header wrapper removal)
- `templates/1_Newsletter-Around-UNC.mjml` (header and all block includes)

---

## Issue #3: CSS Class Background Colors Not Working

### Problem

The `gold-header` CSS class wasn't applying background colors reliably across email clients.

### Root Cause Analysis

1. **Wrong CSS Property**: Used `background: #color` instead of `background-color: #color`
2. **Color Inconsistency**: Class used `#ffb71b` while inline styles used `#f6b000`
3. **Email Client Compatibility**: CSS classes less reliable than inline styles

### CSS Class Issues

```css
/* PROBLEMATIC: Wrong property and color */
.gold-header {
  background: #ffb71b; /* Should be background-color */
  padding-top: 10px;
  padding-bottom: 10px;
}
```

### Solution Applied

1. **Updated CSS class** (attempted fix):

```css
.gold-header {
  background-color: #f6b000; /* Correct property and color */
  padding-top: 10px;
  padding-bottom: 10px;
}
```

2. **Converted to inline styles** (final solution):

```mjml
<!-- BEFORE: CSS class -->
<mj-section css-class="gold-header" padding="0">
  <!-- AFTER: Inline style -->
  <mj-section background-color="#f6b000" padding="0"></mj-section>
</mj-section>
```

### Standard Colors

- **UNC Gold**: `#f6b000` (use this for all gold backgrounds)
- **UNC Blue**: `#013c65`
- **UNC Bluebird**: `#007dba`

### How to Identify

- Elements with `css-class="gold-header"` not showing gold background
- Compare with working elements using inline `background-color`
- Check for color inconsistencies between different elements

### Files Fixed

- `templates/assets/styles.css` (CSS class update)
- `templates/partials/headers/header-presidential.mjml` (inline conversion)
- `templates/partials/blocks/block-students-faculty-staff.mjml` (inline conversion)
- `templates/partials/blocks/block-events-full.mjml` (blue header class conversion)

---

## Issue #4: Lost Padding After Structural Changes

### Problem

When separating sections, padding was lost causing visual spacing issues.

### Root Cause

Original structure had `padding-top="40px"` on a column that was moved to a new section with different padding.

### Solution

Adjust section padding to maintain visual spacing:

```mjml
<!-- Ensure proper padding on new sections -->
<mj-section padding="40px" css-class="light-section"></mj-section>
```

### How to Identify

- Visual comparison before/after changes
- Missing white space between content blocks
- Check padding values when restructuring

---

## Issue #5: Link Colors Not Working in Outlook 2016

### Problem

Links in colored sections (gold navigation, blue footers) not displaying correct colors in Outlook 2016, despite CSS classes and inline styles.

### Root Cause

Outlook 2016 has severely limited CSS support and often ignores:

- CSS classes entirely
- `style` attributes on links
- Modern CSS properties

### Failed Solutions

```mjml
<!-- DOESN'T WORK: CSS classes -->
<mj-section css-class="navigation-bar-gold">
  <a href="#">Link</a>
  <!-- Blue doesn't show -->
</mj-section>

<!-- DOESN'T WORK: Inline styles only -->
<a href="#" style="color: #013c65 !important;">Link</a>
```

### Triple-Layer Solution (WORKS)

```mjml
<!-- CORRECT: Font tags + inline styles + MSO conditionals -->
<mj-section background-color="#f6b000">
  <mj-text>
    <a
      href="#"
      style="color: #013c65 !important; text-decoration: none !important; mso-style-priority: 99;">
      <font color="#013c65">Link Text</font>
    </a>
  </mj-text>
</mj-section>

<!--[if mso]>
  <style>
    /* Multiple selector approach for maximum compatibility */
    td[style*="background-color:#f6b000"] a,
    td[style*="background-color: #f6b000"] a {
      color: #013c65 !important;
      text-decoration: none !important;
    }
    /* Force font tag colors */
    font[color="#013c65"] {
      color: #013c65 !important;
    }
  </style>
<![endif]-->
```

### Link Color Examples

**White Links (Footer):**

```mjml
<a
  href="mailto:info@unco.edu"
  style="color: #ffffff !important; text-decoration: none; mso-style-priority: 99;">
  <font color="#ffffff">info@unco.edu</font>
</a>
```

**Blue Links (Navigation):**

```mjml
<a
  href="#events"
  style="color: #013c65 !important; text-decoration: none !important; mso-style-priority: 99;">
  <font color="#013c65">EVENTS</font>
</a>
```

### Why Font Tags Work

- **Outlook 2016 legacy support**: Handles old-school HTML better than modern CSS
- **Highest priority**: Font tags override other color styling
- **Reliable rendering**: Works when CSS classes and inline styles fail

### How to Identify

- Links showing default blue/purple instead of intended colors
- Colors work in Gmail/Apple Mail but fail in Outlook 2016
- CSS classes like `navigation-bar-gold` or `blue-section` not affecting link colors

### Files Fixed

- `templates/partials/footers/footer-presidential.mjml` (white links)
- `templates/partials/footers/footer-primary.mjml` (white links)
- `templates/partials/footers/footer-secondary.mjml` (white links)
- `templates/partials/components/navigation/component-navigation-bar-gold.mjml` (blue links)

---

## Best Practices for Email Templates

### 1. Section Structure

- **One logical content block per section**
- **Multiple columns only for side-by-side layout**
- **Separate sections for vertical stacking**

### 2. Background Colors

- **Use inline `background-color` instead of CSS classes**
- **Stick to standard UNC color palette**
- **Test across multiple email clients**

### 3. Link Colors (Critical for Outlook 2016)

- **Always use font tags** around link text
- **Include robust inline styles** with `mso-style-priority: 99`
- **Add MSO conditional comments** as fallback
- **Test specifically in Outlook 2016**

### 4. Includes and Partials

- **Don't wrap partials in unnecessary sections**
- **Let partials define their own section structure**
- **Check if partial contains multiple sections before wrapping**

### 5. Padding and Spacing

- **Maintain visual consistency when restructuring**
- **Use section-level padding for vertical spacing**
- **Check rendered output after changes**

---

## Quick Diagnostic Checklist

When encountering layout issues:

1. **Check section structure**:

   - [ ] Multiple columns in one section that should stack vertically?
   - [ ] Nested sections causing layout problems?

2. **Check header/partial includes**:

   - [ ] Are multi-section partials wrapped in sections?
   - [ ] Do headers display horizontally instead of vertically?

3. **Check background colors**:

   - [ ] Elements using CSS classes not showing colors?
   - [ ] Color inconsistencies between similar elements?

4. **Check link colors (CRITICAL)**:

   - [ ] Links missing font tags?
   - [ ] Colors fail specifically in Outlook 2016?
   - [ ] Missing MSO conditional comments?

5. **Check spacing**:
   - [ ] Missing padding after structural changes?
   - [ ] Visual spacing different from design?

---

## Files That May Need Similar Fixes

Based on the project structure, these templates likely have similar issues:

### Templates to Review

- `templates/2_Newsletter-One-Column.mjml`
- `templates/3_Basic-Hero-One-CTA-Blue.mjml`
- `templates/4_Basic-No-Hero-One-CTA-Gold.mjml`
- `templates/5_Newsletter-Multi-Events.mjml`
- `templates/7_Single-Event-Promo.mjml`
- `templates/8_Magazine.mjml`
- `templates/9_Top-Hero.mjml`
- `templates/10_Newsletter-Kitchen-Sink.mjml`

### Partials to Review

- Any using CSS classes for backgrounds (`blue-header`, `navigation-bar-gold`, etc.)
- Multi-section headers similar to `header-presidential.mjml`
- Complex block structures in `templates/partials/blocks/`
- **Any components with links** (check for font tag usage)

### Partials Needing Link Underline Fixes (Outlook 2016)

**High Priority - Text Components (commonly used across templates):**

- `templates/partials/components/text/component-text.mjml`
  - Links: website link, email link, phone link (3 total)
  - Issue: No font tags around link text
- `templates/partials/components/text/component-text-no-bullets.mjml`
  - Links: placeholder link, email link (2 total)
  - Issue: No font tags around link text
- `templates/partials/components/text/component-text-center.mjml`
  - Links: placeholder link, email link (2 total)
  - Issue: No font tags around link text
- `templates/partials/components/images/component-image-caption.mjml`
  - Links: inline content link (1 total)
  - Issue: No font tags around link text

**Medium Priority - Block Content:**

- `templates/partials/blocks/block-students-faculty-staff.mjml`
  - Links: 6 placeholder content links in bullet lists
  - Issue: No font tags around link text
- `templates/partials/blocks/block-in-the-news.mjml`
  - Links: registration link, email link, web page link (3 total)
  - Issue: No font tags around link text
- `templates/partials/blocks/block-signature.mjml`
  - Links: Twitter social media link (1 total)
  - Issue: No font tags, only `style="text-decoration: none"`

**Lower Priority - Event Blocks:**

- `templates/partials/blocks/block-two-column-events-button-blue-center.mjml`
  - Links: 4 event title links
  - Issue: No font tags around link text
- `templates/partials/blocks/block-two-column-events-button-gold-center.mjml`
  - Links: 4 event title links
  - Issue: No font tags around link text
- `templates/partials/blocks/block-events-full.mjml`
  - Links: multiple event title links + calendar link
  - Issue: No font tags around link text

**Pattern to Fix:** All components need:

1. `<font color="...">` wrapper around all link text
2. Enhanced MSO conditional comments for aggressive underline removal
3. Robust inline styles with `mso-style-priority: 99`

**Status:** ✅ Fixed - `component-navigation-bar-gold.mjml`
**Status:** ⚠️ Needs fixing - All components listed above

---

## Testing Recommendations

After applying fixes:

1. **Test in multiple email clients** (Outlook, Gmail, Apple Mail)
2. **Check mobile responsiveness**
3. **Verify color consistency** across all colored elements
4. **Confirm proper vertical stacking** of content sections
5. **CRITICAL: Test all link colors specifically in Outlook 2016**
