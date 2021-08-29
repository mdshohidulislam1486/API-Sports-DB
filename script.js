
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
.then(data1 =>  displayPlayer(data1.player)).catch(error=>{
    console.log(error)
})

} 


const displayTeam = teamNames =>{
    const displayResult = document.getElementById('display-result');
    displayResult.textContent = '';
for(const teamName of teamNames){
    const div = document.createElement('div')
    div.classList.add( "d-flex", 'flex-column', 'justify-content-center', 'align-items-center')
    div.innerHTML = `
            
                <img src="${teamName.strTeamBadge}" class="card-img-top w-25" alt="Banner Not Found">
                  <h5 class="card-title text-light text-center">${teamName.strTeam}</h5>
    `
    displayResult.appendChild(div)
}
}

const displayPlayer = playerNames =>{
    const displayResult1 = document.getElementById('display-result1');
    displayResult1.textContent = '';
for(const playerName of playerNames){
    if(playerName.strThumb == 0 ){
        const playerPic = document.getElementById('player-pic').src('https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg')
        const div1 = document.createElement('div')
        div1.classList.add("d-flex", 'flex-column', 'justify-content-center', 'align-items-center')
        div1.innerHTML = `
                    <img id="player-pic" src="${playerName.playerPic}" class="card-img-top w-25" alt="Banner Not Found">
                      <h5 class="card-title text-light text-center">${playerName.strPlayer}</h5>
        `
        displayResult1.appendChild(div1)

    } else{
        const div1 = document.createElement('div')
        div1.classList.add("d-flex", 'flex-column', 'justify-content-center', 'align-items-center')
        div1.innerHTML = `
                    <img id="player-pic" src="${playerName.strThumb}" class="card-img-top w-25" alt="Banner Not Found">
                      <h5 class="card-title text-light text-center">${playerName.strPlayer}</h5>
        `
        displayResult1.appendChild(div1)
    }
    
    
}

}