const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
        },
        address: {
            type: String,
        },
        phoneNumber: {
            type: Number,
        },
        diaseases: [
            {
                type: String,
            },
        ],
        firstTime: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
)
module.exports = mongoose.model("User", userSchema)
