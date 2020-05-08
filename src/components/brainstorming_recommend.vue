<template>
    <div class="margin-top-20">
      <!-- <a href="http://bidaml.pythonanywhere.com/" target="_blank">
         <button class="btn brand-btn1" style="width:200px">Find Similar Papers Tool</button>
      </a> -->
      <button class="btn brand-btn1" style="width:200px" @click="savedatabase">Save Diagram to Database</button>

             <!-- ------------------ brainstorming result modal -------------------------------- -->
    <div id="result-modal">
      <div class="modal fade" id="brainstorming_resultModal" tabindex="-1" role="dialog" aria-labelledby="brainstorming_resultModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- <h4 class="modal-title" id="brainstorming_resultModalLabel">{{ modalheader }}</h4> -->
              <!-- <ul type="none">
                <li v-for="recommender in recommender" :key="recommender.modalresponse" class= "recommendations">
                  {{ recommender.modalresponse }}
                </li>
              </ul> -->
              {{ save_hexagon }}

              <li v-for="save_tasks in save_tasks" :key="save_tasks.tasks_list" class= "recommendations">
                {{ save_tasks.tasks_list }}
              </li>

              <!-- {{ save_tasks }} -->

              <!-- {{ save_tasks }} -->
              

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------ brainstorming result modal ends-------------------------------- -->
    </div>

    
</template>


<script>
import firebase from 'firebase';
export default {
    props: ['save_hexagon', 'save_tasks'],
    //props: {save_hexagon:{type:String, default:'default'}},
    data(){
        return {
            //problem: save_hexagon,
            // tasks: save_tasks,
            save_tasks: [ { tasks_list: save_tasks}],
            save_hexagon: save_hexagon,

        };
    },

    methods: {
        showModal(){
            $('#brainstorming_resultModal').modal('show');
        },
        savedatabase (save_hexagon,save_tasks){
            toast_it("saving");
            var database = firebase.database();
            //var FirebaseAuth = firebase.auth();
            //console.log(this.save_tasks);
            const database_problem = this.save_hexagon;
            const database_tasks = this.save_tasks;
            var user = firebase.auth().currentUser;
            var user_id = user.uid;
            //console.log(user_id);
             
            firebase.database().ref(user_id).push({problem:database_problem,tasks:database_tasks})
            .then((data) => 
            { console.log(data);
            toast_it("Saved")})
            .catch((error) => { console.log(error);})


            // firebase.database().ref(user_id).push({tasks:database_tasks})
            // .then((data) => { console.log(data);})
            // .catch((error) => { console.log(error);})

        },

    },

    // watch: {
    //     save_hexagon(){
           

    //     },

    // },
    
    

    

    
}
</script>