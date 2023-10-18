import axios from "axios";

class AuthService {
    async signUp(githubId, githubToken) {
        try {
            const response = await axios.post("/auth/signup", {
                githubId,
                githubToken,
            });

            if (response.data.access_token) {
                this.saveToken(response.data.access_token);
            }

            return response.data;
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    saveToken(token) {
        localStorage.setItem("access_token", token);
    }

    logout() {
        localStorage.removeItem("access_token");
    }

    isAuthenticated() {
        return localStorage.getItem("access_token") !== null;
    }
}

const authService = new AuthService();

export default authService;