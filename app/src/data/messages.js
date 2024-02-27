const fs = require('fs');
const dataFilePath = "./src/data/data.json";
let AccessCounter = 0;

async function getData(){
    try{
        data = fs.readFileSync(dataFilePath, 'utf8');
        AccessCounter++;
        //console.log('called getdata()')
        return JSON.parse(data);
    }catch(err){
        console.error(err)
    }
}


async function get(){
    return await getData();
}

async function push(obj){
    let data = await get();
    console.log(data);
    data.data.push(obj);
    try{
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
        if(AccessCounter >= 500){
            let stats = fs.statSync(dataFilePath);
            if(stats.size / (1024 * 1024) > 100){
                await deleteAll();
                console.log("resetting storage over 100MB")
            }
        }
        console.log('write complete')
    }catch(err){
        console.error(err);
    }
    
}

async function deleteAll(){
    let data = {data: []};
    try{
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
        console.log("erase complete")
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    get,
    push,
}   