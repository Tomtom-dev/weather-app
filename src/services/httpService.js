class HttpServices {
    url ="https://api.openweathermap.org/data/2.5/weather?q=";
    apiKey = "b3df62d5a072ecd6af46779d55443a1c";


    async getCity(path){
         return fetch(`${this.url}${path}&appid=${this.apiKey}`)
        .then(res => res.json())
    }
}

export const httpService = Object.freeze(new HttpServices())