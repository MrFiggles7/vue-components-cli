import {LibraryItem} from './LibraryItems'

function Library(bag){
    let arr = [];
    //this.__proto__ = []; // as of ES6 (2015)
    this.length = 0;

    arr.addItem = function(item, qty){
        this.push(new LibraryItem(
            item,

            ((collection) => function(){
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this), // "this" refers to the array/collection

            ((collection) => function () {
                collection.addToBag(this);
            })(bag),

            qty
        ));

        // allows us to chain methods
        return this;
    };

    arr.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    arr.removeItem = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}


// current and pre-ES6
//LibraryCollection.prototype = [];
//LibraryCollection.prototype.constructor = LibraryCollection;

export default Library;
