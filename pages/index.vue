<template>
  <section class="container">
    <div>
      <span class="wellcoming title">
        Olá
      </span>
      <p class="quote">Me chamo Mateus Koppe e sou um desenvolvedor web. Desenvolvo sites institucionais e sistemas de baixa e média complexidade, utilizo tecnologias atuais e trabalho priozando a perfomance e as boas práticas.</p>
      <br>
      <hr>
      <br>
      <h2 class="title">
        Projetos
      </h2>
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
  </section>
</template>

<script>
export default {
  async asyncData ({ store }) {
    const res = await store.dispatch('project/loadList')
    return {
      projects: store.state.project.list
    }
  },
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.wellcoming {
  font-size: 11rem;
}

.projects {
  width: 100vw;
  max-width: 85rem;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 17rem 17rem;
}

.project-card {
  display: inline-flex;
  background-color: white;
  box-shadow: 0 .03rem .5rem .02rem rgba(30, 30, 30, .3);
  max-width: 30rem;
  color: #35495e;
  padding: 1.5rem;
  margin: 1rem;
  justify-content: center;
  align-items: center;
}

.project-card__logo {
  max-width: 100%;
  max-height: 100%;
}
</style>
