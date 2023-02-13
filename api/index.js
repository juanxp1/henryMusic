//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import server from './src/app.js'
import { sequelize } from './src/database/relations.js'

const SERVER_PORT = process.env.SERVER_PORT || 3001
const DB_FORCE = process.env.DB_FORCE === 'true'

// para no reiniciar la base de datos en el servidor cada vez que se haga un pull
// no cambiar esta linea sino su valor en el archivo .env
sequelize.sync({ force: DB_FORCE })
server.listen(SERVER_PORT, ()=> {
    console.log(`%s listening at ${SERVER_PORT}`)
})