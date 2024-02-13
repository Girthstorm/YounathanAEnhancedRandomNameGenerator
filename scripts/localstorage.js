







const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}
//All good
const saveToLocalStorage = (name) => {
    let favorites = getLocalStorage();
    console.log(favorites)
    if (!favorites.includes(name)) {
        favorites.push(name);    
    }
    localStorage.setItem("Favorites", JSON.stringify(favorites))
}




const RemoveFromLocalStorage = (name) => {
    let favorites = getLocalStorage();
    let namedIndex = favorites.indexOf(name);
    favorites.splice(namedIndex, 1);
    localStorage.setItem("Favorites", JSON.stringify(favorites));

}

export { saveToLocalStorage, getLocalStorage, RemoveFromLocalStorage }