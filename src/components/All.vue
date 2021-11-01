<template>
    <div class="tv-show">
        <h3 class="card-title">Artist: {{item.artist}}</h3>
        <p class="card-text">Media Type: {{item.kind}}</p>
    </div>
</template>

<script>
    import {All} from '../models/LibraryItems'
    export default {
        name: "TvShow",
        props: {
            item: All
        },
    }
</script>

<style scoped>

</style>
