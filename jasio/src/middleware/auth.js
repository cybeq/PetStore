const authService = require('../services/AuthService')
import router from "../../config/router";
export default function auth(to, from, next) {

    authService.getUser().then(auth=>{
        if(auth.error){
            router.push('/login');
            console.log(auth)
        }
    }).catch(error=>{
        console.log(error)
        router.push('/login');
    })
    return next();
}