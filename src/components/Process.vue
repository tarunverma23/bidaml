<template>
  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
       <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
              <div class="col-md-10 col-lg-10 col-sm-10 col-xs-10 no-lr-pad">
                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                  <h1 class="">BiDaML Process Diagram </h1>
                </div>
              </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text-center no-lr-pad">
                <p class="text-justify margin-top-0"><b>Process diagram </b> the analytics processes/steps including key details related to the participants (individuals and organizations), operations, and conditions in your data analytics project capturing details from a high-level to a lower-level.
                </p>
        </div>

        <button class="btn brand-btn1" style="width:200px" @click="displaymodal">Fetch tasks</button>
        <!-- <button v-if="condition2" class="btn brand-btn1" style="width:200px" @click="showModal">Display tasks</button> -->
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
      flag: false,
      refreshIntervalId: '',
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
            })

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
             

            if(pr){
              // $('#process_resultModal').modal('show');
              this.flag = true;
              // $('#process_resultModal').modal('show');
              // clearInterval(this.refreshIntervalId);
            }
            else {
              this.flag = false;
            }
            
            
    },

     displaymodal(){
      //  this.showModal();
       toast_it_constant("fetching data");
        this.refreshIntervalId = setInterval(() => {
              this.showModal();
              this.display1();
             }, 7000);
        // this.showModal().then(() => {
        //  $('#process_resultModal').modal('show');
        // });
        //  this.showModal().then( (data) => { toast_it_close("Fetch complete")} )
            
            // setTimeout(() => {
            //   $('#process_resultModal').modal('show');
            //   toast_it_close("Data Fetched");
            //  }, 10000);

           
            //  if (this.flag==1){
            //    toast_it_close("done")
            //    $('#process_resultModal').modal('show');
               
            //  }
        // setInterval(function(){ alert("Hello"); }, 3000);
    },

    display1(){
       if (this.flag){
                clearInterval(this.refreshIntervalId);
                toast_it("done")
                $('#process_resultModal').modal('show');
                
        }
        // else {
        //   toast_it("no records found");
        //   clearInterval(this.refreshIntervalId);
        // }
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

