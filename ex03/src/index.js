class Person {
    constructor()

    static display() {
        return "Static method is invoked from Person class";
    }
    show = display() {
        return "Static method is invoked from Person class";
    };

var message = new Person();
message.show();
module.exports = Person;