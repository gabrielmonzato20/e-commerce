import mongoose from 'mongoose'

const connectDb = async () =>{


try{
	console.log(process.env.MONGO_URI);
const conn = await mongoose.connect(process.env.MONGO_URI,{
	useUnifiedTopology: true ,
	useNewUrlParser: true 
});
	console.log("Mongo connect", conn.connection.host)
}catch(err){
	console.error("Error", err.message);
	process.exit(1)

}
}

export default connectDb
