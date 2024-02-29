<template>
  <div class="ma-2">
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
