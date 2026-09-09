import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all posts
export const fetchPosts = async () => {
  try {
    const response = await api.get("/posts/");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Update post day
export const updatePostDay = async (postId, newDay) => {
  try {
    const response = await api.put(`/posts/${postId}/day`, null, {
      params: {
        day: newDay,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating post day:", error);
    throw error;
  }
};

// Reset posts
export const resetPosts = async () => {
  try {
    const response = await api.post("/posts/reset");
    return response.data;
  } catch (error) {
    console.error("Error resetting posts:", error);
    throw error;
  }
};

// Get stats
export const getStats = async () => {
  try {
    const response = await api.get("/posts/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
};

export default api;