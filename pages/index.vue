<template>
  <div>
    <section class="intruduction-section">
      <div class="container is-spaced">
        <h1 class="title is-size-1"> Procurando por um Web Developer? </h1>
        <p class="subtitle is-size-1 is-black"> Mateus Koppe, Full-stack developer. </p>
        <br>
        <figure class="photo">
          <img src="~/assets/images/koppe.jpg">
        </figure>
      </div>
    </section>
    <section class="about-section section is-primary">
      <div class="container is-spaced">
        <h2 class="title is-size-2"> Sobre </h2>
        <p> Olá, me chamo Mateus Koppe e sou Web Developer a 3 anos. Tenho experiência em desenvolvimento de sites, com foco em responsividade e conversão de leads. </p>
        <p> Além disso desenvolvo sistemas de média e baixa complexidade, precisa de um sistema para gerenciar o seu negócio? Pode contar comigo! </p>
        <p> Faço manunteção em projetos com uma stack semelhar ao meu conhecimento. </p>
        <br>
      </div>
    </section>
    <section class="section skills-section is-primary">
      <div class="container">
        <div class="skills-section-floating-box">
          <div class="big-card">
            <div class="big-card-header">
              <h2 class="big-card-title is-color-primary-dark"> Skills </h2>
            </div>
            <div class="big-card-body has-no-padding">
              <div class="skill-category-wrap">
                <div class="skill-category">
                  <span class="skill-category-icon is-front-end"></span>
                  <h3 class="skill-category-title is-size-1"> Front-end </h3>
                  <h4 class="skill-category-title is-size-2"> Linguagens </h4>
                  <ul class="skill-category-list">
                    <li> JavaScript </li>
                    <li> Scss </li>
                    <li> Pug </li>
                  </ul>
                  <h4 class="skill-category-title is-size-2"> Frameworks </h4>
                  <ul class="skill-category-list">
                    <li> Vue </li>
                    <li> AngularJs (legado) </li>
                    <li> Bootstrap </li>
                  </ul>
                  <h4 class="skill-category-title is-size-2"> Habilidades </h4>
                  <ul class="skill-category-list">
                    <li> Responsividade </li>
                    <li> Pwa </li>
                  </ul>
                </div>
                <div class="skill-category">
                  <span class="skill-category-icon is-back-end"></span>
                  <h3 class="skill-category-title is-size-1"> Back-end </h3>
                  <h4 class="skill-category-title is-size-2"> Linguagens </h4>
                  <ul class="skill-category-list">
                    <li> Node.Js </li>
                    <li> Php </li>
                    <li> SQL </li>
                  </ul>
                  <h4 class="skill-category-title is-size-2"> Frameworks </h4>
                  <ul class="skill-category-list">
                    <li> Laravel </li>
                    <li> Express </li>
                    <li> Slim-Php </li>
                  </ul>
                  <h4 class="skill-category-title is-size-2"> Habilidades </h4>
                  <ul class="skill-category-list">
                    <li> RESTful API </li>
                  </ul>
                </div>
                <div class="skill-category">
                  <span class="skill-category-icon is-anothers"></span>
                  <h3 class="skill-category-title is-size-1"> Além disso... </h3>
                  <ul class="skill-category-list">
                    <li>Docker</li>
                    <li>Gulp</li>
                    <li>Git</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="clear: both"></div>
    <section class="section container is-space">
      <h2 class="title is-size-2"> Projetos </h2>
      <div>
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
  padding: 3rem 0;
  text-align: center;

  .photo {
    font-size: 0;
    width: 20rem;
    margin: 1rem auto;
    border-radius: 4rem;
    overflow: hidden;
    box-shadow: 0rem 0.3rem 1rem 0.3rem rgba(30, 30, 30, .4);

    img {
      width: 100%;
      margin: 0;
    }
  }
}

.about-section {
  text-align: center;
  font-size: 2.5rem;
  padding: 0 10rem;
}

.skills-section {
  --overlay-size: 20rem;
  padding-top: var(--overlay-size);
}

.skills-section-floating-box {
  float: left;
  width: 100%;
  margin-top: calc(var(--overlay-size) * -1);
}

.skill-category-wrap {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
}

.skill-category {
  border-color: rgba(30, 30, 30, .2);
  border-style: solid;
  border-width: 0;
  border-right-width: 1px;
  border-top-width: 1px;
  padding: 2rem;
  text-align: center;

  &:last-child {
    border-right-width: 0px;
  }
}

.skill-category-title {
  color: var(--color-primary-dark);
  font-weight: 600;
  margin-top: .8em;
  margin-bottom: .3em;

  &.is-size-1 {
    font-size: 1.3em;
  }

  &.is-size-2 {
    font-weight: 400;
    font-size: 1em;
  }
}

.skill-category-list {
  list-style: none;
  line-height: 1.75em;
  padding: 0;
}
.skill-category-icon {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  height: 11rem;
  margin-top: 1rem;
  margin-bottom: 3rem;

  &.is-front-end {
    background-image: url(~/assets/images/web.svg);
  }

  &.is-back-end {
    background-image: url(~/assets/images/cog.svg);
  }

  &.is-anothers {
    background-image: url(~/assets/images/lamp.svg);
  }
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
