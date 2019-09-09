<template>
  <section class="section container is-spaced">
    <h2 class="title is-size-2"> Projetos </h2>
    <p class="subtitle is-size-1 is-black"> Aqui estão alguns dos projetos que eu desenvolvi ou tive grande participação. </p>
    <div class="projects-wrap">
      <a
        v-for="(project, index) in projects"
        class="project-card"
        target="blank"
        :key="index"
        :href="project.website"
        :style="{ backgroundColor: project.bgColor }"
        >
        <img
          class="project-card__logo"
          :src="'/projects/'+project.slug+'/'+project.logo"
          >
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: Array
  }
}
</script>

<style lang="scss" scoped>
.projects-wrap {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1.5rem 1.5rem;
  grid-template-columns: repeat(3, calc(33.3% - 1rem));
  justify-items: stretch;

  @media (max-width: 660px) {
    grid-template-columns: repeat(2, calc(50% - 1.5rem));
  }

  @media (max-width: 440px) {
    grid-template-columns: 100%;
  }
}

.project-card {
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 10px 1px rgba(50,50,50,0.3), 0 0 0 1px #E6ECF8;
  border-radius: 1.5rem;
  color: #35495e;
  display: inline-flex;
  justify-content: center;
  padding: 1.5rem;
  padding-top: 60%;
  position: relative;
}

.project-card__logo {
  max-width: calc(100% - 3rem);
  max-height: calc(100% - 3rem);
  height: auto;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>