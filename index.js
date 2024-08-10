document.querySelector('#btn').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    const requestURL = "https://api.github.com/users/megha20april"
    console.log(xhr);
    
    xhr.open('GET', requestURL, true)
    xhr.onload = function() {
       
            const data = JSON.parse(this.responseText)
            document.getElementById('card').innerHTML += `
            <img src = "${data["avatar_url"]}"></img>
            <h2>${data["name"]}</h2>
            <p>${data["bio"]}</p>
            `
        
    }
    xhr.send()
})