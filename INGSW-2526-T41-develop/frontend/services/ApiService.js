// ApiService.js

export default class ApiService {

    static BASE_URL = "http://localhost/api";

    static async get(endpoint) {

        const response = await fetch(
            `${this.BASE_URL}${endpoint}`
        );

        if (!response.ok) {
            throw new Error(
                "Errore durante la richiesta GET"
            );
        }

        return await response.json();
    }

    static async post(endpoint, data) {

        const response = await fetch(
            `${this.BASE_URL}${endpoint}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            throw new Error(
                "Errore durante la richiesta POST"
            );
        }

        return await response.json();
    }

    static async put(endpoint, data) {

        const response = await fetch(
            `${this.BASE_URL}${endpoint}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (!response.ok) {
            throw new Error(
                "Errore durante la richiesta PUT"
            );
        }

        return await response.json();
    }

    static async delete(endpoint) {

        const response = await fetch(
            `${this.BASE_URL}${endpoint}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error(
                "Errore durante la richiesta DELETE"
            );
        }

        return await response.json();
    }

}