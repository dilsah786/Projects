import navbar from "../navbar/navbar.js";

let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

 var table_body = document.getElementById("table_body");



 
const displayData=(blog)=>{

    table_body.innerHTML="";
    blog.forEach(blog => {
     
 
let tr=document.createElement("tr");

let td1=document.createElement("td");
td1.textContent=blog.id;

let td2=document.createElement("td");
td2.textContent=blog.title;

let td3=document.createElement("td");
td3.textContent=blog.author;

let td4=document.createElement("td");
let viewBtn=document.createElement("button")
viewBtn.textContent="View";
td4.append(viewBtn);
viewBtn.addEventListener("click",()=>{
    window.location.href='view.html';
    localStorage.setItem("blogId",blog.id)
})

let td5=document.createElement("td");
let editBtn=document.createElement("button");
editBtn.textContent="Edit";
td5.append(editBtn);
editBtn.addEventListener("click",()=>{
location.href="edit.html"
    localStorage.setItem("blogId",blog.id)
})

let td6=document.createElement("td");
let deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete"
td6.append(deleteBtn);
deleteBtn.addEventListener("click",async()=>{
   try{
        await fetch(`http://localhost:3000/blog/${blog.id}`,{
        method:"DELETE"
    });
   
   }catch(err){
    console.log(err)
   }
     
}) 

tr.append(td1,td2,td3,td4,td5,td6);
table_body.append(tr);


});
}




const getBlogs=async()=>{
    try{
        let res =await fetch(`http://localhost:3000/blog`);
        let blog= await res.json();

        displayData(blog)

    } catch(err){
        console.log(err)
    }
}
getBlogs()



let search_btn = document.getElementById("search_btn")

search_btn.addEventListener("click", async()=>{
    try{
        let querry=document.getElementById("search_box").value;
       let res= await fetch(`http://localhost:3000/blog?q=${querry}`)
        let blog=await res.json();
        displayData(blog)
    }
    catch(err){
        console.log(err);
    }
})

let resetBtn = document.getElementById('reset_btn')
resetBtn.addEventListener("click", () => {
	document.getElementById('search_box').value = '';
	getBlogs()

})

