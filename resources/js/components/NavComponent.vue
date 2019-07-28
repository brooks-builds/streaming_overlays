<template>
  <section>
    <router-link to="/">
      <h1>Streamer Schedules</h1>
    </router-link>

    <div class="link-container">
      <router-link to="/accounts/login">Login</router-link>
      <router-link to="/accounts/create">Create Account</router-link>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1rem;
  background: #b2cefe;
}

h1 {
  color: black;
}

.link-container > a {
  margin: 0 20px;
}

.link-container > a:hover {
  color: red;
}
</style>
