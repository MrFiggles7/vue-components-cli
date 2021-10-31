import {LibraryItem} from "./LibraryItems";

function Bag(){
    this.__proto__ = []; // as of ES6 (2015)
    this.length = 0;

    this.addToBag = function(item){
        if(item.qty <= 0){
            return this;
        }
        else if(this.includes(item) && item.qty > 0){
            item.qty--;
        }
        else{
            console.log('pushed', item)
            this.push(new LibraryItem(
                item,

                ((collection) => function(){
                    collection.removeItem(this); // "this" refers to the LibraryItem
                })(this), // "this" refers to the array/collection

                ((collection) => function () {
                    collection.addToBag(this);
                })(this),

                item.qty
            ));
            item.qty--;
        }


        // allows us to chain methods
        return this;
    };

    this.checkOut = function (bag) {
        for(var i = 0; i < bag.length; i++){
            bag[i].checkOut();
        }
        bag.length = 0;
    }

    this.removeItem = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return this;
}

export default Bag;
