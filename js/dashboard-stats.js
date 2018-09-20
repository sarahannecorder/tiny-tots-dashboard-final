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
var doughnutConfig = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [20, 30, 60],
            backgroundColor: [
                '#DBAACB',
                '#F4D495',
                '#B3D8D6'

            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Zahra',
            'Candice',
            'Thandie'

        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'September Orders'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
var stackedConfig = {
    type: 'bar',
    data: barChartData,
    options: {
        title: {
            display: true,
            text: 'September sales target % per employee'

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
}


window.onload = function() {
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    Chart.defaults.global.defaultFontSize = 16;

    var stackedCtx = document.getElementById('stacked-graph').getContext('2d');
    window.myBar = new Chart(stackedCtx, stackedConfig);

    var areaCtx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(areaCtx, doughnutConfig);
};