const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const videoSchema = new mongoose.Schema({
  Artistid: { type: Number },
  name: {
      type: String,
  },
  content: {
      type: String,
  },
  feedback: {
      type: String,
  },
  category: {
      type: String,
      required: true,
  },
  lyrics: {
      type: String,
      required: true,
  },
  ViewsNumber: {
      type: Number,
      required: true,
  },
  banned: { type: Boolean, default: false },
  Like: { type: Boolean, default: false },
  dislike: { type: Boolean, default: false },

});
const video = mongoose.model("video", videoSchema);


const userSchema = new mongoose.Schema({
  id: { type: Number },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  UserName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  Histories: {
    type: String,
    required: true,
  },
  PlayList: {
    type: String,
    required: true,
  },
  FavoritArtist: {
    type: String,
    required: true,
  },
  connected: { type: Boolean, default: false },
  banned: { type: Boolean, default: false },
  PhotProfile: {
    type: String,
    default:
      "https://www.creativefabrica.com/wp-content/uploads/2019/02/Profile-Icon-by-arus-1-580x386.jpg",
    },
  });
  
  const playlistSchema = new mongoose.Schema({
    VideoId: { type: Number },
    playlistName: {
      type: String,
    },
    playlistDescription: {
      type: String,
    },
    
    VideoNumber: {
      type: Number,
    },
    
  });
  const playlist = mongoose.model("playlist", playlistSchema);
  
  
  
  const factureSchema = new mongoose.Schema({
    userId: { type: Number },
  videoName: {
    type: String,
  },
  content: {
    type: String,
  },
  
  
});
const facture = mongoose.model("facture", factureSchema);


const artistSchema = new mongoose.Schema({
  id: { type: Number },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  UserName: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  UsersFollwers: {
    type: String,
    required: true,
  },
  factures: {
    type: String,
    required: true,
  },
  ViewsNumber: {
    type: Number,
    required: true,
  },
  Video: {
    type: String,
    required: true,
  },
  identityCard: { type: String, default: "" },
  connected: { type: Boolean, default: false },
  banned: { type: Boolean, default: false },
  PhotProfile: {
    type: String,
    default:
      "https://www.creativefabrica.com/wp-content/uploads/2019/02/Profile-Icon-by-arus-1-580x386.jpg",
    },
  });
  const artist = mongoose.model("artist", artistSchema);
  
  const adminSchema = new mongoose.Schema({
    userName: { type: String },
    email: { type: String },
    password: { type: String },
    connected: { type: Boolean, default: false },
    
    PhotProfile: {
      type: String,
      default:
        "https://www.creativefabrica.com/wp-content/uploads/2019/02/Profile-Icon-by-arus-1-580x386.jpg",
      },
    });
    const restPasswordSchema = mongoose.Schema(
      {
        hash: String,
        email: String,
      },
      { versionKey: false }
      );
      const feedbackSchema = mongoose.Schema({
        userId: { type: String },
        content: { type: String },
        createdAt: { type: Date, immutable: true, default: () => Date.now() },
      });
      
      const admin = mongoose.model("admin", adminSchema);
      const user = mongoose.model("user", userSchema);
      const resetpasswords = mongoose.model("ResetPassword", restPasswordSchema);
      const feedback = mongoose.model("feedback", feedbackSchema);
      
      module.exports = {
        artist,
        facture,
        user,
        video,
        admin,
        resetpasswords,
        playlist,
        feedback,
      };
      