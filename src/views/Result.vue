<template>
  <div class="results">
    <div class="results-title">
      <h1>Experiment Results</h1>
      <p>Actual loading time: 17 seconds</p>
    </div>
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="participants.length">
      <div v-for="participant in filteredParticipants" :key="participant.id">
        <SingleParticipant :participant="participant" />
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import SingleParticipant from '../components/SingleParticipant.vue'
export default {
  name: 'Home',
  components: { FilterNav, SingleParticipant },
  methods: {
    startTest() {
      this.$router.push('/experiment')
    },
  },
  data() {
    return {
      participants: [],
      current: 'all',
    }
  },
  mounted() {
    fetch('http://localhost:3000/participants')
      .then((res) => res.json())
      .then((data) => (this.participants = data))
      .catch((err) => console.log(err.message))
  },
  computed: {
    filteredParticipants() {
      if (this.current === 'spinner') {
        return this.participants.filter(
          (participant) => participant.test == 'Spinner'
        )
      }
      if (this.current === 'bar') {
        return this.participants.filter(
          (participant) => participant.test == 'Bar'
        )
      }
      return this.participants
    },
  },
}
</script>

<style>
.results-title h1 {
  padding-top: 30px;
  margin-bottom: 0;
}
.results-title p {
  padding-bottom: 20px;
  margin-top: 5px;
  color: #aaa;
}
</style>
