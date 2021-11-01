<template>
    <div class="podcast">
        <h3 class="card-title">{{item.trackName}}</h3>
        <p class="card-text">Host: {{item.artist}}</p>
        <p class="card-text">Media Type: {{item.kind}}</p>
    </div>
</template>

<script>
    import {Podcast} from '../models/LibraryItems'
    export default {
        name: "Podcast",
        props: {
            item: Podcast
        },
    }
</script>

<style scoped>

</style>
