const mongoose = require("mongoose")

const project_Schema = mongoose.Schema({
    name:String,
    deployed: String,
    github: String,
    project_Image: String,
    description: String,
    techStacks: String
})

const Project_Model = mongoose.model("projects", project_Schema)

module.exports= {Project_Model}