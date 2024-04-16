import express from 'express'
import { createClient } from 'redis'    

const app = express()
const client = createClient();
client.connect();
app.use(express.json())

app.post('/submit', (req,res) => {
    const {problemId, userId, code, language} = req.body;
    client.lPush("Submission", JSON.stringify({problemId, userId, code, language}));

    res.json({
        message: "Submission received!",
        Data: {
            problemId,
            userId,
            code,
            language
        }
    })
})

app.listen(3000,() => {
    console.log("Server is running on port 3000")
})