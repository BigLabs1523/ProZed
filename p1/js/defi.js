// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Novembre", "Décembre", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [{
      label: "Ordures ménagères",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [30, 40, 26, 42, 34, 33, 28, 31]
    }, {
        label: "Compost",
        pointBorderColor: "rgba(148,22,150,0.5)",
        pointBackgroundColor: "rgba(220,220,220,0.8)",
                            
        lineTension: 0.3,
        backgroundColor: "rgba(220,220,220,0.8)",
        borderColor: "rgba(148,22,150,0.5)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [35, 60, 56, 42, 37, 33, 24, 32]
    }, {
        label: "Verre",
        borderColor: "rgba(270,100,240,0.5)",
        backgroundColor: "rgba(220,120,220,0.8)",

        data: [35, 60, 56, 42, 37, 33, 24, 32]
    }, {
        label: "Tri sélectif",
        borderColor: "rgba(43,200,120,0.5)",
        backgroundColor: "rgba(120,252,220,0.8)",

        data: [35, 60, 56, 42, 37, 33, 24, 32]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 60,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
