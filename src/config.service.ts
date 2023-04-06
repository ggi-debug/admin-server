import {productionConfig} from "./config/productionConfig";
import {develpmentConfig} from "./config/develpmentConfig";
import dotenv from "dotenv";
dotenv.config({ path: '.env' })

export const ConfigServices = {
  provide:'ConfigServices',
  useValue:process.env.NODE_ENV === 'development'?develpmentConfig:productionConfig
}
