/**
 * Projects Page
 *
 * Displays the user's project portfolio.
 *
 * Features to implement:
 *   - Project grid/list view
 *   - Filter by tech stack, status
 *   - Add new project button
 *   - Project cards with thumbnail, title, tech stack
 *   - Links to live demo and GitHub repo
 *
 * @owner Team Member 3 — Project Portfolio
 */

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <button className="btn-primary">+ New Project</button>
        </div>
        <div className="card">
          <p className="text-gray-500 text-center py-8">No projects yet. Create your first project!</p>
        </div>
      </div>
    </div>
  );
}
