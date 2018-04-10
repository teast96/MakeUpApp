export class Servis {
    static get()
    {
        return fetch("http://localhost:3000/skole")
        .then(response => response.json());
    }
}