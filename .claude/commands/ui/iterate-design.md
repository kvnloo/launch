**CREATE DESIGN VARIATIONS**

UI TO BUILD: `$ARGUMENTS`

**GOAL**
Your goal is to spin up three parallel sub agents concurrently to implement one UI with variations, so that users can review and decide which one is better.

**Task for each sub agent**
1. Analyze the style guide in `prd/design-system.json`, as well as mockups for reference.
2. Build one single HTML page of just one screen to create a UI based on users’ feedback or task.
3. Output the HTML in the `ui_iterations` folder as `ui_{n}.html` where `n` must be unique, for example `ui_1.html`, `ui_2.html`, etc.
