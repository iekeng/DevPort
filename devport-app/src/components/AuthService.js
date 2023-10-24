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

    async signUpWithGithub(code) {
        try {
            const response = await axios.post("https://github.com/login/oauth/access_token", {
                client_id: "1fd118e40106ec604d26",
                client_secret: "8d23219c25b42e0077bdff4adb53e7080f7434eb",
                code: code,
        }, {
            headers: {
                Accept: "application/json",
            }
        });
        console.log("response", response);
        
    }
        catch (error) {
            console.error("Error signing up with Github:", error);
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