<script lang="ts">
import { ref, defineComponent } from 'vue'

import AddVehiclesBulkVIN from './AddVehiclesBulkVIN.vue'
import AddVehiclesManualEntry from './AddVehiclesManualEntry.vue'
import AddVehiclesSingleVIN from './AddVehiclesSingleVIN.vue'

interface AddOption {
  value: string
  title: string
}

export default defineComponent({
  components: {
    AddVehiclesBulkVIN,
    AddVehiclesManualEntry,
    AddVehiclesSingleVIN,
  },

  setup () {
    const addOptions = ref<AddOption[]>([
      {
        value: 'AddVehiclesSingleVIN',
        title: 'Single VIN',
      },
      {
        value: 'AddVehiclesBulkVIN',
        title: 'Bulk VIN',
      },
      {
        value: 'AddVehiclesManualEntry',
        title: 'Manual Entry',
      },
    ])

    const currentAddOption = ref<string>(addOptions.value[0].value)

    return {
      addOptions,
      currentAddOption,
    }
  },
})
</script>

<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>1. Add Vehicle</v-toolbar-title>

      <template #extension>
        <v-tabs v-model="currentAddOption" fixed-tabs>
          <v-tab
            v-for="option of addOptions"
            :key="option.value"
            class="font-weight-bold"
          >
            {{ option.title }}
          </v-tab>
        </v-tabs>

        <v-divider />
      </template>
    </v-toolbar>

    <v-divider />

    <v-tabs-items v-model="currentAddOption">
      <v-tab-item v-for="option of addOptions" :key="option.value">
        <AddVehiclesSingleVIN v-if="option.value === 'AddVehiclesSingleVIN'" />
        <AddVehiclesBulkVIN v-if="option.value === 'AddVehiclesBulkVIN'" />
        <AddVehiclesManualEntry
          v-if="option.value === 'AddVehiclesManualEntry'"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
