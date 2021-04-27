import { knex } from "../database/connection";

class Recipe{
    async new(title: String, time: Number, description : Text, sbs: Text, items : Object, level : String, img_url: String){
        try {
            const result = await knex.insert({ title, time, description, sbs, items, level, img_url }).table("recipes");
            return {status: true,result}
        }catch(err){
            console.log(err)
            return {status: false, error: err}
        }
    }

    async findAll(){
        try {
            const result = await knex.select("*").table("recipes");
            
            return {status: true, result};
        } catch (error) {
            return {status: true, error};

        }
    }

    async findByTitle(title: String){
        try {
            var result = [];
            result = await knex.select("*").table("recipes").where({title})
            console.log(result.length)
            if (result.length > 0) {
                return {status: true ,result};
            }else{
                return {status: false ,erro: "O titulo inserido não existe ou está escrito incorretamente"};
            }
        } catch (error) {
            return {status: false ,error};
        }
    }

    async organizeByTime(time: String){

        try {
            const result = await knex.select("*").table("recipes").orderBy("time",time);
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }

    async organizeByLevel(level : String){
        
        try {
            const result = await knex.select("*").table("recipes").orderBy("level",level);
            console.log(result)
            return result;
        } catch (error) {
            console.log(error)
        }
    }


}
export default new Recipe();
