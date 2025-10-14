import axios from "axios";

// Create axios instance with default configuration
export const api = axios.create({
  baseURL: process.env.VITE_API_BASE_URL || "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// API functions
export const sendContactForm = async (formData) => {
  try {
    const response = await api.post("/contact-us", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post("/newsletter", { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPortfolioItems = async (filters = {}) => {
  try {
    const response = await api.get("/portfolio", { params: filters });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
