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
            <!-- <button class="btn brand-btn1" v-on:click="generate">
              View recommendations
            </button> -->
            <button class="btn brand-btn1" v-if="questionIndex > 0" v-on:click="prev">
                prev
              </button>
            <button class="btn brand-btn1" style="width:200px" @click="showModal">View recommendations</button>
            <result-modal ref="modal"></result-modal>
            <!-- <h3>The Result</h3>
            <p>
              Here it is: {{ score() }}
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------ recommendation modal -------------------------------- -->
    <div id="result-modal">
      <div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h4 class="modal-title" id="resultModalLabel">{{ modalheader }}</h4>
              <ul type="none">
                <li v-for="recommender in recommender" :key="recommender.modalresponse" class= "recommendations">
                  {{ recommender.modalresponse }}
                </li>
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------ recommendation modal ends-------------------------------- -->
  </div>
</template>

<script>


  var quiz = {
    title: 'heading',
    questions: [{
      id: 1,
      text: 'Recommending Techniques and related Python Code',
      responses: [{
        text: 'Do you have data?',
        options:["Yes","No"],
        
      },
      ],
    },
      {
        id: 2,
        text: 'Recommending Techniques and related Python Code',
        responses: [{
          text: 'how many samples you have/expected to have?',
          options:["Not Known","Less than 50","50 or above and less than 10K",
           "10K or above and less than 100K","100K or above"],          
          
        },
        ],
      },
      {
        id: 3,
        text: 'Recommending Techniques and related Python Code',
        responses: [{
          text: 'do you know where you can collect/purchase data?',
          options:["Yes","No"],
          
        },
        ],
      },
      {
        id: 4,
        text: 'Recommending Techniques and related Python Code',
        responses: [{
          text: 'Are you aiming to predict a category/quantity/structure?',
          options:["Prediction is not required","Not known","Predict a category","Predict a quantity",
          "Predict a structure"],

        },
        ],
      },
      {
        id: 5,
        text: 'Recommending Techniques and related Python Code',
        responses: [{
          text: 'do you know the number of categories?',
          options:["Yes","No"],
          
        },
        ],
      },
      {
        id: 6,
        text: 'Recommending Techniques and related Python Code',
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
        modalheader: 'This is the list of recommendations based on your responses',
        recommender: [
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
          { modalresponse: ' ' },
        ],
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
      showModal() {
      
      if (this.userResponses[3]== 'Predict a category' && this.userResponses[5]== 'Yes' ){
        // if (this.userResponses[1]=='10K or above and less than 100K' || this.userResponses[1]=='100K or above')
        // {
          this.recommender[0].modalresponse = 'If you have less than 100K samples, Linear SVC (https://scikit-learn.org/stable/modules/svm.html#classification) is a suitable technique for your problem.'
          this.recommender[1].modalresponse = 'If its not working, if your data is text, you can use Naive Bayes (https://scikit-learn.org/stable/modules/naive_bayes.html)'
          this.recommender[2].modalresponse = 'Otherwise you can use Nearest Neighbors (https://scikit-learn.org/stable/modules/neighbors.html).'
          this.recommender[3].modalresponse = 'If not working, use SVC method (https://scikit-learn.org/stable/modules/svm.html#classification) or E”ensemble Classifier (https://scikit-learn.org/stable/modules/ensemble.html)'
          this.recommender[4].modalresponse = 'If you have more than 100k samples, you can use Stochastic Gradient Descent (scikit-learn.org/stable/modules/sgd.html#classification")'
          this.recommender[5].modalresponse = 'If its not working, try kernel approximations (scikit-learn.org/stable/modules/kernel_approximation.html")'
        //}
       
 
      }
      else if (this.userResponses[3]== 'Predict a category' && this.userResponses[5]== 'No'){
        //if (this.userResponses[1]=='10K or above and less than 100K' || this.userResponses[1]=='100K or above'){
          this.recommender[0].modalresponse = 'It seems you have a clustering problem.'
          this.recommender[1].modalresponse = 'If you know the number of categories and you have less than 10K samples, K-means (https://scikit-learn.org/stable/modules/clustering.html#k-means) is a suitable technique for your problem.'
          this.recommender[2].modalresponse = 'If its not working, refer to Spectral clustering (https://scikit-learn.org/stable/modules/clustering.html#spectral-clustering) or Gaussian mixture models (https://scikit-learn.org/stable/modules/mixture.html)"'
          this.recommender[3].modalresponse = 'If you have 10K or more samples, try Mini Batch K-Means (https://scikit-learn.org/stable/modules/clustering.html#mini-batch-k-means)'
          this.recommender[4].modalresponse = 'Finally, if you don’t know the number of categories, and you have less than 10K samples, try Mean Shift(https://scikit-learn.org/stable/modules/clustering.html#mean-shift) or Variational Bayesian Gaussian Mixture(https://scikit-learn.org/stable/modules/mixture.html#bgmm)"'
        //}
      }

      else if (this.userResponses[3]== 'Predict a quantity'){
          this.recommender[0].modalresponse = 'It seems you have a regression problem.'
          this.recommender[1].modalresponse = 'If you have more than 100K samples, Stochastic Gradient Descent (https://scikit-learn.org/stable/modules/sgd.html#regression") is a suitable technique for your problem.'
          this.recommender[2].modalresponse = 'If you have less than 100K samples and there are a few important features, you can try Lasso (https://scikit-learn.org/stable/modules/linear_model.html#lasso), or ElasticNet (https://scikit-learn.org/stable/modules/linear_model.html#elastic-net)")'
          this.recommender[3].modalresponse = 'If not, you can try ridge regression (https://scikit-learn.org/stable/modules/linear_model.html#ridge-regression), or SVR with linear kernel (https://scikit-learn.org/stable/modules/svm.html#regression)'
          this.recommender[4].modalresponse = 'If these dont work, you can try SVR with nonlinear kernel (https://scikit-learn.org/stable/modules/svm.html#regression), or ensemble regressors (https://scikit-learn.org/stable/modules/ensemble.html)'
      }
      else if (this.userResponses[3]== 'Predict a structure' || this.userResponses[3]== 'Not Known'
      || this.userResponses[3]== 'Prediction is not required'){
          this.recommender[0].modalresponse = 'If you are just exploring, you can try dimensionality reduction methods, i.e. Principal component analysis (https://scikit-learn.org/stable/modules/decomposition.html#principal-component-analysis-pca).'
          this.recommender[1].modalresponse = 'If it’s not working and you have less than 10K samples, try Isomap (https://scikit-learn.org/stable/modules/manifold.html#isomap) or Spectral Embedding (https://scikit-learn.org/stable/modules/manifold.html#spectral-embedding).'
          this.recommender[2].modalresponse = 'If non of these work, try Locally Linear Embedding (https://scikit-learn.org/stable/modules/manifold.html#locally-linear-embedding).'
          this.recommender[3].modalresponse = 'If you have 10K samples or more, try Kernel Approximation (https://scikit-learn.org/stable/modules/kernel_approximation.html#kernel-approximation)'  
      }

      else if (this.userResponses[0]== 'No'){
        
        this.recommender[0].modalresponse = 'You can collect data from here (https://datasetsearch.research.google.com/)'
      }

      else{
        // this.recommender[0].modalresponse = 'No Reccommendations found, please answer the questions again!'
        this.recommender[0].modalresponse = 'You can collect data from here(https://datasetsearch.research.google.com/)'
      }

    
    $('#resultModal').modal('show');
      
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
  .recommendations{border:1px solid grey;margin-top: 10px;padding:10px;
  background-color: #FAD877; color: black}

</style>
