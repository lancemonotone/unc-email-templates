# Around UNC Newsletter Specifications

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

## Special Notes

- Maintains unique design separate from other templates
- Keeps current "Around UNC" logo and header
- Does not use standardized header

## Layout Structure

### Header Section

- Custom "Around UNC" header image
- No standard UNC header
- Image format: JPG or PNG
- Alt text required (see ALT text note below)

### Content Sections

1. **Featured Story**

   - Large hero image (680px width)
   - Format: JPG or PNG only
   - Alt text required for accessibility
   - No text overlays permitted
   - Headline:
     - Font: Questa Slab, Bold, 32pt
     - Backup fonts: Arvo, Rockwell, Verdana, Arial, sans-serif
   - Summary text:
     - Font: Ringside, Regular, 14pt
     - Backup fonts: Roboto, Tahoma, Arial, sans-serif
   - "Read More" link: UNC Bears Blue (#013C65)

2. **News Grid**

   - 2x2 grid layout
   - Each item contains:
     - Thumbnail image (300px x 200px)
     - Format: JPG or PNG only
     - Alt text required
     - No text overlays
     - Headline:
       - Font: Questa Slab, Bold, 18pt
       - Backup fonts: Arvo, Rockwell, Verdana, Arial, sans-serif
     - Brief description:
       - Font: Ringside, Regular, 12pt
       - Backup fonts: Roboto, Tahoma, Arial, sans-serif
     - Link: UNC Bears Blue (#013C65)

3. **Events Section**
   - List format
   - Date:
     - Font: Questa Slab, Bold, 16pt
     - Backup fonts: Arvo, Rockwell, Verdana, Arial, sans-serif
   - Event title:
     - Font: Ringside, Bold, 14pt
     - Backup fonts: Roboto, Tahoma, Arial, sans-serif
   - Location:
     - Font: Ringside, Regular, 12pt
     - Backup fonts: Roboto, Tahoma, Arial, sans-serif
   - "View All Events" button:
     - Background: UNC Bears Blue (#013C65)
     - Text color: White (#FFFFFF)
     - Padding: 10px vertical, 20px horizontal
     - Font: Ringside, Bold
     - Backup fonts: Roboto, Tahoma, Arial, sans-serif
     - Centered alignment

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
