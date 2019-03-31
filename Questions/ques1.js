var conversionCSvtoJSON = require('../conversion');

function MatchesPlayedOverYear(){
    var matchesData = conversionCSvtoJSON('../matches.csv');
    let result={};

    matchesData.map(obj => { result.hasOwnProperty(obj["season"])?result[obj["season"]]++:result[obj["season"]]=1})
   
   
    //To JSON
    var newres=[];
    for(let ele in result )
    {
        newres.push({name:ele,y:result[ele]})
    }
    
    const fs = require('fs')
    var jsonData = JSON.stringify(newres);
    fs.writeFile('C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/MatchesPlayedOverYears.json',jsonData, (err) => { 
        if (err) throw err; 
    }) 
}
MatchesPlayedOverYear();
