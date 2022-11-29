<template>
  <v-app>
    <v-app-bar app color="white">
      <v-container class="py-0 fill-height">
        <a href="/">
          <img
            class="pt-2"
            src="./assets/logo-colorful.png"
            alt="Logo"
            height="48.5"
          >
        </a>

        <v-spacer />

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          />
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container class="">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app />
  </v-app>
</template>
