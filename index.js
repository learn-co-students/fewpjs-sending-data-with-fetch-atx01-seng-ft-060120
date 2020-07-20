// Add your code here
//fetch(destinationURL, configurationObject);

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// }



function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(response => {
        document.body.innerHTML = response.id
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}