const WaterFlow = require('../models/waterFlow');


exports.daysWaterFlow = async(req,res) => {
    // let d = new Date();

    // d.setDate(d.getDate()-7);
    // try{

    // } catch (e) {

    // }


    // const liters = await WaterFlow.aggregate(
    //     [{
    //         '$group': {
    //             _id: { 
    //                 "interval": {
    //                     "$subtract": [
    //                         { "$minute": "$ts" },
    //                         { "$mod": [{ "$minute": "$ts" }, 1] }
    //                     ]
    //                 }
    //             },
    //             "count": { "$sum": 1 }
        
    //         }
    //     }]);

    // const liters = await WaterFlow.aggregate([
    //     { $sort: { createdDate: -1 } },
    //     { "$group": {
    //       "_id": {
    //         "$toDate": {
    //           "$subtract": [
    //             { "$toLong": { "$toDate": "$_id" }  },
    //             { "$mod": [ { "$toLong": { "$toDate": "$_id" } }, 1000 * 60 * 1 ] }
    //           ]
    //         }
    //       },
    //       "count": { "$sum": 1 }
    //     }}
    //   ])
    
    const liters = await WaterFlow.aggregate([
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

                "grouped_data": { "$push": {"ts": "$ts", "waterFlowCounter": "$waterFlowCounter" } }
            }
        },
        {
            "$project":{
                "_id": 0,
                "grouped_data": 1
            }
        }
        ,

        {"$sort": {"ts": 1}}
    ])
    

    var result = []; 

    liters.forEach(el => {
        
       result.push({time: el.grouped_data[0].ts, value: el.grouped_data[el.grouped_data.length -1].waterFlowCounter - el.grouped_data[0].waterFlowCounter})
       
    })
    res.send(liters)
    console.log(result)
















}