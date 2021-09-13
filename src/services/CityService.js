import {httpService} from './httpService';

class CityService {

    async findCity(city){
        return  httpService.getCity(city)
    }
}

export const cityService = Object.freeze(new CityService())