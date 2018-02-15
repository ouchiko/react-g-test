
class Fetcher {
    static get(uri) {
        return fetch(uri)
        .then((response)=>response.json())
        .then(function(data) {
            return data;
        })
        .catch(function(error) {
            return error;
        });
    }
}

export default Fetcher;
