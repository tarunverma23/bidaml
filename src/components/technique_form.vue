<template>
  <!-- <h1>{{ quiz.title }}</h1> -->
  <div id="app" v-cloak>
    <div class="row">
      <div class="large-12 columns">
        <!-- <h1>{{ quiz.title }}</h1> -->
        <div class="callout padding-left-40">
          <!-- <div v-for="(item, index) in items" :key="item.id">
            {{index}}. {{item.name}}
        </div> -->

          <div v-for="(question, index) in quiz.questions " :key="question.id">
            <!-- Hide all questions, show only the one with index === to current question index -->
            <div v-show="index === questionIndex">
              <h3 class="margin-bottom-0">{{ question.text }}</h3>
              <ul type="none" class="alignment">
                <!-- for each response of the current question -->
                <li v-for="response in question.responses" :key="response.id" class="margin-right-20">
                  <label>
                    <input type="radio" style="display:none"
                      v-bind:value="response.value"
                      v-bind:name="index"
                      v-model="userResponses[index]"> {{response.text}}
                    <!-- <input class="form-control" v-model="userResponses[index]"  type="text" id="" name="" v-bind:placeholder="response.text"> -->
                  <select v-model="userResponses[index]" class="form-control">
                    <option v-for="option in response.options" :key="option.id">
                      {{ option }}
                      </option>
                  </select>
                  <!-- <span>Selected: {{ selected }}</span> -->
                  </label>
                </li>
              </ul>
              <!-- The two navigation buttons -->
              <!-- Note: prev is hidden on first question -->
              <button class="btn brand-btn1" v-if="questionIndex > 0" v-on:click="prev">
                prev
              </button>
              <button class="btn brand-btn1" v-on:click="next">
                next
              </button>
            </div>
          </div>

          <!-- Last page, quiz is finished, display result -->
          <div v-show="questionIndex === quiz.questions.length">
            <button class="btn brand-btn1" v-on:click="generate">
              Generate
            </button>
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
      text: 'Business Requirement Analysis for technique diagram',
      responses: [{
        text: 'Do you have data?',
        options:["Yes","No"],
        
      },
      ],
    },
      {
        id: 2,
        text: 'Business Requirement Analysis for technique diagram',
        responses: [{
          text: 'how many samples you have/expected to have?',
          options:["Not Known","Less than 50","50 or above and less than 10K",
           "10K or above and less than 100K","100K or above"],          
          
        },
        ],
      },
      {
        id: 3,
        text: 'Business Requirement Analysis for technique diagram',
        responses: [{
          text: 'do you know where you can collect/purchase data?',
          options:["Yes","No"],
          
        },
        ],
      },
      {
        id: 4,
        text: 'Business Requirement Analysis for technique diagram',
        responses: [{
          text: 'Are you aiming to predict a category/quantity/structure?',
          options:["Prediction is not required","Not known","Predict a category","Predict a quantity",
          "Predict a structure"],

        },
        ],
      },
      {
        id: 5,
        text: 'Business Requirement Analysis for technique diagram',
        responses: [{
          text: 'do you know the number of categories?',
          options:["Yes","No"],
          
        },
        ],
      },
      {
        id: 6,
        text: 'Business Requirement Analysis for technique diagram',
        responses: [{
          text: 'Do you have labelled data?',
          options:["Yes","No"],
          
        },
        ],
      },
    

    ],
  };

  export default {
    data() {
      return {
        quiz: quiz,
        questionIndex: 0,
        userResponses: Array(),
        sampleQuestionData: ['New','New1','New2'],
        sampleQuestionData_hexagon: ['New1'],
        selected: '',
      };
    },

    methods: {
        generate() {
        //alert(this.userResponses.length);
        if (this.userResponses.length ==1)
        {
            this.$emit('generateGraph', this.sampleQuestionData_hexagon);

        }
        else 
        {
            this.$emit('generateGraph', this.sampleQuestionData);
        }
      },

      // Go to next question
      next: function () {
        this.questionIndex++;
        console.log(this.userResponses);
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
  .alignment {display: inline-flex;padding-left: 0;}

</style>
