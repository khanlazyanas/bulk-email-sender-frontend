// This is a centralized API client structure for the Hono backend.
// In a real scenario, this would use fetch or axios to call endpoints.

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export const apiClient = {
  get: async (endpoint: string) => {
    console.log(`Mock GET call to: ${BASE_URL}${endpoint}`);
    return { success: true, data: [] };
  },
  
  post: async (endpoint: string, payload: any) => {
    console.log(`Mock POST call to: ${BASE_URL}${endpoint}`, payload);
    return { success: true, message: "Operation successful" };
  }
};