import Code from "../models/code.model.js"

export const sendCode = async (req,res) => {
    const {code} = req.body;
    const {roomId} = req.params;

    const newCode = new Code({roomId,code});
    console.log("SEND CODE ARRIVED AT ROUTER,",req.roomId);

    try {
        
        const updatedCodeEntry = await Code.findOneAndUpdate({roomId},{code},{ new: true, upsert: true });
        console.log(updatedCodeEntry);
        res.status(200).json(updatedCodeEntry);
    } catch (error) {
        console.error('Error saving code:', error.message);
        res.status(500).json(e);
    }

}

export default sendCode;


