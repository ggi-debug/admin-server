import { User } from "./seeds/user";
import { Category } from "./seeds/category";
import { Article } from "./seeds/article";
async function run(){
  User()
  await Category(),
  Article()
}

run()