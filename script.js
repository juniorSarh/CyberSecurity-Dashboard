window.onload = function () {
  // Plotly Bar Graph
  const xArray = ["Risk Management tracker", "App Security protocol", "Information Security", "Operational Security", "Disaster Recovery Planning"];
  const yArray = [55, 49, 44, 24, 15];

  const barData = [
    {
      x: xArray,
      y: yArray,
      type: "bar",
      marker: { color: "rgba(0,0,255,0.6)" },
    },
  ];

  const barLayout = { title: "Security Nexus" };
  Plotly.newPlot("myPlot", barData, barLayout);

  // Google Charts
  // google.charts.load("current", { packages: ["corechart"] });
  // google.charts.setOnLoadCallback(drawGoogleChart);

  // function drawGoogleChart() {
  //   const data = google.visualization.arrayToDataTable([
  //     ["Price", "Size"],
  //     [50, 7],
  //     [60, 8],
  //     [70, 8],
  //     [80, 9],
  //     [90, 9],
  //     [100, 9],
  //     [110, 10],
  //     [120, 11],
  //     [130, 14],
  //     [140, 14],
  //     [150, 15],
  //   ]);

  //   const options = {
  //     title: "Status on Cloud at a Runtime",
  //     hAxis: { title: "Data" },
  //     vAxis: { title: "status" },
  //     legend: "none",
  //   };

  //   const chart = new google.visualization.LineChart(
  //     document.getElementById("myChart")
  //   );
  //   chart.draw(data, options);
  // }

  // Chart.js Line Chart
  const ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Internet", "Cloud Storage", "Support Infra", "Game Project Pipieline", "IoT Device Connection", "Access Control", "Safe Mode Boot "],
      datasets: [
        {
          label: "Uptime (%)",
          data: [99.5, 99.6, 99.8, 100, 99.7, 99.9, 99.6],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          min: 99.0,
          max: 100,
        },
      },
    },
  });
};

// pie chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  const data = google.visualization.arrayToDataTable([
    ["Status", "Mhl"],
    ["Network security status", 54.8],
    ["Cloud storage status", 48.6],
    ["Cloud benefits & risk", 44.4],
    ["Online applications", 23.9],
    ["config tools", 14.5],
  ]);

  // Set Options
  const options = {
    title: "Cloud Computing",
  };

  // Draw
  const chart = new google.visualization.PieChart(
    document.getElementById("myChart")
  );
  chart.draw(data, options);
}

// Sidenav controls
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
