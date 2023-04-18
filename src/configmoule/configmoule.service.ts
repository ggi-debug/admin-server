import { Inject, Injectable, Optional } from "@nestjs/common";
import {readdirSync} from "fs";
import { resolve } from "path";

@Injectable()
export class ConfigmouleService {
  constructor(@Inject('CONFIG_OPTIONS') options:{path:string},@Optional() private config = {},) {
    // const options = {path:resolve(__dirname,'../configure')}
    const files = readdirSync(options.path)

    files.map( async (file)=>{

      if(file.slice(-2) === 'js'){

        const mouble = await import(resolve(options.path,file))

        this.config = {...this.config,...mouble.default()}

      }
    })
  }
  findAll(path:string) :any{

   return  path.split('.').reduce((config,name)=>{
     return config[name]
    },this.config)
  }
}
