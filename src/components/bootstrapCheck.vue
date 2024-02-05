<template>
  <div class="Overview">
          <b-form-group label="Select flow" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          buttons
          button-variant="primary"
          size="lg"
          name="buttons-2"
        ></b-form-checkbox-group>
      </b-form-group>
      <h5>3uy4fb4iubi3ufi34bfi3bfi3fbiu</h5>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "F1_Water",
      options: [
        { value: "F1_Water", text: "Water" },
        { value: "F1_Clean", text: "Cleaning solution" },
        { value: "F1_None", text: "None" }
      ]
    };
  }
};
</script>

<style>
.active {
  background: rgb(243, 16, 0) !important;
}
</style>
