var canvas = document.getElementById("sales-by-day");
var jsonfile = {
    "jsonarray": [{
        "day": "aug",
        "sales": 15
    }, {
        "day": "sept",
        "sales": 16
    }, {
        "day": "oct",
        "sales": 19
    }]
};

var labels = jsonfile.jsonarray.map(function(e) {
    return e.day;
});
var data = jsonfile.jsonarray.map(function(e) {
    return e.sales;
});;

var ctx = canvas.getContext('2d');
var config = {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'target sales',
            data: data,
            options: {
                legend: {
                    labels: {
                        defaultFontFamily: 'Open Sans'
                    }

                }
            },

            backgroundColor: '#CD7BB3'

        }]
    }
};

var chart = new Chart(ctx, config);