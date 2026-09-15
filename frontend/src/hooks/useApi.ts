/**
 * Custom Hooks
 *
 * Reusable React hooks for the SkillForge app.
 * Add custom hooks here as features are built.
 *
 * Planned hooks:
 *   - useApi: Generic hook for API calls with loading/error state
 *   - useDebounce: Debounce input values
 *   - useLocalStorage: Persist state to localStorage
 */

import { useState, useCallback } from 'react';

/**
 * useApi — Generic hook for handling API calls with loading and error states.
 *
 * Usage:
 *   const { data, loading, error, execute } = useApi(apiFunction);
 *   execute(param1, param2);
 */
export function useApi<T, Args extends unknown[]>(
  apiFunction: (..._args: Args) => Promise<T>,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (..._args: Args) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction(..._args);
        setData(result);
        return result;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'An error occurred';
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction],
  );

  return { data, loading, error, execute };
}

export default useApi;
