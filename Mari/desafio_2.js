//Outros métodos?
//import projectsJson from "./repos.json";
//import * as projectsJson from "./repos.json";

//let repsJson = require("./repos.json");

import axios from 'axios';
import { resolve } from 'path';

class Api{
    static async getRep (user){
        const response = (await axios.get('https://api.github.com/users/andredelmestre/repos')).data;
        return response;
    }
}

class Repository {
    constructor({id, name, description, html_url, created_at, updated_at, language}){
        this.id = id,
        this.name = name,
        this.description = description,
        this.html_url = html_url,
        this.created_at = created_at,
        this. updated_at = updated_at,
        this.language = language
    }
};

Api.getRep('andredelmestre').then(allReps => {

const userReps = [];

    const sortKeys = (repositorio) => {
        const {id, name, description, html_url, created_at, updated_at, language} = repositorio;
        let newRep = {id, name, description, html_url, created_at, updated_at, language};
        console.log(newRep);
        userReps.push(newRep);
    }

    allReps.forEach((repositorio) => sortKeys(repositorio));
    console.log(allReps);

//*2. Separar o Array em 2

let jsArray = [];
let tsArray = [];
let pythonArray = [];

const arraySplit = (reps) => {
    if (reps.language == "HTML"){
        jsArray.push(reps);
        //console.log("JavaScript");
    }
    else if (reps.language == "C"){
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

userReps.forEach((repositorio) => arraySplit(repositorio));

//*3. Juntar em um novo Array

let knowLanguagesRep = [...jsArray, ...tsArray, ...pythonArray];
//console.log(knowLanguagesRep);

//*4. Buscar por ID

let searchId = 290278316;

const search = (criteria) => {
    let found = userReps.find(o => o.id === criteria);
    if (found?.id != null){
        return found;
    }
    else{
        console.log("Not found");
    }
}

let thisRep = search(searchId);

console.log(thisRep);

//*5. Adicionar "Followers"

const addFollowers = (repositorio) => {
    repositorio.followers != null? repositorio.followers++: repositorio.followers = 1;
}

userReps.forEach((repositorio) => addFollowers(repositorio));

if (thisRep != undefined){
    addFollowers(thisRep);
}

//console.log(allDisplay);

//*6. console.log dos que utilizam javascript

const exampleFilter = userReps.filter((repsJson) => {
    return repsJson.language === "JavaScript";
});

console.log(exampleFilter);
});
