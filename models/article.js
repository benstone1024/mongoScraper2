var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ScrapedArticleSchema = new Schema({
  
    type: String,
    required: true
  },
  
  link: {
    type: String,
    required: true
  },

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
            }
        }]      
});


var Article = mongoose.model("ScrapedArticle", ScrapedArticleSchema);


module.exports = ScrapedArticle;