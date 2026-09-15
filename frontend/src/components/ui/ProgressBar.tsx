/**
 * ProgressBar Component
 *
 * Displays a skill proficiency level as a colored progress bar.
 * Used in skill profiles to show progress (e.g., Python 82%).
 *
 * TODO: Add color variants based on proficiency level
 * TODO: Add animation on mount
 */

export default function ProgressBar({
  label,
  value,
  maxValue = 100,
}: {
  label: string;
  value: number;
  maxValue?: number;
}) {
  const percentage = Math.min(Math.round((value / maxValue) * 100), 100);

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
