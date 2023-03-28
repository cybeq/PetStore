const authService = require('../services/AuthService')
import router from "../../config/router";
export default function guest(to, from, next) {

    authService.getUser().then(auth=>{
        if(!auth.error){
            router.push('/panel');
        }
    }).catch(error=>{
        console.log(error)
        router.push('/panel');
    })
    return next();
}