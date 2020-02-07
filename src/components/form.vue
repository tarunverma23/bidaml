<template>
    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 margin-10">
       <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
              <div class="col-md-10 col-lg-10 col-sm-10 col-xs-10 no-lr-pad">
                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                  <h1 class="">BiDaML Brainstorming </h1>
                </div>
              </div>
        </div>
        <p class="text-justify border-bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                  <button id="generate_button" class="btn brand-btn1">Generate</button>
                </div>
        </div>
        
     <!-------------------------------- Modal starts ---------------------------------->
      <div class="modal fade" id="generate_modal" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title"><b>Auto Generate Diagram</b></h4>
            </div>
            <div class="">
              <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div class="text-center margin-top-20">
                <p>Business Requirement Analysis</p>
                </div>

                <!--request demo form starts here -->
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <label for="name" class="padding-top-10">
                        What is your problem?
                        <!-- <span class="color-brand">*</span> -->
                      </label>
                    </div>
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <input class="form-control width-100" type="text" id="form_problem" name ="" placeholder="Enter the problem">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <label for="name" class="padding-top-5">
                        What are your objectives?
                        <!-- <span class="color-brand">*</span> -->
                      </label>
                    </div>
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <input class="form-control width-100" type="text" id="form_hlt" name ="" placeholder="Enter the objective">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <label for="name" class="padding-top-5">
                        Who are you targeting/what is your audience?
                        <!-- <span class="color-brand">*</span> -->
                      </label>
                    </div>
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <input class="form-control width-100" type="text" id="form_targeting" name ="" placeholder="Enter the target">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                      <label for="purpose_opt">Do you have data?
                      </label>
                      <!-- <span class="color-brand">*</span> -->
                      <select class="form-control woo-inputs-sm" name="Purpose" id="joinus_position">
                        <option> Yes</option>
                        <option>No</option>
                      </select>
                  </div>
                    
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                  <div class="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                      <label for="purpose_opt">If yes,how many samples you have/expected to have?
                      </label>
                      <!-- <span class="color-brand">*</span> -->
                      <select class="form-control woo-inputs-sm" name="Purpose" id="joinus_position">
                        <option>Not Known</option>
                        <option>Less than 50</option>
                        <option>50 or above and less than 10KYes</option>
                        <option>10K or above and less than 100K</option>
                        <option>100K or above</option>
                      </select>
                  </div>
                    
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                      <label for="purpose_opt">If no,do you know where you can collect/purchase data?
                      </label>
                      <!-- <span class="color-brand">*</span> -->
                      <select class="form-control woo-inputs-sm" name="Purpose" id="joinus_position">
                        <option> Yes</option>
                        <option>No</option>
                      </select>
                  </div>
                   
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                      <label for="purpose_opt">Are you aiming to predict a category/quantity/structure?
                      </label>
                      <!-- <span class="color-brand">*</span> -->
                      <select class="form-control woo-inputs-sm" name="Purpose" id="joinus_position">
                        <option>Prediction is not required</option>
                        <option>Not known</option>
                        <option>Predict a category</option>
                        <option>Predict a quantity</option>
                        <option>Predict a structure</option>
                      </select>
                  </div>
                    
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                      <label for="purpose_opt">If predicting a category, do you know the number of categories?
                      </label>
                      <!-- <span class="color-brand">*</span> -->
                      <select class="form-control woo-inputs-sm" name="Purpose" id="joinus_position">
                        <option> Yes</option>
                        <option>No</option>
                      </select>
                  </div>
                    
                  </div>
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <!-- <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div> -->
                    <div class="form-group col-md-12 col-lg-12 col-sm-12 col-xs-12 no-lr-pad">
                      <label for="purpose_opt">Do you have labelled data?
                      </label>
                      <!-- <span class="color-brand">*</span> -->
                      <select class="form-control woo-inputs-sm" name="Purpose" id="joinus_position">
                        <option> Yes</option>
                        <option>No</option>
                      </select>
                  </div>
                    
                  </div>
                  
                  <!-- <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <div class="col-md-1 col-lg-1 col-sm-1 col-xs-0"></div>
                    <div class="col-md-2 col-lg-2 col-sm-2 col-xs-4">
                      <label for="message">Message:</label>
                    </div>
                    <div class="col-md-8 col-lg-8 col-sm-8 col-xs-8 pad-0">
                      <textarea  class="form-control resize-none" name="Message" id="demo_message" placeholder="Write here"></textarea>
                    </div>
                  </div> -->
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 padding-top-20">
                    <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 pad-0">
                      <button type="button" class="btn brand-btn1 contact-btn pull-right" id="auto_generate_form_button">Submit</button>
                    </div>
                  </div>
                  <!-- </div>  -->
                <!-- form ends here -->
              </div>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn brand-btn contact-btn " data-dismiss="modal">Send Request</button> -->
              <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            </div>
          </div>
        </div>
      </div> 
      <!-- ----------------------------model ends here ------------------------------------>
       <div class="woo-toast"></div>
       
    </div>
    
</template>

<script>

        // modal click event starts here
        $(document).on('click', '#generate_button', function(){
          $('#generate_modal').modal('show');

        });

         // toast_it function
        function toast_it(msg){
            $('.woo-toast').html(msg);
            $('.woo-toast').addClass("show");
            setTimeout(function(){ $('.woo-toast').removeClass("show"); }, 4800);
        }
        // toast_it function ends

        //form action starts here
        $(document).on('click', '#auto_generate_form_button', function(){

          var problem= $("#form_problem").val();
          var high_level_task= $("#form_hlt").val();
          var targeting= $("#form_targeting").val();
          // var samples= $("#form_sample").val();

          
          if(problem=='')
          {
            toast_it("Please enter the problem");
            return false;
          }

          if(high_level_task!='' && targeting!='')

          {
            toast_it("2nd condition");
            $( '#form_output' ).show();
            
          }

          else{
            toast_it("3rd condition");

          }

        }); 
        //form action ends here
</script>