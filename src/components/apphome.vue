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
            <h2 class="">Welcome to BiDaML Application</h2>
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
                <p class="text-justify margin-top-0"> <b>Brainstorming diagram</b> provides an overview of your data analytics project and all the tasks and sub-tasks that are involved in designing the solution at a very high level. You can include comments and extra information for the other stakeholders;
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
                <p class="text-justify margin-top-0"><b>Process diagram </b> the analytics processes/steps including key details related to the participants (individuals and organizations), operations, and conditions in your data analytics project capturing details from a high-level to a lower-level;
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
                <p class="text-justify margin-top-0"><b>Data diagrams</b> document the data and artifacts that are produced in each of the previous diagrams at a low level, i.e. the technical AI-based layer. They also define in detail the outputs associated with different tasks, e.g. output information, reports, results, visualizations, and outcomes;
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
                <p class="text-justify margin-top-0"><b>Technique diagrams</b> show the step by step procedures and processes for each sub-task in the brainstorming and process diagrams at a low level of abstraction. They show what techniques have been used or are planned to be used and whether they were successful or there were any issues;
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
                <p class="text-justify margin-top-0"><b>Deployment diagram </b> depicts the run-time configuration, i.e. the system hardware, the software installed on it, and the middleware connecting different machines to each other for development related tasks.
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