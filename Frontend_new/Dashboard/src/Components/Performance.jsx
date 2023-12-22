import React from "react";

export const Performance = () => {
  //   google.charts.load("current", { packages: ["corechart"] });
  //   google.charts.setOnLoadCallback(drawChart);

  //   function drawChart() {
  //     // Set Data
  //     var data = google.visualization.arrayToDataTable([
  //       ["Price", "Size"],
  //       [50, 7],
  //       [60, 8],
  //       [70, 8],
  //       [80, 9],
  //       [90, 9],
  //       [100, 9],
  //       [110, 10],
  //       [120, 11],
  //       [130, 14],
  //       [140, 14],
  //       [150, 15],
  //     ]);
  //     // Set Options
  //     var options = {
  //       title: "Total Time Spent vs. Days",
  //       hAxis: { title: "Days" },
  //       vAxis: { title: "Time Spent" },
  //       legend: "none",
  //     };
  //     // Draw
  //     var chart = new google.visualization.LineChart(
  //       document.getElementById("myChart")
  //     );
  //     chart.draw(data, options);
  //   }
  return (
    <div>
      {" "}
      <div class="component" id="performances">
        <div class="performance course">
          <div class="title">Performance </div>
          <div class="desc">
            <div
              id="myChart"
              style={{ width: "100%", "max-width": "40vw" }}
            ></div>

            {/* <!-- ################################# Performance Chart #######################--> */}
          </div>
        </div>
      </div>
    </div>
  );
};
