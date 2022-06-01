<template>
  <div class="favorite">
    <div class="container images-container">
      <cats-card :catsList="favoriteCats" />
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
  computed: mapGetters(["favoriteCats"]),
};
</script>
<style lang="scss">
</style>