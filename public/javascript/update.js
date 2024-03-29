const postTitles = document.querySelectorAll("#postTitle");
const showUpdateForms = document.querySelectorAll("#showUpdateForm");
const updateLink = document.querySelector(".update-link");


postTitles.forEach((postTitle, index) => {
    postTitle.addEventListener("click", (e) => {
      e.preventDefault();
      showUpdateForms[index].style.display = showUpdateForms[index].style.display === 'none' ? 'block' : 'none';
    });
  });

document.querySelector("#updateBtn").addEventListener("click",  e=> {
    e.preventDefault();
    const updateObj = {
        title:document.querySelector("#updateTitle").value,
        content:document.querySelector("#updateText").value
    }
    console.log(updateObj);
    const blogId = updateLink.dataset.blogId;
    fetch("/api/blogs/${blogId}", {
        method:"PUT",
        body:JSON.stringify(updateObj),
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(res=>{
        if(res.ok){
            location.reload();
            updateForms.style.display = 'none';
        } else {
            alert("trumpet sound")
        }
    })
})

document.querySelector("#deleteBtn").addEventListener("click", e=> {
    e.preventDefault();
    const blogId = updateLink.dataset.blogId;
    fetch("/api/blogs/${blogId}", {
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then(res=>{
        if(res.ok){
            location.reload();
        } else {
            alert("trumpet sound")
        }
    })
})