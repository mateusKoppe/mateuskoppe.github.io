<template>
  <div>
    <section class="section container is-spaced">
      <div class="intruduction-section">
        <h1 class="title is-size-1"> Procurando por um Web Developer? </h1>
        <p class="subtitle is-size-1 is-black"> Mateus Koppe, Full-stack developer. </p>
      </div>
    </section>
    <section class="section is-primary">
      <div class="container is-spaced">
        <h2 class="title is-size-2"> Sobre </h2>
        <p class="quote">Me chamo Mateus Koppe e sou um desenvolvedor web. Desenvolvo sites institucionais e sistemas de baixa e média complexidade, utilizo tecnologias atuais e trabalho priozando a perfomance e as boas práticas.</p>
      </div>
    </section>
    <section class="section container is-spaced">
      <h2 class="title is-size-2"> Skills </h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem. </p>
    </section>
    <section class="section container is-space">
      <h2 class="title is-size-2"> Projetos </h2>
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
    </section>
    <section class="section container is-spaced">
      <h2 class="title is-size-2"> Contato </h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem. </p>
    </section>
  </div>
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
.wellcoming {
  font-size: 11rem;
}

.intruduction-section {
  padding: 10rem 0 6rem 0;
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
