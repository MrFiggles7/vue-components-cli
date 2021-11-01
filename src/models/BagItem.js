export default function BagItem(libraryItem, removeFunction) {

    this.libraryItem = libraryItem;

    this.remove = removeFunction || function () {
    };

    this.checkOut = function () {
        this.libraryItem.check();
    }
}
