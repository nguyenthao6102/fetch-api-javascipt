// 1. Front-end: Xây dựng giao diện người dùng

// 2. Back-end: Xây dựng logic xử lý cơ sở dữ liệu

// API (URL) -> Application programing interface

// Cổng giao tiếp giữa các phần mềm

// Backend -> API -> Fetch -> JSON/XML
// -> JSON.parse -> Javascript types
// -> Render ra giao diện với HTML

var postApi = "https://jsonplaceholder.typicode.com/posts";
fetch(postApi)
	.then(function (response) {
		return response.json();
		// JSON.parse: JSON -> Javascript type
	})
	.then(function (posts) {
		// console.log(posts);
		var htmls = posts.map(function (post) {
			return `<li>
				<h2>${post.title}</h2>
				<p>${post.body}</p>
			</li>`;
		});
		var html = htmls.join("");
		document.getElementById("post-block").innerHTML = html;
	})
	.catch(function (err) {
		console.log(err);
	});
