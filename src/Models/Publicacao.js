const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PublicacaoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  local: {
    type: String,
    required: true
  },
  hashtags: {
    type: String
  },
  url_img: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
PublicacaoSchema.plugin(mongoosePaginate);

PublicacaoSchema.plugin(mongoosePaginate);

model("Publicacoe", PublicacaoSchema);
