import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY
 });

const SYSTEM_PROMPT = 
`You are an assistant that receives a list of ingredients that a user has and suggest a recipe they could make with some of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra  ingredients. Format your response in markdown to make it easier to render to a web page`

export async function getRecipeFromGenai(ingredientsArr) {

  const ingredientsString = ingredientsArr.join(", ")

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      SYSTEM_PROMPT,
      `I have ${ingredientsString}. Please give me a recipe you’d recommend I make!`
    ]
  });
  return(response.text);
}