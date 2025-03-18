# ALT Text Implementation Issue

## Current Process

When updating ALT text for images in the email template, changes must be made in two locations:

1. **Image Properties Dialog Box**

   - Access: Double-click on image
   - Location: "Image Info" tab
   - Field: "Alt Text" box

2. **Advanced Properties**
   - Access: Same dialog box
   - Location: "Advanced" tab
   - Field: "Advisory Title" box

## Current Issue

Changes made only in the Image Properties dialogue box do not reflect in the final email unless the same text is also updated under the Advisory Title in the Advanced tab.

## Technical Impact

- Redundant data entry required
- Increased chance of inconsistency
- Time-consuming process
- Potential accessibility issues if one location is missed

## Proposed Solution

Modify the code to implement a single-source update where:

- ALT text entered in the Image Properties dialog automatically populates the Advisory Title
- Eliminates the need for duplicate entry
- Ensures consistency across both fields

## Implementation Notes

1. The ALT text from the Image Properties dialog should be the source of truth
2. The Advisory Title should be programmatically updated to match
3. Both fields should remain visible but linked

## Reference Screenshots

_(Screenshots to be attached showing the current dual-entry requirement)_
