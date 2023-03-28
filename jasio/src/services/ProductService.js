module.exports = {
    getAllProducts() {
        return fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error(error);
            });
    },
    getProductById(id){
        return fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error(error);
            });
    },
    updateProduct(id, body){
       return fetch(`/api/products/${id}`,{
            method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error(error);
            });
    },
    createProduct(formData){
        return fetch(`/api/products/`,{
            method: 'POST',
            body:formData
        })
            .then(response => response.json())
            .then(data => {
                return {success: data};
            })
            .catch(error => {
                return {error:error};
            });
    },
    deleteProduct(id){
       return fetch(`/api/products/${id}`,{
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                return {success: data};
            })
            .catch(error => {
                return {error};
            });
    },
    uploadPhoto(formData){
        return fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                console.log(response)
               return response;
            })
            .catch(error => {
                return (error);
            });
    }
};

