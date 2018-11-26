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
        backgroundColor: "rgba(23,32,42,0.1)",
        borderColor: "rgba(23,32,42,1)",
        data: [49, 47, 35, 31, 31, 30, 25, 22]
      },{
          label: "Tri sélectif",
          borderColor: "rgba(219,181,0,1)",
          backgroundColor: "rgba(219,181,0,0.05)",
          data: [31, 24, 25, 19, 21, 21, 20, 19]
      },{
          label: "Verre",
          borderColor: "rgba(54,153,199,1)",
          backgroundColor: "rgba(54,153,199,0.05)",
          data: [26, 23, 26, 15, 21, 18, 20, 17]
      },{
        label: "Compost",
        borderColor: "rgba(20,90,50,1)",
        backgroundColor: "rgba(25,111,61,0.05)",
        data: [26, 28, 32, 25, 32, 32, 32, 29]
    } ],
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
