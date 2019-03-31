var conversionCSvtoJSON = require('../conversion');
//ExtraRunsPerTeam Function
function ExtraRunsPerTeam(){
var obj = conversionCSvtoJSON('../matches.csv');
var obj1 = conversionCSvtoJSON('../deliveries.csv');
let result={};
var id=[];

obj.map(c=>{
    if(c["season"]==="2016"){
        c["id"]
         if(!id.includes(c["id"])){
             id.push(c["id"])
         }
    }})

obj1.map(
    run_scored=>{
                 if(id.includes(run_scored["match_id"]))
                  { 
                 result.hasOwnProperty(run_scored["bowling_team"])?
                 result[run_scored["bowling_team"]]+=parseInt(run_scored["extra_runs"]):
                 result[run_scored["bowling_team"]]=parseInt(run_scored["extra_runs"])
                 }
               }
         )

         var newres=[];
         for(let ele in result ){
             newres.push({name:ele,y:result[ele]})
         }
         
    const fs = require('fs')
    var jsonData = JSON.stringify(newres);
    fs.writeFile('C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/ExtraRunsPerTeam.json',jsonData, (err) => { 
        if (err) throw err; 
    }) 
}
ExtraRunsPerTeam();

