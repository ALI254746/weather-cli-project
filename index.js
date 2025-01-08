import {printError,printSuccess,printHelp} from "./services/log.service.js"
import getArgs from  './helpers/args.js'
import { saveKeyValue } from "./services/storage.service.js"
const saveToken=async token=>{
    try{
        await saveKeyValue('token',token);
        printSuccess("token was saved")
    }catch (error){
        printError(error.message)
    }
    

}

const startcli=()=>{
    const args=getArgs(process.argv)
   // console.log(args)
    // printSuccess("GOOD/OK")
    // printError("no ok")
   // console.log(args)
    if(args.h){
        printHelp()
        //help
    }
    if(args.s){
        //save city
    }
    if(args.t){
        //save token
        return saveToken(args.t);
    }
    //resault
}
startcli()