// require("dotenv").config();
const youtubeLogger = require("./youtubelogger")
// const productionLogger= require("./productionlogger")
let logger = null


if (process.env.NODE_ENV !== 'youtube') {
    logger = youtubeLogger()
}
// if (process.env.NODES_ENV === 'production') {
//     logger= productionLogger()
//   }


module.exports=logger;