class Request
{
    static async fetchApi(_url){
        let response = await fetch(_url);
        let json  = await response.json();
        return json;
    }

    
}
export { Request }