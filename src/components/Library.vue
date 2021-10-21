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
    import LibraryCollection from "../models/Library";
    import {Book, Movie, Album} from '../models/LibraryItems';
    import LibraryItem from "./LibraryItem";
    export default {
        name: "Library",
        components: {
            LibraryItem
        },
        data() {
            return {
                library: new LibraryCollection()
                    .addItem(new Book('Interaction Design', 200))
                    .addItem(new Movie('Paw Patrol!', 78))
                    .addItem(new Movie('Harriet', 122))
                    .addItem(new Book('Brown Bear, Brown Bear', 0))
                    .addItem(new Album('Awaken, My Love!', 'Childish Gambino', 11))
            }
        },
    }
</script>

<style scoped>

</style>
