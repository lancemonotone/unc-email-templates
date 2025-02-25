# UNC Email Block Structure Reference Guide

## Common Block Structure

### Basic Block Container

All blocks follow a similar container structure using MJML components:

```mjml
<!-- Block Name/Description -->
<mj-column padding="20px" <!-- Padding varies by block type -->
  css-class="block-container light-section dark-mode-section">

  <!-- Block Content Goes Here -->
</mj-column>
```

### Important Structural Rules

> **IMPORTANT**: These are MJML partials intended to be included in a complete email template. The linter may show errors (like "mj-section cannot be used inside mj-column") when working with these block partials directly. These errors should be ignored, as the partials will function correctly when included in the full template.

1. **Block Partials Enclosure**: Every block partial should be enclosed in an `mj-column`. This is the outermost wrapper for each block component.

2. **Section Nesting**: Although the linter flags warnings, `mj-section` elements can be used inside `mj-column` elements for these partials. This structure works correctly when the partial is included in the final email template.

3. **Consistent Class Usage**: Always include the appropriate CSS classes (`block-container`, `light-section`, `dark-mode-section`) on the containing elements.

4. **Standard Structure Pattern**: All blocks now follow the same consistent structure pattern:
   - Outer container `mj-column` with `padding="0"` and standard CSS classes
   - `mj-section` elements with `padding="0"` nested inside this column
   - Content-bearing `mj-column` elements with appropriate padding inside these sections

### Common CSS Classes

- `block-container`: Base class for all blocks
- `light-section`: Applies light mode styling
- `dark-mode-section`: Enables dark mode compatibility
- `dark-mode-text`: Applied to text components for dark mode compatibility
- `mobile-stack-column`: Makes columns stack on mobile

### Padding Patterns by Container and Content Type

Padding patterns should be determined by the container's purpose and content type:

| Container/Content Type         | Recommended Padding                                                                                     | Usage Context                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Primary Content Containers** |                                                                                                         |                                                              |
| Text-focused columns           | `padding="20px"`                                                                                        | Use for story blocks, text-heavy content areas               |
| Image containers               | `padding="0"`                                                                                           | Used for featured images that should extend to edges         |
| Mixed content columns          | `padding="0"` or `padding="20px"`                                                                       | Choose based on visual prominence needs                      |
|                                |                                                                                                         |                                                              |
| **Internal Elements**          |                                                                                                         |                                                              |
| Heading text                   | Default padding                                                                                         | Standard text padding works for most headings                |
| Paragraph text                 | Default padding                                                                                         | Standard text padding for body content                       |
| Dividers                       | `padding="10px 0 0"`                                                                                    | Adds space above divider, flush with sides                   |
| Buttons                        | `padding="0 0 20px"`                                                                                    | Bottom padding for spacing, left-aligned                     |
| Buttons (final in container)   | `padding="0"`                                                                                           | No extra padding needed at container bottom                  |
| Images (full-width)            | `padding="0"`                                                                                           | Flush with container edges                                   |
|                                |                                                                                                         |                                                              |
| **Layout Structures**          |                                                                                                         |                                                              |
| Two-column sections            | `padding="0"` on section                                                                                | Delegate padding to child columns (which get padding="20px") |
| Multi-column layouts           | `padding="20px"` per column                                                                             | Each column within a section gets standard padding           |
| Special headers                | `padding="0"`                                                                                           | For gradient/styled headers that need full width             |
| Item wrappers                  | `padding="0"`                                                                                           | For event listings or repeating items                        |
|                                |                                                                                                         |                                                              |
| **Component Combinations**     |                                                                                                         |                                                              |
| Section with nested events     | Main: `padding="0"`, Items: `padding="0"`                                                               | Compact event listings with minimal spacing                  |
| Story entries with buttons     | Divider: `padding="10px 0 0"`, Button: `padding="0 0 20px"`                                             | Typical pattern for story block entries                      |
| Image grid                     | Section: `padding="0"`, Columns: `padding="20px"`, Images: `padding="0"`, Captions: `padding="5px 0 0"` | Grid of images with captions                                 |

#### Padding Strategy Guidelines

- **Container-Level Padding**: Apply padding at the outermost container level when all content should maintain the same inset from edges
- **Element-Level Padding**: Use zero padding on containers and apply padding to individual elements for more fine-grained control
- **Mixed Approach**: For complex layouts, use container padding for overall spacing and element padding for specific adjustments
- **Vertical Rhythm**: Maintain consistent vertical spacing between related elements (e.g., between stories in a list)

#### Nested Element Padding Best Practice

> **IMPORTANT**: As a general rule, structural containers (`mj-section`, `mj-wrapper`) should have `padding="0"`, while content-bearing columns and elements inside them should have appropriate padding. This creates cleaner markup and more predictable spacing.

Examples:

- Grid layout: Container has `padding="0"`, while content columns have `padding="20px"`
- Image with caption: Image has `padding="0"`, caption text has `padding="5px 0 0"`
- Header section: Container has `padding="0"`, subtitle has `padding="5px 0 20px"`

> **Clarification on Multi-column and Two-column layouts**: In all our blocks, we consistently use `padding="0"` on sections (the structural containers) and apply `padding="20px"` to the columns within them (the content-bearing elements). The distinction between "Two-column sections" and "Multi-column layouts" in the padding table refers to the same consistent pattern - sections have zero padding while columns have standard padding.

## Special Components

### Headers with Gradient Backgrounds

For headers with gradient backgrounds (like the Events and Image Grid headers):

```mjml
<mj-text background-color="#013c65" <!-- Fallback color -->
  font-family="'Eds Market', 'Zeija Pro', cursive, sans-serif" font-size="32px"
  padding="0" align="center" css-class="header-name-here" color="#FFB71B">
  <div style="background: linear-gradient(180deg, #003366 0%, #007dba 100%)">
    <a
      href="link-url"
      style="color: #ffb71b; text-decoration: none; display: block">
      Header Text
    </a>
  </div>
</mj-text>
```

#### Header Style Specifications

| Element             | Style           | Value                                          |
| ------------------- | --------------- | ---------------------------------------------- |
| Background          | Gradient        | Linear gradient from #003366 to #007dba        |
| Background Fallback | Color           | #013c65                                        |
| Font Family         | Primary         | 'Eds Market', 'Zeija Pro', cursive, sans-serif |
| Font Size           | Standard        | 32px                                           |
| Text Color          | Gold            | #FFB71B                                        |
| Link Styling        | Text Decoration | none                                           |
| Link Display        | Block           | Full width clickable area                      |

#### Header Variations

**Standard Text Header (Events):**

```html
<a
  href="link-url"
  style="color: #ffb71b; text-decoration: none; display: block">
  Events
</a>
```

**Header with Logo (Image Grid):**

```html
<a
  href="link-url"
  style="color: #ffb71b; text-decoration: none; display: block">
  <img src="logo.png" alt="UNC" width="100" style="vertical-align: middle" />
  <span style="vertical-align: middle"> in Pictures</span>
</a>
```

#### Subtitle Styling

For header subtitles, use proper mj-class for consistent typography:

```mjml
<mj-text
  align="center"
  mj-class="h5"
  css-class="dark-mode-text"
  padding="5px 0 20px">
  <p style="margin: 0">Subtitle text here</p>
</mj-text>
```

Always include the Outlook VML fallback before this component:

```mjml
<!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="gradient" color="#003366" color2="#007dba" angle="270" />
  </v:background>
<![endif]-->
```

## Content Patterns

### Text Components

Text typically follows these patterns:

```mjml
<!-- Headings -->
<mj-text mj-class="h3" css-class="dark-mode-text">
  <h3>Heading Text</h3>
</mj-text>

<!-- Regular text -->
<mj-text css-class="dark-mode-text">
  <p>Paragraph content goes here.</p>
</mj-text>
```

### Buttons

Standard button implementation:

```mjml
<mj-button padding="0 0 20px" align="left" mj-class="button-primary" href="#">
  Button Text
</mj-button>
```

### Dividers (used in multiple blocks)

Used to separate content sections:

```mjml
<mj-divider border-width="3px" border-color="#FFB71B" padding="10px 0 0" />
```

### Images

Standard image implementation:

```mjml
<mj-image
  align="left"
  padding="0"
  fluid-on-mobile="true"
  src="image-url.jpg"
  alt="Alternative text" />
```

## Block Types

### Stories Block

- Features multiple story sections
- Each story has a yellow divider, heading, text, and button
- All stories contained in a single column

### Events Block

- Custom header with gradient background (including Outlook VML fallback)
- Multiple event items with heading (linked) and date/time information
- "More Events" button at bottom

### Featured Story Block

- Image at top
- Heading, text content, and call-to-action button

### Two-Column Sidebar Layout

- Two columns with different widths (75%/25%)
- Mobile stacking enabled
- Uses includes to pull in other block components
- Follows standard block structure pattern with:
  - Outer container column with `padding="0"` and standard CSS classes
  - Section with `padding="0"` inside that column
  - Content columns within the section, each with `padding="20px"`

### Grid Image Block

- Header with UNC logo and "in Pictures" text
- Optional subtitle describing the content
- Grid layout of images arranged in columns (typically two per row)
- Each grid item includes an image and a centered caption
- Structure:
  - Container column with `padding="0"`
  - Sections with `padding="0"`
  - Content columns with `padding="20px"`
  - Images with `padding="0"` and `fluid-on-mobile="true"`
  - Caption text with `padding="5px 0 0"` and center alignment

## Best Practices

1. Always include dark mode compatibility classes
2. Set `fluid-on-mobile="true"` for images
3. Use mj-class for consistent styling across blocks
4. Include descriptive comments for each section
5. For gradients, include Outlook VML fallbacks
6. For buttons, set alignment and appropriate padding
7. Set vertical-align for multi-column layouts

## Outlook-Specific Considerations

For special elements like gradients, include VML fallbacks:

```mjml
<!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="gradient" color="#003366" color2="#007dba" angle="270" />
  </v:background>
<![endif]-->
```

## Mobile Responsiveness

1. Use `mobile-stack` and `mobile-stack-column` classes
2. Ensure proper padding for mobile display
3. Use MJML's built-in responsiveness features
