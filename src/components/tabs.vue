<template>
  <div>
    <nav class="navbar">
      <router-link to="/apphome">
        <span><i class="fa fa-home home color-black" style="font-size:25px"></i></span>
      </router-link>
      <router-link v-for="routes in links" v-bind:key="routes.id" 
      :to="`${routes.page}`" target="_blank" class="navbar_links a-deco"> {{routes.text}} </router-link>
      <!-- <router-link to="/Login"> -->
      <button type='submit' v-on:click="onlogout" class='btn pull-right color-white'>
        <!-- <router-link to="/Login" class="color-white"> -->
        Logout 
        <!-- </router-link> -->
      </button>
      
    </nav>
  </div>
</template>
<script>
import firebase from 'firebase';



export default {
  name: 'Navigation',
  data() {
    return {
      links: [

        //  {
        //   id: 1,
        //   text: 'Home',
        //   page:'/apphome',
        //   // component: toolBar,
        // },
        {
          id: 2,
          text: 'Brainstorming',
          page:'/form',
          // component: toolBar,
          
        },
        {
          id: 3,
          text: 'Process',
          page:'/Process',
          // component: toolBarprocess,
        },
        {
          id: 4,
          text: 'Data',
          page:'/Data',
          // component: toolBardata,
        },
        {
          id: 5,
          text: 'Technique',
          page:'/Technique',
          // component: toolBartechnique,
        },
        {
          id: 6,
          text: 'Deployment',
          page:'/Deployment',
          //  component: toolBardeployment,
        }
      ]
    }
  },

  methods: {
    onlogout(){
      // firebase.auth().signOut().then(function() {
      //   console.log('Signed Out');
      //   // alert("Logout Successful");
      //   // this.$router.push('Login');
      //   },
      //   function(error) {
      //     console.error('Sign Out Error', error);
      //   });

      firebase.auth().signOut().then((data) => { 
          // alert("Logout Successful");
          console.log('Signed Out');
          toast_it("Logged out");
          this.$router.push('Login');
           
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
        // No user is signed in.
        //  alert("Logout Successful");
        //  this.$router.push('Login');
        // this.$router.push('login');
        }
      });
    }
  },
}
</script>

<style  scoped>
.navbar_links {color: black;font-size: 20px;margin:10px;}
.navbar_links:hover{color: white;}
.navbar {width: 100%; background-color:transparent;border-bottom: 1px solid black;
;margin:0!important;min-height: auto;padding: 10px}
.btn {
  /* background:rgb(255, 204, 101); */
  background:black;
  box-shadow: inset 0 0 2px 0 #EEEEEE;
  outline: none;
  border: 1px solid black;
  padding: .3rem 1rem .4rem;
  cursor: pointer;
  border-radius: .25rem;
  margin-top: 0rem;
  color: white;
}
.btn:hover{background: transparent;color:#000;border:1px solid black; }

.btn:active {
  box-shadow: inset 2px 2px 2px 0 #E0E0E0;
}

.router-link-active{
  color: white;
}
</style>