// UserService.js

export default class UserService {

    constructor(apiService) {

        this.apiService =
            apiService;
    }

    getAllUsers() {

        return this.apiService.get(
            "/users"
        );
    }

    getUserById(
        userId
    ) {

        return this.apiService.get(
            `/users/${userId}`
        );
    }

    createUser(
        userData
    ) {

        return this.apiService.post(
            "/users",
            userData
        );
    }

    updateUser(
        userData
    ) {

        return this.apiService.put(
            `/users/${userData.id}`,
            userData
        );
    }

    deleteUser(
        userId
    ) {

        return this.apiService.delete(
            `/users/${userId}`
        );
    }

    /*
    * PROMOZIONE UTENTE AD ADMIN
    */
    promoteToAdmin(
        userId
    ) {
        return this.apiService.put(
            `/users/${userId}/promote`,
            {}
        );
    }
    
}