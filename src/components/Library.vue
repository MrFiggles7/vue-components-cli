<template>
    <v-container>
        <v-row>
            <v-col>
                <LibraryItem v-for="(item, i) in library" :item="item" :key="i"></LibraryItem>
            </v-col>
            <v-col>
                <v-container>
                    <p class="text-h2">Checked out: {{library.checkedOutItems().length}}</p>
                </v-container>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>
    import LibraryItem from "./LibraryItem";
    export default {
        name: "Library",

        props:{
          library: Object,
        },
        components: {
            LibraryItem
        },
    }
</script>

<style scoped>

</style>
