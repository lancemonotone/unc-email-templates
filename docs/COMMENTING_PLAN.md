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

### Phase 1: Content Components (38 files) - ✅ COMPLETED

**Status:** All content components have been successfully commented with MJML-compatible edit markers.

**New Organized Structure:**

- **Text Components (4 files):** `component-h1.mjml`, `component-h2.mjml`, `component-h3.mjml`, `component-text.mjml`, `component-text-no-bullets.mjml`, `component-text-center.mjml`
- **Button Components (8 files):** All single, two-column, and three-column button variants (blue/gold, center/left)
- **Image Components (5 files):** Hero, content, and caption image components
- **Navigation Components (2 files):** Navigation bar and newsletter header
- **Section Components (4 files):** Section titles and layout components
- **Story Components (10 files):** Various story layout combinations with headers and buttons
- **Divider Components (5 files):** Blue, gold, thick, thin, and dotted dividers

**✅ Completed Focus Areas:**

- ✅ Text components (headlines, body text)
- ✅ Button components (text and URLs)
- ✅ Image components (src and alt attributes)
- ✅ Story components (headlines and content)
- ✅ Navigation components (links and titles)
- ✅ Layout components (section titles)

**Impact of Restructuring:** The new organized directory structure (`/buttons`, `/dividers`, `/images`, `/layout`, `/navigation`, `/stories`, `/text`) **improves** the plan by making components easier to locate and maintain. All commenting work remains valid and follows MJML-compatible standards.

### Phase 2: Block Templates (26 files) - ✅ COMPLETED

**Status:** Phase 2 completed! All blocks with direct editable content have been commented with MJML-compatible edit markers.

**✅ BLOCKS WITH DIRECT CONTENT - COMMENTED (12 files):**

- ✅ `block-callout-box-light-button-blue-center.mjml` - Callout headline and text
- ✅ `block-callout-box-dark-button-gold-center.mjml` - Dark callout headline and text
- ✅ `block-callout-box-bluebird-button-blue-center.mjml` - Bluebird callout headline and text
- ✅ `block-callout-box-no-button.mjml` - Simple callout headline and text
- ✅ `block-signature.mjml` - Signature greeting, image, name/social, and title
- ✅ `block-events-full.mjml` - Events section title and individual event details
- ✅ `block-two-column-events-button-blue-center.mjml` - Left/right column event details
- ✅ `block-two-column-events-button-gold-center.mjml` - Gold version event details
- ✅ `block-in-pictures.mjml` - Section title and subtitle
- ✅ `block-in-the-news.mjml` - Section title, subtitle, and news content
- ✅ `block-true-north.mjml` - Section title and subtitle
- ✅ `block-students-faculty-staff.mjml` - Section titles and content areas

**✅ BLOCKS USING ONLY COMPONENTS - NO ADDITIONAL COMMENTS NEEDED (14 files):**

- ✅ `block-body-hero-content.mjml` - Uses only pre-commented components
- ✅ `block-hero-no-text.mjml` - Simple image include only
- ✅ `block-featured-story.mjml` - Uses only components (image, h3, text, button)
- ✅ `block-stories.mjml` - Uses only components and dividers
- ✅ `block-three-column-h3-text-button-blue-center.mjml` - Uses only components
- ✅ `block-three-column-no-button.mjml` - Uses only components
- ✅ `block-two-column.mjml` - Uses only components
- ✅ `block-two-column-sidebar.mjml` - Uses only block includes
- ✅ `block-two-column-h2-text-button-blue-left.mjml` - Uses only components
- ✅ `block-two-column-white-image-h1-text-no-button.mjml` - Uses only components
- ✅ `block-two-column-white-image-h2-text-button-blue-left.mjml` - Uses only components
- ✅ `block-two-column-white-image-h2-text-button-gold-center.mjml` - Uses only components
- ✅ `block-two-column-white-image-h2-text-button-gold-left.mjml` - Uses only components
- ✅ `block-two-column-gold-image-h2-text-button-blue-left.mjml` - Uses only components

**Phase 2 Results:**

- **100% Complete (26/26 files)**
- **All direct editable content marked with edit comments**
- **Component-only blocks identified (no additional work needed)**
- **MJML-compatible commenting maintained throughout**

### Phase 3: Header Templates (6 files) - ✅ COMPLETED

**Status:** All header templates with department/office names have been commented with MJML-compatible edit markers.

**✅ HEADERS WITH DIRECT CONTENT - COMMENTED (5 files):**

- ✅ `header-primary.mjml` - Department name
- ✅ `header-secondary.mjml` - Department name
- ✅ `header-centered.mjml` - Department name
- ✅ `header-bluebird.mjml` - Department name
- ✅ `header-presidential.mjml` - Office name

**✅ HEADERS USING ONLY LOGOS - NO ADDITIONAL COMMENTS NEEDED (1 file):**

- ✅ `header-around-unc.mjml` - Uses only logo images and fixed branding

**Phase 3 Results:**

- **100% Complete (6/6 files)**
- **All department/office names marked for editing**
- **Logo-only headers identified (no content to edit)**

### Phase 4: Footer Templates (6 files) - ✅ COMPLETED

**Status:** All footer templates with contact information have been commented with MJML-compatible edit markers.

**✅ FOOTERS WITH DIRECT CONTENT - COMMENTED (6 files):**

- ✅ `footer-primary.mjml` - Contact name, email, phone, address
- ✅ `footer-secondary.mjml` - Address, email, phone
- ✅ `footer-presidential.mjml` - Address, phone, email, website
- ✅ `footer-social-32.mjml` - Uses social elements (commented separately)
- ✅ `footer-social-20.mjml` - Uses social elements (commented separately)
- ✅ `social/social-elements.mjml` - All social media URLs

**Phase 4 Results:**

- **100% Complete (6/6 files)**
- **All contact information marked for editing**
- **Social media links properly commented**
- **Email/phone href attributes noted for updates**

### Phase 5: Main Templates (10 files) - ✅ COMPLETED

**Status:** Phase 5 completed! Main templates are primarily structural (using includes) with strategic comments added for template-specific elements.

**✅ MAIN TEMPLATES WITH STRATEGIC COMMENTS (4 files):**

- ✅ `1_Newsletter-Around-UNC.mjml` - Email title and navigation anchors
- ✅ `2_Newsletter-One-Column.mjml` - Email title
- ✅ `3_Basic-Hero-One-CTA-Blue.mjml` - Email title
- ✅ `6_Presidential.mjml` - Email title

**✅ MAIN TEMPLATES USING ONLY INCLUDES - NO ADDITIONAL COMMENTS NEEDED (6 files):**

- ✅ `4_Basic-No-Hero-One-CTA-Gold.mjml` - Uses only pre-commented includes
- ✅ `5_Newsletter-Multi-Events.mjml` - Uses only pre-commented includes
- ✅ `7_Single-Event-Promo.mjml` - Uses only pre-commented includes
- ✅ `8_Magazine.mjml` - Uses only pre-commented includes
- ✅ `9_Top-Hero.mjml` - Uses only pre-commented includes
- ✅ `10_Newsletter-Kitchen-Sink.mjml` - Uses only pre-commented includes

**Phase 5 Results:**

- **100% Complete (10/10 files)**
- **Email titles marked for template identification**
- **Navigation anchors commented where present**
- **All content editing happens at component/block level (already completed)**

## 🎉 COMMENTING PLAN - FULLY COMPLETED

**FINAL PROJECT STATUS: 100% COMPLETE**

**Summary of All Phases:**

- ✅ **Phase 1:** 38/38 content components - All text, buttons, images, and layout components
- ✅ **Phase 2:** 26/26 block templates - All callout boxes, events, news, and content blocks
- ✅ **Phase 3:** 6/6 header templates - All department names and branding
- ✅ **Phase 4:** 6/6 footer templates - All contact information and social media
- ✅ **Phase 5:** 10/10 main templates - Email titles and navigation anchors

**TOTAL FILES PROCESSED: 86 files**

**Content Editor Benefits:**

- 🎯 **Every editable piece of content clearly marked** with `<!-- EDIT: -->` comments
- 📝 **Clear instructions** for what to update (text, links, images, contact info)
- 🔧 **MJML-compatible** comments that don't break email compilation
- 📧 **Email client safe** - comments preserved but don't affect rendering
- 👥 **Non-technical friendly** - clear descriptions for content editors

**The email template system is now fully documented and ready for content editing!**

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
