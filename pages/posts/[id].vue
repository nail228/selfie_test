<template>
  <div v-if="pending">
    {{error}}
  </div>
<div v-else class="m-5 p-4 flex flex-col items-start bg-black text-white">
  <span class="m-4"><span class="bg-violet-500 m-1 p-1">Id:</span> {{route.params.id}}</span>
  <span class="m-4"><span class="bg-violet-500 m-1 p-1">UserId:</span>{{post.userId}}</span>
  <div class="m-4">
    <span class="bg-violet-500 m-1 p-1">Title:</span>
    {{post.title}}
  </div>
  <div class="m-4">
    <span class="bg-violet-500 m-1 p-1">Text:</span>
    {{post.body}}
  </div>
  <div class="grid col-auto self-center">
    <textarea name="message" rows="10" cols="30" class="w-56 h-40 bg-neutral-700  text-white p-2 m-3" placeholder="type a comment"/>
    <button class="bg-violet-800 rounded-md p-1 m-1">Comment</button>
    <button class="bg-violet-800 rounded-md p-1 m-1" >Cancel</button>
  </div>
</div>

</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

const apiBase = config.public.server;

 const {data:post,pending,error,refresh}=await useAsyncData(`${route.params.id}`,()=>$fetch(`${apiBase}/posts/${route.params.id}`))
</script>

<style scoped>

</style>