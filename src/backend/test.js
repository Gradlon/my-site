function _define_property(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : obj[key] = value, obj;
}
class User {
    getDetails() {
        return `${this.name} (${this.email}) - Role: ${this.role}`;
    }
    constructor({ id, name, email, role }){
        _define_property(this, "id", void 0), _define_property(this, "name", void 0), _define_property(this, "email", void 0), _define_property(this, "role", void 0), this.id = id, this.name = name, this.email = email, this.role = role;
    }
}
class UserFactory {
    static createUser(options) {
        return new User({
            id: options.id || Date.now(),
            name: options.name || 'Anonymous',
            email: options.email || 'unknown@example.com',
            role: options.role || 'guest'
        });
    }
}
const adminUser = UserFactory.createUser({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin'
}), guestUser = UserFactory.createUser({
    name: 'Jane Doe'
});
console.log(adminUser.getDetails()), console.log(guestUser.getDetails());
