import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/iconsets/mdi";


const vuetify = createVuetify({
  components: {
    ...components,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
// Provide ProductService at the root level
const ProductService = {
  products: [
    { id: 1, name: 'Apple', price: 1.50 },
    { id: 2, name: 'Orange', price: 0.75 },
  ],
};
App.provide('ProductService', ProductService);


const app = createApp(App);

app.use(vuetify);
app.mount("#app");
