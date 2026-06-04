	
	document.addEventListener('DOMContentLoaded', () => {
		
	const template = document.querySelector(".item");
	
	fetch('apks.json')
    .then(response => response.json())
    .then(data => {
    	
    for (const key in data) {
    	const obj = data[key];
        const item = document.createElement("div");
        item.classList.add("item");
        document.querySelector(".container").appendChild(item);
        item.innerHTML = template.innerHTML;
        const img = item.querySelector("img");
		img.src = obj.image;
		img.referrerpolicy = "no-referrer";
        img.crossorigin = "anonymous";
        item.querySelector("p").textContent = key;
        item.querySelector("button").onclick = () => {
        	window.open(obj.url, "_blank");
        };
   }
   
       template.remove();
       
  })
  .catch(error => console.error('Erro ao carregar JSON:', error));
  
  const search = document.querySelector("input");
  
  search.oninput = () => {
      const filter = search.value.toLowerCase();
      const items = document.querySelectorAll(".item");
      items.forEach(item => {
         const text = item.querySelector("p").innerText.toLowerCase();
         item.style.display = text.includes(filter) ? "grid" : "none";
      });
  };
  });
  
