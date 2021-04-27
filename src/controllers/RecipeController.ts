import Recipe from "../models/Recipe";
import {Request, Response} from "express";
interface IRecipe{
    title: String,
    time : Number,
    description : Text,
    sbs: Text,
    items: Object,
    difficulty: String
}


class RecipeController{
    async NewRecipe(req : Request , res : Response){ 
        const { title , time , description, sbs, items , level, img_url} = req.body;
        

        const result = await Recipe.new(title, time , description, sbs, items, level, img_url);
        if (result.status) {
            res.status(200).send("Receita cadastrada")
        } else {
            res.status(400).send("Ocorreu um erro no cadastro");
        }
    }

    async getAll(req : Request , res : Response){
        const all = await Recipe.findAll();
        if (all.status) {
            res.json({all});
    
        } else {
            console.log(all.error);

        }
    }
    
    async findByTitle(req : Request , res : Response){
        const recipe = await Recipe.findByTitle(req.params.title);
        res.send(recipe);
    }

    async orderByLevel(req : Request , res : Response){
        const level = req.params.level;
        const recipe = await Recipe.organizeByLevel(level);
        res.send(recipe); 
        return recipe;
    }

    async orderByTime(req : Request , res : Response){
        const type = req.params.time;
        const result = await Recipe.organizeByTime(type);
        res.send(result);
        return result;
    }


}

export default new RecipeController();

