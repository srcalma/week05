var express = require("express")
var router = express.Router()

router.get("/faculty", (req, res) => {
    const faculty = {
        fid: 1,
        name: "Stephanie",
        city: "Toronto",
        college: "College"
    }
    res.send(faculty)
})


router.post("/fulltimefaculty", (req, res) => {
    const faculty = {
        fid: 2,
        name: "Rose",
        city: "Hamilton",
        college: "GBC"
    }
    res.setHeader("Content-Type", "application/json")
    res.send(faculty)
})

router.patch("/student", (req, res) => {
    res.send("<h1>Patch Record</h1>")
})

router.put("/student", (req, res) => {
    res.send("<h1>Put Record</h1>")
})

router.delete("/student", (req, res) => {
    res.send("<h1>Record Deleted</h1>")
})

module.exports = router