<template>
  <div>
    <nav class="navbar">
      <router-link v-for="routes in links" v-bind:key="routes.id" 
      :to="`${routes.page}`" class="navbar_links a-deco"> {{routes.text}} </router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Brainstorming',
          page:'/form'
        },
        {
          id: 2,
          text: 'Process',
          page:'/Process'
        },
        {
          id: 3,
          text: 'Data',
          page:'/Data'
        },
        {
          id: 4,
          text: 'Technique',
          page:'/Technique'
        },
        {
          id: 5,
          text: 'Deployment',
          page:'/Deployment'
        }
      ]
    }
  }
}
</script>

<style  scoped>
.navbar_links {color: black;font-size: 20px;margin:10px;}
.navbar_links:hover{color: white;border-bottom:5px solid #FFCC65;}
.navbar {width: 100%; background-color: #d9d9d9
;margin:0!important;min-height: auto;padding: 10px}
</style>