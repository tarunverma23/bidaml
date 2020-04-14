<template>
  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
       <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
              <div class="col-md-10 col-lg-10 col-sm-10 col-xs-10 no-lr-pad">
                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                  <h1 class="">BiDaML Process Diagram </h1>
                </div>
              </div>
        </div>
        <p class="text-justify border-bottom-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button class="btn brand-btn1" style="width:200px" @click="showModal">Fetch tasks</button>

                    <!-- ------------------ process result modal -------------------------------- -->
    <div id="result-modal">
      <div class="modal fade" id="process_resultModal" tabindex="-1" role="dialog" aria-labelledby="process_resultModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- <h4 class="modal-title" id="process_resultModalLabel">{{ modalheader }}</h4> -->
              <!-- <ul type="none">
                <li v-for="recommender in recommender" :key="recommender.modalresponse" class= "recommendations">
                  {{ recommender.modalresponse }}
                </li>
              </ul> -->
              {{ display_hexagon }}
              

              <li v-for="display_tasks in display_tasks" :key="display_tasks.tasks_list" class= "recommendations">
                {{ display_tasks.tasks_list }}
              </li>

              <!-- {{ display_tasks }} -->

              <!-- {{ display_tasks }} -->
              

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <!-- <button type="button" class="btn btn-primary">display changes</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------ process result modal ends-------------------------------- -->

        <!-- <brainstorming_recommend :save_hexagon= "save_hexagon" :save_tasks= "save_tasks">  </brainstorming_recommend> -->
  </div>

  

  
</template>

<script>
import firebase from 'firebase';
import brainstorming_recommend from '@/components/brainstorming_recommend';
export default {
  // name: 'Process',
  components: {brainstorming_recommend},
  props: ['save_hexagon', 'save_tasks'],
  //props: {save_hexagon:{type:String, default:'default'}},
  data(){
    return {
      display_tasks: [ { tasks_list: display_tasks}],
      display_hexagon: 'sgedggr',
    };

  },
  methods:{
    showModal(){
          var database = firebase.database();
          var user = firebase.auth().currentUser;
          var user_id = user.uid;
          var starCountRef = firebase.database().ref(user_id);
          // Add ref of child if any
          starCountRef.on('value', function(snapshot) {
          console.log(snapshot.val());
           //console.log(snapshot.getChildren().val());
          });
          //$('#process_resultModal').modal('show');

        },
  },
  
}
</script>
<style>
</style>