<script lang="ts">
import { computed, defineComponent } from 'vue'

import ActiveVehicleItem from './ActiveVehicleItem.vue'
import { useVehicleStore } from '@/stores/vehicle'

import type { Vehicle } from '@/domain/vehicle/Vehicle.Model'
import type { ComputedRef } from 'vue'

export default defineComponent({
  components: {
    ActiveVehicleItem,
  },

  setup () {
    const vehicleStore = useVehicleStore()

    const vehicles: ComputedRef<Vehicle[]> = computed(
      () => vehicleStore.getVehicles,
    )

    return {
      vehicles,
    }
  },
})
</script>

<template>
  <div>
    <div class="font-weight-black grey--text lighten-1 mb-1 text-uppercase">
      Active Vehicles: {{ vehicles.length }}
    </div>

    <ActiveVehicleItem
      v-for="(vehicle, index) of vehicles"
      :key="index"
      :vehicle="vehicle"
      :index="index"
    />
  </div>
</template>
