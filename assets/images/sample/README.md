# Sample Images Directory

This directory contains placeholder images for template development and testing. When deploying to Slate, these images will need to be replaced with actual content images hosted on UNC's servers.

## Required Sample Images

The following images are referenced in `sample-data/newsletter-content.json`:

1. `featured-research.jpg` (800x400px)
2. `student-center.jpg` (400x300px)
3. `athletics.jpg` (400x300px)
4. `faculty-spotlight.jpg` (400x300px)

## Image Guidelines

- Use JPG format for photographs
- Use PNG format for logos and graphics with transparency
- Optimize all images for web delivery
- Maximum width: 800px
- Include descriptive alt text in the JSON data
- Follow UNC brand guidelines for image selection

## Placeholder Sources

During development, you can use:

1. UNC's photo library
2. Placeholder image services (e.g., `https://placehold.co/800x400?text=Featured+Story`)
3. Free stock photos (with proper attribution)

## Production Images

When moving to production in Slate:

1. Replace all sample images with actual UNC content
2. Update image paths in Slate to point to UNC's media server
3. Ensure all images are properly optimized and compressed
4. Verify image dimensions match the template requirements
