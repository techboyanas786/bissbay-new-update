/**
 * Generate or retrieve user session ID from localStorage
 * Format: timestamp_randomString (e.g., 1703123456789_abc123def)
 */
export const getUserId = () => {
  const STORAGE_KEY = 'bissbay_user_id';

  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    // Try to get existing user ID
    let userId = localStorage.getItem(STORAGE_KEY);

    if (!userId) {
      // Generate new user ID: timestamp + random string
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 15);
      userId = `${timestamp}_${randomStr}`;

      // Store in localStorage
      localStorage.setItem(STORAGE_KEY, userId);
    }

    return userId;
  } catch (error) {
    // Fallback if localStorage is not available
    console.warn('localStorage not available:', error);
    return `fallback_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
};

/**
 * Clear user session (for testing or privacy)
 */
export const clearUserSession = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('bissbay_user_id');
    } catch (error) {
      console.warn('Could not clear user session:', error);
    }
  }
};

/**
 * Check if user has valid session
 */
export const hasValidSession = () => {
  const userId = getUserId();
  return userId && userId.length > 0;
};