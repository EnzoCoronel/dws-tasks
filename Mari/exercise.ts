//Outros métodos?
//import projectsJson from "./repos.json";
//import * as projectsJson from "./repos.json";

let repsJson = require("./repos.json");

interface Repository {
    id: number;
    name: string;
    description?: string;
    url: string;
    created_at: string;
    updated_at: string;
    language?: string;
};

let allReps:Array<Repository> = repsJson;

//*2. Separar o Array em 2

let jsArray:Array<Repository> = [];
let tsArray:Array<Repository> = [];
let pythonArray:Array<Repository> = [];

const arraySplit = (reps: Repository)=> {
    if (reps.language == "JavaScript"){
        jsArray.push(reps);
        //console.log("JavaScript");
    }
    else if (reps.language == "TypeScript"){
        tsArray.push(reps);
        //console.log("TypeScript");
    }
    else if (reps.language == "Python"){
        pythonArray.push(reps);
        //console.log("Python");
    }
    else{
        //console.log("Outra");
    }
};

allReps.forEach((repositorio) => arraySplit(repositorio));

//*3. Juntar em um novo Array

let favoriteLanguagesRep = [...jsArray, ...tsArray, ...pythonArray];
//console.log(favoriteLanguagesRep);

//*4. Buscar por ID

let criteria:number = 91497948;

let search = allReps.find(o => o.id === criteria);

//console.log(search);

//*5. Adicionar "Followers"

interface Display extends Repository{
    followers: number
}

let allDisplay:Array<Display> = [];

const updateRep = (repositorio:Repository) => {
    const updatedRep: Repository & Display = Object.assign({},repositorio,{
        followers: 1
    })
    allDisplay.push(updatedRep);
    return updatedRep;
}

allReps.forEach((repositorio) => updateRep(repositorio));

let find = allDisplay.find(o => o.id === criteria);

//console.log(allDisplay);

//*6. console.log dos que utilizam javascript

const exampleFilter = allDisplay.filter((repsJson: Display) => {
    return repsJson.language === "JavaScript";
});

console.log(exampleFilter);