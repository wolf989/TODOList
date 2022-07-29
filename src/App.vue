<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #054b95;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #7a7f7b;
    text-decoration: none;

    &.router-link-exact-active {
      color: #054b95;
      text-decoration: underline;
    }
  }
}
</style>
