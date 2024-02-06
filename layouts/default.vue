<template>
<div class="layout-wrapper">
  <HeaderMain/>
  <slot/>
  <FooterMain/>
</div>
</template>

<script>
import HeaderMain from "../components/header.vue";

import FooterMain from "../components/footer.vue";

export default {
  name: "default",
  components: {FooterMain, HeaderMain}
}
</script>

<style scoped>
.layout-wrapper{
  position: relative;
  width: 100vw;
  min-height:100vh;
  top:0;
  left:0;
  display: flex;
  flex-direction: column;
  justify-content:space-between ;
}

</style>