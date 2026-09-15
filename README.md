# 🛠️ SkillForge

**AI-Powered Skill & Project Ecosystem Platform**

> GitHub + LinkedIn + LeetCode — combined into one platform for developers to showcase skills, build portfolios, take coding assessments, and form teams.

---

## 📋 Features

| Feature | Description | Status |
|---------|-------------|--------|
| **User Authentication** | Signup/login with JWT | 🔲 Planned |
| **Skill Profiles** | Progress bars (e.g., Python 82%, React 74%) | 🔲 Planned |
| **Project Portfolio** | List and showcase completed projects | 🔲 Planned |
| **Certifications** | Display earned certifications & badges | 🔲 Planned |
| **Coding Assessments** | Live code execution via Piston API | 🔲 Planned |
| **GitHub Integration** | Pull repo/commit data from GitHub API | 🔲 Planned |
| **Peer Reviews** | Give & receive reviews on projects | 🔲 Planned |
| **Team Formation** | Rule-based matching by skills & availability | 🔲 Planned |
| **Dashboards** | Overview of activity, skills, and projects | 🔲 Planned |

---

## 🏗️ Tech Stack

| Layer | Technology | Free Tier |
|-------|------------|-----------|
| Frontend | Next.js (React) + Tailwind CSS | Vercel |
| Backend | Node.js + Express | Railway / Render |
| Database | MongoDB Atlas (Mongoose ODM) | 512 MB free |
| Auth | JWT + bcrypt | — |
| Code Execution | Piston API | Free, no key |
| CI/CD | GitHub Actions | Free for public repos |

---

## 📁 Project Structure

```
skillforge/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/              # App Router pages
│   │   ├── components/       # React components (by feature)
│   │   ├── services/         # API service functions
│   │   ├── context/          # React Context providers
│   │   ├── hooks/            # Custom React hooks
│   │   ├── types/            # TypeScript interfaces
│   │   └── lib/              # Utility functions
│   ├── public/               # Static assets
│   └── package.json
│
├── backend/                  # Express API server
│   ├── src/
│   │   ├── server.js         # Entry point
│   │   ├── config/           # DB connection, env validation
│   │   ├── routes/           # API route definitions
│   │   ├── controllers/      # Request handlers
│   │   ├── models/           # Mongoose schemas
│   │   ├── middleware/       # Auth, error handling, validation
│   │   └── services/         # Business logic & external APIs
│   └── package.json
│
├── docs/                     # Documentation
│   ├── API_REFERENCE.md      # API endpoint reference
│   ├── CONTRIBUTING.md       # Team workflow & guidelines
│   └── ARCHITECTURE.md       # System architecture overview
│
├── .github/workflows/        # CI/CD pipelines
│   └── ci.yml
│
├── .env.example              # Environment variable template
├── .eslintrc.json            # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .gitignore
├── package.json              # Root workspace config
└── README.md                 # ← You are here
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (comes with Node.js)
- **Git** — [Download](https://git-scm.com/)
- **MongoDB Atlas** account (free) — [Sign up](https://cloud.mongodb.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/skillforge.git
cd skillforge
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and fill in:
- `MONGODB_URI` — Your MongoDB Atlas connection string
- `JWT_SECRET` — Any random string for development
- Other variables as needed (see `.env.example` for docs)

### 3. Install Dependencies

```bash
# Installs dependencies for root, frontend, AND backend
npm install
```

### 4. Run the Development Servers

```bash
# Run both frontend and backend simultaneously
npm run dev
```

Or run them separately:

```bash
# Terminal 1 — Backend (http://localhost:5000)
npm run dev:backend

# Terminal 2 — Frontend (http://localhost:3000)
npm run dev:frontend
```

### 5. Verify It Works

- Open **http://localhost:3000** — You should see the landing page
- The page displays **"API Status: ✅ Connected"** if the backend is running
- Visit **http://localhost:5000/api/health** to see the raw health-check JSON

---

## 👥 Team Workflow

### Who Works Where

Each team member can own a feature area. The codebase is organized so you can work on your feature's files without conflicts:

| Member | Feature Area | Backend Files | Frontend Files |
|--------|-------------|---------------|----------------|
| 1 | Authentication | `auth.*` | `(auth)/`, `auth/` |
| 2 | Skill Profiles | `skill.*`, `user.*` | `profile/` |
| 3 | Project Portfolio | `project.*` | `projects/` |
| 4 | Certifications | `certification.*` | `certifications/` |
| 5 | Coding Assessments | `assessment.*`, `piston.*` | `assessments/` |
| 6 | GitHub + Reviews | `github.*`, `review.*` | `reviews/` |
| 7 | Teams + Dashboard | `team.*`, `matching.*` | `teams/`, `dashboard/` |

### Branch Naming

```
feature/<feature-name>    # New features
fix/<bug-description>     # Bug fixes
docs/<what-changed>       # Documentation
```

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for full guidelines.

---

## 📡 API Health Check

```bash
curl http://localhost:5000/api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "skillforge-api",
  "version": "1.0.0"
}
```

---

## 📝 License

This project is for educational purposes as part of a college team project.
