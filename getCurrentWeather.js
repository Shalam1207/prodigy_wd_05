import { getJson } from "./script";

export function getCurrentWeather(location) {
    // let location = search_location.value 
    let url = $, { base_url }, key = $, { api_key }; & q; $; { location; }
    getJson(url);
}
