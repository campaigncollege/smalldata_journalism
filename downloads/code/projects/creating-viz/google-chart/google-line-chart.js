google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
  
    // The data goes here
    var data = google.visualization.arrayToDataTable([
        ["Year", "U.S.", "Germany"],
        ["2003", 6, 9.8],
        ["2004", 5.6, 10.2],
        ["2005", 5.2, 11.5],
        ["2006", 4.7, 10.4],
        ["2007", 4.5, 8.9],
        ["2008", 5, 7.8],
        ["2009", 9, 7.8],
        ["2010", 9.9, 7.3],
        ["2011", 9, 6.1],
        ["2012", 8.1, 5.5],
        ["2013", 7.5, 5.4]
    ]);

    var options = {
      title: 'Unemployment Rate, U.S. vs. Germany'
    };

    // this "Id" part is necessary:
    var chart = new google.visualization.LineChart(document.getElementById('chart-holder'));

    chart.draw(data, options);
}