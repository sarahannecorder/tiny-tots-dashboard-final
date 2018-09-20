// HEADER COMPONENT

'use strict';


Vue.component('main-menu', {
    template: `
              <ul class="tabs" v-if="menus.length">
                <li v-for="menu in menus" class="hvr-grow">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">{{ menu.title }}</a>
                </li>
              </ul>
            `,
    data: function() {
        return menu;
    }
});

var menus = new Vue({
    el: '#mainmenu'
})