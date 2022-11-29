<script lang="ts">
import { ref, defineComponent } from 'vue'

import { useVehicleStore } from '@/stores/vehicle'

import type { VForm } from 'vuetify/lib'

export default defineComponent({
  setup () {
    const enterVIN = ref<string>('')
    const loadingForm = ref<boolean>(false)
    const lookupFormRef = ref<typeof VForm>()
    const errorMessage = ref<string>('')

    const vehicleStore = useVehicleStore()

    const lookupVehicle = async (): Promise<void> => {
      // @ts-ignore
      const validate = lookupFormRef.value?.validate()
      errorMessage.value = ''

      if (validate) {
        const isExist = vehicleStore.getVehicles.findIndex((vehicle) => vehicle.VIN === enterVIN.value) > -1

        if (isExist) errorMessage.value = 'You already found the current vehicle! Lookup another VIN.'
        else {
          loadingForm.value = true
          await vehicleStore.addVehicles(enterVIN.value)
          loadingForm.value = false
        }
      }
    }

    const lookupRules = [
      (value: string) => !!value || 'Required.',
      (value: string) => (value || '').length >= 6 || 'Min 6 characters',
    ]

    return {
      validForm: true,
      enterVIN,
      lookupRules,
      lookupFormRef,
      loadingForm,
      errorMessage,

      lookupVehicle,
    }
  },
})
</script>

<template>
  <v-form
    ref="lookupFormRef"
    v-model="validForm"
    lazy-validation
    @submit.prevent="lookupVehicle"
  >
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="enterVIN"
          class=""
          label="Enter VIN"
          :rules="lookupRules"
          required
        />
      </v-col>

      <v-col cols="12 d-flex flex-row-reverse">
        <v-btn
          :loading="loadingForm"
          :disabled="loadingForm"
          color="primary font-weight-bold"
          type="submit"
        >
          Lookup Vehicle
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="errorMessage" class="d-flex flex-row-reverse mt-0 pr-3">
      <div class="red--text caption">
        {{ errorMessage }}
      </div>
    </v-row>
  </v-form>
</template>
