var MONTHS = ['September'];
var config = {
    type: 'line',
    data: {
        labels: ['01/09', '31/09'],

        datasets: [{
            label: 'Zahra',
            borderColor: '#DBAACB',
            backgroundColor: '#DBAACB',
            data: [100, 200

            ],
        }, {
            label: 'Candice',
            borderColor: '#F4D495',
            backgroundColor: '#F4D495',
            data: [40, 80, 100, 150

            ],
        }, {
            label: 'Thandie',
            borderColor: '#B3D8D6',
            backgroundColor: '#B3D8D6',
            data: [20, 300, 30, 200],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Employee sale value overview'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'September'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value in Rand'
                }
            }]
        }
    }
};
window.onload = function() {
    var ctx = document.getElementById('overview').getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    window.myLine = new Chart(ctx, config);
};
document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });
    window.myLine.update();
});
var colorNames = Object.keys(window.chartColors);
document.getElementById('addDataset').addEventListener('click', function() {
    var colorName = colorNames[config.data.datasets.length % colorNames.length];
    var newColor = window.chartColors[colorName];
    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        borderColor: newColor,
        backgroundColor: newColor,
        data: [],
    };
    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }
    config.data.datasets.push(newDataset);
    window.myLine.update();
});
document.getElementById('addData').addEventListener('click', function() {
    if (config.data.datasets.length > 0) {
        var month = MONTHS[config.data.labels.length % MONTHS.length];
        config.data.labels.push(month);
        config.data.datasets.forEach(function(dataset) {
            dataset.data.push(randomScalingFactor());
        });
        window.myLine.update();
    }
});
document.getElementById('removeDataset').addEventListener('click', function() {
    config.data.datasets.splice(0, 1);
    window.myLine.update();
});
document.getElementById('removeData').addEventListener('click', function() {
    config.data.labels.splice(-1, 1); // remove the label first
    config.data.datasets.forEach(function(dataset) {
        dataset.data.pop();
    });
    window.myLine.update();
});