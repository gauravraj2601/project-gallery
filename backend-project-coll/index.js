const express = require("express");
const cors = require("cors")
const { connection } = require("./db");
const { Project_Model } = require("./model/project.model");

const app = express();

app.use(express.json())
app.use(cors())

app.get("/",(req, res)=>{
    res.send("Welcome to My Projects")
})
app.get("/project", async(req, res)=>{
    try {
        const projectsData =await Project_Model.find()
        if(projectsData){
            res.status(200).send({"projects":projectsData})
        }
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})
app.post("/project/add", async(req, res)=>{
    try {
        const {name, deployed, github, project_Image, description, techStacks } = req.body
        const projectData= new Project_Model({
            name,
            deployed,
            github,
            project_Image,
            description,
            techStacks
        })
        await projectData.save();
        res.status(200).send({"msg":`Project ${name} added `})
    } catch (error) {
        res.status(400).send({"error":error.message})
    }
})

app.listen(8080, async()=>{
    try {
        await connection
        console.log("Connected to server")
        console.log("Server is Running")
    } catch (error) {
        console.log(error.message)
    }
})
