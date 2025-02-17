# Slate CRM User Guide for UNC Email Templates

This guide explains how to use and modify the UNC email templates within Slate CRM.

## Template Basics

### Editable Regions

Each template has specific sections you can edit in Slate's visual editor. These regions will be clearly marked in the template editor.

### Images

1. Upload your images to Slate's media library
2. Replace placeholder images with your uploaded media
3. Maintain recommended dimensions:
   - Featured images: 800x400px
   - Secondary images: 400x300px
   - Logos: Use provided UNC logos

## Working with Content

### Stories and Articles

When adding stories to your email:

1. Add a compelling headline
2. Upload or select an image
3. Write a brief excerpt
4. Include a link to the full story
5. Preview the layout

### Events

For event announcements:

1. Enter event name
2. Set date and time
3. Specify location
4. Add event description
5. Configure registration options if applicable

## Template Variations

### Headers

1. Primary Blue Header

   - Official communications
   - Full department name
   - Bears Blue background

2. Minimal White Header

   - Internal communications
   - Clean, light design
   - Color logo

3. Compact Header
   - Brief updates
   - Space-saving design
   - Mobile-friendly

### Footers

1. Primary Blue Footer

   - Full social media bar
   - Complete contact info
   - All required links

2. Minimal Footer

   - Essential contact info
   - Clean, light design
   - Monogram logo

3. Compact Footer
   - Single-line design
   - Essential links only
   - Mobile-optimized

## Best Practices

1. **Content Length**

   - Keep titles under 60 characters
   - Excerpts: 2-3 sentences
   - Test email preview on mobile

2. **Image Guidelines**

   - Always include alt text
   - Optimize images for web
   - Follow UNC brand guidelines

3. **Testing**
   - Preview in Slate before sending
   - Test all links
   - Check dark mode appearance

## Common Tasks

### Adding a Story

1. Navigate to the stories section
2. Upload your story image
3. Fill in the title and excerpt
4. Add your story link
5. Preview to check layout

### Managing Events

1. Find the events section
2. Enter event details
3. Add location and description
4. Configure registration options
5. Preview the layout

### Updating Contact Info

1. Locate contact section
2. Update department details
3. Verify all information
4. Check all links

## Troubleshooting

### Common Issues

1. **Images Not Showing**

   - Verify image upload
   - Check image dimensions
   - Confirm file format

2. **Layout Problems**

   - Check content length
   - Verify structure
   - Preview on multiple devices

3. **Content Issues**
   - Review all sections
   - Check for missing content
   - Verify links work

### Getting Help

- Contact UNC Communications for template support
- Refer to Slate documentation for CRM-specific issues
- Check UNC brand guidelines for design questions

## Data Structure and Configuration

### Important Note

Before using these templates, your Slate administrator needs to configure the following data objects and fields:

### Required Data Objects

1. **Sender Object** (`sender`)

   ```liquid
   sender.name      # Department/office name
   sender.email     # Contact email
   sender.phone     # Contact phone
   sender.address   # Physical address
   ```

   Configuration: Set up in Slate's Organization settings

2. **Story Object** (`story`)

   ```liquid
   story.title      # Story headline
   story.image      # Image URL
   story.image_alt  # Image alt text
   story.excerpt    # Story summary
   story.link       # Story URL
   ```

   Configuration: Create a custom content type in Slate

3. **Event Object** (`event`)

   ```liquid
   event.title              # Event name
   event.date              # Event date
   event.time              # Event time
   event.location          # Location
   event.description       # Details
   event.registration_open # Boolean
   event.registration_url  # Registration link
   ```

   Configuration: Map to Slate's Events module or create custom type

4. **System Object** (`system`)
   ```liquid
   system.base_url         # UNC website URL
   system.unsubscribe_url # Managed by Slate
   system.view_online_url # Managed by Slate
   ```
   Configuration: Automatically provided by Slate

### Data Configuration Steps

Before using templates, ensure:

1. **Slate Administrator Tasks:**

   - Configure custom content types for stories and events
   - Set up organization details for sender information
   - Map template variables to Slate fields
   - Configure image storage locations

2. **Content Editor Tasks:**

   - Verify access to content types
   - Test data entry forms
   - Confirm merge field functionality

3. **Template Testing:**
   - Test with sample data
   - Verify all merge fields resolve
   - Check conditional logic
