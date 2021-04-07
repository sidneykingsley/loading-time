<template>
  <div
    class="par"
    :class="{
      'green-timer': participant.time <= 10,
      'yellow-timer': participant.time > 10 && participant.time <= 20,
      'red-timer': participant.time > 20,
    }"
  >
    <div class="par-details">
      <h3>Participant #{{ participant.id }}</h3>
      <p>Test type: {{ participant.test }}</p>
    </div>
    <div class="par-time-wrapper">
      <p class="par-time">
        {{ participant.time }}
      </p>
      <p v-if="participant.time <= 1" class="par-time-value">&nbsp;sec</p>
      <p v-if="participant.time > 1" class="par-time-value">&nbsp;secs</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['participant'],
}
</script>

<style>
.par {
  max-width: 600px;
  margin: 20px auto;
  background: #222;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0;
}

.par-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -3px;
}
.par-time-wrapper {
  display: flex;
  align-items: baseline;
  align-self: center;
}
.par-time {
  font-size: 50px;
  font-weight: 500;
  padding-right: 5px;
}
.par-time-value {
  align-self: baseline;
}

.green-timer {
  /* color: #65f390; */
  border-left: solid 5px #65f390;
}
.yellow-timer {
  /* color: #f3c365; */
  border-left: solid 5px #f3c365;
}
.red-timer {
  /* color: #f36565; */
  border-left: solid 5px #f36565;
}
</style>
