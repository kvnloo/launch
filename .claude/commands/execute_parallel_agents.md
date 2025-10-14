# Parallel SuperDesign execution

ARGUMENTS: $ARGUMENTS

## Step 1: Setup git worktrees
We will create N git worktrees under the "trees" folder so each sub-agent gets a clean sandbox.

1. Ensure we are at the repository root and the working tree is clean.
2. Create the base folder: `mkdir -p trees`
3. For i in {1..4}, create worktrees with distinct branches:
   - `git worktree add -b sd-branch-$i ./trees/sd-branch-$i`
4. For each created worktree:
   - `cd "$(pwd)/trees/sd-branch-$i"`
   - Install project deps if needed, for example `pnpm install` or `npm ci`
   - Return to repo root.

After this, we have:
- trees/sd-branch-1
- trees/sd-branch-2
- trees/sd-branch-3
- trees/sd-branch-4

## Step 2: Start parallel sub agents
We will run one Claude Code sub-agent inside each worktree. Each sub-agent will call the SuperDesign MCP tools to generate a design variation from `$ARGUMENTS`.

For each i in {1..4}:
1. Open the worktree folder.
2. Use the MCP tool `superdesign_generate` with:
   - prompt: `$ARGUMENTS` (the UI you want)
   - design_type: "ui"
   - variations: 1
   - framework: "html"
3. Save outputs to `superdesign/design_iterations/ui_$i.html` (or the path returned by the tool).
4. Write a short `RESULTS.md` in the worktree root summarizing what was generated and any notable choices.

Notes:
- The MCP server “superdesign” must be configured in Claude Code settings, for example in `~/.claude-code/mcp-settings.json` with command `node /path/to/superdesign/dist/index.js`.
- If MCP is unavailable, fall back to SuperDesign’s standard prompt and generate one HTML file per worktree that implements the requested UI.

## Step 3: Validate and compare results
1. Do not start server scripts. Focus on code generation only.
2. From the main repo, collect artifacts by copying:
   - `trees/sd-branch-*/superdesign/design_iterations/*.html` into `ui_iterations/`
   - `trees/sd-branch-*/RESULTS.md` into `ui_iterations/`
3. Open the files side by side. Choose a preferred version.

## Step 4: Finalize
1. In the winning worktree, squash commits into a single commit with a clear message.
2. Merge or rebase onto your main development branch.
3. Remove unused worktrees with `git worktree remove` and delete their branches when done.
