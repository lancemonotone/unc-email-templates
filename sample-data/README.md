# Sample Content for Email Templates

This directory contains sample content for testing email templates. The content is structured to match Slate's Liquid template variables.

## Using Sample Content

### During Development

The `newsletter-content.json` file contains test data that matches the structure expected by Slate. This helps you:

1. Preview how templates will look with real content
2. Test different content lengths
3. Verify Liquid syntax is working correctly
4. Check image placement and sizing

### Content Structure

```json
{
  "system": {
    // System-wide variables (URLs, etc.)
  },
  "sender": {
    // Department/sender information
  },
  "newsletter": {
    // Newsletter-specific content
  },
  "featured_story": {
    // Main story content
  },
  "secondary_stories": [
    // Array of additional stories
  ],
  "upcoming_events": [
    // Array of events
  ]
}
```

### Testing Different Scenarios

You can modify `newsletter-content.json` to test:

- Long vs. short content
- Missing optional fields
- Different numbers of stories/events
- Various image configurations
- Different sender information

## Slate Integration

When moving to Slate:

1. The JSON structure matches Slate's Liquid variables
2. Replace sample content with real content in Slate's editor
3. Update image paths to point to UNC's media server
4. Test all dynamic content areas

## Variables Reference

### System Variables

- `{{ system.base_url }}` - UNC's base URL
- `{{ system.unsubscribe_url }}` - Unsubscribe link
- `{{ system.view_online_url }}` - View in browser link

### Sender Variables

- `{{ sender.name }}` - Department name
- `{{ sender.email }}` - Contact email
- `{{ sender.phone }}` - Contact phone
- `{{ sender.address }}` - Physical address

### Content Variables

- `{{ newsletter.title }}` - Newsletter title
- `{{ newsletter.subtitle }}` - Newsletter subtitle
- `{{ newsletter.issue_date }}` - Publication date

### Story Variables

- `{{ story.title }}` - Story title
- `{{ story.image }}` - Story image URL
- `{{ story.image_alt }}` - Image alt text
- `{{ story.excerpt }}` - Story excerpt
- `{{ story.link }}` - Story link

### Event Variables

- `{{ event.title }}` - Event title
- `{{ event.date }}` - Event date
- `{{ event.time }}` - Event time
- `{{ event.location }}` - Event location
- `{{ event.description }}` - Event description
- `{{ event.registration_open }}` - Registration status
- `{{ event.registration_url }}` - Registration link
