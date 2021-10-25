<template>
    <v-container>
        <v-row>
            <v-col>
                <LibraryItem v-for="(item, i) in bag" :item="item" :key="i"></LibraryItem>
            </v-col>
            <v-col>
                <v-container>
                    <p class="text-h2">Bag: {{bag.length}}</p>
                    <v-btn @click="bag.checkOut(bag)">Check Out Bag</v-btn>
                </v-container>
            </v-col>
        </v-row>


    </v-container>
</template>

<script>
    import LibraryItem from "./LibraryItem";

    export default {
        name: "Bag",

        props:{
            bag: Object,
        },

        components: {
            LibraryItem
        },
    }
</script>

<style scoped>

</style>
