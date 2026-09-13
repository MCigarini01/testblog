// TagModel.js

export default class TagModel {

    constructor(
        id,
        name
    ) {

        this.id =
            id;

        this.name =
            name;
    }

    getId() {

        return this.id;
    }

    setId(
        id
    ) {

        this.id =
            id;
    }

    getName() {

        return this.name;
    }

    setName(
        name
    ) {

        this.name =
            name;
    }

    toJSON() {

        return {

            id:
                this.id,

            name:
                this.name
        };
    }
}