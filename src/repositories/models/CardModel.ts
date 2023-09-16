import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  conteudo: {
    type: String,
    required: true,
  },
  lista: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Card = mongoose.model<unknown>('Card', CardSchema);

export default Card;