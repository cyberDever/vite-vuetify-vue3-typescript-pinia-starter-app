import { defineStore } from 'pinia'

import { decodeVIN } from '@/domain/vehicle/Vehicle.Repository'

import type { Vehicle } from '@/domain/vehicle/Vehicle.Model'

interface State {
  vehicles: Vehicle[]
}

export const useVehicleStore = defineStore({
  id: 'vehicle',

  state: (): State => ({
    vehicles: [],
  }),

  getters: {
    getVehicles: (state) => state.vehicles,
  },

  actions: {
    async addVehicles (vehicleVIN: string) {
      const vehicle = await decodeVIN(vehicleVIN)
      this.vehicles.push(vehicle)
    },

    deleteVehicle (VIN: string) {
      const vehicleIndex = this.vehicles.findIndex((vehicle) => vehicle.VIN === VIN)
      this.vehicles.splice(vehicleIndex, 1)
    },
  },
})
