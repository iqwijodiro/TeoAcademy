<template>
  <div class="aboutPage">
    <hero-carousel />
    <value-plan />
    <features-gallery />
  </div>
</template>

<script>
import featuresGallery from '~/components/aboutUs/featuresGallery.vue'
import heroCarousel from '~/components/aboutUs/heroCarousel.vue'
import valuePlan from '~/components/aboutUs/valuePlan.vue'
export default {
  components: {
    heroCarousel,
    valuePlan,
    featuresGallery
  }
}
</script>
<style lang="scss" scoped>
// .aboutPage {
//     border-bottom: 3px solid $gray-light;
// }
</style>
