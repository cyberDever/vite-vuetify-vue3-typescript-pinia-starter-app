<script lang="ts">
import { defineComponent } from 'vue'

import ActiveVehicles from './ActiveVehicles.vue'
import SingleLookupFormVue from './forms/SingleLookupForm.vue'

export default defineComponent({
  components: {
    ActiveVehicles,
    SingleLookupFormVue,
  },

  setup () {
    return {}
  },
})
</script>

<template>
  <v-card class="pa-5">
    <div class="body-1 mb-5">
      Enter a VIN and we'll use our data partner to search for your vehicle.
    </div>

    <SingleLookupFormVue />

    <div class="caption mb-5 grey--text lighten-1">
      To make changes to the vehicles below, expand the row of the vehicle you
      wish to edit.
    </div>

    <ActiveVehicles />
  </v-card>
</template>
