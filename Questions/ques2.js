var conversionCSvtoJSON = require('../conversion');

// MatchesWonPerYearByTeam
function MatchesWonPerYearByTeam()
{
    var obj= conversionCSvtoJSON('../matches.csv');
    let result={};
    obj.map((ele)=>{
        if(ele["winner"]!=="")
        {
            if(result.hasOwnProperty(ele["season"]))
            {
                if(result[ele["season"]].hasOwnProperty(ele["winner"]))
                {
                    result[ele["season"]][ele["winner"]]++
                }
                else
                {
                    result[ele["season"]][ele["winner"]]=1
                }
            }
              else
            {
                result[ele["season"]]={}
                result[ele["season"]][ele["winner"]]=1
            }
        }
    })
    
// Conversion to JSON
    const fs = require('fs')
    var jsonData = JSON.stringify(result);
    fs.writeFile('C:/Users/Administrator/Desktop/propel_school/ipl_2/JSON_Files/MatchesWonPerYearByTeam.json',jsonData, (err) => 
    { 
        if (err) throw err; 
    }) 
}
MatchesWonPerYearByTeam();
