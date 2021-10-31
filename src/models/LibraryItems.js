function LibraryItem(media, removeFunction, addToBagFunction, qty){
    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
        this.qty++;
    }

    media.checkOut = function(){
        if(this.qty > 0){
            this.qty--;
        }
        if(this.qty <= 0){
            this.status = STATUSES.CHECKED_OUT;
        }
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }

    media.remove = removeFunction || function(){};

    media.addToBag = addToBagFunction || function(){};

    media.qty = qty || 1;

    return media;
}

function Book(title, pages){
    this.pages = pages;
    this.title = title || 'Default Title';
    this.id = Math.floor(Math.random() * 10e16);
}

// same as above using class syntax
class Movie{
    constructor(title, runningTime){
        this.runningTime = runningTime;
        this.title = title || 'Default Title';
        this.id = Math.floor(Math.random() * 10e16);
    }
}

function Album(title, artist, trackCount){
        this.title = title;
        this.artist = artist;
        this.trackCount = trackCount;
        this.id = Math.floor(Math.random() * 10e16);
}

function Music(artistName, trackName, collectionName, artworkUrl100, kind){
    this.artist = artistName;
    this.trackName = trackName;
    this.collectionName = collectionName;
    this.image = artworkUrl100;
    this.kind = kind;
}

export {LibraryItem, Book, Movie, Album, Music}
