<script lang="ts">
import { ref, defineComponent } from 'vue'

import VehicleDeleteConfirmDlg from './dialog/VehicleDeleteConfirmDlg.vue'
import { useVehicleStore } from '@/stores/vehicle'

import type { Vehicle } from '@/domain/vehicle/Vehicle.Model'

export default defineComponent({
  components: {
    VehicleDeleteConfirmDlg,
  },

  props: {
    index: {
      type: Number,
      required: true,
    },

    vehicle: {
      type: Object as () => Vehicle,
      required: true,
    },
  },

  setup (props) {
    const number = ref<number>(props.index)
    const vehicleData = ref<Vehicle>(props.vehicle)
    const showDetails = ref<boolean>(false)
    const deleteConfirmDlgOpen = ref<boolean>(false)
    const snackbar = ref<boolean>(false)
    const snackbarText = ref<string>('')

    const vehicleStore = useVehicleStore()

    const deleteVehicle = (): void => {
      vehicleStore.deleteVehicle(props.vehicle.VIN)
    }

    return {
      number,
      vehicleData,
      deleteConfirmDlgOpen,
      showDetails,
      snackbar,
      snackbarText,

      deleteVehicle,
    }
  },
})
</script>

<template>
  <v-card outlined elevation="3">
    <v-card-title color="white" @click.prevent.self="showDetails = !showDetails">
      <div :key="number" class="body-1 text-uppercase">
        {{ `${number + 1}. ${vehicleData.VIN}` }}
      </div>

      <v-spacer />

      <v-btn text color="primary" @click="deleteConfirmDlgOpen = true">
        <div class="font-weight-bold">
          Delete
        </div>
      </v-btn>

      <v-btn icon @click="showDetails = !showDetails">
        <v-icon>
          {{ showDetails ? "mdi-chevron-up" : "mdi-chevron-down" }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-expand-transition>
      <div v-show="showDetails">
        <v-divider />

        <v-card-text>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field class="" label="VIN #" :value="vehicleData.VIN" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field class="" label="Year" :value="vehicleData.year" />
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field class="" label="Make" :value="vehicleData.make" />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="4">
              <v-text-field class="" label="Model" :value="vehicleData.model" />
            </v-col>

            <v-col cols="12" class="d-flex flex-row-reverse">
              <v-btn text color="primary" @click="snackbar = true; snackbarText = 'Save button is clicked.'">
                <div class="font-weight-bold">
                  Save
                </div>
              </v-btn>
              <v-btn text color="grey lighten-1" @click="snackbar = true; snackbarText = 'Cancel button is clicked.'">
                <div class="font-weight-bold">
                  Cancel
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-expand-transition>

    <VehicleDeleteConfirmDlg
      :key="deleteConfirmDlgOpen"
      :dialog-open="deleteConfirmDlgOpen"
      @cancelDelete="deleteConfirmDlgOpen = false"
      @confirmDelete="() => {
        deleteVehicle();
        deleteConfirmDlgOpen = false
      }"
    />

    <v-snackbar v-model="snackbar" :timeout="1000">
      {{ snackbarText }}

      <template #action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card .v-card__title {
  cursor: pointer;
}
.v-card__text {
  background-color: #F2F7FD;
}
</style>
