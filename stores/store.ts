import { defineStore } from 'pinia'
import { debounce } from 'lodash-es'
import {getQueryParams} from "@tinyhttp/url";
import {FetchContext, FetchResponse} from "ofetch";
import {R} from "vite-node/index-WT31LSgS";

export const useMainStore = defineStore('main', {
    state: () => ({
        searchQueri:ref(''),
        posts:ref([]),
        searchResults:[],
        searchPage: ref(1),
        searchPerPage: ref(10),
        searchTotal:  0
    }),
    actions: {
        getSearchQuery(){
           const query={
               _page:this.searchPage,
               _limit:this.searchPerPage,
               _sort:'id',
               title_like:'',
           }
           if (this.searchQueri){
               query.title_like=this.searchQueri
           }
        },
        async getAllPosts(apiUrl:string){
            const config=useRuntimeConfig();
            const apiBase=config.public.server;
            try{
                const data=await fetch(apiUrl).then(res=>res.json)
                this.posts.value=this.posts.value.concat(data)
                return this.posts
            }catch (e){
                throw new Error()
            }
        },
        async getPostByPage(page,perPage){
            const config=useRuntimeConfig();
            const apiBase=config.public.server;
          try{
              const res=await fetch(`${apiBase}/posts?_page=${page}&_per_page=${perPage}`).then(res=>res.json())
              return res.data
          }catch(e){
              throw new Error()
          }
        },
        async searchPost(param:string,q:string){
            const config=useRuntimeConfig();
            const apiBase=config.public.server;
            try {
                const res=await fetch(`${apiBase}/posts`).then(res=>res.json())
                return res.filter(post=>typeof(post[param])==="string"?post[param].toLowerCase().includes(q):post[param]===Number(q))
            } catch (e) {
                throw new Error('1')
            }
        },
        nextSearchPage() {
            this.searchPage++
        },
        // Go to the previous search page
        prevSearchPage() {
            this.searchPage--
        }

    }

})