<template>
  <div class="home">
    <div>
      <h1>Hello!</h1>
      <div class="home-content">
        <div class="home-text">
          <p>This is a small UX experiment for my final year project.</p>
          <p>It shouldn't take more than <strong>5 minutes</strong>.</p>
          <p>Thank you for participating!</p>
        </div>
        <button @click="startTest">Start experiment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {
    startTest() {
      this.$router.push('/experiment')
    },
  },
}
</script>

<style>
.home {
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content {
  max-width: 600px;
  background: #222;
  padding: 40px;
  border-radius: 10px;
  /* display: flex;
  flex-direction: column;
  align-items: stretch; */
}

.home h1 {
  line-height: 20px;
  padding-bottom: 10px;
}
.home p {
  line-height: 10px;
}

.home button {
  background: #09a8d0;
  margin-top: 40px;
}

.home button {
  /* background: #057f9e; */
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
</style>
