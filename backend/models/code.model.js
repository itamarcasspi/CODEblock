import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
},{ timestamps: true });

const Code = mongoose.model('Code', codeSchema);

// module.exports = Code;

export default Code;