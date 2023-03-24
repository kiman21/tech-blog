const blogTitles = document.querySelectorAll('#blogTitle');
const showCommentForms = document.querySelectorAll('#showCommentForm');
const commentBtn = document.querySelector('#commentBtn');
const commentLink = document.querySelector('.comment-link');

blogTitles.forEach((blogTitle, index) => {
    blogTitle.addEventListener('click', (event) => {
        event.preventDefault();
        showCommentForms[index].style.display = showCommentForms[index].style.display === 'none' ? 'block' : 'none';
        const commentLink = event.target;
        commentBtn.dataset.blogId = commentLink.dataset.blogId;
    });
});

commentBtn.addEventListener("click",(event) => {
    event.preventDefault();
    const blogId = event.target.dataset.blogId;    
    const commentObj = {
        content:document.querySelector("#addComment").value,
        blogId: blogId
    }
    console.log(commentObj);
    console.log(blogId);
    fetch("/api/comments",{
        method:"POST",
        body:JSON.stringify(commentObj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>{
        if(res.ok){
            location.href=`/viewblog/${blogId}`
        } else {
            alert("Error.")
        }
    })
})