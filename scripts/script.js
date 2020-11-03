
	var form = document.getElementById("myform")

	form.addEventListener('submit',function(e){
		e.preventDefault()

		var search = document.getElementById("search").value

		var originalName = search.split(' ').join('')

		document.getElementById("result").innerHTML=""

		fetch("https://api.github.com/users/"+originalName)
		.then((result) => result.json())
		.then((data) => {
			console.log(data)

			document.getElementById("result").innerHTML =`
			<a target="_blank" href="https://www.github.com/${originalName}">
				<div class="user container">
					<img  id="myimage" class="profile" src="${data.avatar_url}"/>
					<div class="container details">
						<h3 class="name"> ${data.name} </h3>
						<h5 class="link"> https://github.com/<span class="highlight">${data.login}</span> </h5>
						<h5> Repos <span class="highlight">${data.public_repos}</span> </h5>
						<h5> Followers <span class="highlight">${data.followers}</span> </h5>
						<h5> Following <span class="highlight">${data.following}</span> </h5>
					</div>
				</div>

			</a>
			`

			document.getElementById("mytext").style.visibility="visible";




		})
	})
