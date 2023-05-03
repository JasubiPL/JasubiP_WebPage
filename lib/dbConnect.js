import { connect, connection } from "mongoose";

const connectionState = {
  isConnected: false
}

export async function dbConnect(){
  if(connectionState.isConnected) return;

  const db = await connect(process.env.MONGODB_URL)

  connectionState.isConnected = db.connections[0].readyState

  console.log(db.connection.db.databaseName)
}

connection.on('connected', () =>{
  console.log('Mongo is connected')
})

connection.on('error', (err) =>{
  console.log(err)
})