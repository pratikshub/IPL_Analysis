var conversionCSvtoJSON = require('../conversion');

//Bowler's Economy Function
function EconomicBowlers(){
var obj = conversionCSvtoJSON('../matches.csv');
var obj1 = conversionCSvtoJSON('../deliveries.csv');
let result={};
var id=[];
obj.map(c=>
    {
    if(c["season"]==="2015")
     {
        c["id"]
         if(!id.includes(c["id"])){
             id.push(c["id"])
         }
     }
    })
    let res={};
    obj1.map(ele=>{
        if(id.includes(ele["match_id"]))
        {
            if(result.hasOwnProperty(ele["bowler"])&& res.hasOwnProperty(ele["bowler"]))
            {   res[ele["bowler"]]["run"]+=parseInt(ele["total_runs"])
                res[ele["bowler"]]["ball"]++
                let eco=0;
                eco=res[ele["bowler"]]["run"]/(res[ele["bowler"]]["ball"]/6)
                result[ele["bowler"]]=parseFloat(eco.toFixed(2));
                
               
            }
            else
            {   res[ele["bowler"]]={}
                res[ele["bowler"]]["run"]=parseInt(ele["total_runs"])
                res[ele["bowler"]]["ball"]=1
                let eco=0;
                eco=res[ele["bowler"]]["run"]/(res[ele["bowler"]]["ball"]/6)
                result[ele["bowler"]]=parseFloat(eco.toFixed(2));
               
            }
        }

    })
    //console.log(res)
    //delete res;
var sortable = Object.entries(result)
    sortable.sort(function(a, b) {
        return a[1] -b[1]
    });

    var orderedList = {};
    for (var i = 0; i < 10; i++) {
        orderedList[sortable[i][0]] = sortable[i][1];
    }
result=orderedList;
// To JSON
var newres=[];
         for(let ele in result ){
             newres.push({name:ele,y:result[ele]})
         }
         //console.log(newres)
const fs = require('fs')
    var jsonData = JSON.stringify(newres);
    fs.writeFile('C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/EconomicBowlers.json',jsonData, (err) => { 
        if (err) throw err; 
    }) 
}
EconomicBowlers();
