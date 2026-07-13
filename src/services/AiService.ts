import { streamText } from 'ai';
import { openrouter } from '../lib/ai';

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openrouter('openai/gpt-oss-20b:free'),
            prompt: prompt,
            system: 'Eres bartender que tiene 50 años de experiencia y le sirvio una bebida ha James Bond'
        })        
        return result.textStream
    }
}