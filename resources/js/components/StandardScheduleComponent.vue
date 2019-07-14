<template>
  <main>
    <div class="container">
      <h1>{{ title }}</h1>

      <article v-for="event in events" v-bind:key="event.id">
        <h2 class="title">{{ event.title }}</h2>
        <ul class="link-wrapper">
          <li v-for="link in event.links" v-bind:key="link.id">
            <a v-bind:href="link.to">{{ link.text }}</a>
          </li>
        </ul>
        <p class="description">{{ event.description }}</p>
        <ul>
          <li v-for="(dateTime, index) in event.streamTimes" v-bind:key="index">{{ dateTime }}</li>
        </ul>
      </article>

      <section>
        <h1>{{ linksTitle }}</h1>
        <ul>
          <li v-for="link in links" v-bind:key="link.id">
            <a v-bind:href="link.to">{{ link.text }}</a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    title: "Streamer Schedule",
    linksTitle: "Links",
    links: [
      {
        id: 1,
        text: "My Twitter",
        to: "#"
      }
    ],
    events: [
      {
        id: 0,
        title: "Title 1",
        links: [
          {
            id: 1,
            text: "Watch me on Twitch!",
            to: "#"
          }
        ],
        description: "This is my description",
        streamTimes: ["Monday", "Wednesday", "Friday"]
      }
    ]
  })
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.container {
  grid-column: 2 / 3;
}

article {
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "titl  titl"
    "desc  link"
    "sched sched";
}

.title {
  grid-area: titl;
  font: 1.5em sans-serif;
}

.link-wrapper {
  grid-area: link;
}

.description {
  grid-area: desc;
}

.schedule {
  grid-area: sched;
}

h1 {
  font: 2em sans-serif;
}
</style>
