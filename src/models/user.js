class User{
    constructor({ id, type, attributes = {} }) {
        this.id = id;
        this.type = type;

        this.username = attributes.username;
        this.email = attributes.email;
        this.imageUrl = attributes.image_url;
    }
}

module.exports = User;