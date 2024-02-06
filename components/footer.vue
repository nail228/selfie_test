<template>
  <div class="footer w-full  bg-black opacity-70">
    <div class="footer-container">
      <div class="footer-nav bg-violet-800 text-white">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "FooterMain"
}
</script>

<style scoped>
.footer-container{
  display:flex;
  flex-direction: row;
  flex-basis: 3rem;
  align-items: center;
  padding: 30px;
}

</style>