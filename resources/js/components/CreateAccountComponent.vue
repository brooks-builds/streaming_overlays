<template>
  <section>
    <h1>Create Account</h1>
    <form method="POST" @submit="createAccount">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="user.name" />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="user.email" />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="user.password" />

      <label for="password-confirm">Confirm password:</label>
      <input
        type="password"
        id="password-confirm"
        name="password_confirm"
        v-model="user.password_confirm"
      />

      <button type="submit">Create Account</button>
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
export default {
  methods: {
    createAccount(event) {
      event.preventDefault();

      console.log("Creating account");
      console.log("user", this.user);

      fetch("/register", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": this.csrfToken
        }
      })
        .then(response => {
          console.log(response.status);
          if (response.status < 200 || response.status > 299) {
            const error = new Error(response.status);
            error.response = response;
            throw error;
          }
        })
        .catch(error => {
          const messages = {
            419: "you dun wrong",
            500: "we dun wrong"
          };
          const displayMessage = messages[error.message] || "general error";
          console.error(displayMessage);
        });
    }
  },

  data() {
    return {
      user: {
        name: `Kael${Date.now()}`,
        email: `example${Date.now()}@gmail.com`,
        password: "Password",
        password_confirm: "Password"
      },
      csrfToken: document.querySelector('meta[name="csrf-token"]').content
    };
  }
};
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
  background-color: #b2cefe;
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
