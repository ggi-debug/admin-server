import {registerAs} from '@nestjs/config'
export default registerAs('databases',()=>({
  host:'localhost',
  post:3306
})
)
