import {GoogleGenerativeAI} from "@google/generative-ai"
import { knowledge } from "../knowledge.js";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "Como um especialista no curso de Análise e Desenvolvimento de Sistemas você deve responder gentilmente aos alunos informações sobre o curso, com base nas informações a seguir: \n\n"+knowledge,
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export async function iaController(req, res){
    const {question} = req.body

    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(question);

    return res.json({
        question,
        response: result.response.text()
    })
}
