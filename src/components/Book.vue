<template>
    <div class="book">
        <h3 class="card-title">{{item.collectionName}}</h3>
        <p class="card-text">Author: {{item.artist}}</p>
        <p class="card-text">Description: {{item.description}}</p>
        <p class="card-text">Media Type: {{item.kind}}</p>
    </div>
</template>

<script>
    import {Book} from '../models/LibraryItems'
    export default {
        name: "Book",

        props: {
            item: Book
        },
    }
</script>

<style scoped>

</style>
