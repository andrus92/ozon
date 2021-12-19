const getData = () => {
    // return [1,2,3,4,5];
    return fetch('http://localhost:3000/goods')
        .then((response) => {
            return response.json();
        })
}

export default getData;