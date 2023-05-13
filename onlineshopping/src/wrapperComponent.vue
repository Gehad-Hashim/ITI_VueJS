<template>
  <div class="container my-2">
    <div class="row">
      <headerComponent />
    </div>

    <!-- <div class="row">
      <bodyComponent />
    </div> -->
   
<router-view></router-view>

    <div class="row">
      <footerComponent />
    </div>
  </div>
  <!--end container -->
</template>

<script>
import footerComponent from "./components/footerComponent.vue";
import headerComponent from "./components/headerComponent.vue";
import bodyComponent from "./components/bodyComponent.vue";

export default {
  name: "wrapperComponent",
  components: {
    headerComponent,
    bodyComponent,
    footerComponent
  }
};
</script>

<style>
</style>