import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username:{
    type: String,
    required: [true, 'El nombre de usuario es requerido'],
    unique: true,
    trim: true,
    maxlength: [20, 'Usa un maximo de 20 caracrteres sin espacio'],
  },
  email:{
    type: String,
    required: [true, 'La contraseña es requerida'],
    unique: true,
    trim: true,
  },
  password:{
    type: String,
    required: [true, 'La contraseña es requerida'],
    unique: true,
    trim: true,
  }
},{
  timestamps: true,
  versionKey: false,
})

export default models.User || model('User', userSchema)