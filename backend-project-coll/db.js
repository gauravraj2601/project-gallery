const mongoose= require("mongoose")

const connection = mongoose.connect("mongodb+srv://gaurav:gauravraj@cluster0.390kn1i.mongodb.net/project-data?retryWrites=true&w=majority&appName=Cluster0")

module.exports={connection}

// https://project-gallery-ar14.onrender.com/