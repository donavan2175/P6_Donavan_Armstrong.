const {MongoClient} = require('mongodb');


async function main() {
	const url = 'mongodb+srv://Donavan2175:caseno2175@hotsauce.gmqte.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(url);
    try {
        await client.connect();
    
        await databaseNames(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function databaseNames(client) {
    const list = await client.db().admin().databaseNames();
 
    console.log("Databases:");
    list.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error)
