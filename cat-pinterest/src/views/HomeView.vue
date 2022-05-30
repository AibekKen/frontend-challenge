<template>
  <div class="home">
    <div class="container images-container">
      <div v-for="cat in this.$store.catsList" :key="cat.id" class="image">
        <img :src="cat.url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  mounted() {
    this.$store.dispatch("getImages");
  },
};
</script>
<style scoped>
.images-container {
  display: grid;
  grid-template: 1fr / repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-row-gap: 52px;
}
.image {
  width: 225px;
  height: 225px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
