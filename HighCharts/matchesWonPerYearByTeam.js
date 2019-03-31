function loadDoc(path) {
    var  data=[];
    var XMLHttpRequest=require("xmlhttprequest");
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

function plotMatchesWon(){
    let matchesWon=loadDoc("file:///C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/matchesWonPerYearByTeam.json");
    let years=[];
    let teams=[];
    for(let k in matchesWon)
    {
        years.push(k);
        for(let team in matchesWon[k])
        {
            if(teams.indexOf(team)<0)
            {
                teams.push(team);
            }
        }
    }

    let ans=[];
    for(let t of teams){
        let ob={"name":t,"data":[]};
        for(let k in matchesWon){
            if(matchesWon[k].hasOwnProperty(t))
            {
                ob["data"].push(matchesWon[k][t]);
            }
            else
            {
                ob["data"].push(0);
            }
        }
        ans.push(ob);
    }
    //console.log(ans,"2");
    Highcharts.chart('container1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Matches won by all team in all years'
        },
        xAxis: {
            categories: years,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches won by all team in all years'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: ans,
    });
}
plotMatchesWon();