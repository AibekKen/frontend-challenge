<template>
  <div class="home">
    <div class="container images-container">
      <cats-card :catsList="allCats" />
    </div>
    <div v-if="catsCount < 60" ref="observer" class="observer">
      ... загружаем еще котиков ...
    </div>
  </div>
</template>

<script>
import CatsCard from "@/components/CatsCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CatsCard,
  },
  mounted() {
    if (this.catsCount < 60) {
      const options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
          this.$store.dispatch("getMoreImages");
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer);
    }
  },
  computed: mapGetters(["allCats", "catsCount"]),
};
</script>
<style lang ="scss">
.images-container {
  display: grid;
  grid-template: 1fr / repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-row-gap: 52px;
  margin: 0 0 48px 0;
}
.observer {
  height: 30px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #000000;
}
</style>
