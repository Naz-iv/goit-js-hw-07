const liItemAll = document.querySelectorAll(".item");
console.log("Number of categorie: " + liItemAll.length)

liItemAll.forEach (item => {
    const title = item.querySelector("h2").textContent;
    const count = item.querySelectorAll("li");

console.log(`Category: ${title}`);
console.log(`Elements: ${count.length}`)
    
})