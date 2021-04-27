import express from "express";
import RecipeController from "./controllers/RecipeController";
const router = express.Router();



router.get("/recipes", RecipeController.getAll)//Pega todos
router.get("/recipes/:level", RecipeController.orderByLevel);//Organiza pelo nível => desc (decrescente), asc => (crescente);

router.post("/create", RecipeController.NewRecipe)//Cria nova receita
router.get("/recipe/:title", RecipeController.findByTitle)//Encontra pelo titulo
router.get("/recipes/duration/:time",RecipeController.orderByTime)//Filtra pelo tempo => desc (decrescente), asc => (crescente);






export {router};