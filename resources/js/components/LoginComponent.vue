<template>
  <section>
    <h1>Login</h1>
    <form method="POST">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Login</button>
    </form>
  </section>
  <!-- <form method="POST">
    <section>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
    </section>

    <section>
      <label for="password">Password:</label>
      <input type="text" id="password" name="password" />
    </section>

    <button type="submit">Login</button>
  </form>-->
</template>


<script>
export default {};
</script>


<style scoped>
section {
  display: flex;
  align-items: center;
  flex-direction: column;
}

form {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  width: 50%;
}

h1 {
  margin: 0.5rem;
}

button {
  grid-column: 1 / 3;
  padding: 1rem;
  justify-self: end;
}

/* form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section {
  width: 
} */
</style>