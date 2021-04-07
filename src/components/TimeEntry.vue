<template>
  <div class="time-wrapper">
    <div class="form-wrapper">
      <h2>
        How long do you think you waited for this page to load?
      </h2>
      <form @submit.prevent="handleResults">
        <label>Time waited</label>
        <input type="range" min="1" max="30" required v-model="time" />
        <div class="value">
          <p>{{ time }}</p>
          <p v-if="time <= 1">&nbsp;second</p>
          <p v-if="time > 1">&nbsp;seconds</p>
        </div>
        <p v-if="hint" class="hint">
          HINT: Drag the slider above to the right for however many seconds you
          felt you waited
        </p>
        <div class="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userId'],
  data() {
    return {
      time: 1,
      uri: 'http://localhost:3000/participants/' + this.userId,
      hint: false,
    }
  },
  methods: {
    handleResults() {
      console.log('hi')
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          time: parseFloat(this.time),
        }),
      })
        .then(() => {
          this.$router.push('/results')
        })
        .catch((err) => console.log(err))
    },
  },
  mounted() {
    setTimeout(() => {
      this.hint = true
    }, 10000)
  },
}
</script>

<style>
.value {
  display: flex;
  justify-content: center;
}
.time-wrapper {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  background: #222;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  display: inline-block;
  margin: 25px 0 15px;
  color: #aaa;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

.time-wrapper input {
  display: block;
  background: none;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: #eee;
}
.submit {
  text-align: center;
}

.hint {
  color: #aaa;
  text-align: center;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.time-wrapper h2 {
  text-align: center;
}

@media only screen and (min-width: 1024px) {
  .time-wrapper h2 {
    width: 400px;
    text-align: center;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  form {
    width: 400px;
  }
  .form h2 {
    margin: 0 20px;
  }
}
@media only screen and (max-width: 500px) {
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
  }
  form {
    margin: 0 20px;
  }
  .form h2 {
    margin: 0 20px;
  }
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type='range'] {
    overflow: hidden;
    width: 400px;
    -webkit-appearance: none;
    background-color: #111;
    border-radius: 20px;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #13bba4;
    margin-top: -1px;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    border-radius: 10px;
    cursor: ew-resize;
    background: #222;
    box-shadow: -193px 0 0 200px #057f9e;
  }
}

.time-wrapper input:focus {
  outline: none;
}
</style>
