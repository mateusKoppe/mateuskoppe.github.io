<template>
  <div>

    <section class="section" id="intruduction">
      <div class="container">
        <h1 class="title is-size-1"> Koppe </h1>
        <p class="subtitle is-size-1 is-black"> Full-stack developer. </p>
        <br>
        <figure class="photo">
          <img src="../assets/images/koppe.jpg">
        </figure>
      </div>
    </section>

    <section class="section is-primary" id="about">
      <div class="container is-spaced">
        <h2 class="title is-size-2"> Sobre </h2>
        <p> Me chamo Mateus Koppe e sou Web Developer com 4 anos de experiência. </p>
        <p> Curso Ciência da computação na Universidade Federal da Fronteira Sul (UFFS). </p>
        <p> Sou diretor Web na empresa junior <a href="https://fronteiratec.com/" target="blank">FronteiraTec</a>. </p>
        <br>
      </div>
    </section>

    <section class="section is-primary" id="skills">
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
                  </ul>
                  <h4 class="skill-category-title is-size-2"> Frameworks </h4>
                  <ul class="skill-category-list">
                    <li> Vue </li>
                    <li> React </li>
                    <li> AngularJs (legado) </li>
                    <li> Bootstrap </li>
                  </ul>
                  <h4 class="skill-category-title is-size-2"> Habilidades </h4>
                  <ul class="skill-category-list">
                    <li> Responsividade </li>
                  </ul>
                </div>
                <div class="skill-category">
                  <span class="skill-category-icon is-back-end"></span>
                  <h3 class="skill-category-title is-size-1"> Back-end </h3>
                  <h4 class="skill-category-title is-size-2"> Linguagens/Plataformas </h4>
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
                    <li>Scrum</li>
                    <li>Git Flow</li>
                    <li>Boas práticas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="clear: both"></div>

    <section class="section container is-spaced" id="projects">
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

    <section class="section is-primary" id="contact">
      <div class="container is-spaced">
        <h2 class="title is-size-2"> Contato </h2>
        <p class="brief"> Quer trocar uma ideia? Entre em contato comigo! </p>
        <h3 class="title is-size-4"> E-mail </h3>
        <a href="mailto:mateus.koppe@gmail.com"> mateus.koppe@gmail.com </a>
        <h3 class="title is-size-4"> GitHub </h3>
        <a href="https://github.com/mateusKoppe" target="_blank"> /mateusKoppe </a>
        <h3 class="title is-size-4"> Linked-In </h3>
        <a href="https://www.linkedin.com/in/mateusKoppe/" target="_blank"> /mateusKoppe </a>
        <h3 class="title is-size-4"> Telegram </h3>
        <a href="https://t.me/Koppemon" target="_blank"> @Koppemon </a>
      </div>
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
#intruduction {
  padding: 2rem 0 5rem 0;
  text-align: center;

  .photo {
    font-size: 0;
    width: 20rem;
    margin: 1rem auto;
    border-radius: 4rem;
    overflow: hidden;
    box-shadow: 0 4px 10px 1px rgba(50,50,50,0.3), 0 0 0 1px #E6ECF8;

    img {
      width: 100%;
      margin: 0;
    }
  }
}

#about {
  text-align: center;
  font-size: 2.5rem;
  padding: 0 10rem;

  @media (max-width: 860px) {
    padding: 0 10%;
  }

  @media (max-width: 400px) {
    padding: 0 1.5rem;
  }
}

#skills {
  --overlay-size: 20rem;
  padding-top: var(--overlay-size);

  .skills-section-floating-box {
    float: left;
    width: 100%;
    margin-top: calc(var(--overlay-size) * -1);
    margin-bottom: 4rem;
  }

  .skill-category-wrap {
    display: grid;
    grid-template-columns: repeat(3, 33.3%);

    @media (max-width: 660px) {
      grid-template-columns: repeat(2, 50%);
    }

    @media (max-width: 470px) {
      grid-template-columns: 100%;
    }
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

      @media (max-width: 660px) and (min-width: 471px) {
        grid-column: span 2;
      }
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
      background-image: url(../assets/images/web.svg);
    }

    &.is-back-end {
      background-image: url(../assets/images/cog.svg);
    }

    &.is-anothers {
      background-image: url(../assets/images/lamp.svg);
    }
  }
}


#projects {

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
}

#contact {
  margin-top: 8rem;
  text-align: center;

  .brief {
    font-size: 2.2rem;
  }

  .title.is-size-4 {
    margin-bottom: 0.1em;
    margin-top: 1.2em;
  }

  a {
    color: var(--color-text);
    font-size: 1.2em;
    text-decoration: none;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
