// AuthService.js

export default class AuthService {

    constructor(apiService) {
        this.apiService = apiService;
    }

    async login(username, password) {
        return await this.apiService.post(
            "/login",
            {
                username,
                password
            }
        );
    }

    async logout() {
        return await this.apiService.post(
            "/logout"
        );
    }
}