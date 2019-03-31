function loadDoc(path) {
    var  data=[];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET",path , false);
    xhttp.send();
    return data;
  }

//Plot charts

function plotMatchesPerYear(){
    let matches=loadDoc("file:///C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/matchesPlayedOverYears.json");
   // console.log(matches, "matches");
    
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Matches Per Year'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total Matches'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        "series": [
            {
                "name": "Years",
                "colorByPoint": true,
                "data":matches,
            }
        ]
    })
}
plotMatchesPerYear();