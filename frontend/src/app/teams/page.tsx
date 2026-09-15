/**
 * Teams Page
 *
 * Displays team listings and matching.
 *
 * Features to implement:
 *   - Browse teams list
 *   - Create team form
 *   - Find matching teams (based on skills)
 *   - Team detail cards with members and required skills
 *   - Join/leave team actions
 *
 * @owner Team Member 7 — Teams & Dashboard
 */

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
          <button className="btn-primary">+ Create Team</button>
        </div>
        <div className="card">
          <p className="text-gray-500 text-center py-8">Teams coming soon...</p>
        </div>
      </div>
    </div>
  );
}
