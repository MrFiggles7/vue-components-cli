<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>


        <v-text-field
                label="Search"
                hide-details="auto"
                class="shrink"
                v-model="searchTerm"
                v-on:keyup.enter="search"
        ></v-text-field>

        <v-icon>search</v-icon>

    </v-app-bar>

    <v-main>
      <Library :library="library.library"></Library>
      <Bag :bag="library.bag"></Bag>
    </v-main>

  </v-app>
</template>

<script>
import Library from './components/Library';
// import LibraryModel from './models/Library';
import Bag from './components/Bag';
import LibraryCollection from "./models/LibraryCollection";

import MediaFactory from './models/MediaFactory'
import axios from 'axios';

export default {
  name: 'App',

  components: {
    Library,
    Bag,
  },

  computed:{

  },

  data() {


    // let libraryCollection = new LibraryCollection();
    // libraryCollection.library.addItem(new Book('Interaction Design', 200), 3)
    //         .addItem(new Movie('Paw Patrol!', 78), 3)
    //         .addItem(new Movie('Harriet', 122), 1)
    //         .addItem(new Book('Brown Bear, Brown Bear', 0), 4)
    //         .addItem(new Album('Awaken, My Love!', 'Childish Gambino', 11), 2)
    return{
      searchTerm: 'john',
      library: new LibraryCollection(),
      searching: true,
    }

  },

  methods: {
    search() {
      this.library.library.length = 0;

      var mediaFactory = new MediaFactory()

      if(this.searchTerm){



        this.searching = true;

        let url = 'https://itunes.apple.com/search';
        let config = {
          params: {
            term: this.searchTerm,
            media: 'music',
            limit: 10,
          }
        }

        axios.get(url, config)
        .then((response) => {
          console.log('Success', response);
          if(response.data.results.length){
            for(var i = 0; i < response.data.results.length; i++){

              var item = mediaFactory.create(response.data.results[i]);

              this.library.library.addItem(item);
            }
          }
        })
      }
    }


  }
};
</script>
