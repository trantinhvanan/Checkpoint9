var Name = document.getElementById("Name");
var Type = document.getElementById("Type");
var Height = document.getElementById("Height");
var Weight = document.getElementById("Weight");
var Bio = document.getElementById("Bio");
var search = document.getElementById("search");
var img = document.getElementById("pokeImage")
search.addEventListener("change", (event) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then(function (response) {
        return response.json();
    })
    .then(async function(data) {
        let id = await search.value;
        id -= 1;
        let info = await data.results[id];
        Name.innerHTML = info.name;
        fetch(info.url)
        .then(function (response) {
            return response.json();
        })
        .then(async function(data) {
            console.log(data);
            Height.innerHTML = await data.height;
            Weight.innerHTML = await data.weight;
            img.setAttribute("src",data.sprites.back_default);
            let Types = await data.types;
            let typearr = [];
            for (let i = 0; i < Types.length; i++) {
                typearr.push(Types[i].type.name);
            }
            Type.innerHTML = "";
            for (item of typearr) {
                let type_item = document.createElement("li")
                type_item.innerHTML = item 
                Type.appendChild(type_item); 
            }
        }) 
    })
})
