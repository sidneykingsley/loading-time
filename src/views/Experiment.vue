<template>
  <Form v-if="dataEntry" @submitFinal="handleData" />
  <Warning v-if="warning" @close="warningClosed" />
  <SpinnerTest
    v-if="testing && testType == 'Spinner'"
    :delay="delay"
    @end="endTest"
  />
  <BarTest v-if="testing && testType == 'Bar'" :delay="delay" @end="endTest" />
  <TimeEntry v-if="collect" :userId="userId" />
</template>

<script>
import Form from '../components/Form.vue'
import Warning from '../components/Warning.vue'
import SpinnerTest from '../components/SpinnerTest.vue'
import BarTest from '../components/BarTest.vue'
import TimeEntry from '../components/TimeEntry.vue'
export default {
  name: 'Experiment',
  components: { Form, Warning, SpinnerTest, BarTest, TimeEntry },
  data() {
    return {
      dataEntry: true,
      warning: false,
      testing: false,
      collect: false,
      testType: '',
      delay: 17000,
      userId: null,
    }
  },
  methods: {
    handleData(testType, id) {
      // this.dataEntry = false
      // this.testing = true
      this.warning = true
      this.testType = testType
      this.userId = id
      console.log(this.userId)
      console.log(testType)
    },
    warningClosed() {
      this.dataEntry = false
      this.warning = false
      this.testing = true
    },
    endTest() {
      this.testing = false
      this.collect = true
    },
  },
}
</script>

<style></style>
