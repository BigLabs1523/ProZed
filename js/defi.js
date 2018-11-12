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
      backgroundColor: "rgba(138,138,138,0.2)",
      borderColor: "rgba(0,0,0,1)",
      data: [30, 40, 26, 42, 34, 33, 28, 31]
    }, {
        label: "Compost",
        borderColor: "rgba(0,174,21,0.5)",
        backgroundColor: "rgba(0,120,21,0.6)",
        data: [35, 60, 56, 32, 27, 33, 24, 12]
    }, {
        label: "Verre",
        borderColor: "rgba(0,188,226,0.5)",
        backgroundColor: "rgba(123,234,255,0.8)",

        data: [35, 64, 16, 32, 37, 53, 54, 12]
    }, {
        label: "Tri sélectif",
        borderColor: "rgba(219,181,0,0.5)",
        backgroundColor: "rgba(255,255,25,0.8)",

        data: [35, 40, 66, 42, 17, 33, 24, 12]
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
