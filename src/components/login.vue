<template> 
<div class="container">
  <div class="note note--down"><p>{{ note }}</p></div>
  <div class="note1 note--down"><p>{{ note1 }}</p></div>
  <div class="login">
    <header class="login--header">
      <span class="login_heading">Log In and start using BiDaML</span>
    </header>
    <section class="login--section">
      <form class='login--form' @submit.prevent='makeAuth'>
        <fieldset class="">
          <input type="text" v-model="email"  placeholder='Registered Email id' required @focus='inputFocus' />
          <svg viewbox='0 0 100 1' class='line'>
            <path class='line--default' d='M0 0 L300 0'></path>
          </svg>
        </fieldset>
        <fieldset>
          <input type="password"  v-model="password" placeholder='Password' @focus='inputFocus' required />
          <svg viewbox='0 0 100 1' class='line'>
            <path class='line--default' d='M0 0 L300 0'></path>
          </svg>
        </fieldset>
        <fieldset>
          <button type='submit' class='btn'>Login</button>
          <div class="margin-top-10">
            <router-link to="/"><span class="loin_text_color font-size-12">Return to Home Page</span></router-link>
          </div>
          <div class="">
            <router-link to="/Register"><span class="loin_text_color font-size-12">Go to User Registration</span></router-link>
          </div>
        </fieldset>
         <div style="text-align:left;font-size:12px">
              <span>For Guest Account use:</span><br>
              <span>Account Id: guest@bidaml.com</span> <br>
              <span>Password: 123456789</span>
          </div>
      </form>
    </section>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login_form',
    data(){
        return {
            note: '',
            note1: '',
            email: '',
            password: '',
   
        }
    },


    watch: {
    note () {
      const note = document.querySelector('.note')
      if (this.note.length) {
        note.classList.add('note--up')
      } else {
        note.classList.remove('note--up')
        note.classList.add('note--down')
      }
    },

    note1 () {
      const note1 = document.querySelector('.note1')
      if (this.note1.length) {
        note1.classList.add('note--up')
      } else {
        note1.classList.remove('note--up')
        note1.classList.add('note--down')
      }
    }
  },

  
   methods: {
     
    makeAuth (e) {
      // write you own auth logic here
      // if (this.login_id =='guest' && this.login_password == '00000') {
      //     this.note1 = 'Login Successful'
      //     this.$router.push('form');
      // }
      // else{
      //     this.note = 'Login failed'
      // }

      // Sign in with email and pass.
        // [START authwithemail]
        var email = this.email;
        var password = this.password;
        // toast_it("Logging in");
        
        // firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        //    alert("Login Successful");
           
        // })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => { 
          this.$router.push('apphome');
          toast_it("Logged in");
          //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        // toast_it("Logging in");
        console.log(data.user.email);
        // firebase.database().ref('user_id').push(database_tasks)
        //     .then((data) => { console.log(data);})
        //     .catch((error) => { console.log(error);})
        })

        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            // alert('Wrong password.');
            toast_it(errorMessage);
          } else {
            //alert(errorMessage);
            toast_it(errorMessage);
          }
          console.log(error);
         
          document.getElementById('quickstart-sign-in').disabled = false;
        });
        // [END authwithemail]

        firebase.auth().onAuthStateChanged(user => {
          if(user) {
            // this.$router.push('apphome');
            
          }
        });
        
        
    },
    inputFocus () {
      this.note = ''
      this.note1 = ''
    },
  
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.5;
 
}

/* body {
  background: rgb(30, 118, 161);
} */

body, input, button {
  font-size: 1.2rem;
}
/* .input_spacing{height: 50px;} */
fieldset {
  border: none;
}
.login_heading {color:Black}
/* .login_heading {color: #4AC4D3} */
.container {
  background: none;
  width: 800px;
  margin: 12rem auto 0;
  text-align: center;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, .15);
  position: relative;
}
.note {
  background: #FF9E80;
  padding: .75rem 1.5rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 100%;
  width: 100%;
  z-index: 0;
  transition: all .2s ease-out;
}
.note1 {
  background: rgb(0, 204, 0);
  padding: .75rem 1.5rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 100%;
  width: 100%;
  z-index: 0;
  transition: all .2s ease-out;
}
.note--down {
  transform: translateY(100%);
}

.note--up {
  transform: translateY(0);
}

.loin_text_color{color: #837F76}

.login {
  z-index: 1;
  position: relative;
  /* background: rgb(255, 204, 101); */
  /* background: white; */
  /* background-color: #f1dfd1; */
  /* background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%); */
  /* background: #EECFB3; */
  background-image: linear-gradient(-45deg, #E6C3A5, rgb(255, 204, 101));
  /* background-color: #f9ea8f;
  background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%); */  
  padding: .75rem 1.5rem 1.5rem;
  box-sizing: border-box;
  color: #757575;
}

.login--header {
  margin-bottom: 1rem;
}

.login--header span {
  font-size: 2rem;
}

.btn {
  /* background:rgb(255, 204, 101); */
  background:black;
  box-shadow: inset 0 0 2px 0 #EEEEEE;
  outline: none;
  border: 1px solid black;
  padding: .3rem 1rem .4rem;
  cursor: pointer;
  border-radius: .25rem;
  margin-top: 0rem;
  color: white;
  width: 25%;
}
.btn:hover{background: transparent;color:#000;border:1px solid black; }

.btn:active {
  box-shadow: inset 2px 2px 2px 0 #E0E0E0;
}

input {
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  padding: .5rem 1rem;
  box-sizing: border-box;
  background: none;
}

.line {
  transform: translate(0, -1rem);
  stroke-width: 1;
  margin-top: 10px;
  height: 20px;
  
}

.line--default {
  stroke: white;
  transition: all .2s ease-out;
}

input:focus + svg > .line--default {
  stroke:green;
}

input:focus:invalid + svg > .line--default {
  stroke: #FF5722;
}

</style>