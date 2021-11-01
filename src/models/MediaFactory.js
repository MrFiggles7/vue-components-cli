import {Movie, Music, Podcast, MusicVideo, Book, TvShow, Software, All} from "./LibraryItems";

function MediaFactory() {

    this.create = function(item){
        if(item.kind === 'song' ||
            item.kind === 'mix' ||
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
        else if(item.kind === 'movie' ||
            item.kind === 'feature-movie'
        ){
            return new Movie(
                item.trackName,
                item.artistName,
                item.kind
            );
        }
        else if(item.kind === 'podcast' ||
            item.kind === 'podcast-author'
        ){
            return new Podcast(
                item.artistName,
                item.trackName,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'music-video'
        ){
            return new MusicVideo(
                item.artistName,
                item.trackName,
                item.trackTime,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'audiobook' ||
            item.kind === 'ebook'
        ){
            return new Book(
                item.artistName,
                item.collectionName,
                item.description,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'tv-episode' ||
            item.kind === 'tv-season'
        ){
            return new TvShow(
                item.artistName,
                item.collectionName,
                item.trackName,
                item.shortDescription,
                item.artworkUrl100,
                item.kind
            );
        }
        else if(item.kind === 'software' ||
            item.kind === 'i-pad-software' ||
            item.kind === 'mac-software'
        ){
            return new Software(
                item.description,
                item.supportedDevices
            );
        }
        else{
            return new All(
                item.artistName,
                item.kind
            )
        }

    }
}

export default MediaFactory;
