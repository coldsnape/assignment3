var app = angular.module('simple-chart', []);
google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/data').success(function(data){
    
  var dataArray = formatDataForView(data);
  
  dataArray.splice(1,1);

  var table = google.visualization.arrayToDataTable(dataArray, false);
  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  
   var options = {
      title: 'Nitrogen Consumed by Crops from 1965 - 2010',
      hAxis: {title: 'Year'},
      vAxis: {title: 'Nitrogen in Tons'},
      //curveType: 'function',
      legend: { position: 'bottom' },
      //colors: ['#1b9e77', '#d95f02', '#7570b3', '#db9500']
      };
  chart.draw(table, options);

  });
}]);

function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    //get the keys
    for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    //get the values
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          dataEntry.push(parseInt(value[prop], 0));
          }
        
        dataArray.push(dataEntry);
    });
  
    return dataArray;
}