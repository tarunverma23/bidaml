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
             
              <li v-for="display_tasks in display_tasks" :key="display_tasks.tasks_list" class= "">
                {{ display_tasks.tasks_list }}
              </li>


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
  //components: {brainstorming_recommend},
  //props: ['save_hexagon', 'save_tasks'],
  //props: {save_hexagon:{type:String, default:'default'}},
  data(){
    return {
      display_tasks: [ { tasks_list: ' '}],
      display_hexagon: '',
      fetch_count: '0',
      
    }

  },
  methods:{
    showModal(){
          // var fetch_count = 0;
          var database = firebase.database();
          var user = firebase.auth().currentUser;
          var user_id = user.uid;
          var pr = '';
          var length = '';
          
          var starCountRef = firebase.database().ref(user_id);
          //console.log(fetch_count);
            // Add ref of child if any
            starCountRef.on('value', function(snapshot) {
            //console.log(snapshot.val());
            var x = snapshot.val();
            //console.log(Object.entries(x));
            const [keyOne, _] = Object.entries(x);
            var p = keyOne[keyOne.length - 1];
            // console.log(p);
            const problem = p['problem']
            const tasks = p['tasks']
            //console.log(tasks[1]);
             length= tasks.length;
             //console.log(length);
            pr = p.problem;
            //console.log(pr); 
            });
            this.display_hexagon = pr;
            

            for (var i = 0;  i<length; i++)
            {
              console.log("loop working");
            }

            // if (this.fetch_count == '0' ){
               
            //    this.display_tasks.push({tasks_list : 'testing'});
               

            //    this.fetch_count = '1';
            //    //console.log(fetch_count);
            // }
            $('#process_resultModal').modal('show');
           
          
         
           
           

          
    },

        


        
  },
  
}

     //console.log(Object.entries(snapshot.val()));
          // const [key,value] = Object.entries(snapshot.val());
          // console.log(key,value);
          //const snapshotVal = snapshot.val();
          //console.log(snapshot, typeof snapshotVal)
          // const firstval = snapshotVal[user_id];
          // console.log(firstval);
          // const val = snapshot.val();
          // const val2 =Object.entries(val);
          // console.log(val2);
          // const val = snapshot.val();
          // const [key, valThree]  = Object.entries(val);
          // const [keyOne, valFour]  = Object.entries(valThree);
          // console.log(valFour);
</script>
<style>
</style>

