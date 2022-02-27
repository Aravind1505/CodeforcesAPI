{/*Method 1

async function temp(){
    let data = await fetch("http://codeforces.com/api/problemset.problems")
                    .then(data => data.json())
                    .then(test => test.result.problems);
    console.log(data);

    let objects = [];
    let container = document.getElementById("data-blocks");
    for(let i = 0; i < data.length; i++){
        
    }
}

temp();*/}

/*
    Codeforces Api:
        contest.ratingChanges
        contest.status
        contest.list - List of contests (even tag search is enabled)
        problemset.problems - List of Problems
        user.info - Info about one or several Users
        user.rating - Rating history of a User
        user.status - Submissions of a User
*/

//Method 2
let data;

async function contestlist(){
    // let x = await fetch("http://codeforces.com/api/problemset.problems").then(data => data.json()).then(test => test.result.problems);
    let x = await fetch("https://codeforces.com/api/contest.list?gym=false").then(data => data.json()).then(test => test.result);
    data = x;
    console.log(data);
    createElements();
}

function createElements(){
    let x = document.getElementById("CMContainer");
    x.innerHTML="";
    for(let i = 0; i < data.length; i++){
        let y = document.createElement("div");
        y.className = "contentMenuContainerBlock";
        y.innerHTML = "<label class=\"contentBlocklabel\">ID: </label>" + 
                        "<label class=\"contentBlockdata\">" + data[i].id+"</label>"+
                        "<label class=\"contentBlocklabel\">Name: </label>" + 
                        "<label class=\"contentBlockdata\">" + data[i].name+"</label>";
        x.appendChild(y);
    }
}

document.getElementById("UMBTN_1").addEventListener('click', contestlist);

