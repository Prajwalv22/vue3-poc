<template>
  <v-menu v-model="isMenuOpen" ref="menu" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-text-field
        :label="label"
        :model-value="formattedDate"
        v-bind="props"
        hint="MM/DD/YYYY format"
        persistent-hint
        variant="solo"
        @input="enteredValue"
      ></v-text-field>
    </template>
    {{selectedDate}}
    <v-date-picker v-model="selectedDate" hide-actions title="" :color="color">
      <!-- <template v-slot:header></template> -->
    </v-date-picker>
  </v-menu>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits  } from "vue";

const props = defineProps(["label", "color", "modelValue","formattedDate", "selectedDate"]);
const selectedDate = ref(props.selectedDate);
console.log('fomrparent', props.selectedDate);
const emit = defineEmits("update:modelValue");

const isMenuOpen = ref(false);

const formattedDate = computed(() => {
  return selectedDate.value ? selectedDate.value.toLocaleDateString("en") : "";
});

const enteredValue = (val) => {
   try {
    const [month, day, year] = val.target._value.split('/');
    const dateObj = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    selectedDate.value = new Date(dateObj);
    isMenuOpen.value = true;
    // this.$refs.menu.forceUpdate();
  } catch (e) {
    selectedDate.value = new Date();
  }

};
watch(() => props.selectedDate, (newDate) => {
  selectedDate.value = newDate;
});

watch(selectedDate, (newDate) => {
  emit("onUpdate:modelValue", newDate);
});

</script>
<style>
.v-overlay__content:has(> .v-date-picker) {
  min-width: auto!important;
}
.v-picker-title {
  padding: 0 !important;
}
.v-btn__content {
    grid-area: content;
    justify-content: center;
    white-space: nowrap;
    font-size: medium;
}
</style>