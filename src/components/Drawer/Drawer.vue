<template>
  <div class="ma-2text-center">
    <h3 class="text-center text-h6 font-weight-black text-uppercase">
      Settings:
    </h3>
    <v-divider class="mx-2"></v-divider>
    <CsvUploader :onComplete="onCompleted" />
  </div>
</template>

<script>
import CsvUploader from '@/components/CsvUploader/CsvUploader.vue'
export default {
  components: {
    CsvUploader,
  },
  props: {},
  methods: {
    onCompleted(results) {
      this.$store.dispatch('setRawLogData', results)
    },
  },
}
</script>
