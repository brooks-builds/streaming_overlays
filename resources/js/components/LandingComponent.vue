<template>
  <section>
    <h1>Hello World!</h1>

    <h2>Streamers</h2>
    <ul>
      <!-- https://vuejs.org/v2/guide/list.html -->
      <li v-for="(streamer, index) in streamers" :key="index">
        <!-- https://router.vuejs.org/guide/#html -->
        <router-link :to="streamer">{{ streamer }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      streamers: []
    };
  },
  mounted() {
    fetch("/api/streamers")
      .then(res => res.json())
      .then(json => {
        this.streamers = json;
      })
      .catch(err => console.err(err));
  }
};
</script>