import navbar from "../navbar/navbar.js";

let navbarDiv=document.getElementById("navbar_div");

navbarDiv.innerHTML=navbar();


let blogId = localStorage.getItem("blogId")

const getBlogData = async () => {
	try {
		let res = await fetch(` http://localhost:3000/blog/${blogId}`)
		let blog = await res.json()

		displayData(blog)
	} catch (err) {
		console.log(err)
	}
}
getBlogData()

let parentNode = document.getElementById("main-content")

function displayData(blog) {
  parentNode.innerHTML = "";

  let blogTitleElement = document.createElement("h3");
  blogTitleElement.textContent ="Title :"+ blog.title;
  let blogBodyElement = document.createElement("p");
  blogBodyElement.textContent = blog.body;
  let blogAuthorElement = document.createElement("h4");
  blogAuthorElement.textContent = `By : ${blog.author}`;

  parentNode.append(blogTitleElement, blogBodyElement, blogAuthorElement);
}