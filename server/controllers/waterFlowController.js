
const WaterFlow = require('../models/WaterFlow');


exports.getWeekWaterFlow = async(req,res,next) => {

    let d = new Date();
    d.setDate(d.getDate() - 7);
    console.log(d,'khgdfs');
    // const readings = await WaterFlow.find()
    // console.log(readings)
    try {
        const readings = await WaterFlow.aggregate([
        {"$match": {"ts": {"$gt": d}}},
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
                            { "$dayOfMonth": "$ts" },
                            { "$mod": [{ "$dayOfMonth": "$ts"}, 1 ] }
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
            let nextDayReading = readings[index +1].daylyReading[0].waterFlowCounter;
            let presentDayReading = readings[index].daylyReading[0].waterFlowCounter;
        // IF THE NEXT DAY READING IS SMALLER THAN PRESENT DAY READING WE WILL TAKE THE LAST READING OF THE PRESENT DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            if(nextDayReading < presentDayReading){
                if(readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter < readings[index].daylyReading[0].waterFlowCounter){
                    result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter})
                } else {result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter - readings[index].daylyReading[0].waterFlowCounter})}
            } else {
                result.push({time: readings[index].daylyReading[0].ts, value:  nextDayReading - presentDayReading})
            }
        } else if (index === readings.length -1){
            if(readings[index].daylyReading.length < 2){
                result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[0].waterFlowCounter})
            } else {
        // ON THE LAST INDEX TAKE THE LAST READING OF THE LAST DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter - readings[index].daylyReading[0].waterFlowCounter})
            }
        }
    }
    res.status(200).send(result);
    console.log(readings);
    } catch (e) {
        next(e);
    }
    
}



exports.getMonthWaterFlow = async(req,res,next) => {

    let d = new Date();
    d.setDate(d.getDate() - 30);
    console.log(d);

try {
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
                            { "$dayOfMonth": "$ts" },
                            { "$mod": [{ "$dayOfMonth": "$ts"}, 1 ] }
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
            let nextDayReading = readings[index +1].daylyReading[0].waterFlowCounter;
            let presentDayReading = readings[index].daylyReading[0].waterFlowCounter;
        // IF THE NEXT DAY READING IS SMALLER THAN PRESENT DAY READING WE WILL TAKE THE LAST READING OF THE PRESENT DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            if(nextDayReading < presentDayReading){
                if(readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter < readings[index].daylyReading[0].waterFlowCounter){
                    result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter})
                } else {result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter - readings[index].daylyReading[0].waterFlowCounter})}
            } else {
                result.push({time: readings[index].daylyReading[0].ts, value:  nextDayReading - presentDayReading})
            }
        } else if (index === readings.length -1){
            if(readings[index].daylyReading.length < 2){
                result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[0].waterFlowCounter})
            } else {
        // ON THE LAST INDEX TAKE THE LAST READING OF THE LAST DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            result.push({time: readings[index].daylyReading[0].ts, value: readings[index].daylyReading[readings[index].daylyReading.length -1].waterFlowCounter - readings[index].daylyReading[0].waterFlowCounter})
            }
        }
    }
    res.status(200).send(result);
    console.log(result);
    } catch (e) {
        next(e);
    }
    
}


exports.getYearWaterFlow = async(req,res,next) => {

    let d = new Date();
    d.setDate(d.getDate() - 360);
    console.log(d);

try {
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
                            { "$month": "$ts" },
                            { "$mod": [{ "$month": "$ts"}, 1 ] }
                        ]
                    }
                },

                "monthlyReading": { "$push": {"ts": "$ts", "waterFlowCounter": "$waterFlowCounter" } }
            }
        },
        {
            "$project":{
                "_id": 0,
                "monthlyReading": 1
            }
        }
        ,
        {"$sort": {"monthlyReading": 1}}
    ])
    

    var result = []; 
    for (let index = 0; index < readings.length; index++) {
        // IF WE ARE NOT ON LAST INDEX TAKE THE FIRST READING OF THE NEXT DAY AND SUBSTRACT IT FROM FIRST READING OF PRESENT DAY 
        if(index !== readings.length -1){
            let nextDayReading = readings[index +1].monthlyReading[0].waterFlowCounter;
            let presentDayReading = readings[index].monthlyReading[0].waterFlowCounter;
        // IF THE NEXT DAY READING IS SMALLER THAN PRESENT DAY READING WE WILL TAKE THE LAST READING OF THE PRESENT DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            if(nextDayReading < presentDayReading){
                result.push({time: readings[index].monthlyReading[0].ts, value: readings[index].monthlyReading[readings[index].monthlyReading.length -1].waterFlowCounter - readings[index].monthlyReading[0].waterFlowCounter})
            } else {
                result.push({time: readings[index].monthlyReading[0].ts, value:  nextDayReading - presentDayReading})
            }
        } else if (index === readings.length -1){
            if(readings[index].monthlyReading.length < 2){
                result.push({time: readings[index].monthlyReading[0].ts, value: readings[index].monthlyReading[0].waterFlowCounter})
            } else {
        // ON THE LAST INDEX TAKE THE LAST READING OF THE LAST DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            result.push({time: readings[index].monthlyReading[0].ts, value: readings[index].monthlyReading[readings[index].monthlyReading.length -1].waterFlowCounter - readings[index].monthlyReading[0].waterFlowCounter})
            }
        }
    }
    res.status(200).send(result);
    console.log(result);
    } catch (e) {
        next(e);
    }
}

exports.getMinWaterFlow = async(req,res,next) => {

    let d = new Date();
    d.setDate(d.getDate() - 360);
    console.log(d);
    d.setDate(d.getDate() - 30);
    console.log(d);
    d.setDate(d.getDate() - 7);
    console.log(d);
    
try {
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

                "monthlyReading": { "$push": {"ts": "$ts", "waterFlowCounter": "$waterFlowCounter" } }
            }
        },
        {
            "$project":{
                "_id": 0,
                "monthlyReading": 1
            }
        }
        ,
        {"$sort": {"monthlyReading": 1}}
    ])
    

    var result = []; 
    for (let index = 0; index < readings.length; index++) {
        // IF WE ARE NOT ON LAST INDEX TAKE THE FIRST READING OF THE NEXT DAY AND SUBSTRACT IT FROM FIRST READING OF PRESENT DAY 
        if(index !== readings.length -1){
            let nextDayReading = readings[index +1].monthlyReading[0].waterFlowCounter;
            let presentDayReading = readings[index].monthlyReading[0].waterFlowCounter;
        // IF THE NEXT DAY READING IS SMALLER THAN PRESENT DAY READING WE WILL TAKE THE LAST READING OF THE PRESENT DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            if(nextDayReading < presentDayReading){
                result.push({time: readings[index].monthlyReading[0].ts, value: readings[index].monthlyReading[readings[index].monthlyReading.length -1].waterFlowCounter - readings[index].monthlyReading[0].waterFlowCounter})
            } else {
                result.push({time: readings[index].monthlyReading[0].ts, value:  nextDayReading - presentDayReading})
            }
        } else if (index === readings.length -1){
            if(readings[index].monthlyReading.length < 2){
                result.push({time: readings[index].monthlyReading[0].ts, value: readings[index].monthlyReading[0].waterFlowCounter})
            } else {
        // ON THE LAST INDEX TAKE THE LAST READING OF THE LAST DAY AND SUBSTRACT IT FROM THE FIRST READING OF THE SAME DAY
            result.push({time: readings[index].monthlyReading[0].ts, value: readings[index].monthlyReading[readings[index].monthlyReading.length -1].waterFlowCounter - readings[index].monthlyReading[0].waterFlowCounter})
            }
        }
    }
    res.status(200).send(readings);
    console.log(result);
    } catch (e) {
        next(e);
    }
}


