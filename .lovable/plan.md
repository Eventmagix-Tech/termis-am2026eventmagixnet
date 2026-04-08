

# Update Abstract Topics Preview with Descriptions from Excel

## Goal
Parse the uploaded Excel file (`Abstracts_Topics_for_Web.xlsx`) to extract subtopic descriptions, then update the `PreviewAbstractTopics.tsx` page to display them in the nested accordion structure (replacing the current "Coming soon" placeholders).

## Steps

### Step 1: Parse the Excel File
- Use `openpyxl` to read the uploaded `.xlsx` file and extract all subtopic descriptions
- Map each description to its parent main topic and subtopic name
- Output the structured data for verification

### Step 2: Update PreviewAbstractTopics.tsx
- Modify the `Subtopic` interface to include an optional `description` field
- Populate the `abstractTopicsData` array with the extracted descriptions
- Replace the "Coming soon" placeholder with the actual description text for each subtopic that has one (keep "Coming soon" for any subtopics without descriptions)

### Technical Details
- File: `src/pages/PreviewAbstractTopics.tsx`
- The current data structure already supports this — just needs a `description?: string` field on the `Subtopic` interface
- No new dependencies or routes needed

