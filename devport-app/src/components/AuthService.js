import axios from "axios";

class AuthService {
    async signUp(githubId, githubToken) {
        try {
            const response = await axios.post("/auth/signup", {
                githubId,
                githubToken,
            });

            if (response.data.accessToken) {
                this.saveTokenAndUserId(response.data.accessToken, response.data.userId);
            }

            return response.data;
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    async signUpWithGitHub(code) {
        try {
            const response = await axios.post("https://github.com/login/oauth/access_token",
                {
                    client_id: "1fd118e40106ec604d26",
                    client_secret: "8d23219c25b42e0077bdff4adb53e7080f7434eb",
                    code: code,
                },
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
    
            // Check if the response contains an access_token
            if (response.data.accessToken) {
                return response.data.accessToken;
            } else {
                throw new Error("Access token not found in the response.");
            }
        } catch (error) {
            console.error("Error signing up with GitHub:", error);
            throw error; // Re-throw the error for further handling in the calling function.
        }
    }

    saveTokenAndUserId(accessToken, userId) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", userId);
    }

    logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
    }

    isAuthenticated() {
        return localStorage.getItem("accessToken") !== null;
    }
}

const authService = new AuthService();

export default authService;