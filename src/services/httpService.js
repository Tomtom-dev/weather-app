class HttpServices {
    url ="https://api.openweathermap.org/data/2.5/weather?q=";
    apiKey = "f44e947afc6c0878ed4463a841db0599";


    getCity(path){
        fetch(`${this.url}${path}&appid=${this.apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }).catch(err => {
            console.error('Error: ', err);
        });
    }
}

export const httpService = Object.freeze(new HttpServices())