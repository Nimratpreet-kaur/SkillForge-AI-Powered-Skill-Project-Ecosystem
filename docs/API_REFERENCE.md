# 📡 SkillForge API Reference

Base URL: `http://localhost:5000/api`

---

## Health

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/health` | Server health check | No | ✅ Working |

---

## Authentication

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| POST | `/auth/register` | Register a new user | No | 🔲 TODO |
| POST | `/auth/login` | Login and receive JWT | No | 🔲 TODO |
| POST | `/auth/logout` | Invalidate session | Yes | 🔲 TODO |
| GET | `/auth/me` | Get current user | Yes | 🔲 TODO |

---

## Users

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/users/:id` | Get user profile | No | 🔲 TODO |
| PUT | `/users/:id` | Update user profile | Yes | 🔲 TODO |
| DELETE | `/users/:id` | Delete user account | Yes | 🔲 TODO |

---

## Skills

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/skills/user/:userId` | Get user's skills | No | 🔲 TODO |
| POST | `/skills` | Add a skill | Yes | 🔲 TODO |
| PUT | `/skills/:id` | Update skill progress | Yes | 🔲 TODO |
| DELETE | `/skills/:id` | Remove a skill | Yes | 🔲 TODO |

---

## Projects

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/projects` | List all projects | No | 🔲 TODO |
| GET | `/projects/:id` | Get project details | No | 🔲 TODO |
| POST | `/projects` | Create a project | Yes | 🔲 TODO |
| PUT | `/projects/:id` | Update a project | Yes | 🔲 TODO |
| DELETE | `/projects/:id` | Delete a project | Yes | 🔲 TODO |

---

## Assessments

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/assessments` | List assessments | No | 🔲 TODO |
| GET | `/assessments/:id` | Get assessment details | No | 🔲 TODO |
| POST | `/assessments/submit` | Submit code for execution | Yes | 🔲 TODO |
| GET | `/assessments/results/:id` | Get submission results | Yes | 🔲 TODO |

---

## Certifications

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/certifications/user/:userId` | Get user's certifications | No | 🔲 TODO |
| POST | `/certifications` | Add a certification | Yes | 🔲 TODO |
| PUT | `/certifications/:id` | Update certification | Yes | 🔲 TODO |
| DELETE | `/certifications/:id` | Remove certification | Yes | 🔲 TODO |

---

## Reviews

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/reviews/project/:projectId` | Get project reviews | No | 🔲 TODO |
| POST | `/reviews` | Submit a review | Yes | 🔲 TODO |
| PUT | `/reviews/:id` | Update a review | Yes | 🔲 TODO |
| DELETE | `/reviews/:id` | Delete a review | Yes | 🔲 TODO |

---

## Teams

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/teams` | List teams | No | 🔲 TODO |
| GET | `/teams/:id` | Get team details | No | 🔲 TODO |
| POST | `/teams` | Create a team | Yes | 🔲 TODO |
| POST | `/teams/match` | Find team matches | Yes | 🔲 TODO |
| POST | `/teams/:id/join` | Join a team | Yes | 🔲 TODO |

---

## GitHub Integration

| Method | Endpoint | Description | Auth | Status |
|--------|----------|-------------|------|--------|
| GET | `/github/repos/:username` | Get user's GitHub repos | Yes | 🔲 TODO |
| GET | `/github/stats/:username` | Get GitHub contribution stats | Yes | 🔲 TODO |
| POST | `/github/connect` | Connect GitHub account | Yes | 🔲 TODO |
