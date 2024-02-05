<template>
  <v-container>
      <v-col cols="4">
        <base-date-picker 
            :label="'Select Date'"
            v-model="startDate"
            :selectedDate="startDate"
            @onUpdate:modelValue="changedDate"
            color="success">
        </base-date-picker>
      </v-col>
  </v-container>
</template>

<script>
import BaseDatePicker from '../components/BaseDatePicker.vue';
  export default {
    components: {
    BaseDatePicker,
  },
  data() {
    return {
      startDate: new Date(),
    };
  },
  watch: {},
  methods: {
    changedDate(date){
      // this.startDate = date;
     console.log('date', date);
    }
  },
  mounted(){}
  }
</script>