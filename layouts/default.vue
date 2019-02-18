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

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #e7edf3;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.app-header {
  max-width: 900px;
  margin: auto;
  padding: 15px;
}
</style>

