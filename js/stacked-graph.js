var barChartData = {
    labels: ['Zarha', 'Candice', 'Thandi'],
    datasets: [{
        label: 'actual',
        backgroundColor: '#CD7BB3',
        stack: 'Stack 0',
        data: [20, 10, 30]
    }, {
        label: 'target',
        backgroundColor: '#F4D495',
        stack: 'Stack 0',
        data: [40, 50, 60

        ]
    }]

};
window.onload = function() {
    var ctx = document.getElementById('stacked-graph').getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    Chart.defaults.global.defaultFontSize = 16;
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            title: {
                display: true,
                text: 'sales target'

            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
};

document.getElementById('randomizeData').addEventListener('click', function() {
    barChartData.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });
    window.myBar.update();
});