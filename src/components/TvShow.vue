<template>
    <div class="tv-show">
        <h3 class="card-title">{{item.collection}}</h3>
        <p class="card-text">Artist: {{item.artist}}</p>
        <p class="card-text">Description: {{item.description}}</p>
        <p class="card-text">Media Type: {{item.kind}}</p>
    </div>
</template>

<script>
    import {TvShow} from '../models/LibraryItems'
    export default {
        name: "TvShow",
        props: {
            item: TvShow
        },
    }
</script>

<style scoped>

</style>
