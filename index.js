import {printError,printSuccess,printHelp} from "./services/log.service.js"
import getArgs from  './helpers/args.js'
import { saveKeyValue,TOKEN_DICTIONARY } from "./services/storage.service.js"
import { getWeather } from "./services/api.service.js"
const saveToken=async (token)=>{
    if(!token){
        printError("doesn't exist")
        return;
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token,token);
        printSuccess("token was saved")
    }catch (error){
        printError(error.message)
    }
    

};

const startcli=()=>{
    const args=getArgs(process.argv)
   console.log(args)
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
     getWeather('uzbekistan')
    //resault
}
startcli()