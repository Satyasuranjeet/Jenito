import express from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.OPEN_AI_KEY);
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.get('/',(req, res) => {
    res.status(200).json({ message: "Hello from Satya!" })
  })

app.post('/send-text', async (req, res) => {
  const receivedText = req.body.text;
  console.log(receivedText);

  
  try{
    const configuration = new Configuration({
        apiKey: process.env.OPEN_AI_KEY,
    });
    const openaiInstance = new OpenAIApi(configuration);
    const  p = req.body.text;

    const response = await openaiInstance.createImage({
      prompt:p,
      n: 1,
      size: '1024x1024',
    });
 
    console.log(response.data.data[0].url);
    const image = response.data.data[0].url;
    res.json({ text: image });
  }
  catch (error){
    console.log("error",error);

}

  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
