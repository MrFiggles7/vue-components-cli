<template>
    <div class="music">
        <h3 class="card-title">{{item.trackName}}</h3>
        <p class="card-text">Artist: {{item.artist}}</p>
        <p class="card-text">Collection: {{item.collectionName}}</p>
        <p class="card-text">Media Type: {{item.kind}}</p>
    </div>
</template>

<script>
    import {Music} from '../models/LibraryItems'
    export default {
        name: "Music",
        props: {
            item: Music
        },
    }
</script>

<style scoped>

</style>
