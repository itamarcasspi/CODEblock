import Code from "../models/code.model.js"

export const getCode = async (req,res) => {
    try {
        const {roomId} = req.params;
        const filteredRoomCode = await Code.find({roomId});
        
        res.status(200).json(filteredRoomCode);
    } catch(error){
        console.log("Error: getCode controller",error.message);
        res.status(500).json({error: "Internal server error"});
    }
} 
export default getCode;