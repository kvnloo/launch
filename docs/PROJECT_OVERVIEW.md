# Project Overview

**Project**: Launch - Marketing Website Template
**Type**: Next.js SPA with CCPM Integration
**Status**: Active Development
**Branch**: llm

---

## 📋 Table of Contents

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Architecture Philosophy](#architecture-philosophy)
- [CCPM Integration](#ccpm-integration)
- [Claude Flow Integration](#claude-flow-integration)
- [Development Approach](#development-approach)

---

## 🎯 Project Description

Launch is a modern marketing website template built with Next.js 16, featuring:

- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Component Library**: Radix UI primitives with custom styling
- **Dark Mode**: Integrated theme switching with next-themes
- **Performance**: Optimized for Core Web Vitals with Vercel Analytics
- **CCPM Integration**: Spec-driven development with GitHub Issues tracking
- **Multi-Agent Orchestration**: Claude Flow for parallel task execution

### Primary Use Cases

1. **Marketing Sites**: Product launches, landing pages, promotional content
2. **Development Workflow**: CCPM-driven spec-based development
3. **Multi-Agent Coordination**: Parallel feature development with Claude Flow

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - UI library with latest concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
  - Accordion, Alert Dialog, Dropdown Menu, Navigation Menu
  - Dialog, Popover, Tooltip, Tabs, Toast, and more
- **next-themes 0.4.6** - Dark mode support
- **lucide-react 0.454.0** - Icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Intelligent class merging

### Forms & Validation
- **react-hook-form 7.60.0** - Performant form management
- **zod 3.25.76** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Analytics & Monitoring
- **@vercel/analytics 1.3.1** - Performance tracking

### Development Tools
- **CCPM** - Claude Code Project Management
  - Spec-driven development workflow
  - GitHub Issues integration
  - Git worktree parallelization
  - Multi-agent coordination

- **Claude Flow** - Multi-agent orchestration
  - Swarm initialization and coordination
  - Agent spawning and task delegation
  - Hive mind consensus coordination
  - Memory and session persistence

---

## 📁 Project Structure

```
launch-fork/
├── app/                        # Next.js App Router
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── loading.tsx            # Loading UI
│   └── page.tsx               # Home page
│
├── components/                 # React components
│   ├── ui/                    # Radix UI components
│   │   ├── badge.tsx
│   │   └── button.tsx
│   ├── hero-section.tsx       # Landing hero
│   ├── nav-dropdown.tsx       # Navigation
│   ├── product-card.tsx       # Product display
│   └── theme-provider.tsx     # Dark mode
│
├── lib/                       # Utilities
│   └── utils.ts              # Helper functions
│
├── public/                    # Static assets
│   └── placeholder.jpg       # Image assets
│
├── styles/                    # Additional styles
│   └── globals.css           # Style overrides
│
├── ccpm/                      # CCPM System
│   ├── agents/               # Task-oriented agents
│   ├── commands/             # Slash commands
│   │   ├── context/          # Context management
│   │   ├── pm/               # Project management
│   │   └── testing/          # Test execution
│   ├── context/              # Project context
│   ├── epics/                # Epic workspace
│   ├── prds/                 # Product requirements
│   ├── rules/                # Development rules
│   ├── scripts/              # Utility scripts
│   └── hooks/                # Git hooks
│
├── .claude/                   # Claude Code config
│   ├── commands/             # Claude Flow commands
│   │   ├── agents/           # Agent management
│   │   ├── swarm/            # Swarm coordination
│   │   ├── hive-mind/        # Consensus coordination
│   │   ├── memory/           # Memory management
│   │   └── workflows/        # Workflow automation
│   ├── helpers/              # Setup scripts
│   └── settings.json         # Claude configuration
│
├── coordination/              # Multi-agent coordination
│   ├── memory_bank/          # Shared memory
│   ├── orchestration/        # Task orchestration
│   └── subtasks/             # Task decomposition
│
├── memory/                    # Session persistence
│   ├── agents/               # Agent memory
│   └── sessions/             # Session data
│
├── docs/                      # Documentation
│   ├── INDEX.md              # Documentation index
│   ├── PROJECT_OVERVIEW.md   # This file
│   ├── ARCHITECTURE.md       # Architecture guide
│   └── ...                   # Additional docs
│
├── doc/                       # Internationalization
│   └── *_ZH.md               # Chinese documentation
│
├── CLAUDE.md                  # Claude Code instructions
├── README.md                  # Project README
├── README-ccpm.md            # CCPM documentation
├── AGENTS.md                 # Agent reference
├── COMMANDS.md               # Command reference
└── package.json              # Dependencies
```

---

## ✨ Key Features

### 1. Modern Next.js Architecture
- **App Router**: Latest Next.js routing with layouts
- **Server Components**: Optimized rendering strategy
- **Streaming**: Progressive page loading
- **Type Safety**: Full TypeScript coverage

### 2. Component-Based Design
- **Radix UI Primitives**: Accessible, unstyled components
- **Custom Components**: Branded hero, navigation, product cards
- **Variant Support**: class-variance-authority for component variants
- **Theme Support**: Light/dark mode with next-themes

### 3. CCPM Integration
- **Spec-Driven Development**: PRD → Epic → Tasks → Code
- **GitHub Integration**: Issues as source of truth
- **Parallel Execution**: Git worktrees for concurrent work
- **Context Preservation**: Agent-based task isolation
- **Audit Trail**: Complete traceability from spec to code

### 4. Claude Flow Orchestration
- **Swarm Coordination**: Multiple agents on parallel tasks
- **Agent Specialization**: Code, test, review, and integration agents
- **Hive Mind Consensus**: Byzantine fault-tolerant coordination
- **Memory Management**: Cross-session context persistence
- **Performance Tracking**: Bottleneck detection and optimization

### 5. Developer Experience
- **Fast Development**: Hot reload with Next.js
- **Type Safety**: TypeScript everywhere
- **Linting**: ESLint configuration
- **Form Validation**: Zod schemas with react-hook-form
- **Icon Library**: lucide-react for consistent iconography

---

## 🏗️ Architecture Philosophy

### Design Principles

1. **Spec-Driven Development**
   - Every feature starts with a PRD
   - Clear acceptance criteria before implementation
   - Traceability from requirements to code

2. **Component Composition**
   - Small, focused components
   - Radix UI for accessibility
   - Variant-based styling

3. **Context Preservation**
   - Agents isolate implementation details
   - Main thread stays strategic
   - Memory persistence across sessions

4. **Parallel Execution**
   - Git worktrees for isolation
   - Multiple agents working simultaneously
   - Coordination through shared memory

5. **Type Safety First**
   - TypeScript strict mode
   - Zod for runtime validation
   - Type inference over explicit types

### Architectural Patterns

#### Component Pattern
```typescript
// Base component with variants
const Component = ({
  variant = "default",
  size = "md",
  children
}: ComponentProps) => {
  return (
    <div className={cn(variants({ variant, size }))}>
      {children}
    </div>
  )
}
```

#### Agent Pattern
```bash
# Specialized agents for context isolation
/pm:issue-start 1234
# → Spawns parallel-worker agent
# → parallel-worker spawns sub-agents
# → Each sub-agent handles one aspect
# → Results consolidated back to main thread
```

#### Swarm Pattern
```bash
# Multi-agent coordination
/swarm:init topology=mesh maxAgents=5
/agent:spawn type=coder
/task:orchestrate "Implement authentication"
# → Multiple agents work in parallel
# → Coordination through shared memory
# → Consensus on completion
```

---

## 🔗 CCPM Integration

### Workflow Overview

```
PRD Creation → Epic Planning → Task Decomposition → GitHub Sync → Parallel Execution
```

### Key Commands

| Phase | Command | Purpose |
|-------|---------|---------|
| Planning | `/pm:prd-new feature` | Create product requirements |
| Design | `/pm:prd-parse feature` | Convert to technical epic |
| Breakdown | `/pm:epic-decompose feature` | Split into tasks |
| Sync | `/pm:epic-sync feature` | Push to GitHub |
| Execute | `/pm:issue-start 1234` | Begin implementation |
| Track | `/pm:status` | Monitor progress |

### Directory Structure

```
ccpm/
├── prds/              # Product requirements
│   └── feature.md
├── epics/             # Implementation plans
│   └── feature/
│       ├── epic.md
│       └── 001.md    # Tasks (renamed to issue #s after sync)
├── commands/          # Slash commands
├── agents/            # Specialized agents
└── scripts/           # Automation scripts
```

---

## 🤖 Claude Flow Integration

### Multi-Agent Orchestration

Launch integrates Claude Flow for parallel task execution:

#### Swarm Topologies
- **Mesh**: Peer-to-peer coordination
- **Hierarchical**: Tree-based coordination
- **Ring**: Circular coordination
- **Star**: Centralized coordination

#### Agent Types
- **Researcher**: Requirements analysis
- **Coder**: Implementation
- **Analyst**: Code review and quality
- **Optimizer**: Performance tuning
- **Coordinator**: Swarm orchestration

#### Hive Mind Features
- Byzantine fault-tolerant consensus
- Distributed memory management
- Session persistence and recovery
- Performance metrics and optimization

### Integration Points

```bash
# Initialize swarm for feature work
/swarm:init topology=mesh maxAgents=5

# Spawn specialized agents
/agent:spawn type=coder
/agent:spawn type=analyst

# Orchestrate parallel tasks
/task:orchestrate "Build authentication system"

# Monitor swarm status
/swarm:status

# Hive mind coordination
/hive-mind:init
/hive-mind:spawn agentType=worker
```

---

## 🚀 Development Approach

### Daily Workflow

1. **Start Session**
   ```bash
   /context:prime              # Load project context
   /pm:next                   # Get next priority task
   ```

2. **Feature Development**
   ```bash
   /pm:prd-new feature        # Create requirements
   /pm:prd-parse feature      # Plan implementation
   /pm:epic-oneshot feature   # Decompose and sync
   /pm:issue-start 1234       # Begin work
   ```

3. **Parallel Execution**
   ```bash
   /swarm:init topology=mesh  # Initialize coordination
   /pm:issue-start 1234       # Spawn parallel workers
   # Multiple agents work simultaneously
   ```

4. **Track Progress**
   ```bash
   /pm:issue-sync 1234        # Push updates
   /pm:status                 # Overall status
   /swarm:monitor             # Agent monitoring
   ```

### Testing Workflow

```bash
/testing:prime                # Configure tests
/testing:run                  # Execute with agent
```

### Context Management

```bash
/context:create               # Initial context
/context:update               # Refresh context
/context:prime                # Load context
```

---

## 📚 Related Documentation

- [Getting Started](./GETTING_STARTED.md) - Setup and installation
- [Architecture Guide](./ARCHITECTURE.md) - Detailed architecture
- [Development Workflow](./DEVELOPMENT_WORKFLOW.md) - Daily development
- [CCPM Workflow](./CCPM_WORKFLOW.md) - Project management patterns
- [Claude Flow Guide](./CLAUDE_FLOW.md) - Multi-agent orchestration
- [Component Library](./COMPONENTS.md) - UI components
- [Commands Reference](../COMMANDS.md) - All commands
- [Agents Reference](../AGENTS.md) - Agent catalog

---

**Next Steps**:
- New to the project? See [Getting Started](./GETTING_STARTED.md)
- Ready to develop? Check [Development Workflow](./DEVELOPMENT_WORKFLOW.md)
- Working with CCPM? Read [CCPM Workflow](./CCPM_WORKFLOW.md)
