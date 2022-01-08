const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });



const youtubeLogger=()=>{
  return winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      // new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console()
    ],
  });
}



// const youtubeLogger=()=>{
//     return winston.createLogger({
//         level: 'debug',
//         format:combine(
//             format.colorize(),
//             label({ label: 'right meow!' }),
//             timestamp({format:"HH:mm:ss"}),
//             myFormat
//           ),
//         // defaultMeta: { service: 'user-service' },
//         transports: [
//           //
//           // - Write all logs with level `error` and below to `error.log`
//           // - Write all logs with level `info` and below to `combined.log`
//           //
//           new winston.transports.File({ filename: 'error.log', level: 'error' }),
//           new winston.transports.File({ filename: 'combined.log' }),
//           // new winston.transports.Console()
//         ],
//       });
// }

module.exports=youtubeLogger