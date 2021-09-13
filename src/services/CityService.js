import {httpService} from './httpService';

class CityService {

    async findCity(city){
        return  await httpService.get(city)
    }
}

export const cityService = Object.freeze(new CityService)