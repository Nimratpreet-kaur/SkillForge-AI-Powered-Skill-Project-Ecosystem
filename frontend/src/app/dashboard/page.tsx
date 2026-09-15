/**
 * Dashboard Page
 *
 * Main overview page for authenticated users.
 *
 * Features to implement:
 *   - Skill summary with top skills
 *   - Recent projects
 *   - Assessment scores
 *   - Activity feed
 *   - Quick actions (new project, take assessment, etc.)
 *   - GitHub contribution summary
 *
 * @owner Team Member 7 — Teams & Dashboard
 */

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="font-semibold text-gray-800">📊 Skill Summary</h2>
          <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-gray-800">💼 Recent Projects</h2>
          <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-gray-800">💻 Assessments</h2>
          <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-gray-800">🏆 Certifications</h2>
          <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-gray-800">👥 Teams</h2>
          <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-gray-800">📈 Activity</h2>
          <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
