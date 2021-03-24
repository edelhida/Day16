class Book {
    constructor(title) {
        this._title = "The Little Prince"

    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = "Le Petit Prince";
    }
}
const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince._title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;