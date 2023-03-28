module.exports = {
    getUser(){
        return fetch('/api/user/')
            .then(response => response.json())
            .then(data => {
                return {success: data};
            })
            .catch(error => {
                return {error: error};
            });
    },
    login(body){
        return fetch(`/api/user/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    return {success:true}
                }
                if(!data){
                    return {error:true}
                }
            })
            .catch(error => {

                return {error: error}
            });
    }
}