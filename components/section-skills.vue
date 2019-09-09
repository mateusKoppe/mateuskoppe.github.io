<template>
  <div>
    <section class="section is-primary section-skills">
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
  </div>
</template>


<style lang="scss" scoped>
.section-skills {
  --overlay-size: 20rem;
  padding-top: var(--overlay-size);
}

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
</style>