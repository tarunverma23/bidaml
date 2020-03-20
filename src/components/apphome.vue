<template>
    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
            <div class="col-md-10 col-lg-10 col-sm-10 col-xs-10 text-center">
                
            </div>
            <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2">
                <router-link to="/Login" class="color-white">
                    <button type='submit' v-on:click="onlogout" class='btn brand-btn1 margin-top-10 pull-right'>
                    Logout 
                    </button>
                </router-link>
                
            </div>
        </div>

        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
            <h2 class="">Welcome to BiDaML</h2>
        </div>

        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
            <p class="text-justify border-bottom-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div class="col-md-11 col-lg-11 col-sm-11 col-xs-11 home_box margin-top-30">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <h3 class="margin-top-5">Brainstorming Diagram</h3>
             </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
                <p class="text-justify margin-top-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-bottom-10">
                <router-link to="/form" target="_blank"> 
                    <button type='submit' class='btn brand-btn1 btn_apphome'>
                       Draw Brainstorming Diagram 
                    </button>
                </router-link>
            </div>
        </div>

        <div class="col-md-11 col-lg-11 col-sm-11 col-xs-11 home_box margin-top-40">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <h3 class="margin-top-5">Process Diagram</h3>
             </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
                <p class="text-justify margin-top-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-bottom-10">
                <router-link to="/Process" target="_blank">
                    <button type='submit' class='btn brand-btn1 btn_apphome'>
                       Draw Process Diagram 
                    </button>
                </router-link>
            </div>
        </div>

        <div class="col-md-11 col-lg-11 col-sm-11 col-xs-11 home_box margin-top-40">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <h3 class="margin-top-5">Data Diagram</h3>
             </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
                <p class="text-justify margin-top-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-bottom-10">
                <router-link to="/Data" target="_blank">
                    <button type='submit' class='btn brand-btn1 btn_apphome'>
                       Draw Data Diagram 
                    </button>
                </router-link>
            </div>
        </div>

        <div class="col-md-11 col-lg-11 col-sm-11 col-xs-11 home_box margin-top-40">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <h3 class="margin-top-5">Technique Diagram</h3>
             </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
                <p class="text-justify margin-top-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-bottom-10">
                <router-link to="/Technique" target="_blank">
                    <button type='submit' class='btn brand-btn1 btn_apphome'>
                       Draw Technique Diagram 
                    </button>
                </router-link>
            </div>
        </div>

        <div class="col-md-11 col-lg-11 col-sm-11 col-xs-11 home_box margin-top-40">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <h3 class="margin-top-5">Deployment Diagram</h3>
             </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center">
                <p class="text-justify margin-top-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-bottom-10">
                <router-link to="/Deployment" target="_blank">
                    <button type='submit' class='btn brand-btn1 btn_apphome'>
                       Draw Deployment Diagram 
                    </button>
                </router-link>
            </div>
        </div>

       
        
    </div>
</template>


<style scoped>
.home_box{border: 1px dotted black;margin-top: 30px;left: 18px;right: 18px;transition: all .2s ease-in-out;}
.home_box:hover{transform: scale(1.05); cursor: pointer;}
.btn_apphome{width: 200px!important;}

</style>



<script>
import firebase from 'firebase';
export default {

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

      firebase.auth().signOut().then(function() {
          // alert("Logout Successful");
          console.log('Signed Out');
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
        // No user is signed in.
         alert("Logout Successful");
        //  this.$router.push('Login');
        }
      });
    }
  },
    
}
</script>