const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 1000; // 您可以更改端口號
const hostname = '127.0.0.1';
const fs = require("fs");
const { marked } = require('marked');

const { GoogleGenAI } = require("@google/genai");


const genAI = new GoogleGenAI({ apiKey: "AIzaSyCtiTpYpRA2U-hLjbyjuLg4xOsULHdBOuw" }); // 替換為您的 API 金鑰

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname, 'public')));

// 設定根路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.use(express.json());
app.use(bodyParser.json());

app.post('/askGemini', async (req, res) => {
    const question = req.body.question;
    try {

        const contents = [{ text: question }];

        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash-exp-image-generation",
            contents: contents,
            config: {
                responseModalities: ['Text', 'Image']
            },
        });

        let responseText = "";
        let imagePath = null;
        let imgs = [];

        for (const part of response.candidates[0].content.parts) {
            if (part.text) {
                responseText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                const buffer = Buffer.from(imageData, 'base64');
                const filename = `gemini-image-${Date.now()}.png`;
                imagePath = `/images/${filename}`;
                imgs.push(imagePath);
                fs.writeFileSync(path.join(__dirname, 'public', 'images', filename), buffer);
            }
        }

        res.json({ response: responseText, image: imgs });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.post('/geminiGenerate', async (req, res) => {
    const question = req.body.question;
    let htmlText = "";
    htmlText = marked.parse(question);
    res.json({ response: htmlText});

});

app.listen(port, () => {
    console.log(`伺服器運行在 http://${hostname}:${port}`);
});