<template>
  <section class="container">
    <div>
      <h1 class="title">
        Mateus Koppe
      </h1>
      <p class="quote">Olá, sou desenvolvedor web. Desenvolvo sites institucionais e sistemas de baixa e média complexidade, utilizo tecnologias atuais e trabalho priozando a perfomance e as boas práticas.</p>
      <br>
      <hr>
      <br>
      <h2 class="title">
        Projetos
      </h2>
      <div class="projects">
        <nuxt-link
          :to="'projects/'+ project.slug"
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
          >
          {{project.name}}
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

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

h1.title {
  font-size: 100px;
}

h2.title {
  font-size: 70px;
}

.quote {
  color: #35495e;
  max-width: 700px;
  text-align: left;
  padding-left: 20px;
  border-left: #35495e solid 3px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.projects {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 150px;
}

.project-card {
  display: inline-block;
  background-color: white;
  box-shadow: 0 .3px 5px .2px rgba(30, 30, 30, .3);
  max-width: 300px;
  color: #35495e;
  padding: 15px;
  margin: 10px;
}

.links {
  padding-top: 15px;
}
</style>

