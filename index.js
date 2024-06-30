function fetchDataFromJsonPlaceholder() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

module.exports = fetchDataFromJsonPlaceholder
