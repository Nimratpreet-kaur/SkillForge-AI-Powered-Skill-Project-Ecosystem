# 🏗️ SkillForge Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT                               │
│                                                             │
│   Next.js (React) + Tailwind CSS                           │
│   ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌────────────────┐  │
│   │  Pages   │ │Components│ │Services │ │    Context      │  │
│   └────┬────┘ └────┬─────┘ └────┬────┘ └───────┬────────┘  │
│        └───────────┴────────────┴───────────────┘           │
│                         │ HTTP (fetch/axios)                │
└─────────────────────────┼───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     API SERVER                              │
│                                                             │
│   Express.js + Node.js                                     │
│   ┌────────┐ ┌───────────┐ ┌──────────┐ ┌──────────────┐   │
│   │ Routes │→│Controllers│→│ Services │→│   Models      │   │
│   └────────┘ └───────────┘ └──────────┘ └──────┬───────┘   │
│        │                        │               │           │
│   ┌────┴─────┐            ┌─────┴────┐          │           │
│   │Middleware │            │ External │          │           │
│   │(Auth,Err) │            │  APIs    │          │           │
│   └──────────┘            └──────────┘          │           │
└────────────────────────────────┬────────────────┼───────────┘
                                 │                │
                    ┌────────────┴──┐     ┌───────┴──────┐
                    │               │     │              │
                    ▼               ▼     ▼              │
             ┌──────────┐   ┌──────────┐ ┌────────────┐  │
             │  Piston   │   │  GitHub  │ │  MongoDB   │  │
             │   API     │   │   API    │ │  Atlas     │  │
             │(Code Exec)│   │(Repos)   │ │ (Database) │  │
             └──────────┘   └──────────┘ └────────────┘  │
                                                          │
                Free tier     Free tier    Free 512MB     │
                No API key    OAuth        cluster        │
```

## Request Flow

1. **User** interacts with the Next.js frontend
2. **Frontend** calls backend API via service functions
3. **Express Router** directs the request to the appropriate controller
4. **Middleware** handles auth (JWT verification), validation, and error handling
5. **Controller** processes the request and calls the service layer
6. **Service** contains business logic and interacts with models or external APIs
7. **Model** (Mongoose) handles database operations with MongoDB Atlas
8. **Response** flows back through the chain to the frontend

## Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Monorepo | npm workspaces | Zero-config, built into npm |
| Database | MongoDB Atlas | Flexible schema, generous free tier |
| Auth | JWT + bcrypt | No vendor lock-in, simple to understand |
| Code Execution | Piston API | Free, no key, 60+ languages, secure sandbox |
| Styling | Tailwind CSS | Utility-first, fast to prototype |
| Deployment | Vercel (FE) + Render/Railway (BE) | Free tiers available |

## Data Models

```
User ──────┬──── Skills (embedded or referenced)
           ├──── Projects
           ├──── Certifications
           ├──── Assessments (submissions)
           └──── Teams (membership)

Project ───┬──── Reviews
           └──── Team (optional)

Team ──────┬──── Members (User refs)
           └──── Projects
```

## External Integrations

### Piston API (Code Execution)
- **URL**: `https://emkc.org/api/v2/piston`
- **Usage**: Execute code submissions for assessments
- **Cost**: Free, no API key required
- **Docs**: https://github.com/engineer-man/piston

### GitHub API
- **Usage**: Fetch user repos, commit history, contribution stats
- **Auth**: OAuth2 (GitHub App)
- **Cost**: Free (60 req/hr unauthenticated, 5000/hr authenticated)
- **Docs**: https://docs.github.com/en/rest
