<template>
  <!-- <shopCartVue/> -->
  <!-- <addIncrementVue/> -->
  <datePickerVue/>
  <bootstrapCheckVue/>
  <!-- <excelImportVue/> -->

</template>

<script>
import bootstrapCheckVue from './components/bootstrapCheck.vue';
// import addIncrementVue from './components/addIncrement.vue'
import datePickerVue from './components/datePicker.vue';
// import excelImportVue from './components/excelImport.vue';
// import shopCartVue from "./components/shopCart.vue";
// Injectable service for product data
const ProductService = {
  products: [
    { id: 1, name: 'Apple', price: 1.50 },
    { id: 2, name: 'Orange', price: 0.75 },
  ],
};
export default {
  components: {
    // shopCartVue,
    // addIncrementVue,
    datePickerVue,
    bootstrapCheckVue
    // excelImportVue
  },
  
  provide() {
    return {
      ProductService,
    };
  },
}
</script>