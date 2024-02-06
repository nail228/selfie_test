<script setup lang="ts">
import {useMainStore} from "../stores/store";
import { storeToRefs } from 'pinia'


const post=ref([])
const selectedPages=ref('10')
const selectedParam=ref('userId')
const store=useMainStore()
const router = useRouter()
const route = useRoute()
const { posts, searchResults, searchPage, searchPerPage, searchTotal,searchQueri } =
    storeToRefs(store)

post.value=post.value.concat(await store.getPostByPage(1,selectedPages))


async function searchPost(param:string,query:any){
  try{
    if(query===''){
      post.value=[]
      return
    }
    const queryResult=await store.searchPost(param,query)
    post.value=[]
    post.value=post.value.concat(queryResult)
    router.push({

    })
  }catch(e){
    throw new Error("no results")
  }
}
watch(selectedPages,
    async (newValue,oldValue)=>{
  post.value=[]
      post.value=post.value.concat(await store.getPostByPage(1,newValue))
    }
)
onMounted(()=>{
})
</script>

<template>
  <div class="main-wrapper h-full text-white">
    <span class="main-intro text-4xl tracking-widest m-10 ">Blog</span>
    <div class="main-content w-full m-3 bg-violet-500">
      <div class="show-post p-6">
         <span>
        Show
      </span>
        <select v-model="selectedPages" class="bg-black rounded-full border-2 border-teal-200 ">
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>all</option>
        </select>
      </div>

      <div class="post-form">
        <form id="searchform" name="form" onsubmit="">
          <label for="search">Search the posts</label>
          <input v-model="searchQueri" @keyup="searchPost(selectedParam,searchQueri)" class="m-5 p-2 text-black border-lime-600 rounded-2xl border-4 " id="search"/>
        </form>
      </div>
      <div   class="w-24 p-8">
        <span>Search by params</span>
        <select  v-model="selectedParam"  class="bg-black rounded-2x1 border-2 border-teal-200 ">
          <option>
            userId
          </option>
          <option>
            id
          </option>
          <option>
            title
          </option>
          <option>
            body
          </option>
        </select>
        {{selectedParam}}
      </div>
      <div  class="posts">
        <postlist :postslist="post"></postlist>
      </div>
    </div>

  </div>

</template>


<style scoped>
.main-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
 
}
.post-form{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.posts{
  display: grid;
  gap: 25px;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3,1fr);
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
}
.show-post{
  align-self: flex-start;
}

</style>