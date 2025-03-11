# Email Template Compatibility Guidelines

## Introduction

This document outlines crucial considerations when building HTML email templates to ensure maximum compatibility across email clients. Follow these guidelines to address common rendering issues and create robust, responsive email templates.

## CSS Application Guidelines

1. **Minimize External CSS**

   - Use inline styles whenever possible
   - Avoid complex CSS selectors and nested rules
   - Test all styles in multiple email clients, especially Outlook and Gmail

2. **Background Handling**

   - Always provide a fallback color for background images and gradients
   - For gradients, use VML for Outlook with proper MSO conditionals:
     ```html
     <!--[if gte mso 9]>
       <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
         <v:fill type="solid" color="#f0f0f0" />
       </v:background>
     <![endif]-->
     ```
   - Use table cell background colors as fallbacks for all decorative backgrounds

3. **Font Compatibility**
   - Always include fallback fonts in this order: web font, common system font, generic font family
   - Example: `font-family: 'Questa Slab', Arvo, Rockwell, Verdana, Arial, sans-serif;`
   - Limit font usage to 2-3 font families maximum

## Image Best Practices

1. **Always Include Dimensions**

   - Specify width and height attributes on all image tags
   - Example: `<img src="image.jpg" width="600" height="400" alt="Description" style="width: 100%; max-width: 600px; height: auto;" />`

2. **Proper Alt Text**

   - Provide descriptive alt text for all images
   - Keep alt text concise but meaningful
   - For decorative images, use empty alt text (alt="") but never omit the attribute

3. **Image Hosting & Performance**
   - Host images on reliable, fast servers
   - Optimize images for web (compress without visible quality loss)
   - Consider email clients that block images by default

## Column Structure Implementation

1. **Table-Based Layouts**
   - Use tables for all layout elements
   - Avoid nested tables more than 3 levels deep
   - Set explicit pixel widths on outer tables (not percentages)
2. **Two-Column Structures**

   - Implement with MSO conditionals for Outlook:
     ```html
     <!--[if mso]>
     <table role="presentation" width="100%">
     <tr>
     <td width="50%" valign="top">
     <![endif]-->
     <div
       style="display: inline-block; width: 100%; max-width: 300px; vertical-align: top;">
       <!-- Column 1 content -->
     </div>
     <!--[if mso]>
     </td>
     <td width="50%" valign="top">
     <![endif]-->
     <div
       style="display: inline-block; width: 100%; max-width: 300px; vertical-align: top;">
       <!-- Column 2 content -->
     </div>
     <!--[if mso]>
     </td>
     </tr>
     </table>
     <![endif]-->
     ```
   - Use consistent widths across all conditional code blocks

3. **Alignment & Spacing**
   - Use explicit cell padding in table cells
   - Add cellspacing="0" and cellpadding="0" to all tables
   - Control spacing with consistent padding or empty cells with fixed heights

## Mobile Responsiveness

1. **Simplify Media Queries**

   - Limit to one breakpoint if possible (typically 600px)
   - Always include the !important flag for mobile styles
   - Example:
     ```css
     @media screen and (max-width: 600px) {
       .mobile-full-width {
         width: 100% !important;
         max-width: 100% !important;
       }
       .stack {
         display: block !important;
         width: 100% !important;
       }
     }
     ```

2. **Progressive Enhancement Approach**

   - Design for mobile first
   - Apply desktop enhancements secondarily
   - Ensure content is accessible even without media query support

3. **Testing Mobile Rendering**
   - Test on native email apps (iOS Mail, Gmail app, Outlook mobile)
   - Verify stacking behavior works properly
   - Check touch targets are minimum 44×44px

## Dark Mode Compatibility

1. **Simplified Implementation**

   - Use meta tags to indicate support:
     ```html
     <meta name="color-scheme" content="light dark" />
     <meta name="supported-color-schemes" content="light dark" />
     ```
   - Set dark mode defaults with simple selectors:
     ```css
     @media (prefers-color-scheme: dark) {
       body,
       table,
       td {
         background-color: #333333 !important;
         color: #ffffff !important;
       }
     }
     ```

2. **Image Handling in Dark Mode**

   - Use transparent PNG images when possible
   - For critical images with dark/light versions, implement with:

     ```html
     <div
       class="dark-img"
       style="display:none; overflow:hidden; line-height:0px; max-height:0px;">
       <img src="dark-logo.png" alt="Logo" />
     </div>
     <div class="light-img" style="display:block;">
       <img src="light-logo.png" alt="Logo" />
     </div>

     <style>
       @media (prefers-color-scheme: dark) {
         .dark-img {
           display: block !important;
           max-height: none !important;
         }
         .light-img {
           display: none !important;
         }
       }
     </style>
     ```

## Testing Protocol

1. **Client Testing Matrix**
   - Test in these critical email clients:
     - Outlook (2013, 2016, 2019, 365)
     - Gmail (web, iOS, Android)
     - Apple Mail (desktop, iOS)
     - Yahoo Mail
     - Outlook.com
     - Samsung Mail
2. **Device Testing**

   - Test on:
     - Desktop (Windows, Mac)
     - Mobile (iOS, Android)
     - Tablets
   - Use Litmus or Email on Acid for comprehensive testing

3. **Troubleshooting Common Issues**
   - Outlook rendering: Fix with MSO conditionals and table-based layouts
   - Gmail clipping: Keep email under 102KB
   - Image blocking: Use ALT text and background colors
   - Dark mode inversions: Use transparent images with dark-friendly colors

## Implementation Checklist

Before sending any email template, verify:

- [ ] All images have proper dimensions and alt text
- [ ] Tables have explicit widths with cellpadding="0" cellspacing="0"
- [ ] Font stacks include appropriate fallbacks
- [ ] MSO conditionals are in place for Outlook compatibility
- [ ] Mobile styles use !important flags
- [ ] Email renders correctly when images are disabled
- [ ] Total file size is under 100KB to prevent Gmail clipping
- [ ] Dark mode display has been tested

By adhering to these guidelines, you'll create email templates that display correctly across the widest possible range of email clients and devices.
