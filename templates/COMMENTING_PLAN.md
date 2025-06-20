# Email Template Commenting Plan (MJML-Compatible)

## Overview

This document outlines a comprehensive plan to add helpful comments throughout all MJML email templates to make them more user-friendly for content editors who need to modify text, links, images, and other attributes.

**⚠️ IMPORTANT: MJML & Email Client Compatibility**

- All comments must be compatible with MJML compilation process
- Comments should not interfere with email client rendering
- HTML comments in MJML templates are preserved in final output
- Comments must not break responsive email functionality

## Objectives

1. **Identify all user-changeable content** across all template files
2. **Add clear, descriptive comments** before and after editable sections
3. **Create consistent commenting standards** across all templates
4. **Make templates accessible** to non-technical content editors
5. **Ensure MJML compilation compatibility**

## MJML-Safe Commenting Standards

### Comment Format (MJML-Compatible)

```html
<!-- EDIT: [SECTION_NAME] - [DESCRIPTION] -->
[editable content]
<!-- END EDIT: [SECTION_NAME] -->
```

**Why this format:**

- Uses standard HTML comments that MJML preserves
- "EDIT:" prefix makes comments easily searchable
- Clear start/end markers for content editors
- Won't interfere with MJML's compilation to HTML

### Comment Placement Rules

#### ✅ SAFE: Comments outside MJML tags

```html
<!-- EDIT: HEADLINE - Change the main story title -->
<mj-text mj-class="h1">
  <h1>Story Title H1</h1>
</mj-text>
<!-- END EDIT: HEADLINE -->
```

#### ✅ SAFE: Comments inside mj-text content

```html
<mj-text>
  <!-- EDIT: BODY_TEXT - Update article content -->
  <p>Lorem ipsum dolor sit amet...</p>
  <!-- END EDIT: BODY_TEXT -->
</mj-text>
```

#### ⚠️ CAUTION: Comments in attribute values (avoid)

```html
<!-- AVOID: Don't put comments inside attributes -->
<mj-button href="<!-- comment -->https://example.com"></mj-button>
```

#### ✅ SAFE: Comments before attribute-heavy elements

```html
<!-- EDIT: CTA_BUTTON - Update button text and URL (href attribute) -->
<mj-button
  mj-class="button-primary"
  align="center"
  href="javascript:void(0);"
  color="#ffffff">
  <span style="color: #ffffff">Read More</span>
</mj-button>
<!-- END EDIT: CTA_BUTTON -->
```

### Comment Types for MJML Templates

#### 1. Text Content (High Priority)

```html
<!-- EDIT: STORY_HEADLINE - Change story title -->
<mj-text mj-class="h1">
  <h1>Story Title H1</h1>
</mj-text>
<!-- END EDIT: STORY_HEADLINE -->

<!-- EDIT: ARTICLE_CONTENT - Update article text -->
<mj-text>
  <p>Lorem ipsum dolor sit amet...</p>
</mj-text>
<!-- END EDIT: ARTICLE_CONTENT -->
```

#### 2. Button Links and Text

```html
<!-- EDIT: CTA_BUTTON - Update button text and destination URL -->
<mj-button mj-class="button-primary" align="center" href="javascript:void(0);">
  <span style="color: #ffffff">Read More</span>
</mj-button>
<!-- END EDIT: CTA_BUTTON -->
```

#### 3. Images and Alt Text

```html
<!-- EDIT: HERO_IMAGE - Replace image source and description -->
<mj-image
  mj-class="hero-full"
  fluid-on-mobile="true"
  src="https://www.unco.edu/image.jpg"
  alt="Image description" />
<!-- END EDIT: HERO_IMAGE -->
```

#### 4. Contact Information

```html
<!-- EDIT: CONTACT_INFO - Update phone and email -->
<mj-text>
  <a href="tel:970-351-1890">970-351-1890</a> |
  <a href="mailto:info@unco.edu">info@unco.edu</a>
</mj-text>
<!-- END EDIT: CONTACT_INFO -->
```

#### 5. Department Names

```html
<!-- EDIT: DEPT_NAME - Update department or office name -->
<mj-text mj-class="header-title-white"> Department Name </mj-text>
<!-- END EDIT: DEPT_NAME -->
```

#### 6. Event Information

```html
<!-- EDIT: EVENT_DETAILS - Update event date, time, and location -->
<mj-text>
  <p><strong>Valentine's Bash</strong></p>
  <p>Tuesday, Feb. 11, 5:00-6:30 p.m., University Center Panorama Room.</p>
</mj-text>
<!-- END EDIT: EVENT_DETAILS -->
```

## MJML Validation Considerations

### Testing Protocol

1. **Validate MJML compilation** after adding comments
2. **Test in multiple email clients** (Outlook, Gmail, Apple Mail)
3. **Check responsive behavior** remains intact
4. **Verify no broken layouts** in final HTML output

### MJML CLI Validation

```bash
# Validate templates after commenting
mjml template.mjml --validate
mjml template.mjml -o output.html --config.validationLevel=strict
```

## Email Client Compatibility

### Safe Comment Practices

- ✅ HTML comments are widely supported across email clients
- ✅ Comments are ignored by email rendering engines
- ✅ Comments don't affect responsive behavior
- ✅ Comments preserve during MJML → HTML compilation

### Potential Issues to Avoid

- ❌ Comments inside CSS style attributes
- ❌ Comments breaking MJML tag structure
- ❌ Comments in mj-include paths
- ❌ Comments interfering with conditional statements

## File-by-File Implementation Plan

### Phase 1: Content Components (26 files) - HIGH PRIORITY

**Focus Areas:**

- Text components (headlines, body text)
- Button components (text and URLs)
- Image components (src and alt attributes)
- Story components (headlines and content)

### Phase 2: Block Templates (24 files) - HIGH PRIORITY

**Focus Areas:**

- Any direct content not covered by components
- Event listings and details
- Callout box content

### Phase 3: Header Templates (6 files) - MEDIUM PRIORITY

**Focus Areas:**

- Department/office names
- Logo alt text
- Header navigation links

### Phase 4: Footer Templates (6 files) - MEDIUM PRIORITY

**Focus Areas:**

- Contact information (phone, email, address)
- Social media links
- Footer text content

### Phase 5: Main Templates (10 files) - MEDIUM PRIORITY

1. `1_Newsletter-Around-UNC.mjml`
2. `2_Newsletter-One-Column.mjml`
3. `3_Basic-Hero-One-CTA-Blue.mjml`
4. `4_Basic-No-Hero-One-CTA-Gold.mjml`
5. `5_Newsletter-Multi-Events.mjml`
6. `6_Presidential.mjml`
7. `7_Single-Event-Promo.mjml`
8. `8_Magazine.mjml`
9. `9_Top-Hero.mjml`
10. `10_Newsletter-Kitchen-Sink.mjml`

**Focus Areas:**

- Section headers and navigation
- Any remaining story headlines and content not covered by components
- Any remaining CTA buttons and links not covered by components
- Template-specific content

## Quality Assurance Process

### Pre-Implementation Testing

1. Test comment format in simple MJML template
2. Verify MJML compilation works correctly
3. Check HTML output preserves comments
4. Test in key email clients

### Post-Implementation Validation

1. **MJML Validation**: `mjml --validate` all modified files
2. **HTML Compilation**: Generate HTML output and verify integrity
3. **Email Client Testing**: Test in Outlook, Gmail, Apple Mail
4. **Responsive Testing**: Verify mobile rendering still works
5. **Content Editor Review**: Have non-technical user test usability

## Success Criteria

- ✅ All user-changeable text content is clearly marked
- ✅ All URLs and links have descriptive comments
- ✅ All images have editing instructions
- ✅ Contact information is clearly identified
- ✅ Comments are consistent across all templates
- ✅ **MJML compilation remains error-free**
- ✅ **Email client rendering is unaffected**
- ✅ **Responsive behavior is preserved**
- ✅ Non-technical users can easily identify editable content

## MJML-Specific Notes

- Comments will be preserved in final HTML output
- MJML compilation process ignores HTML comments
- Comments don't affect email client rendering
- Use descriptive language for non-technical users
- Test thoroughly with `mjml --validate` after each phase
- Maintain compatibility with MJML 4.x standards
