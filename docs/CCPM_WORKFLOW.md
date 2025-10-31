# CCPM Workflow Guide

**Purpose**: Practical patterns for spec-driven development with Claude Code PM
**Audience**: Developers using CCPM for daily work
**Related**: [README-ccpm.md](../README-ccpm.md) | [COMMANDS.md](../COMMANDS.md) | [AGENTS.md](../AGENTS.md)

---

## 📋 Table of Contents

- [Quick Reference](#quick-reference)
- [Initialization](#initialization)
- [Feature Development Lifecycle](#feature-development-lifecycle)
- [Parallel Execution Patterns](#parallel-execution-patterns)
- [Context Management](#context-management)
- [GitHub Integration](#github-integration)
- [Common Workflows](#common-workflows)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Reference

### Most Used Commands

```bash
# Daily workflow
/pm:next                    # Get next priority task
/pm:status                  # Check overall progress
/pm:standup                 # Generate daily standup

# Feature development
/pm:prd-new feature-name    # Start new feature
/pm:prd-parse feature-name  # Create implementation plan
/pm:epic-oneshot feature    # Decompose and sync to GitHub
/pm:issue-start 1234        # Begin implementation

# Progress tracking
/pm:issue-sync 1234         # Push updates to GitHub
/pm:issue-status 1234       # Check issue status
/pm:epic-show feature       # View epic progress
```

### Command Flow Diagram

```
PRD Creation → Implementation Planning → Task Decomposition → GitHub Sync → Execution → Tracking
    ↓              ↓                        ↓                   ↓            ↓           ↓
/pm:prd-new   /pm:prd-parse         /pm:epic-decompose   /pm:epic-sync  /pm:issue  /pm:status
                                     or /pm:epic-oneshot                  -start
```

---

## 🏁 Initialization

### First-Time Setup

```bash
# 1. Install CCPM system (if not already done)
# See README-ccpm.md for installation

# 2. Initialize PM system
/pm:init
# This will:
# - Install GitHub CLI
# - Authenticate with GitHub
# - Install gh-sub-issue extension
# - Create required directories
# - Update .gitignore

# 3. Create or update CLAUDE.md
/re-init
# Adds CCPM rules to CLAUDE.md

# 4. Create initial project context
/context:create
# Generates project context documentation

# 5. Prime context for current session
/context:prime
# Loads context into conversation
```

### Verification

```bash
# Check system status
/pm:validate

# List existing PRDs
/pm:prd-list

# List existing epics
/pm:epic-list
```

---

## 🔄 Feature Development Lifecycle

### Phase 1: Product Requirements (PRD)

**Goal**: Document what needs to be built and why

```bash
# Start comprehensive brainstorming
/pm:prd-new authentication-system

# Follow the prompts to define:
# - Problem statement
# - User stories
# - Success criteria
# - Technical constraints
# - Out of scope items
```

**Output**: `.claude/prds/authentication-system.md`

**Tips**:
- Be thorough in brainstorming - it saves time later
- Include edge cases and error scenarios
- Define success metrics upfront
- Document assumptions and constraints

### Phase 2: Implementation Planning (Epic)

**Goal**: Transform PRD into technical implementation plan

```bash
# Parse PRD into epic
/pm:prd-parse authentication-system

# This creates:
# - Technical approach
# - Architecture decisions
# - Dependency mapping
# - Risk assessment
```

**Output**: `.claude/epics/authentication-system/epic.md`

**What Gets Defined**:
- High-level technical approach
- System architecture changes
- Database schema changes
- API design
- Security considerations
- Testing strategy

### Phase 3: Task Decomposition

**Goal**: Break epic into concrete, actionable tasks

```bash
# Decompose epic into tasks
/pm:epic-decompose authentication-system

# Creates individual task files:
# - 001.md - Database schema
# - 002.md - API endpoints
# - 003.md - UI components
# - 004.md - Tests
```

**Output**: `.claude/epics/authentication-system/[task].md`

**Each Task Includes**:
- Clear description
- Acceptance criteria
- Dependencies
- Effort estimate
- Parallel execution flag

### Phase 4: GitHub Synchronization

**Goal**: Push epic and tasks to GitHub as issues

```bash
# Option 1: Sync manually
/pm:epic-sync authentication-system

# Option 2: Decompose and sync in one command (recommended)
/pm:epic-oneshot authentication-system

# Creates:
# - #1234 (epic issue)
# - #1235, #1236, #1237 (task issues)
# - Parent-child relationships
# - Appropriate labels
```

**Output**: GitHub issues with sub-issue relationships

**What Happens**:
- Epic becomes parent issue
- Tasks become child issues (via gh-sub-issue)
- Labels added (`epic:feature-name`, `task:feature-name`)
- Task files renamed to issue numbers (001.md → 1235.md)

### Phase 5: Execution

**Goal**: Implement tasks with specialized agents

```bash
# Start work on a task
/pm:issue-start 1235

# This spawns:
# - parallel-worker agent (if parallel tasks)
# - Multiple sub-agents for different aspects
# - Each agent works in isolation

# Agents coordinate through:
# - Git commits
# - Shared memory (.claude/context/)
# - Update files (epics/feature/updates/)
```

**Execution Pattern**:
```
Main Thread
    ↓
parallel-worker Agent
    ↓
    ├─→ Database Agent (schema, migrations)
    ├─→ API Agent (endpoints, middleware)
    ├─→ UI Agent (components, forms)
    ├─→ Test Agent (unit, integration tests)
    └─→ Results consolidated back
```

### Phase 6: Progress Tracking

**Goal**: Maintain transparency and audit trail

```bash
# Push progress updates to GitHub
/pm:issue-sync 1235
# Updates posted as issue comments

# Check task status
/pm:issue-status 1235

# View epic progress
/pm:epic-show authentication-system

# Overall project status
/pm:status

# Daily standup report
/pm:standup
```

---

## ⚡ Parallel Execution Patterns

### Understanding Parallelization

CCPM enables multiple work streams on a single issue:

```
Traditional:
Issue #1234 = 1 developer = 1 thread of work

CCPM:
Issue #1234 = 1 parallel-worker = 5 concurrent agents
    ├─→ Agent 1: Database
    ├─→ Agent 2: API
    ├─→ Agent 3: UI
    ├─→ Agent 4: Tests
    └─→ Agent 5: Documentation
```

### Marking Tasks as Parallel

In epic decomposition, tasks are marked with `parallel: true`:

```markdown
## Task: Implement User Authentication

**Parallel**: ✅ Yes

This task can be worked on simultaneously with:
- Password reset flow
- Email verification
```

### Parallel Execution Commands

```bash
# Analyze parallelization opportunities
/pm:issue-analyze 1234

# Start epic with all parallel tasks
/pm:epic-start authentication-system
# Creates worktree: ../epic-authentication-system/
# Spawns agents for each task
# Agents work in parallel

# Monitor parallel execution
/pm:epic-status authentication-system
```

### Worktree Isolation

```
project/                    # Main repository
└── epic-authentication-system/  # Worktree
    ├── task-1235/         # Agent 1 workspace
    ├── task-1236/         # Agent 2 workspace
    └── task-1237/         # Agent 3 workspace
```

**Benefits**:
- No git conflicts
- Clean isolation
- Independent commits
- Parallel git operations

---

## 🧠 Context Management

### Context Files

CCPM uses `.claude/context/` for project-wide context:

```bash
# Create initial context
/context:create
# Generates:
# - project-overview.md
# - architecture.md
# - dependencies.md
# - patterns.md

# Update context after changes
/context:update

# Load context into session
/context:prime
```

### How Agents Use Context

```
Agent spawned → Reads /context/ → Maintains project awareness
    ↓
Implements feature with full context
    ↓
Writes updates to epics/[feature]/updates/
    ↓
Main thread syncs updates to GitHub
```

### Context Preservation Benefits

1. **No Context Loss**: Agents always have project awareness
2. **Consistency**: All agents work from same understanding
3. **Efficiency**: No redundant context loading
4. **Auditability**: Context changes tracked in git

---

## 🔗 GitHub Integration

### Issue Structure

```
Epic Issue #1234: "Implement Authentication System"
├── Sub-issue #1235: "Database schema and migrations"
├── Sub-issue #1236: "API endpoints and middleware"
├── Sub-issue #1237: "UI components and forms"
└── Sub-issue #1238: "Test suite"
```

### Label Organization

```
epic:authentication     # Epic-level label
task:authentication     # Task-level label
parallel:true          # Can be worked in parallel
status:in-progress     # Current status
```

### Sync Patterns

```bash
# Incremental sync (updates only)
/pm:issue-sync 1235

# Full bidirectional sync
/pm:sync

# Import existing GitHub issues
/pm:import

# Refresh epic status from tasks
/pm:epic-refresh authentication-system
```

### Update Format

GitHub comments follow structured format:

```markdown
## Progress Update - 2025-10-30 14:30

**Completed**:
- ✅ Database schema designed
- ✅ Migration scripts created

**In Progress**:
- 🔄 API endpoint implementation

**Blocked**:
- ⚠️ Waiting for security review

**Next Steps**:
- [ ] Complete API endpoints
- [ ] Begin UI integration
```

---

## 🎯 Common Workflows

### Workflow 1: Simple Feature

```bash
# Start to finish
/pm:prd-new simple-feature
# → Complete PRD brainstorming

/pm:prd-parse simple-feature
# → Review generated epic

/pm:epic-oneshot simple-feature
# → Tasks created and synced to GitHub

/pm:issue-start 1235
# → Agent implements task

/pm:issue-sync 1235
# → Updates pushed to GitHub

/pm:issue-close 1235
# → Mark complete
```

**Timeline**: 1-2 hours for small features

### Workflow 2: Complex Feature with Parallel Work

```bash
# Planning phase
/pm:prd-new complex-feature
/pm:prd-parse complex-feature
/pm:epic-decompose complex-feature

# Review and adjust tasks
# Edit .claude/epics/complex-feature/*.md

# Sync to GitHub
/pm:epic-sync complex-feature

# Parallel execution
/pm:epic-start complex-feature
# → Creates worktree
# → Spawns multiple agents
# → All work in parallel

# Monitor progress
/pm:epic-status complex-feature
/pm:status

# Merge when complete
/pm:epic-merge complex-feature
```

**Timeline**: Days to weeks for large features

### Workflow 3: Bug Fix with Context

```bash
# Create issue directly on GitHub
# Then import

/pm:import
# Syncs GitHub issue locally

/pm:issue-start 1234
# Agent reads context
# Implements fix

/pm:issue-sync 1234
# Push fix details

/pm:issue-close 1234
```

**Timeline**: Minutes to hours

### Workflow 4: Daily Development

```bash
# Morning routine
/context:prime              # Load project context
/pm:standup                # Review status
/pm:next                   # Get priority task

# Development
/pm:issue-start [number]   # Work on task
# ... implement ...
/pm:issue-sync [number]    # Push updates

# End of day
/pm:status                 # Review progress
/pm:standup                # Generate standup notes
```

---

## ✅ Best Practices

### 1. PRD Quality

- ✅ **DO**: Spend time in brainstorming phase
- ✅ **DO**: Include user stories and success criteria
- ✅ **DO**: Define constraints and out-of-scope items
- ❌ **DON'T**: Rush through PRD creation
- ❌ **DON'T**: Skip edge cases and error scenarios

### 2. Task Granularity

- ✅ **DO**: Break tasks into 2-8 hour chunks
- ✅ **DO**: Make tasks independently testable
- ✅ **DO**: Include clear acceptance criteria
- ❌ **DON'T**: Create tasks too small (< 1 hour)
- ❌ **DON'T**: Create tasks too large (> 1 day)

### 3. Parallel Execution

- ✅ **DO**: Mark independent tasks as parallel
- ✅ **DO**: Use worktrees for parallel work
- ✅ **DO**: Let agents coordinate via memory
- ❌ **DON'T**: Parallelize dependent tasks
- ❌ **DON'T**: Work on same files in parallel

### 4. Context Management

- ✅ **DO**: Prime context at session start
- ✅ **DO**: Update context after major changes
- ✅ **DO**: Keep context concise and relevant
- ❌ **DON'T**: Let context become stale
- ❌ **DON'T**: Duplicate information in context

### 5. GitHub Sync

- ✅ **DO**: Sync regularly for transparency
- ✅ **DO**: Use descriptive issue titles
- ✅ **DO**: Keep GitHub as source of truth
- ❌ **DON'T**: Work offline for extended periods
- ❌ **DON'T**: Manually edit issues (use commands)

### 6. Agent Usage

- ✅ **DO**: Let agents handle heavy lifting
- ✅ **DO**: Trust agent consolidation
- ✅ **DO**: Review agent output
- ❌ **DON'T**: Micromanage agents
- ❌ **DON'T**: Override agent decisions without reason

---

## 🐛 Troubleshooting

### Issue: GitHub CLI Not Authenticated

```bash
# Symptom: Commands fail with auth errors
# Solution:
gh auth login
/pm:init  # Re-run initialization
```

### Issue: Sub-issue Extension Missing

```bash
# Symptom: Tasks create task lists instead of sub-issues
# Solution:
gh extension install yahsan2/gh-sub-issue
/pm:epic-sync [feature]  # Re-sync
```

### Issue: Context Not Loading

```bash
# Symptom: Agents seem unaware of project
# Solution:
/context:update  # Refresh context
/context:prime   # Reload into session
```

### Issue: Parallel Tasks Conflicting

```bash
# Symptom: Git merge conflicts
# Solution:
# 1. Review task dependencies
# 2. Mark dependent tasks as non-parallel
# 3. Coordinate file ownership
/pm:epic-decompose [feature]  # Re-decompose
```

### Issue: Stale Epic Status

```bash
# Symptom: Epic shows incorrect progress
# Solution:
/pm:epic-refresh [feature]  # Refresh from GitHub
```

### Issue: Lost Local Changes

```bash
# Symptom: Updates not in GitHub
# Solution:
/pm:issue-sync [number]  # Push updates
/pm:sync                # Full sync
```

---

## 📚 Related Documentation

- [CCPM Overview](../README-ccpm.md) - System architecture and philosophy
- [Commands Reference](../COMMANDS.md) - All available commands
- [Agents Reference](../AGENTS.md) - Agent capabilities
- [Development Workflow](./DEVELOPMENT_WORKFLOW.md) - Daily development patterns
- [Project Overview](./PROJECT_OVERVIEW.md) - Project structure

---

## 🎓 Learning Path

1. **Week 1**: Basic workflow
   - PRD creation
   - Epic planning
   - Simple task execution

2. **Week 2**: Parallel execution
   - Multi-task features
   - Worktree management
   - Agent coordination

3. **Week 3**: Advanced patterns
   - Complex features
   - Custom workflows
   - Team collaboration

4. **Week 4**: Optimization
   - Context management
   - Performance tuning
   - Workflow customization

---

**Ready to start?** Try `/pm:prd-new my-first-feature` to begin your CCPM journey!
