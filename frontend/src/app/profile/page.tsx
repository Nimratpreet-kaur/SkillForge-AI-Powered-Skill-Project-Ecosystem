/**
 * Profile Page
 *
 * Displays user profile with skill progress bars.
 *
 * Features to implement:
 *   - User info (name, avatar, bio)
 *   - Skill list with progress bars (e.g., Python 82%, React 74%)
 *   - Edit profile button
 *   - GitHub stats section
 *   - Certifications showcase
 *
 * @owner Team Member 2 — Skill Profiles
 */

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
        <div className="card mb-6">
          <h2 className="font-semibold text-gray-800">👤 User Info</h2>
          <p className="text-sm text-gray-500 mt-2">Profile details coming soon...</p>
        </div>
        <div className="card">
          <h2 className="font-semibold text-gray-800">📊 Skills</h2>
          <p className="text-sm text-gray-500 mt-2">Skill progress bars coming soon...</p>
        </div>
      </div>
    </div>
  );
}
