// This is a placeholder for global state management (e.g., Zustand or Redux).
// It tracks if the user is authenticated globally.

export const useAuthStore = () => {
  return {
    isAuthenticated: true,
    user: {
      id: "u_123",
      name: "Admin User",
      email: "admin@workspace.com",
    },
    logout: () => console.log("User logged out"),
  };
};