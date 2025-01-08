import {printError,printSuccess,printHelp} from "./services/log.service.js"
import getArgs from  './helpers/args.js'


const startcli=()=>{
    const args=getArgs(process.argv)
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
    }
    //resault
}
startcli()