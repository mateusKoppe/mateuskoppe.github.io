<template>
  <div>
    <header class="app-header">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.png">
      </nuxt-link>
    </header>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~/assets/style/index.scss';

.app-header {
  max-width: 900px;
  margin: auto;
  padding: 15px;
}
</style>

