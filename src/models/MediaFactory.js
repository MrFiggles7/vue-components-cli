import {Album, Book, Movie, Music} from "./LibraryItems";

function MediaFactory() {

    this.create = function(item){
        if(item.kind === 'song' ||
            item.kind === 'mix' ||
            item.kind === 'music-video' ||
            item.kind === 'album' ||
            item.kind === 'music-track' ||
            item.kind === 'music-artist'
        ){
            return new Music(
                item.artistName,
                item.trackName,
                item.collectionName,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'song' ||
            item.kind === 'mix' ||
            item.kind === 'music-video' ||
            item.kind === 'album' ||
            item.kind === 'music-track' ||
            item.kind === 'music-artist'
        ){
            return new Movie(
                item.artistName,
                item.trackName,
                item.collectionName,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'song' ||
            item.kind === 'mix' ||
            item.kind === 'music-video' ||
            item.kind === 'album' ||
            item.kind === 'music-track' ||
            item.kind === 'music-artist'
        ){
            return new Book(
                item.artistName,
                item.trackName,
                item.collectionName,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'song' ||
            item.kind === 'mix' ||
            item.kind === 'music-video' ||
            item.kind === 'album' ||
            item.kind === 'music-track' ||
            item.kind === 'music-artist'
        ){
            return new Album(
                item.artistName,
                item.trackName,
                item.collectionName,
                item.artworkUrl100,
                item.kind
            );
        }

    }
}

export default MediaFactory;
