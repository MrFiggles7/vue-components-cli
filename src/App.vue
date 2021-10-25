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

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Library :library="library.library"></Library>
      <Bag :bag="library.bag"></Bag>
    </v-main>

  </v-app>
</template>

<script>
import Library from './components/Library'
import Bag from './components/Bag'
import LibraryCollection from "./models/LibraryCollection";
import {Album, Book, Movie} from "./models/LibraryItems";

export default {
  name: 'App',

  components: {
    Library,
    Bag,
  },

  computed:{

  },

  data() {

    let libraryCollection = new LibraryCollection();
    libraryCollection.library.addItem(new Book('Interaction Design', 200))
            .addItem(new Movie('Paw Patrol!', 78))
            .addItem(new Movie('Harriet', 122))
            .addItem(new Book('Brown Bear, Brown Bear', 0))
            .addItem(new Album('Awaken, My Love!', 'Childish Gambino', 11))
    return{
      library: libraryCollection,
    }

  }
};
</script>
