export class DatabaseService
{
    static addToDataBase(url, obj)
    {
        return fetch(url,
        {
            method: "post",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"

            },
            body: JSON.stringify(obj) //convert iz jave u json

        })
        .then(response => response.json())
        .then(json => {
            console.log("parsed json: ", json);
            return true;
        })
    }
}