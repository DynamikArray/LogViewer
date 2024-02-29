<template>
  <div class="d-flex flex-column pa-1 align-center">
    <div class="align-center"><h4>Upload a CSV file:</h4></div>
    <div class="align-self-start">
      <input type="file" @change="handleFileUpload" accept=".csv" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onComplete: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleFileUpload(event) {
      //Parse and use config, callback is ued for handling actions
      this.$papa.parse(event.target.files[0], {
        complete: this.onComplete,
      })
    },
  },
}
</script>
