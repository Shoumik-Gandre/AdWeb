let adnames = []
let adclicks = []
let colorlist = []

ads.forEach(element => {
    adnames.push(element.fields.name);
    adclicks.push(element.fields.clicks);
    color = 'rgba(' + Math.ceil(Math.random()*255 + 1) + ', ' + Math.ceil(Math.random()*255 + 1) + ', ' + Math.ceil(Math.random()*255 + 1) + ', ' + 0.2 +')';
    colorlist.push(color);
    console.log(color);
    
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: adnames,
        datasets: [{
            label: 'Clicks',
            data: adclicks,
            backgroundColor: colorlist
            /*
            [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]*/,
            borderColor: colorlist
            /*[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ]*/,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) { if (Number.isInteger(value)) { return value; } },
                    stepSize: 1
                }
            }]
        }
    }
});