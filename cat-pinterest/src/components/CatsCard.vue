<template>
  <transition-group name="cats-list">
    <div v-for="cat in catsList" :key="cat.id" class="image">
      <img :src="cat.url" alt="" />
      <div class="favorite-block" @click="toggleFav(cat)">
        <div class="hovered-card" :class="{ favorite: cat.fav }"></div>
        <div class="hover-favorite"></div>
      </div>
    </div>
  </transition-group>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    catsList: {
      type: Array,
    },
  },
  methods: {
    ...mapMutations(["toggleFav"]),
  },
};
</script>
<style lang="scss">
.hovered-card {
  display: none;
  width: 48px;
  height: 48px;
  background-image: url(../assets/icons/favorite1.svg);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}

.hovered-card.favorite {
  background-image: url(../assets/icons/favorite3.svg);
}

.hover-favorite {
  display: none;
  width: 48px;
  height: 48px;
  background-image: url(../assets/icons/favorite2.svg);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
}
.image {
  position: relative;
  width: 225px;
  height: 225px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(calc(257 / 225));
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.525);
    .hovered-card {
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
    .hovered-card {
      display: none;
    }
    .hover-favorite {
      display: block;
    }
  }
}

.cats-list-item {
  display: inline-block;
  margin-right: 10px;
}
.cats-list-enter-active,
.cats-list-leave-active {
  transition: all 0.5s;
}
.cats-list-enter, .cats-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.cats-list-move {
  transition: transform 0.4s;
}
</style>