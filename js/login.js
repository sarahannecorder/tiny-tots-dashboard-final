// LOGIN COMPONENT

'use strict';


Vue.component('login', {
    template: `
              <form class="login-form middle">
              <img src="img/logo.svg" class="logo-resized">
               <input v-on:click="focus" type="text" id="username" placeholder="Username">
                <input v-on:click="scream" type="password" id="password" placeholder="Password">
                <input v-on:click="checkpass" type="submit" value="Login" class="btn success">
                <a href="#" class="forgot-link">Forgot Password?</a>
              </form>
            `,
    methods: {
        checkpass: function() {
            event.preventDefault();

            var pass = document.getElementById('password').value;
            var user = document.getElementById('username').value;

            if (user === 'tinytots' && pass === '123456') {


                window.location = "./dashboard.html";

            } else {
                alert('Details or Password Incorrect!');
            }
        },

        focus: function() {
            var input = document.getElementById('username');

            input.style.borderColor = "none";

        },
        scream: function() {
            alert("Please enter your details");

        }
    }
});



var login = new Vue({
    el: '#login'
});