// DASH MENU COMPONENT

'use strict';

var menu2 = {
    title: 'manage dashboard',
    menus: [{
            title: 'Edit Page ',
            link: 'darkmode.html',
            icon: 'fa fa-plus-circle',
            isActive: true
        },
        {
            title: 'Add New Data',
            link: 'editsections.html',
            icon: 'fa fa-pencil',
            isActive: false

        }
    ]
}


Vue.component('dash-menu', {
    template: `<div class="dash-menu">
              <h3>{{ title }}</h3>
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link">
                    {{ menu.title }}
                    <i :class="menu.icon"></i>

                  </a>
                  </li>

              </ul>
            </div>
            `,
    data: function() {
        return menu2;
    }
})

var dashMenu = new Vue({
    el: '#dashmenu'
})