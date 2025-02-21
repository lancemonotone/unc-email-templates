# UNC Email Template Design System

## Overview

This document outlines the structure, design notes, and brand guidelines for UNC email templates. All templates (except Around UNC Newsletter) share standardized headers and footers following UNC's brand standards.

## Brand Resources

- [UNC Brand Quick Reference Guide](https://www.unco.edu/marketing-communications/assets/downloads/unc_brand_quickReference.pdf)
- [UNC Brand Resources](https://www.unco.edu/marketing-communications/brand-resources/)

## Global Specifications

### Template Dimensions

```css
max-width: 1080px    /* responsive for mobile and desktop */
media-queries: max-width: 700px
```

### Color Palette

```css
--unc-bears-blue: #013c65; /* Header Background */
--unc-blue: #003366; /* Primary Color */
--unc-gold: #fdb913; /* Accent Color */
--unc-bears-gold: #f6b000; /* Follow-Up Information Block */
--light-gray: #f5f5f5; /* Footer Background */
--dark-gray: #333333; /* Body Text */
--white: #ffffff; /* Button Text/Contrast */
--outer-bg: #f0f0f0; /* Outer Background */
--content-bg: #ffffff; /* Main Content Block */
```

### Typography System

#### Headers (H1, H2, H3)

```css
font-family: "Questa Slab", Arvo, Rockwell, Verdana, Arial, sans-serif;
```

#### Body Text

```css
font-family: Ringside, Roboto, Tahoma, Arial, sans-serif;
font-size: 14px;
color: #000000;
```

#### Special Highlights

```css
font-family: "Ed's Market", "Zeija Pro", Cursive, sans-serif;
/* Use sparingly for emphasis */
```

### Image Guidelines

- Hero Image Width: 680px
- Format: JPG or PNG
- Alt Text: Required (see special note below)
- No text overlays permitted

### Button Styling

```css
text-align: center;
border-radius: 4px;
background-color: #013c65;
color: #ffffff;
font-family: Ringside, Bold;
text-transform: sentence-case;
padding: 10px 20px;
```

## Template Types

### 1. Around UNC Newsletter

@around-unc-specs.pdf

### 2. Basic 1-Column Newsletter

@single-column-specs.md

### 3. Basic – Hero with 1 CTA

@hero-cta-specs.md

### 4. Basic – No Hero with 1 CTA

@no-hero-specs.md

## Social Media Footer

```json
{
  "background": "#F6B000",
  "icon-color": "#FFFFFF",
  "platforms": {
    "facebook": "universitynortherncolorado",
    "instagram": "unc_colorado",
    "linkedin": "university-of-northern-colorado",
    "twitter": "UNC_Colorado",
    "youtube": "UNorthernColorado",
    "tiktok": "unco_colorado"
  }
}
```

## Known Issues

@alt-text-issue.md

## Attached References

@header-logo.png
@footer-template.html
@social-icons.svg

## General Email Template Specs

### Width Configuration

```mjml
<mjml>
  <mj-body width="1080px">
    <!-- Template content -->
  </mj-body>
</mjml>
```

The template width is configured using the `width` attribute on the `<mj-body>` tag. This ensures:

- Maximum width of 1080px for desktop
- Responsive scaling on mobile devices
- Consistent rendering across email clients

**Important Notes:**

- Never use percentage values (e.g., `width="100%"`) as this can cause image rendering issues
- Use `full-width="full-width"` on sections that need full viewport background span
- Maintain consistent structure across all template partials

### General Specifications

- Max Width: 1080px (responsive for mobile and desktop)
- Mobile Responsiveness: Enabled via media queries (max-width: 700px)
- Background Color: Light Gray (#F0F0F0) for the outer background
- Content Area: White (#FFFFFF) background for the main content block
