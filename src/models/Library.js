import {LibraryItem} from './LibraryItems'

function Library(bag){
    this.__proto__ = []; // as of ES6 (2015)

    this.addItem = function(item){
        this.push(new LibraryItem(
            item,

            ((collection) => function(){
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this), // "this" refers to the array/collection

            ((collection) => function () {
                collection.addToBag(this);
            })(bag),
        ));

        // allows us to chain methods
        return this;
    };

    this.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    this.removeItem = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return this;
}


// current and pre-ES6
//LibraryCollection.prototype = [];
//LibraryCollection.prototype.constructor = LibraryCollection;

export default Library;
