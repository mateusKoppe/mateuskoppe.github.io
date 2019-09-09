<template>
  <section class="section section-introduction">
    <div class="container">
      <h1 class="title is-size-1"> Koppe </h1>
      <p class="subtitle is-size-1 is-black"> Full-stack developer. </p>
      <br>
      <figure class="photo">
        <img src="../assets/images/koppe.jpg">
      </figure>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-introduction {
    padding: 2rem 0 5rem 0;
    text-align: center;
  }

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
</style>