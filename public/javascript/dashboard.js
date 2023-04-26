const showFormBtn = document.querySelector("#showFormBtn");
const createBlogForm = document.querySelector("#createBlogForm");
const showForm = document.querySelector("#showForm");

showFormBtn.addEventListener("click",e=>{
    e.preventDefault();
    if (showForm.style.display === 'none') {
        showForm.style.display = 'block';
    } else {
        showForm.style.display = 'none';
    }
});

createBlogForm.addEventListener("submit",e=>{
    e.preventDefault();
    const blogObj = {
        title: document.querySelector("#blogTitle").value,
        content: document.querySelector("#blogContent").value
    }
    console.log(blogObj)
    fetch("/api/blogs",{
        method: "POST",
        body: JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            location.reload();
            showForm.style.display = 'none';
        } else {
            alert("trumpet sound")
        }
    })
})