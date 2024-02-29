<template>
  <v-container fill-height fluid pa-0>
    <ChartWrapper />
  </v-container>
</template>

<script>
import ChartWrapper from '@/components/Chart/ChartWrapper/ChartWrapper.vue'

export default {
  name: 'Home',
  components: { ChartWrapper },
}
</script>
