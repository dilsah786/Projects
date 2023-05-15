import navbar from "../navbar/navbar.js";

let navbarDiv=document.getElementById("navbar_div");

navbarDiv.innerHTML=navbar();

let create_blog_btn = document.getElementById("create_blog_btn");

create_blog_btn.addEventListener("click",async()=>{

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;
    let author = document.getElementById("author").value

    try{

        await fetch('http://localhost:3000/blog',{

             method:"POST",
             headers:{
               'Content-Type':'application/json'
             },
             body:JSON.stringify({
                title,
                body,
                author
             })
        })
       window.location.href="../HtmlPage/index.html"

    } catch(err){
        console.log(err);
    }
})