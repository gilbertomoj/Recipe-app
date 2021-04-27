import express from "express";
import {RecipeController} from "./controllers/RecipeController";
const router = express.Router();

router.get("/",(req, res)=>{
    res.send("Todos as receitas")
})

export {router};