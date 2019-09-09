<template>
  <section class="section is-primary section-about">
    <div class="container is-spaced">
      <h2 class="title is-size-2"> Sobre </h2>
      <p> Me chamo Mateus Koppe e sou Web Developer com 4 anos de experiência. </p>
      <p> Curso Ciência da computação na Universidade Federal da Fronteira Sul (UFFS). </p>
      <p> Sou diretor Web na empresa junior <a href="https://fronteiratec.com/" target="blank">FronteiraTec</a>. </p>
      <br>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-about {
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
</style>