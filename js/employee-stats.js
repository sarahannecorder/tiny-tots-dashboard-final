// Employee Info

'use strict';


Vue.component('employee-stats', {
    props: [
        "img",
        "name",
        "informationBirth",
        "informationDate",
        "monthlyTarget",
        "monthlySales",
        "monthlyGraph"
    ],
    /*
    	<img src="{{img}}" alt="{{name}}" />
    */
    template: `
		<div class="employee-card">
			<div class="profile-banner">
				<div class="portrait" :style="{backgroundImage: 'url('+img+')'}"></div>
				<h4>{{name}}</h4>
			</div>
			<div class="information">
				<h3>Information</h3>
				<div class="birth">{{informationBirth}}</div>
				<div class="date">{{informationDate}}</div>
			</div>
			<div class="monthly">
				<h3>Performance</h3>
				<div class="target">{{monthlyTarget}}</div>
				<div class="sales">{{monthlySales}}</div>
			</div>
		</div>
	`
});

var salesmanStats = new Vue({
    el: '#employee-stats'
})