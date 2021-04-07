<template>
  <div class="form-wrapper">
    <div>
      <h2>First, please enter some basic details:</h2>
      <form @submit.prevent="handleSubmit" class="details-form">
        <label>Full name</label>
        <input type="text" required v-model="name" />
        <label>Age</label>
        <input type="number" required v-model="age" />
        <div class="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: null,
    }
  },
  methods: {
    handleSubmit() {
      var id = null
      let participant = {
        name: this.name,
        age: parseFloat(this.age),
        test: Math.random() < 0.5 ? 'Spinner' : 'Bar',
        time: null,
      }
      fetch('http://localhost:3000/participants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(participant),
      })
        .then((res) => res.json())
        .then((data) => {
          id = data.id
        })
        .then(() => {
          this.$emit('submitFinal', participant.test, id)
        })
        .catch((err) => console.log(err.message))
    },
  },
}
</script>

<style>
.form-wrapper {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: #222;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

form button {
  background: #057f9e;
  color: white;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  border: 0;
  padding: 10px 20px;
  margin-top: 40px;
  border-radius: 20px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
.form-wrapper input {
  display: block;
  background: none;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #eee;
}

.submit {
  text-align: center;
}

input:focus {
  outline: none;
  border-bottom-color: #057f9e;
  border-width: 2px;
}

@media only screen and (min-width: 1024px) {
  form {
    width: 400px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  form {
    margin: 0 20px;
  }
  .form h2 {
    margin: 0 20px;
  }
}
@media only screen and (max-width: 767px) {
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
</style>
