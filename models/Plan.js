const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User");
const Suggestion = require("./Suggestion");


const PlanSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    members: [{
        type: Schema.Types.ObjectID,
        ref: User
    }],
    suggestions: [{
        type: Schema.Types.ObjectID,
        ref: Suggestion
    }],
}, {
    timestamps: true
})

// Model creation & export
module.exports = Plan = mongoose.model('Plan', PlanSchema);