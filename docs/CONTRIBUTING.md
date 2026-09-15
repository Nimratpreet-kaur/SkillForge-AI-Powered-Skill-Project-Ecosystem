# 🤝 Contributing to SkillForge

## Team Workflow

We are a team of 7 working on different feature areas. Follow these guidelines to minimize merge conflicts and keep the codebase clean.

---

## Git Workflow

### Branch Strategy

We use a **feature branch** workflow:

1. Always branch from `main`
2. Use the naming convention below
3. Open a Pull Request when ready for review
4. Get at least 1 approval before merging
5. Squash merge into `main`

### Branch Naming Convention

```
feature/<feature-name>     # New feature work
fix/<bug-description>      # Bug fixes
refactor/<what>            # Code refactoring
docs/<what-changed>        # Documentation updates
chore/<task>               # Tooling, CI, config changes
```

Examples:
- `feature/auth-login-form`
- `fix/skill-progress-calculation`
- `docs/api-assessment-endpoints`

---

## Code Style

We use **ESLint** and **Prettier** for consistent code style.

```bash
# Check for lint errors
npm run lint

# Auto-fix lint errors
npm run lint:fix

# Format all files
npm run format
```

**Before committing**, make sure:
- `npm run lint` passes with no errors
- Your code is formatted with Prettier

---

## Commit Messages

Use clear, descriptive commit messages:

```
<type>(<scope>): <short description>

Types: feat, fix, docs, style, refactor, test, chore
Scope: auth, skills, projects, assessments, certs, reviews, teams, github, dashboard
```

Examples:
- `feat(auth): add JWT token generation`
- `fix(skills): correct progress bar percentage calculation`
- `docs(api): add assessment endpoint documentation`

---

## Pull Request Guidelines

1. **Title**: Follow commit message format
2. **Description**: Explain what changed and why
3. **Screenshots**: Include for any UI changes
4. **Testing**: Describe how you tested your changes
5. **Linked Issues**: Reference any related issues

### PR Template

```markdown
## What does this PR do?

<Brief description>

## How to test

<Steps to verify the changes>

## Screenshots (if applicable)

<Add screenshots here>

## Checklist
- [ ] Code follows project style guidelines
- [ ] ESLint passes with no errors
- [ ] Tested locally
- [ ] Updated documentation if needed
```

---

## Adding a New Feature

When building a new feature, create files in this order:

### Backend
1. **Model** (`backend/src/models/YourModel.js`) — Define the Mongoose schema
2. **Controller** (`backend/src/controllers/your.controller.js`) — Handle request/response
3. **Routes** (`backend/src/routes/your.routes.js`) — Define API endpoints
4. **Service** (`backend/src/services/your.service.js`) — Business logic (if needed)
5. **Register route** in `backend/src/routes/index.js`

### Frontend
1. **Service** (`frontend/src/services/your.service.ts`) — API call functions
2. **Types** (`frontend/src/types/your.types.ts`) — TypeScript interfaces
3. **Components** (`frontend/src/components/your-feature/`) — UI components
4. **Page** (`frontend/src/app/your-feature/page.tsx`) — Page component

### Reference
Use the **User model** and **health endpoint** as a reference for patterns.

---

## Questions?

Reach out to the team lead or post in the team chat.
