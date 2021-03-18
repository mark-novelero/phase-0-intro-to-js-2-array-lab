var cats = ["Milo", "Otis", "Garfield"];

function beforeEach(cats){
    cats.length = 0; 
    cats.push("Milo", "Otis", "Garfield");

    return cats;
}

function destructivelyAppendCat(name){
    cats.push(name);

    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);

    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop(0);
}

function destructivelyRemoveFirstCat(){
    cats.shift(0);
}

function appendCat(name){
    var copyCat= [...cats, name];
    return copyCat;
}

function prependCat(name = 'Arnold'){
    var newCats = cats.slice();
    newCats.unshift(name);
    return newCats; 
}

function removeLastCat(){
    var copiedCats = cats.slice();
    copiedCats.pop(0);
    return copiedCats;
}

function removeFirstCat(){
    var cloneCats = cats.slice(); 
    cloneCats.shift(0);
    return cloneCats; 
}