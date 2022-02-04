import pkg from "../../package.json";
const name = pkg.name;
export default {
    name,
    height: window.localStorage.getItem(name) &&
        JSON.parse(window.localStorage.getItem(name)).height ?
        JSON.parse(window.localStorage.getItem(name)).height :
        32,
    width: window.localStorage.getItem(name) &&
        JSON.parse(window.localStorage.getItem(name)).width ?
        JSON.parse(window.localStorage.getItem(name)).width :
        32,
    size: window.localStorage.getItem(name) &&
        JSON.parse(window.localStorage.getItem(name)).size ?
        JSON.parse(window.localStorage.getItem(name)).size :
        10,
    radius: window.localStorage.getItem(name) &&
        JSON.parse(window.localStorage.getItem(name)).radius ?
        JSON.parse(window.localStorage.getItem(name)).radius :
        false,
    color: window.localStorage.getItem(name) &&
        JSON.parse(window.localStorage.getItem(name)).color ?
        JSON.parse(window.localStorage.getItem(name)).color :
        "#2ecc71",
    darkMode: window.localStorage.getItem(name) &&
        JSON.parse(window.localStorage.getItem(name)).darkMode ?
        JSON.parse(window.localStorage.getItem(name)).darkMode :
        false,
    debug: false,
    zoom: 2,
};