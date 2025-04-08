import { create } from "zustand";
import axios from "axios";

const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:5000/api/auth" : "/api/auth";

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
            const response = await axios.post(`${API_URL}/signup`, { email, password, name });
            if(!response.data.success){
                set({error: response.data.message, isLoading: false})
                return false;
            }
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
            return true;
        } catch (error) {
            set({ error: error.response.data.message || "Error signing up", isLoading: false });
            return false;
        }
    },

    verifyEmail: async (code) => {
        set({isLoading: true, error: null}); 
        try {
            const response = await axios.post(`${API_URL}/verify-email`, { code });
            if(!response.data.success){
                set({error: response.data.message, isLoading: false})
                return false;
            }
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
            return true;
        } catch (error) {
            set({ error: error.response.data.message || "Error verifying email", isLoading: false });
            return false
        }
    }
}))