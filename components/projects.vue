<template >
  <div>
    <h2 class="title"> Projetos </h2>
    <div class="projects">
      <nuxt-link
        class="project-card"
        :to="'projects/'+ project.slug"
        v-for="(project, index) in projects"
        :key="index"
        >
        <img
          class="project-card__logo"
          :src="'/projects/'+project.slug+'/'+project.logo"
          >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array
  }
}
</script>
