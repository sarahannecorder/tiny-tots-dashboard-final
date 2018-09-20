// PROFILE COMPONENT

'use strict';

var profile = {
    status: false,
    image: 'img/logo.svg'
}


Vue.component('profile', {
    template: `<div class="profile-container">
              <div class="img-container">
                <img v-bind:src="image">
              </div>
              <div class="profile-img">
                <img src="img/profile-pic.png" class="hvr-grow">
              </div>
              <div class="user-status">
                <i v-bind:class="{ active: status }"></i>
                <p v-if="status">Welcome back,<br>Sarah</p>
                <p v-else>Welcome back, Sarah</p>
              </div>

              <div class="profile-links">
                  <ul>
                    <li><i class="hvr-grow fas fa-cog"><a href="#" class="btn">settings</a></i></li>
                    <li><i class="hvr-grow fas fa-sign-out-alt"><a href="signed-out.html" class="btn">sign out</a></i></li>
                  </ul>
              </div>
            </div>
            `,
    data: function() {
        return profile;
    }
})

var profile = new Vue({
    el: '#profile'
})