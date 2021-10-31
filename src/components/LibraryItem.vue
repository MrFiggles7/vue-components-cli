<template>
    <v-card elevation="2" :class="item.isAvailable() ? 'border-green' : 'border-red'" style="border-width: 3px;" class="mt-2">
        <!--                <h3 class="card-title">{{item.title}}</h3>-->
        <!--                <p class="card-text" v-if="item.constructor.name == 'Book'">Pages: {{item.pages}}</p>-->
        <!--                <p class="card-text" v-if="item.runningTime">Running Time: {{item.runningTime}}</p>-->
        <div class="v-card__title">
            <component :is="typeOfItem" :item="item"></component>
        </div>
        <div class="v-card__subtitle text-h5">Qty: {{item.qty}}</div>
        <div class="v-card__actions">
            <v-btn :disabled="item.qty <= 0" @click="item.checkOut()" class="btn btn-secondary">Check Out</v-btn>
            <v-btn @click="item.checkIn()" class="btn btn-secondary">Check In</v-btn>
            <v-btn @click="item.remove()" class="btn btn-warning">Remove Me</v-btn>
            <v-btn :disabled="item.qty <= 0" @click="item.addToBag()" class="btn btn-primary">Add To Bag</v-btn>
        </div>
    </v-card>
</template>

<script>
    import Book from '../components/Book';
    import Movie from "./Movie";
    import Album from "./Album";
    import Music from './Music';
    export default {
        name: "LibraryItem",

        components: {
            Book,
            Movie,
            Album,
            Music
        },

        props: {
            item: Object
        },

        computed: {
            typeOfItem(){
                return this.item.constructor.name;
            }
        },
    }
</script>

<style scoped>
    .v-application .border-green{
        box-shadow: 0px 3px 1px -2px green, 0px 2px 2px 0px green, 0px 1px 5px 0px green !important
    }

    .v-application .border-red{
        box-shadow: 0px 3px 1px -2px red, 0px 2px 2px 0px red, 0px 1px 5px 0px red !important
    }
</style>

