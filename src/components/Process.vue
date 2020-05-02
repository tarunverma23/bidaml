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

        <button v-if="condition1" class="btn brand-btn1" style="width:200px" @click="showModal">Fetch tasks</button>
        <button v-if="condition2" class="btn brand-btn1" style="width:200px" @click="showModal">Display tasks</button>
                    <!-- ------------------ process result modal -------------------------------- -->
    <div id="result-modal">
      <div class=" modal fade" 
      id="process_resultModal" tabindex="-1" 
      role="dialog" aria-labelledby="process_resultModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-top-5">
                    Displaying saved tasks for: {{ display_hexagon }}
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-top-20 color-grey text-center">
                Click on the icons to automatically generate them.
            </div>
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
              <ul type = "none">
                <li v-for="display_tasks in display_tasks" :key="display_tasks.tasks_list" class= "">
                  <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 no-lr-pad">
                    <button class="task_button" v-on:click="generate_task_icon(display_tasks.tasks_list)">
                    {{ display_tasks.tasks_list }}
                    </button>
                  </div>
                </li>
              </ul>
              </div>
            <div class="modal-body">
              <!-- <h4 class="modal-title" id="process_resultModalLabel">{{ modalheader }}</h4> -->
              <!-- <ul type="none">
                <li v-for="recommender in recommender" :key="recommender.modalresponse" class= "recommendations">
                  {{ recommender.modalresponse }}
                </li>
              </ul> -->
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
  props: ['graph'],
  //props: {save_hexagon:{type:String, default:'default'}},
  data(){
    return {
      display_tasks: [ { tasks_list: 'New'}],
      display_hexagon: '',
      fetch_count: '0',
      condition1:true,
      condition2:false,
    }

  },
 
  methods:{
    showModal(){
          // var fetch_count = 0;
          // console.log("initiated")
          var database = firebase.database();
          var user = firebase.auth().currentUser;
          var user_id = user.uid;
          var pr = '';
          var length = '';
          var task_list = [];
          var flag = '';
          var starCountRef = firebase.database().ref(user_id);
          //console.log(fetch_count);
            // Add ref of child if any
            starCountRef.on('value', function(snapshot) {
            //console.log(snapshot.val());
            var x = snapshot.val();
            // if (x != ' '){
            //   flag = 1;
            // }
            //console.log(Object.entries(x));
            const [keyOne, _] = Object.entries(x);
            var p = keyOne[keyOne.length - 1];
            // console.log(p);
            const problem = p['problem']
            const tasks = p['tasks']
            task_list= p.tasks;
            // console.log(p.tasks);
             length= tasks.length;
             //console.log(length);
            pr = p.problem;
            //console.log(pr); 
            });

            this.display_hexagon = pr;
            //console.log(task_list);
            if (this.fetch_count == '0' ){
              for (var i = 1;  i<length; i++)
              {
              this.display_tasks.push(task_list[i]);
              this.fetch_count++ ; 
              }
               //console.log(fetch_count);
            }
            this.condition1 = false;
            this.condition2 = true;

            if(pr){
              $('#process_resultModal').modal('show');
            }
            
    },

     displaymodal(){
        // this.showModal().then(() => {
        //  $('#process_resultModal').modal('show');
        // });
         this.showModal()
           setTimeout(async () => {
              $('#process_resultModal').modal('show');
            }, 2000);
    },

    generate_task_icon(x){
      //console.log(x);
      this.$emit('generate_task', x);
      // this.$refs.graph.rootObservable.next(
      //     {
      //       type: 'CREATE',
      //       newNode: {text:x, nodeShape: 'circle'},
      //       //triplet: edges,
            
      //     },
      //   );
    },

  },
}
</script>
<style>
.task_button{ border-radius: 20px 20px 20px 20px;margin: 15px;background-color: #FFECA8; padding: 20px;color: grey}
.show{display: block!important;}
</style>

