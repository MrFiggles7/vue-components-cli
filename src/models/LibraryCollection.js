
import Bag from './Bag'
import Library from './Library'

function LibraryCollection(){
    this.__proto__ = []; // as of ES6 (2015)
    this.length = 0;

    this.bag = new Bag();

    this.library = new Library(this.bag);

    return this;
}
// current and pre-ES6
LibraryCollection.prototype = [];
LibraryCollection.prototype.constructor = LibraryCollection;

export default LibraryCollection;
