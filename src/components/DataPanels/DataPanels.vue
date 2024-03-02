<template>
  <div>
    <div class="flexbox">
      <h3 class="text-center">
        AVG RPM:
        <v-divider class="mx-2"></v-divider>
        {{ averageRpm }}
      </h3>
    </div>
    <div class="flexbox">
      <h3 class="text-center">
        AVG Throttle: <v-divider class="mx-2"></v-divider> {{ averageThrottle }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataPanels',

  data() {
    return {}
  },
  computed: {
    averageRpm() {
      return this.$store.getters.averageRpmValue
    },
    averageThrottle() {
      return this.$store.getters.averageThrottleValue
    },
  },
  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  border: 1px solid black;
  margin: 10px;
}
</style>
