# UNC Email Template Partials

This directory contains reusable sections for UNC email templates.

## Headers

### Primary Blue Header (`headers/primary-blue.mjml`)

- Standard header with reverse logo on Bears Blue background
- Full-width department name
- Best for: Main newsletters, official communications

### Minimal White Header (`headers/minimal-white.mjml`)

- Clean white header with color logo
- Subtle department name in Bears Blue
- Best for: Internal communications, simple announcements

### Compact Header (`headers/compact.mjml`)

- Space-saving design with brandmark
- Horizontal department name layout
- Best for: Mobile-first templates, brief updates

## Usage

Include a header in your template:

```mjml
<mj-include path="./partials/headers/primary-blue.mjml" />
```

## Customization

Each partial includes:

- Appropriate logo variation
- Background color
- Text styling
- Responsive layout
- System variables for links

## Best Practices

1. **Choose Based on Content**

   - Use Primary Blue for official newsletters
   - Use Minimal White for lighter content
   - Use Compact for brief communications

2. **Maintain Consistency**

   - Stick to one header style per template type
   - Keep department name format consistent
   - Don't modify logo colors or proportions

3. **Responsive Considerations**
   - Primary and Minimal headers stack on mobile
   - Compact header maintains horizontal layout
   - All text remains readable at mobile sizes
