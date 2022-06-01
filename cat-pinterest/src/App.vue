<template>
  <nav>
    <div class="container">
      <router-link to="/">Все котики</router-link>
      <router-link to="/favorite">Любимые котики</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getImages");
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  margin: 0 0 0 0;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

.container {
  max-width: 1440px;
  padding: 0 62px;
  margin: 0 auto;
}

nav {
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);
  margin: 0 0 52px 0;
  a {
    display: inline-block;
    padding: 23px;
    font-family: "Roboto";
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.25px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
