
document.getElementById("button1").addEventListener("click", (even) => {
    const valu = document.getElementById("input1").value
    // const p=document.createElement("p");
    // p.innerText=valu;
    // const big=document.getElementById("view");
    // big.appendChild(p)
    document.getElementById("input1").value = ""


    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valu}`)
     .then(re=>re.json())
     .then(dp=>{
       // console.log(dp)
       allproduct(dp)
     }).catch(error=>{
        //console.error("meal is not found")
        const dp2=document.getElementById("view")
        const p=document.createElement("p")
        p.innerText="Meal is not found. please try another something"
        dp2.appendChild(p)
     })

    const allproduct=(product)=>{
        const dpl2=document.getElementById("foodsection1")
        
        product.meals.forEach(e=>{
            console.log(e)
            const div=document.createElement("div")
            div.classList.add("singleid")

            div.innerHTML=`
                <img href="" src="${e.strMealThumb}" alt="" class="imgclass"/>
                <h1>${e.strIngredient3}</h1>
            `
            dpl2.appendChild(div)
        })

    }

})

