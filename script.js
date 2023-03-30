

// Image Gallery array
let images = [
		'img/1.jpg',
		'img/2.jpg',
		'img/3.jpg',
		'img/4.jpg',
		'img/5.jpg',
		'img/6.jpg',
		'img/7.jpg',
		'img/8.jpg',
		'img/9.jpg',
		'img/10.jpg',
		'img/11.jpg',
		'img/12.jpg',
		'img/13.jpg',
		'img/14.jpg',
		'img/15.jpg',
		'img/16.jpg'
];

let descs = [
	'This is 1.jpg',
	'This is 2.jpg',
	'This is 3.jpg',
	'This is 4.jpg',
	'This is 5.jpg',
	'This is 6.jpg',
	'This is 7.jpg',
	'This is 8.jpg',
	'This is 9.jpg',
	'This is 10.jpg',
	'This is 11.jpg',
	'This is 12.jpg',
	'This is 13.jpg',
	'This is 14.jpg',
	'This is 15.jpg',
	'This is 16.jpg'
];



let img_counter = 0;

//Showing Images in the web page 
function showImages() 
{
        let parent = document.getElementById('parent');

        for (let i = 0; i <= 15; i++) {
            let new_div                 = document.createElement("DIV");
	    let new_img			= document.createElement("IMG");
            new_div.classList.add("column");
            new_div.setAttribute("number", i);
	    new_img.style.width = "100%";
	    new_img.setAttribute("src", images[i]);
		new_img.setAttribute("desc", descs[i]);

            new_div.appendChild(new_img);
            parent.appendChild(new_div);
        }
}
    
showImages();


// selecting All images in the web page
let x = document.querySelectorAll(".column");

// adding event listener for each image
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', showModal);
}


document.getElementsByClassName("close")[0].addEventListener('click', 
function(e)
{
	document.getElementById("myModal").style.display = 'none';
});

document.getElementById("img01").addEventListener('click', 
function(e)
{
	document.getElementById("myModal").style.display = 'none';
});

// showing the modal after clicking on each image in the gallery
function showModal(e)
{
	let modal = document.getElementById("myModal");
	
	if(e.target.tagName === 'IMG')
	{
		img_counter = Number(e.target.parentElement.getAttribute("number"));
		modal.childNodes[3].setAttribute("src", e.target.src);
		document.getElementById("desc").textContent = e.target.getAttribute("desc");
		modal.style.display = "block";
	}
	
}


document.addEventListener("keyup", switchImage);

document.getElementsByClassName("next")[0].addEventListener('click', switchImage);
document.getElementsByClassName("prev")[0].addEventListener('click', switchImage);

function switchImage(e)
{
	let modal = document.getElementById("myModal");
	
	if(modal.style.display === "block")
	{	
		if(e.keyCode == 37 || e.target.className === "prev")
		{
			if(img_counter == 0)
				img_counter = 15;
			else
				img_counter--;
				
			modal.childNodes[3].src = document.getElementsByClassName("column")[img_counter].firstChild.src;
			document.getElementById("desc").textContent = descs[img_counter];
		}
		else if(e.keyCode == 39 || e.target.className === "next")
		{
			if(img_counter == 15)
				img_counter = 0;
			else
				img_counter++;
				
			modal.childNodes[3].src = document.getElementsByClassName("column")[img_counter].firstChild.src;
			document.getElementById("desc").textContent = descs[img_counter];
		}
	}
}






