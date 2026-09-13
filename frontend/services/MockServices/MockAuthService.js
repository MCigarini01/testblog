import users from "../../pages/TestPosts/MockUserData.js";

export default class MockAuthSerices {

    login(email, password) {

        const user = users.find(
            user =>
                user.email === email &&
                user.passwordHash === password
        );

        if (!user) {
            throw new Error(
                "Email o password non validi"
            );
        }

        return user;
    }
    register(username, email, password) {

        const existingUser = users.find(
            user =>
                user.email === email ||
                user.username === username
        );

        if (existingUser) {
            throw new Error(
                "Utente già registrato"
            );
        }

        const newUser = {
            id: users.length + 1,
            username,
            email,
            passwordHash: password,
            role: "Editor"
        };

        users.push(newUser);

        return {
            token: "mock-token",
            user: newUser
        };
    }



}