<script setup lang="ts">
defineProps({
  postslist:Array<any>
})


</script>


<template>
  <div v-if="!postslist">
    no results
  </div>
<div v-else v-for="post in postslist" class="post text-xl m-5 p-4 flex flex-col bg-black text-white rounded-3xl" >
   <span class="rounded-2xl bg-slate-600 m-1 w-full p-2">User id: {{Object.values(post)[0]}}</span>
  <NuxtLink :to="`/posts/${Object.values(post)[1]}`"><span class="rounded-2xl bg-slate-600 p-1 m-2 w-full ">id: {{Object.values(post)[1]}}</span></NuxtLink>
    <div class="rounded-3xl p-2 m-1 w-full  bg-slate-600">Title: {{Object.values(post)[2]}}</div>
    <div class="rounded-3xl p-2 m-1 w-full bg-slate-600">
      {{Object.values(post)[3]}}
    </div>
</div>
</template>



<style scoped>
.post{
  display: flex;
  flex-direction: column;
}

</style>