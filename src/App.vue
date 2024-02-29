<template>
  <v-app>
    <!-- Left Sidebar -->
    <v-navigation-drawer app v-model="drawer" color="background" right>
      <!-- Sidebar content goes here -->
      <Drawer />
    </v-navigation-drawer>

    <!-- Top App Bar -->
    <v-app-bar app color="primary" class="white--text">
      <v-toolbar-title>Log Viewer</v-toolbar-title>
      <!-- Add other app bar components as needed -->
      <v-spacer></v-spacer>

      <v-icon class="white--text" @click.stop="drawer = !drawer"
        >fa fa-cog</v-icon
      >
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <!-- Your main content goes here -->
      <v-container fluid fill-height pa-0>
        <!-- Page content goes here -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Persistent Footer -->
    <v-footer app class="d-flex flex-column">
      <div class="">Made with love by @DynamikArray</div>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from '@/components/Drawer/Drawer.vue'
export default {
  name: 'App',
  components: {
    Drawer,
  },
  data: () => ({
    drawer: true,
  }),
}
</script>

<style>
.w-100 {
  width: 100%;
}
</style>
