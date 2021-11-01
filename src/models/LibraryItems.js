function LibraryItem(media, removeFunction, addToBagFunction, qty){

    // list of possible values (enum)
    const STATUSES = {CHECKED_OUT: 'out', CHECKED_IN: 'in', LOST: 'lost'}

    // decorating/adding functionality to an existing object
    media.status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.CHECKED_IN;
    }

    media.remove = removeFunction || function(){};

    media.addToBag = addToBagFunction || function(){};

    media.qty = qty || 1;

    return media;
}

// same as above using class syntax
class Movie{
    constructor(trackName, artist, kind){
        this.title = trackName;
        this.artist = artist || 'Default Title';
        this.kind = kind;
        this.id = Math.floor(Math.random() * 10e16);
    }
}

function Music(artistName, trackName, collectionName, artworkUrl100, kind){
    this.artist = artistName;
    this.trackName = trackName;
    this.collectionName = collectionName;
    this.image = artworkUrl100;
    this.kind = kind;
    this.id = Math.floor(Math.random() * 10e16);
}

function Podcast(artistName, trackName, artworkUrl100, kind){
    this.artist = artistName;
    this.trackName = trackName;
    this.image = artworkUrl100;
    this.kind = kind;
    this.id = Math.floor(Math.random() * 10e16);
}
function MusicVideo(artistName, trackName, artworkUrl100, kind){
    this.artist = artistName;
    this.trackName = trackName;
    this.image = artworkUrl100;
    this.kind = kind;
    this.id = Math.floor(Math.random() * 10e16);
}

function Book(artistName, collectionName, description, artworkUrl100, kind){
    this.artist = artistName;
    this.collection = collectionName;
    this.description = description
    this.image = artworkUrl100;
    this.kind = kind;
    this.id = Math.floor(Math.random() * 10e16);
}
function TvShow(artistName, collectionName, trackName, shortDescription, artworkUrl100, kind){
    this.artist = artistName;
    this.collection = collectionName;
    this.trackName = trackName,
    this.description = shortDescription
    this.image = artworkUrl100;
    this.kind = kind;
    this.id = Math.floor(Math.random() * 10e16);
}

function Software(description, supportedDevices){
    this.description = description;
    this.supportedDevices = supportedDevices;
    this.id = Math.floor(Math.random() * 10e16);
}

function All(artistName, kind){
    this.artist = artistName;
    this.kind = kind;
    this.id = Math.floor(Math.random() * 10e16);
}

export {LibraryItem, Movie, Music, Podcast, MusicVideo, Book, TvShow, Software, All}
