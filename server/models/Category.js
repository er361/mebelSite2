import mongoose from 'mongoose';

var CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

export default mongoose.model('Category', CategorySchema);
