<template>
  <div class="home">
    <div class="container images-container">
      <div v-for="cat in this.$store.catsList" :key="cat.id" class="image">
        <img :src="cat.url" alt="" />
        <div class="favorite-block" @click.prevent="toggleFav(cat)">
          <img src="@/assets/icons/favorite1.svg" alt="" class="hover-card" />
          <img
            src="@/assets/icons/favorite2.svg"
            alt=""
            class="hover-favorite"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "HomeView",
  methods: {
    ...mapMutations(['addFav'])

  },
  mounted() {
this.$store.dispatch("getImages");
  },
};
</script>
<style lang ="scss" scoped>
.images-container {
  display: grid;
  grid-template: 1fr / repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-row-gap: 52px;
}
.hover-card {
  display: none;
}
.hover-favorite {
  display: none;
}
.image {
  position: relative;
  width: 225px;
  height: 225px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(calc(257 / 225));
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.525);
    .hover-card {
      display: block;
    }
  }
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.favorite-block {
  position: absolute;
  bottom: 15px;
  right: 19px;
  width: 48px;
  height: 48px;
  &:hover {
    .hover-card {
      display: none;
    }
    .hover-favorite {
      display: block;
    }
  }
}
</style>
