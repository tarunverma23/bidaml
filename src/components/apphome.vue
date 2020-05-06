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
            <p class="text-justify border-bottom-dark">BiDaML is a set of domain-specific visual languages to design, model, and specify data analytics solutions. It uses five diagram types at different levels of abstraction to support key aspects of big data analytics. These five diagram types cover the whole data analytics software development life cycle from higher-level requirement analysis and problem definition through the low-level deployment of the final product.
            </p>
             <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad "> 
                <!-- box -->
                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12  no-lr-pad">
                    <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3  no-lr-pad">
                    </div>
                    <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8  no-lr-pad margin-top-50">
                        <div class="col-md-2 col-lg-2 col-sm-2 col-xs-2  no-lr-pad">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-top-30 no-lr-pad">
                                <span><b>High Level</b></span>
                            </div>
                            <i class="fas fa-long-arrow-alt-down arrow_down"></i>
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12  no-lr-pad">
                                <span><b>Low Level</b></span>
                            </div>
                        </div> 
                        
                            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6  no-lr-pad">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <span class="color-grey">Choose and start drawing diagrams</span>
                                </div>
                                <a href="/form" target="_blank">
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6  no-lr-pad">
                                    <button type='submit' class='btn btn_yellow margin-top-10 pull-right'>
                                        Brainstorming Diagram 
                                    </button>
                                </div>
                                </a>
                                <a href="/Process" target="_blank">
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                <button type='submit' class='btn btn_pink margin-top-10 pull-left'>
                                    process Diagram 
                                    </button>
                                </div> 
                                </a>
                                <a href="/Data" target="_blank">
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6  no-lr-pad">
                                    <button type='submit' class='btn btn_green margin-top-10 pull-right'>
                                    Data Diagram 
                                    </button>
                                </div> 
                                </a>
                                <a href="/Technique" target="_blank">
                                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                <button type='submit' class='btn btn_orange margin-top-10 pull-left'>
                                Technique Diagram
                                    </button>
                                </div>
                                </a>

                                <a href="/Deployment" target="_blank">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12  no-lr-pad">
                                <button type='submit' class='btn btn_blue margin-top-10'>
                                    Deployment Diagram 
                                    </button>
                                </div>
                                </a>
                            </div> 
                    
                        
                    </div>  
                        
                </div> 
            </div>
        </div>   
    </div>
</template>


<style scoped>
.home_box{border: 1px dotted black;margin-top: 30px;transition: all .2s ease-in-out;}
/* .home_box:hover{transform: scale(1.05); cursor: pointer;} */
.btn_apphome{width: 200px!important;}
.btn_yellow{ color: white; background-color: rgba(231, 231, 16, 0.486);border: 1px solid white;transition: all .3s ease-in-out;font-size: 20px;padding: 20px;width: 100%;}
.btn_pink{ color: white; background-color: #FF8F81;border: 1px solid white;transition: all .3s ease-in-out; margin: 20px;font-size: 20px;padding: 20px;width: 100%;}
.btn_green{ color: white; background-color: #7AB648;border: 1px solid white;transition: all .3s ease-in-out; margin: 20pxx;font-size: 20px;padding: 20px;width: 100%;}
.btn_orange{ color: white;background-color: #F18C23;border: 1px solid white;transition: all .3s ease-in-out; margin: 20px;font-size: 20px;padding: 20px;width: 100%;}
.btn_blue{ color: white;background-color: #3AA6DE;border: 1px solid white;transition: all .3s ease-in-out;margin: 20px;font-size: 20px;;padding: 20px;width: 50%;} 

.btn_yellow:hover{transform: scale(1.2); cursor: pointer;}
.btn_pink:hover{transform: scale(1.2); cursor: pointer;}
.btn_green:hover{transform: scale(1.2); cursor: pointer;}
.btn_orange:hover{transform: scale(1.2); cursor: pointer;}
.btn_blue:hover{transform: scale(1.2); cursor: pointer;}
.arrow_down{font-size:200px;color:black;}


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