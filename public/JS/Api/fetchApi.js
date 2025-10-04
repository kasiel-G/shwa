const fetchApi = async (url,method='GET',data=null) =>{
    let option = {
        method,
    }

    if (data) {option.body=data}
    try {
        let req = await fetch(url,option)
        if (!req.ok) {throw new Error('erreur http');}

            let res = await req.json();
            return res

    } catch (error) {
        throw new Error(error);
        
    }
}

export default fetchApi;