import { knex } from "../database/connection";

class Recipe{
    async new(title: String, time: Number, description : Text, sbs: Text, items : Object, level : Number, img_url: String){
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
            const result = await knex.select("*").table("recipes").where({title})
            return result;
        } catch (error) {
            console.log(error)
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
