import { differenceInSeconds } from "date-fns"
import inquirer from "inquirer"




const res = await inquirer.prompt({
type: "number",
name: "userInput",
message: "Please Enter The Amount Of Second:",
validate: (input) =>{
    if (isNaN(input)){
        return "Please Enter A Valid Number:"
    } else if(input > 60){
        return "Seconds Must Be In 60"
    } else {
        return true;
    }
}
});

let input = res.userInput

function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds()+ val);
    const intervalTime = new Date(intTime);
    setInterval(()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if(timeDiff <= 0){
            console.log("Your Timer Has Expired.")
            process.exit();
        }
        const minute = Math.floor(timeDiff%(3600*24)/3600);
        const seconds = Math.floor(timeDiff%60);
        console.log(`${minute.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`)
    }, 1000);
}

startTime(input);