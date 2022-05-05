import { MongoClient } from "mongodb"

export const insertOne = async (
    database: string,
    collection: string,
    query?: string,
)  => {
    const client = new MongoClient(process.env.MONGODB_URI);
    const databaseParameter = database;
    const collectionParameter = collection;
    const queryParameter = query;

    try {
        await client.connect();

        const database = client.db(databaseParameter);

        const collectionDataResult = database.collection(collectionParameter); 

        const query = { Query: queryParameter };

        const dataResult = await collectionDataResult.findOne(query);

        return dataResult;
    } finally {
        await client.close();
    }
}