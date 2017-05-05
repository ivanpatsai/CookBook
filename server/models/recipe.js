const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    versions: [{
      recipeText: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
      created: {
        type: Date,
        default: Date.now()
      }
    }],

  }
);

module.exports = mongoose.model('Recipe', recipeSchema);

