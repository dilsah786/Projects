import navbar from "../navbar/navbar.js";

let navbarDiv=document.getElementById("navbar_div");

navbarDiv.innerHTML=navbar();

let blogId=localStorage.getItem("blogId");

const getBlogs = async()=>{
    try{
        let res =await fetch(`http://localhost:3000/blog/${blogId}`);
        let blog = await res.json();
        let {title,body,author}=blog;

        document.getElementById("title").value=title;
        document.getElementById("body").value=body;
        document.getElementById("author").value=author;

    }catch(err){
        console.log(err);
    }
}
getBlogs()

let edit_blog_btn = document.getElementById("edit_blog_btn");

edit_blog_btn.addEventListener("click",async()=>{
    try{
        let title=document.getElementById("title").value
        let body = document.getElementById("body").value
        let author = document.getElementById("author").value

         await fetch(`http://localhost:3000/blog/${blogId}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                body,
                author
            })
         })

   window.location.href="index.html"

    }catch(err){
        console.log(err)
    }
})