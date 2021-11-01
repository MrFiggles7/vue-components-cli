<template>
    <div class="software">
        <h3 class="card-title">Description: {{item.description}}</h3>
        <p class="card-text">Supported Devices: {{item.supportedDevices}}</p>
    </div>
</template>

<script>
    import {Software} from '../models/LibraryItems'
    export default {
        name: "Software",
        props: {
            item: Software
        },
    }
</script>

<style scoped>

</style>

