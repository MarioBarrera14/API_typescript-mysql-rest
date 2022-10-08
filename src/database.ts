import {createPool} from 'mysql2/promise';

export async function connect(){
   const conection=await createPool({
        host: 'localhost',
        user:'mario',
        password:'339728092616481339J@vier',
        database:'node_mysql_ts',
        connectionLimit:10
    })
    return conection;
}