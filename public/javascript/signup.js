document.querySelector("#signupForm").addEventListener("submit" ,e=>{
    e.preventDefault();
    const signUpObj = {
        email:document.querySelector("#signupEmail").value,
        password:document.querySelector("#signupPassword").value
    }
    console.log(signUpObj);
    fetch("/api/users", {
        method:"POST",
        body:JSON.stringify(signUpObj),
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