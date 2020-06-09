<template>
<div class="text-center"> 
    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <div class="col-md-10 col-lg-10 col-sm-10 col-xs-10"></div>
        <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad"> 
            <router-link to="/Login">
            <button id="generate_button" class="btn brand-btn1">Login</button>
            </router-link>
        </div> 
        <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"> 
            <router-link to="/Register">
            <button id="generate_button" class="btn brand-btn1">Register</button>
            </router-link>
        </div> 
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad"> 
            <h1> BiDaML </h1>
        </div>
    </div>
  
  <!-- <p class="subheading1">Big Data Analytics Modeling Languages (BiDaML) helps end-users and domain experts in developing
    data analytics solutions
  </p> -->
  <div class=" col-md-12 col-lg-12 col-sm-12 col-xs-12">
       <p class="home_text">Big Data Analytics Modeling Languages (BiDaML) helps end-users and domain experts in developing
    data analytics solutions
      </p>
    <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 "></div>
   
    <div class="col-md-7 col-lg-7 col-sm-7 col-xs-7  content_div">
        
    </div>
  
  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-top-10 ">
    <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad"></div>
    <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6 no-lr-pad content_div">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature">An easy to use <b>drag and drop</b> based tool</span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature">Suite of visual languages <b>to support end users </b>in designing data analytics solutions</span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature">Help applying data analytics to <b>improve decision-making</b></span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature">Help discovering unknown patterns and insights using <b>visualization techniques and data mining</b></span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature">Defines a common language to <b>bridge the gap </b> business managers and data scientists</span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature">Automatically generates <b>reports, recommendations and source code</b></span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature"><b>Recommends</b> solutions, datasets, similar paper, source codes, etc</span>
            </div>
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
            <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1"></div> -->
            <div class="col-md-1 col-lg-1 col-sm-1 col-xs-1 no-lr-pad text-right">
                <span><i class="fa fa-check check"></i></span>
            </div>
            <div class="col-md-9 col-lg-9 col-sm-9 col-xs-9 no-lr-pad text-left">
                <span class="feature"><b>Save costs and save time;</b> collaborate, design and re-use data analytics solutions</span>
            </div>
        </div>   
    </div>
    <!-- right part stats from here -->
    <!-- <div class="col-md-3 col-lg-3 col-sm-3 col-xs-3">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 homepage1">
        </div>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 homepage2">
            <span><i class="fa fa-check check"></i></span>
        </div> -->

     <!-- </div> right part ends here -->
    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-50 homepage1"> 
        <img src="../assets/home1.png">
    </div>

    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-50 homepage1 margin-bottom-20"> 
        <img src="../assets/home2.jpg" width="85%">
    </div>
     
     
  </div>
</div>
</div>
  
</template>

<style scoped>
.check{font-size: 25px;margin-right:10px}
.feature{font-size: 18px;}
.content_div{margin-left: 95px}
.homepage1{ margin-top: 90px;}
.home_text{font-size: 17px}
.main_content{border:1px solid black;}

</style>

