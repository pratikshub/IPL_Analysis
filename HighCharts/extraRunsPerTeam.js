function loadDoc(path) {
    var  data=[];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(this.responseText);
    //    console.log(data);
      }
    };
    xhttp.open("GET",path , false);
    xhttp.send();
    // console.log(data);
    return data;
  }

//Plot charts

function plotextra(){
    let matches=loadDoc("file:///C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/extraRunsPerTeam.json");
    console.log(matches, "matches");
    
    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Extra Runs'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Extra Runs'
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
        ],
    })
}
plotextra();