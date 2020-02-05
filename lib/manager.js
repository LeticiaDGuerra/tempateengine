
const managers = class {
    manager(name, email, id) {
        this.name = name
        this.email = email
        this.id = id
    };

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email;
    };

    getId() {
        return this.id;
    };
};

module.exports = managers;