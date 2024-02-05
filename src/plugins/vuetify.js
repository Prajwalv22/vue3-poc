import { createVuetify } from "vuetify";
import { VuetifyDateAdapter } from "vuetify/date/adapters/vuetify";

export default createVuetify({
  date: {
    adapter: VuetifyDateAdapter,
  },
});
