// Add your code here

// const body = document.getElementById("main-body")
// console.log(body)
// const userForm = document.createElement("form")
// console.log(userForm)
// userForm.setAttribute("action", "http://localhost:3000/users")
// userForm.setAttribute("method", "POST")
// userForm.innerHTML= `<label> Name: <input type="text" name="userName" id="userName" /></label><br />
// <label> Email: <input type="text" name="userEmail" id="userEmail" /></label><br />
// <input type="submit" name="submit" id="submit" value="Submit" />`

// body.appendChild(userForm)



function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }

