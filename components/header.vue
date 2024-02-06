<template>
  <div class="header w-full h-1/5 bg-black opacity-70">
    <span class="text-white text-3xl">Blogs</span>
    <div class="header-nav bg-violet-800 text-white text-lg border-lime-400 rounded-xl border-4">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </div>

</template>

<script>
export default {
  name: "HeaderMain"
}
</script>

<style scoped>
.header{
  display: flex;
  flex-direction: row;
  flex-basis: 2rem;
  padding: 30px;
  align-items: center;
}
.header-nav {
  margin-left: 100px;
}
.header-nav>a{
  margin: 20px;
}



</style>