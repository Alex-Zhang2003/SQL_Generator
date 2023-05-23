import express, {Application, Request, Response} from "express";
import cors from "cors";
import {Configuration, OpenAIApi} from "openai";


const API_KEY: string = "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";
const PORT: number = 5000;

const app: Application = express();
app.use(cors);
app.use(express.json());

const config = new Configuration ({
    apiKey: API_KEY
})

const openai = new OpenAIApi(config);

app.post("/completions", async (req: Request, res: Response) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{role: "user", content: "Create an SQL Request to " + req.body.message}]
        });
        res.send(completion.data.choices[0].message);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error")
    }
});
app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));




