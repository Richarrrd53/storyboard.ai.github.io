const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require("fs");
const { marked } = import('marked'); // 已調整為標準的 CommonJS require 語法

const { GoogleGenAI } = require("@google/genai");

// --- API 金鑰安全性調整開始 ---
// 從環境變數中讀取 API 金鑰
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("FATAL: GEMINI_API_KEY 環境變數未設定。請設定 Vercel 環境變數並重試。");
    // 在 Vercel 環境中，這裡不會真的終止程序，但會是一個良好的錯誤提示
    // process.exit(1); 
}
const genAI = new GoogleGenAI({ apiKey: apiKey });
// --- API 金鑰安全性調整結束 ---

const app = express();
// 在 Vercel Serverless 環境中，不需要指定 port 和 hostname

// 設定靜態檔案目錄 (Vercel 部署時，建議將靜態檔案放在 /public 資料夾)
app.use(express.static(path.join(__dirname, 'public')));

// 設定根路由 - 假設您的前端 HTML 頁面在 /public/main.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// 設定 API 路由
app.use(express.json());
app.use(bodyParser.json());

app.post('/askGemini', async (req, res) => {
    const question = req.body.question;
    try {
        const contents = [{ text: question }];

        // 模型名稱建議檢查或更新，這裡暫時保留您的設定。
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
                    // 注意：在 Vercel Serverless 環境中，您無法直接寫入檔案系統 (fs.writeFileSync)。
                    // 如果需要圖片，您必須將圖片 Base64 編碼後直接傳回前端，
                    // 或將圖片上傳到外部儲存服務（如 AWS S3 或 Google Cloud Storage）。
                    // **以下寫入檔案的邏輯在 Vercel 伺服器上會失敗。**
                    
                    // 為了讓應用程式在 Vercel 上工作，我將修改邏輯：直接將 Base64 資料傳回給前端。
                    // 前端將需要處理這個 Base64 字串以顯示圖片。
                    
                    const mimeType = part.inlineData.mimeType || 'image/png';
                    const base64Image = `data:${mimeType};base64,${imageData}`;
                    imgs.push(base64Image);
                }
            }
        }

        // 回傳 base64 圖片資料，取代原本的檔案路徑
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

// 為了讓 Vercel Serverless Function 能夠使用，必須匯出 Express 應用程式實例
module.exports = app;
