const mongoose = require("mongoose");

const UserScoreSchema = mongoose.Schema(
    {
        date: { type: String },
        match_name: { type: String },
        players: [
            {
                player_name: { type: String, trim: true },
                score: { type: Number }
            },
        ],

    },
    { timestamps: true }
)

module.exports = mongoose.model("score_list", UserScoreSchema);
