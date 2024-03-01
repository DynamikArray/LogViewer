<template>
  <div class="d-flex flex-column py-1 align-center light-grey">
    <div class="">
      <h3 class="text--overline">
        <v-icon small class="mr-1 text-black">fa fa-upload</v-icon>Upload a CSV
        file:
      </h3>
    </div>
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
    step(results) {
      console.log('PUSH THIS ROW ONTO THE DATA SET?', results)
    },
    handleFileUpload(event) {
      //Parse and use config, callback is ued for handling actions
      this.$papa.parse(event.target.files[0], {
        complete: this.onComplete,
        // step: this.step,
      })
    },
  },
}
</script>
