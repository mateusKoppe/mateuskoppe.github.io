<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{project.name}}
      </h1>
      <p class="quote"></p>
      <br>
      <hr>
      <br>
      {{project.stack}}
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ store, params }) {
    const data = await store.dispatch('project/getItem', params.slug)
    return {
      project: data
    }
  },
}
</script>
