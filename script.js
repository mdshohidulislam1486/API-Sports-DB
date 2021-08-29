
const loadSearch =()=>{
const search = document.getElementById('search');
const searchValue = search.value;
search.value = '';
console.log(searchValue)
const url =(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`);
fetch(url)
.then(res => res.json())
.then(data => displayTeam(data.teams)); 
const url1 =(`https://thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchValue}`);
fetch(url1)
.then(res1 => res1.json())
.then(data1 => console.log(data1))

} 


const displayTeam = teamNames =>{
    const displayResult = document.getElementById('display-result');
    displayResult.textContent = '';
for(const teamName of teamNames){
    const div = document.createElement('div')
    div.classList.add('col-md-4', "d-flex", 'flex-column', 'justify-content-center', 'align-items-center')
    div.innerHTML = `
            
                <img src="${teamName.strTeamBadge}" class="card-img-top w-25" alt="Banner Not Found">a
                  <h5 class="card-title text-light text-center">${teamName.strTeam}</h5>
    `
    const displayResult = document.getElementById('display-result');
    displayResult.appendChild(div)
}
}