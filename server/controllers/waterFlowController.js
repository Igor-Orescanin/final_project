const WaterFlow = require('../models/waterFlow');


exports.daysWaterFlow = async(req,res) => {

    let d = new Date();
    d.setDate(d.getDate()-3030);
    console.log(d)

    const readings = await WaterFlow.aggregate([
        {$match: {'ts': {$gt: d}}},
        {
            "$project": {
                "ts": 1,
                "waterFlowCounter": 1
            }
        },
        { 
            "$group": {
                "_id": {
                    "interval": {
                        "$subtract": [ 
                            { "$minute": "$ts" },
                            { "$mod": [{ "$minute": "$ts"}, 1 ] }
                        ]
                    }
                },

                "daylyReading": { "$push": {"ts": "$ts", "waterFlowCounter": "$waterFlowCounter" } }
            }
        },
        {
            "$project":{
                "_id": 0,
                "daylyReading": 1
            }
        }
        ,
        {"$sort": {"daylyReading": 1}}
    ])
    

    var result = []; 
    for (let index = 0; index < readings.length; index++) {
        // IF WE ARE NOT ON LAST INDEX TAKE THE FIRST READING OF THE NEXT DAY AND SUBSTRACT IT FROM FIRST READING OF PRESENT DAY 
        if(index !== readings.length -1){
            result.push({time: readings[index].daylyReading[0].ts, value: readings[index +1].daylyReading[0].waterFlowCounter - readings[index].daylyReading[0].waterFlowCounter})
        } else {
            // ON THE LAST INDEX TAKE THE LAST READING OF THE LAST DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter - readings[index].daylyReading[0].waterFlowCounter})
        }
        
        
    }
    res.send(readings)
    console.log(result)
















}