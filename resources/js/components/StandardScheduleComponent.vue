<template>
  <div>
    <section>
      <h1>Hello there</h1>
      <h2>Standard Schedule Component</h2>
    </section>
    <h1>Schedule</h1>

    <article>
      <h2>Programming Before Work</h2>
      <!-- "title" links to streaming page -->
      <p>
        Watch on
        <a href="#">Twitch.tv</a>
      </p>
      <p>
        Watch old streams at
        <a href="#">YouTube.com</a>
      </p>
      <p>Description about what I'm building</p>
      <!-- "description" -->
      <ul>
        <li>Monday: 6:45am MDT - 8:15am MDT</li>
        <!-- day, startTime, endTime, cancelled, cancelMessage -->
        <li>Wednesday: 6:45am MDT - 8:15am MDT</li>
        <li>Friday: 6:45am MDT - 8:15am MDT</li>
      </ul>
    </article>

    <article>
      <h2>Gaming After Work</h2>
      <p>Description about what I'm playing</p>
      <ul>
        <li>
          <strike>Tuesday:</strike>cancelled as I'm out of town this Tuesday
        </li>
        <li>Thursday: 6:45pm MDT - 8:15pm MDT</li>
      </ul>
    </article>

    <section>
      <h1>Links</h1>
      <ul>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
</script>