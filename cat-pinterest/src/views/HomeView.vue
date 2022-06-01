<template>
  <div class="home">
    <div class="container images-container">
      <cats-card :catsList="allCats" />
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
  computed: mapGetters(["allCats"]),
};
</script>
<style lang ="scss">
.images-container {
  display: grid;
  grid-template: 1fr / repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-row-gap: 52px;
}
</style>
