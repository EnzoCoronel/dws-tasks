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
    followers?: number
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

let searchId:number = 91497948;

const search = (criteria:number) => {
    let found = allReps.find(o => o.id === criteria);
    if (found?.id != null){
        return found;
    }
    else{
        console.log("Not found");
    }
}

let thisRep = search(searchId);

//console.log(thisRep);

//*5. Adicionar "Followers"

const addFollowers = (repositorio: Repository) => {
    repositorio.followers != null? repositorio.followers++: repositorio.followers = 1;
}

allReps.forEach((repositorio) => addFollowers(repositorio));

if (thisRep != undefined){
    addFollowers(thisRep);
}

//console.log(allDisplay);

//*6. console.log dos que utilizam javascript

const exampleFilter = allReps.filter((repsJson: Repository) => {
    return repsJson.language === "JavaScript";
});

console.log(exampleFilter);