class FetchJson
{
    

    static async fetchApi(_url) {
        let res = await fetch(_url);
        let json = await res.json();
        return json;
    }

    
}
export { FetchJson }