# Basic – No Hero with 1 CTA Specifications

## Width Configuration

```mjml
<mjml>
  <mj-body width="1080px">
    <!-- Template content -->
  </mj-body>
</mjml>
```

**Important Notes:**

- Never use percentage values (e.g., `width="100%"`) as this can cause image rendering issues
- Use `full-width="full-width"` on sections that need full viewport background span
- Maintain consistent structure across all template partials

## Header (Logo)

- Background: UNC Bears Blue (#013C65)
- Logo: Primary UNC logo horizontal (left-aligned)
- No footer logo

## Typography Hierarchy

### H1 Header

- Font: Questa Slab, Bold, 32pt
- Color: UNC Bears Blue (#013C65)
- Backup fonts: Arvo, Rockwell, Verdana, Arial, sans-serif
- Content: "This is an example of Header 1"
- Followed by body text using Ringside, 14pt, black

### H2 Header

- Font: Questa Slab, Bold, 24pt
- Color: Black (#000000)
- Backup fonts: Arvo, Rockwell, Verdana, Arial, sans-serif
- Content: "This is an example of Header 2"
- Followed by body text using Ringside, 14pt, black

### H3 Header

- Font: Questa Slab, Bold, 20pt
- Color: Black (#000000)
- Backup fonts: Arvo, Rockwell, Verdana, Arial, sans-serif
- Content: "This is an example of Header 3"
- Followed by body text using Ringside, 14pt, black

### Body Text

- Font: Ringside, Regular, 14pt
- Color: Black (#000000)
- Backup Fonts: Roboto, Tahoma, Arial, sans-serif

### Links

- Color: UNC Bears Blue (#013C65)
- CSS Class: UNC-blue

## CTA Button

- Alignment: Centered
- Shape: Rounded corners
- Background Color: UNC Gold (#FDB913)
- Text Color: White (#FFFFFF)
- Font: Ringside, Bold, All Caps
- Backup Fonts: Roboto, Tahoma, Arial, sans-serif
- Padding: 10px vertical, 20px horizontal

## Follow-Up Information (Callout Box)

- Purpose: Adds additional context below the main CTA
- Background Color: UNC Bears Gold (#F6B000)
- CSS Class: UNC-gold
- Content:
  - Headline:
    - Font: Bold
    - Alignment: Center
    - Color: UNC Bears Blue (#013C65)
    - CSS Class: UNC-blue
    - Copy: "Questions?"
  - Body Text:
    - Font: Open Sans, Regular, 14pt
    - Color: Black (#000000)

## Social Footer

### Social Media Footer

- Background Color: Bear Gold (#F6B000)
- Icon Color: White (#FFFFFF)
- Platforms Included (link to main UNC accounts):
  - Facebook: facebook.com/universitynortherncolorado
  - Instagram: instagram.com/unc_colorado
  - LinkedIn: linkedin.com/school/university-of-northern-colorado
  - X (Twitter): twitter.com/UNC_Colorado
  - YouTube: youtube.com/user/UNorthernColorado
  - TikTok: tiktok.com/@unco_colorado
- Layout: Icons should be evenly spaced and centered within the Bear Gold bar

### Footer Content Layout

- Primary Font: Ringside, Regular, 12pt
- Color: White (#FFFFFF)
- Backup Fonts: Roboto, Tahoma, Arial, sans-serif
- Hyperlink: Only website URL hyperlinked, white (#FFFFFF) with underline
- Logo: Omit the UNC logo; focus solely on text content

Format:

```
[Address Line]
[Phone] | [Email] | [Website]
```

Example (Housing):

```
Tobey-Kendel Hall 199, Greeley, CO 80631
970-351-2721 | housing@unco.edu | unco.edu/living-on-campus/housing
```

### ALT Text Implementation Note

When updating ALT text for images:

1. Update in Image Properties Dialog Box (Image Info tab)
2. Also update in Advanced tab under "Advisory Title"
   See ALT text issue documentation for more details.
