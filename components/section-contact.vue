<template>
  <section class="section is-primary section-contact">
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
</template>

<style lang="scss" scoped>
.section-contact {
  margin-top: 8rem;
  text-align: center;
}

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
</style>