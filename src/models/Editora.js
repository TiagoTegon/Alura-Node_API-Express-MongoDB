import mongoose from "mongoose"

const editoraSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, require: true},
  },
  {
    versionKey: false
  }
)

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras