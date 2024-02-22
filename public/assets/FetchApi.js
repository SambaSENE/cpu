class FetchApi
{
    
    
    static async fetchApi(_url ,  options= [] ) {
    
        let responses = await fetch(_url , options);
        let json = await responses.json();
        return json;
    }
}
export { FetchApi }