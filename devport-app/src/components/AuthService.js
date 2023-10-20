import axios from "axios";

class AuthService {
    async signUp(githubId, githubToken) {
        try {
            const response = await axios.post("/auth/signup", {
                githubId,
                githubToken,
            });

            if (response.data.access_token) {
                this.saveTokenAndUserId(response.data.access_token, response.data.userId);
            }

            return response.data;
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    saveTokenAndUserId(token, userId) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("userId", userId);
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("userId");
    }

    isAuthenticated() {
        return localStorage.getItem("access_token") !== null;
    }
}

const authService = new AuthService();

export default authService;