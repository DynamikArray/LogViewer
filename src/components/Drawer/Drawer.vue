<template>
  <div class="ma-2text-center">
    <h3 class="text-center text-h5 font-weight-black text-uppercase">
      Settings:
    </h3>
    <v-divider class="mx-2"></v-divider>
    <CsvUploader :onComplete="onCompleted" class="my-3" />
    <v-divider class="mx-2"></v-divider>
    <DataPanels />
  </div>
</template>

<script>
import CsvUploader from '@/components/CsvUploader/CsvUploader.vue'
import DataPanels from '@/components/DataPanels/DataPanels.vue'

export default {
  components: {
    CsvUploader,
    DataPanels,
  },
  props: {},
  methods: {
    onCompleted(results) {
      this.$store.dispatch('setRawLogData', results)
    },
  },
}
</script>
