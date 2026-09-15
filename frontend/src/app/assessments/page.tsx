/**
 * Assessments Page
 *
 * Lists available coding challenges and past submissions.
 *
 * Features to implement:
 *   - Assessment list with difficulty tags (easy/medium/hard)
 *   - Filter by language, difficulty
 *   - Start assessment button → opens code editor
 *   - Past submissions with results
 *   - Leaderboard (optional)
 *
 * Code execution powered by Piston API:
 *   https://emkc.org/api/v2/piston
 *
 * @owner Team Member 5 — Coding Assessments
 */

export default function AssessmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Coding Assessments</h1>
        <div className="card">
          <p className="text-gray-500 text-center py-8">Assessments coming soon...</p>
        </div>
      </div>
    </div>
  );
}
