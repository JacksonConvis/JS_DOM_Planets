class planet{
    constructor(name, inner, diameter, color){
        this.name = name;
        this.inner = inner;
        this.diameter = diameter;
        this.color = color;
    }
}

let planetsArray = [new planet("Mercury", true, 3031.9, "#696969"), new planet("Venus", true, 7520.8, "#b89165") , new planet("Earth", true, 7917.5, "#5a5b86") , new planet("Mars", true, 4212.3, "#df8c4e") , new planet("Jupiter", false, 86881, "#6a049") , new planet("Saturn", false, 72367, "#dcd3a1") , new planet("Uranus", false, 31518, "#b4d9df") , new planet("Neptune", false, 30599, "#456eff") ]; 

for(let planet of planetsArray){
    console.log(planet.name);
}

function avgDiameter(planetsArray){
    let avgD = 0;
    for(let planet of planetsArray){
        avgD += planet.diameter;
    }
    avgD /= 8;
    return avgD;
}

console.log("Average Diameter: " + avgDiameter(planetsArray));

let index = 0;

updatePlanetDisplay(index, planetsArray);

   let prev = document.getElementById("previous");

   prev.addEventListener("click", () => {
    if(index > 0){
        index -= 1;
    }
    let ind = document.getElementById("index");
    ind.innerText = index;
    updatePlanetDisplay(index, planetsArray);
   })

   let nxt = document.getElementById("next")

   nxt.addEventListener("click", () => {
    if(index < 7){
        index += 1;
    }
    
    let ind = document.getElementById("index");
    ind.innerText = index;
    updatePlanetDisplay(index, planetsArray);
   })

   let ind = document.getElementById("index");
   ind.innerText += index;
 


   function updatePlanetDisplay(index, planetsArray){
    let planetB = planetsArray[index];
    let pname = document.getElementById("pname");
    pname.innerText = planetB.name;

    let innerA = document.getElementById("inner");

    if(planetB.inner === true){
        innerA.innerText = "inner planet"; 
    }else{
        innerA.innerText = "outer planet";
    }

    let planetCircle = document.getElementById("circle");

    planetCircle.style.backgroundColor = planetB.color;
    planetCircle.style.width = planetB.diameter/100 + "px";
    planetCircle.style.height = planetB.diameter/100 + "px";
    



   }