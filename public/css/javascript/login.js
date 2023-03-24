document.querySelector('#loginForm').addEventListener("submit" ,event=>{
    event.preventDefault();
    const loginObj = {
        username:document.querySelector('#loginUsername').value,
        password:document.querySelector('#loginPassword').value
    }
    console.log(loginObj);
    fetch("/api/users/login", {
        method:"POST",
        body:JSON.stringify(loginObj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>{
        if(res.ok){
           location.href="/dashboard"
        } else {
            alert("trumpet sound")
        }
    })
})