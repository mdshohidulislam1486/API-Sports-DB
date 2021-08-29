
const loadSearch =()=>{
const search = document.getElementById('search');
const searchValue = search.value;
search.value = '';
console.log(searchValue)
const url =(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`);
fetch(url)
.then(res => res.json())
.then(data => displayTeam(data.teams)); 
} 


const displayTeam = teamNames =>{
    const displayResult = document.getElementById('display-result');
    displayResult.textContent = '';
for(const teamName of teamNames){
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
            <div class="card h-100">
                <img src="${teamName.strTeamBadge}" class="card-img-top" alt="Banner Not Found">
                <div class="card-body">
                  <h5 class="card-title">${teamName.strTeam}</h5>
                  <p class="card-text">${teamName.strDescriptionEN.slice(0, 200)}</p>
                </div>
                <dvi>
                <a class=" btn btn-success" target="_blank" href="${teamName.strWebsite}">Visit the website </a>
            </div>
    `
    displayResult.appendChild(div)
}
}