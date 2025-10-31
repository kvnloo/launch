# Project Documentation Index

**Last Updated**: 2025-10-30
**Project**: Launch - Next.js Marketing Site with CCPM Integration
**Branch**: llm

---

## 📚 Quick Navigation

### Core Documentation
- [Project Overview](./PROJECT_OVERVIEW.md) - Architecture, tech stack, and design philosophy
- [Getting Started](./GETTING_STARTED.md) - Setup, installation, and first steps
- [Architecture Guide](./ARCHITECTURE.md) - System design and component relationships
- [Development Workflow](./DEVELOPMENT_WORKFLOW.md) - Daily development patterns with CCPM

### CCPM Integration
- [CCPM Overview](../README-ccpm.md) - Claude Code Project Management system
- [CCPM Workflow Guide](./CCPM_WORKFLOW.md) - Practical usage patterns and best practices
- [Commands Reference](../COMMANDS.md) - All available commands
- [Agents Reference](../AGENTS.md) - Specialized agents and their usage

### Component Documentation
- [Component Library](./COMPONENTS.md) - UI component catalog with examples
- [API Reference](./API_REFERENCE.md) - Internal APIs and utilities
- [Styling Guide](./STYLING.md) - Theming, colors, and design system

### Claude Flow Integration
- [Claude Flow Overview](./CLAUDE_FLOW.md) - Multi-agent orchestration system
- [Swarm Commands](./SWARM_COMMANDS.md) - Swarm coordination reference
- [Hive Mind Guide](./HIVE_MIND.md) - Consensus-based agent coordination

---

## 🗂️ Documentation Structure

```
docs/
├── INDEX.md                    # This file - navigation hub
├── PROJECT_OVERVIEW.md         # High-level project architecture
├── GETTING_STARTED.md          # Setup and onboarding
├── ARCHITECTURE.md             # Technical architecture details
├── DEVELOPMENT_WORKFLOW.md     # Daily development with CCPM
├── CCPM_WORKFLOW.md           # CCPM integration patterns
├── COMPONENTS.md              # Component documentation
├── API_REFERENCE.md           # Internal API reference
├── STYLING.md                 # Design system documentation
├── CLAUDE_FLOW.md             # Claude Flow orchestration
├── SWARM_COMMANDS.md          # Swarm command reference
└── HIVE_MIND.md               # Hive mind coordination

Root Documentation:
├── README.md                  # Project README (basic info)
├── README-ccpm.md            # CCPM system documentation
├── COMMANDS.md               # Command reference
├── AGENTS.md                 # Agent reference
├── CHANGELOG.md              # Version history
├── CLAUDE.md                 # Claude Code configuration
└── CONTEXT_ACCURACY.md       # Context management patterns
```

---

## 🎯 Documentation by Role

### For New Developers
1. Start: [Getting Started](./GETTING_STARTED.md)
2. Then: [Project Overview](./PROJECT_OVERVIEW.md)
3. Finally: [Development Workflow](./DEVELOPMENT_WORKFLOW.md)

### For Contributors
1. [Development Workflow](./DEVELOPMENT_WORKFLOW.md)
2. [CCPM Workflow Guide](./CCPM_WORKFLOW.md)
3. [Component Library](./COMPONENTS.md)

### For Project Managers
1. [CCPM Overview](../README-ccpm.md)
2. [CCPM Workflow Guide](./CCPM_WORKFLOW.md)
3. [Commands Reference](../COMMANDS.md)

### For Architects
1. [Architecture Guide](./ARCHITECTURE.md)
2. [Project Overview](./PROJECT_OVERVIEW.md)
3. [Claude Flow Overview](./CLAUDE_FLOW.md)

---

## 🔍 Find What You Need

### Setup & Installation
- Initial setup → [Getting Started](./GETTING_STARTED.md)
- CCPM initialization → [CCPM Workflow](./CCPM_WORKFLOW.md#initialization)
- Environment configuration → [Getting Started: Environment](./GETTING_STARTED.md#environment)

### Development
- Daily workflow → [Development Workflow](./DEVELOPMENT_WORKFLOW.md)
- Creating features → [CCPM Workflow: Feature Development](./CCPM_WORKFLOW.md#feature-development)
- Component development → [Component Library](./COMPONENTS.md)
- Testing → [Development Workflow: Testing](./DEVELOPMENT_WORKFLOW.md#testing)

### Project Management
- Creating PRDs → [CCPM Overview: PRD Commands](../README-ccpm.md#prd-commands)
- Epic planning → [CCPM Overview: Epic Commands](../README-ccpm.md#epic-commands)
- Task tracking → [CCPM Overview: Issue Commands](../README-ccpm.md#issue-commands)
- Status monitoring → [CCPM Overview: Workflow Commands](../README-ccpm.md#workflow-commands)

### Multi-Agent Orchestration
- Swarm initialization → [Swarm Commands](./SWARM_COMMANDS.md)
- Agent spawning → [Claude Flow](./CLAUDE_FLOW.md#agent-spawning)
- Parallel execution → [Hive Mind](./HIVE_MIND.md)
- Task coordination → [Claude Flow: Task Orchestration](./CLAUDE_FLOW.md#task-orchestration)

### Architecture & Design
- System architecture → [Architecture Guide](./ARCHITECTURE.md)
- Component structure → [Project Overview: Structure](./PROJECT_OVERVIEW.md#project-structure)
- Design patterns → [Architecture: Patterns](./ARCHITECTURE.md#design-patterns)
- Styling system → [Styling Guide](./STYLING.md)

---

## 📖 Documentation Standards

### File Naming
- Use `UPPER_SNAKE_CASE.md` for main documentation
- Use `kebab-case.md` for component/feature docs
- Use descriptive, searchable names

### Cross-References
- Use relative links: `[Text](./FILE.md)`
- Link to specific sections: `[Text](./FILE.md#section)`
- Always verify links work

### Content Organization
1. **Overview** - What and why
2. **Prerequisites** - What you need first
3. **Content** - Main documentation
4. **Examples** - Practical usage
5. **Related** - Cross-references

### Maintenance
- Update `Last Updated` date when editing
- Keep INDEX.md in sync with new docs
- Remove outdated information promptly
- Preserve historical context in CHANGELOG.md

---

## 🔄 Related Resources

### External Documentation
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Radix UI](https://www.radix-ui.com/) - Component primitives
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling framework
- [Claude Code](https://docs.anthropic.com/claude/docs) - AI development platform

### Repository Links
- [GitHub Repository](https://github.com/automazeio/ccpm) - CCPM source
- [Issues](https://github.com/automazeio/ccpm/issues) - Bug reports and features
- [Discussions](https://github.com/automazeio/ccpm/discussions) - Community forum

### Internal References
- [.claude/commands/](./.claude/commands/) - Custom slash commands
- [ccpm/](./ccpm/) - CCPM system files
- [coordination/](./coordination/) - Multi-agent coordination
- [memory/](./memory/) - Session persistence

---

## 🤝 Contributing to Documentation

Documentation improvements welcome! When contributing:

1. **Check existing docs** - Avoid duplication
2. **Follow standards** - Use templates above
3. **Update INDEX.md** - Add new docs here
4. **Test links** - Verify all cross-references
5. **Be concise** - Prioritize clarity over completeness

See [Development Workflow: Documentation](./DEVELOPMENT_WORKFLOW.md#documentation) for detailed contribution guidelines.

---

**Need help?** Start with [Getting Started](./GETTING_STARTED.md) or check the [CCPM Overview](../README-ccpm.md).
