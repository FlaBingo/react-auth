import { create } from "zustand";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api/auth`;

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      if (!response.data.success) {
        set({ error: response.data.message, isLoading: false });
        return false;
      }
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      return false;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      if (!response.data.success) {
        set({ error: response.data.message, isLoading: false });
        return false;
      }
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      return false;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ error: "Error Logging out", isLoading: false });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      if (!response.data.success) {
        set({ error: response.data.message, isLoading: false });
        return false;
      }
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return true;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      return false;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isAuthenticated: false, isCheckingAuth: false });
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true, error: null, message: null});
    try {
        const response = await axios.post(`${API_URL}/forgot-password`, {email})
        set({message: response.data.message, isLoading: false})
    } catch (error) {
        set({ isLoading: false, error: error.response.data.message || "Error sending reset password email"})
        throw error
    }
  },

  resetPassword: async (token, password) => {
    set({isLoading: true, error: null, message: null})
    try {
      // console.log(password, typeof password)
      const res = await axios.post(`${API_URL}/reset-password/${token}`, {password})
      set({message: res.data.message , isLoading: false})
    } catch (error) {
      set({isLoading: false, error:  error.res.data.message || "Error reseting password"})
      throw error
    }
  }
}));
