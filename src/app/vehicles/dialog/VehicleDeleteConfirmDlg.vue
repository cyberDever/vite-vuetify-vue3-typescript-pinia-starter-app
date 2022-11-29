<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
    dialogOpen: {
      type: Boolean,
      default: false,
    },
  },

  setup (props, { emit }) {
    const dialog = ref<boolean>(props.dialogOpen)

    return {
      dialog,

      cancelDelete: () => emit('cancelDelete'),
      confirmDelete: () => emit('confirmDelete'),
    }
  },
})
</script>

<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5">
        Confirm
      </v-card-title>

      <v-card-text>Are you sure you want to delete this item?</v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="green darken-1"
          text
          @click="cancelDelete"
        >
          cancel
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="confirmDelete"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
