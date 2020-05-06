<template>
  <!-- <h1>{{ quiz.title }}</h1> -->
  <div id="" v-cloak>
    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
      <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 color-grey no-lr-pad left_border text-center">
          <p>Drawing on the Canvas</p>
          <p class="color-black">The instructions for toolbox goes here.....</p>
        </div>
      </div>
      <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3 no-lr-pad left_border text-center">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 color-grey no-lr-pad">
          <p>Find Similar Papers</p>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad margin-top-10">
          <a href="http://bidaml.pythonanywhere.com/" target="_blank">
             <button class="btn brand-btn1" style="width:200px">Use Tool</button>
          </a> 
        </div>
         
      </div>
      <div class="col-md-5 col-lg-5 col-sm-5 col-xs-5 no-lr-pad left_border text-center">
        <!-- <h1>{{ quiz.title }}</h1> -->
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 color-grey no-lr-pad">
          <p>Get icons automatically generated</p>
        </div>
        <div class="callout">
          <!-- <div v-for="(item, index) in items" :key="item.id">
            {{index}}. {{item.name}}
          </div> -->
          <div v-for="(question, index) in quiz.questions " :key="question.id">
            <!-- Hide all questions, show only the one with index === to current question index -->
            <div v-show="index === questionIndex">
              <h3 class="margin-bottom-0">{{ question.text }}</h3>
              <ul type="none" class="alignment text-left">
                <!-- for each response of the current question -->
                <li v-for="response in question.responses" :key="response.id" class="margin-right-20">
                  <label>
                    <!-- <input type="radio"
                      v-bind:value="response.value"
                      v-bind:name="index"
                      v-model="userResponses[index]"> {{response.text}} -->
                    <p> {{ response.text }}</p>
                    <!-- v-bind:placeholder="response.text" -->
                    <input class="form-control form_textbox" v-model="userResponses[index]"  type="text" ref="inputBox" name="">
                  </label>
                </li>
              </ul>
              
              <!-- The two navigation buttons -->
              <!-- Note: prev is hidden on first question -->
              <button class="btn brand-btn1" v-if="questionIndex > 0" v-on:click="prev">
                Previous
              </button>
              <button class="btn brand-btn1" v-on:click="next">
                Next
              </button>
            </div>
          </div>
          <!-- Last page, quiz is finished, display result -->
          <div v-show="questionIndex === quiz.questions.length">
            <button class="btn brand-btn1" v-on:click="generate">
              Generate
            </button>


            <brainstorming_recommend :save_hexagon= "save_hexagon" :save_tasks= "save_tasks">  </brainstorming_recommend>
            <!-- <h3>The Result</h3>
            <p>
              Here it is: {{ score() }}
            </p> -->
          </div> 
                
        </div>

      </div>

      
    </div>

  </div>
</template>

<script>

  var quiz = {
    title: 'heading',
    questions: [{
      id: 1,
      text: '',
      responses: [{
        id: 1,
        text: 'Enter the problem',
        value: '',
      },
      ],
    },
      {
        id: 2,
        text: '', //heading
        responses: [{
          text: 'Enter the objectives',
          value: '',
        },
        ],
      },
      {
        id: 3,
        text: '', //heading
        responses: [{
          text: 'Enter the target',
          value: '',
        },
        ],
      },
    ],
  };

  export default {
    props: ['save_hexagon', 'save_tasks'],
    data() {
      return {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(),
        sampleQuestionData: ['New','New1','New2'],
        sampleQuestionData_hexagon: ['New1'],
        //problem_to_save: 'testing'
        //text_to_save1: 'sfsfsf',

      };
    },

    
    methods: {
        generate() {
        //alert(this.userResponses.length);
        if (this.userResponses.length ==1)
        {
            this.$emit('generateGraph', this.userResponses);
            //$('#brainstorming_resultModal').modal('show');
            //alert(this.text_to_save);

        }
        else 
        {
            this.$emit('generateGraph', this.userResponses);
            //$('#brainstorming_resultModal').modal('show');
        }
      },
      
      // Go to next question
      next: function () {
        // this.userResponses[index] = this.$refs.inputBox.value
        console.log(this.userResponses);
        if (this.questionIndex===1 && this.userResponses[this.questionIndex] == 'test')
        {
          console.log("test passed");
        }
        this.questionIndex++;

      },
      // Go to previous question
      prev: function () {
        this.questionIndex--;
      },
      score: function () {
        //find the highest occurence in responses
        var modeMap = {};
        var maxEl = this.userResponses[0],
          maxCount = 1;
        for (var i = 0; i < this.userResponses.length; i++) {
          var el = this.userResponses[i];
          if (modeMap[el] == null) {
            modeMap[el] = 1;
          } else {
            modeMap[el]++;
          }
          if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
          }
        }
        return maxEl;
      },
    },
  };
</script>

<style scoped>

  .alignment {
    display: inline-flex;
    padding-left: 0;
    margin-top:5px;
  }
  .form_textbox{width: 300px}
  .left_border{border-left: 1px dotted black; height: 100vh;}
</style>
