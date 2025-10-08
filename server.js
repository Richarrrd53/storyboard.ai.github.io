const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");
const { marked } = import('marked');

const { GoogleGenAI } = require("@google/genai");

// --- API 金鑰安全性調整開始 ---
// 從環境變數中讀取 API 金鑰
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("FATAL: GEMINI_API_KEY 環境變數未設定。請設定並重試。");
    // 終止應用程式啟動，以避免 API 呼叫失敗
    process.exit(1);
}
const genAI = new GoogleGenAI({ apiKey: apiKey });
// --- API 金鑰安全性調整結束 ---

const app = express();
const port = 1000; // 您可以更改端口號
const hostname = '127.0.0.1';

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

        // 注意：gemini-2.0-flash-exp-image-generation 模型可能已變更或停用。
        // 建議您使用更現代的 Image-to-Image 或 Image Generation API，
        // 例如 gemini-2.5-flash-image-preview 或 imagen-3.0-generate-002。
        // 這裡暫時保留您的模型名稱。
        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash-exp-image-generation",
            contents: contents,
            config: {
                responseModalities: ['Text', 'Image']
            },
        });

        let responseText = "";
        let imgs = [];

        // 檢查 candidates 是否存在且非空
        const candidate = response.candidates && response.candidates.length > 0 ? response.candidates[0] : null;

        if (candidate && candidate.content && candidate.content.parts) {
            for (const part of candidate.content.parts) {
                if (part.text) {
                    responseText += part.text;
                } else if (part.inlineData) {
                    const imageData = part.inlineData.data;
                    const buffer = Buffer.from(imageData, 'base64');
                    // 確保 public/images 目錄存在
                    const imageDir = path.join(__dirname, 'public', 'images');
                    if (!fs.existsSync(imageDir)) {
                        fs.mkdirSync(imageDir, { recursive: true });
                    }

                    const filename = `gemini-image-${Date.now()}.png`;
                    const imagePath = `/images/${filename}`;
                    imgs.push(imagePath);
                    fs.writeFileSync(path.join(imageDir, filename), buffer);
                }
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
    // marked.parse 現在可以直接使用
    htmlText = marked.parse(question);
    res.json({ response: htmlText});

});

app.listen(port, () => {
    console.log(`伺服器運行在 http://${hostname}:${port}`);
    console.log(`使用環境變數 GEMINI_API_KEY 進行身份驗證。`);
});
