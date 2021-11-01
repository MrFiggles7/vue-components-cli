<template>
    <div class="music-video">
        <h3 class="card-title">{{item.trackName}}</h3>
        <p class="card-text">Artist: {{item.artist}}</p>
        <p class="card-text">Media Type: {{item.kind}}</p>
    </div>
</template>

<script>
    import {MusicVideo} from '../models/LibraryItems'
    export default {
        name: "MusicVideo",
        props: {
            item: MusicVideo
        },
    }
</script>

<style scoped>

</style>
