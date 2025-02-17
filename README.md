# UNC Email Templates

Email templates for University of Northern Colorado, developed in MJML for Slate CRM integration.

## Project Structure

```
templates/           # MJML template files
├── components/     # Reusable MJML components
└── partials/       # Common sections (header, footer)
assets/
├── images/         # Content images
└── logos/          # UNC logos and branding
dist/               # Compiled HTML output
docs/               # Documentation and guides
```

## Development Setup

1. Install MJML:

   ```bash
   npm install -g mjml
   ```

2. VSCode Extensions:

   - MJML extension
   - Live Preview (optional)

3. Building Templates:
   - Use VSCode's "MJML: Watch & Compile" task
   - Output HTML will be in the `dist/` directory

## Template Development

### Slate Integration

- Templates use Slate's Liquid syntax for dynamic content
- Editable regions are marked with HTML comments
- All images should be hosted on UNC's servers when deployed

### Brand Guidelines

- Bears Blue: #013C65
- Bears Gold: #FFB71B
- Fonts:
  - Headers: Arvo
  - Body: Roboto

## Templates

1. Main Newsletter (Around UNC)
2. General Unit Newsletter
3. Multi-Event Newsletter
4. Emergency & Crisis Alerts
5. Hero Image with Single CTA
6. No Hero with Single CTA
7. Hero with Multiple CTAs
8. Magazine Email
9. PVA - Music School
10. Presidential

## Testing

- Test in major email clients
- Verify dark mode compatibility
- Check accessibility compliance
- Validate merge fields in Slate
