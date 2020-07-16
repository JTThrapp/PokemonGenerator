const baseURL = 'https://pokeapi.co/api/v2/pokemon'; 
// add "?limit=100" to end to get pool of 100 unique pokemon, to match random # generator

let submitButton = document.getElementById('submit');
let pokemonForm = document.getElementById('formGetRandom');




let y = 0;
let increaseIndex = () => {
    y = y+ 1;
}


fetchPokemon = () => {
   
    let generateNum = () => (Math.floor(Math.random() * 100) );
    let x = generateNum();  
    submitButton.addEventListener('click', generateNum);
    // generates a random # when pressed ^^^
    fetch(baseURL + '?limit=100')
        .then( response => response.json() )
        .then( json => {
            console.log(json);

                let row = document.createElement('tr');

                let dName = document.createElement('td');
                
                //  x = generateNum();
                console.log(x);
                let pokeIndex = json.results[x];
                console.log(pokeIndex);


                let pokemon = pokeIndex.name;
                console.log(pokemon);

                dName.innerText= pokemon;
                dName.innerText = dName.innerText.charAt(0).toUpperCase() + dName.innerText.slice(1);

                          
                row.appendChild(dName);

                document.querySelector('tbody').appendChild(row);

        })
        .catch( error => console.error(error));
        
       console.log(x);
    
    fetch(baseURL + '/' + (x+1))
        .then( response => response.json() )
        .then( json => {
            console.log(json);
            console.log(json.sprites.front_default)

            //declare an img element with src set to img url from API
            let dSprite = document.createElement('img');
            let aSpriteURL = json.sprites.front_default;
            dSprite.src = aSpriteURL;

            let data = document.createElement('td');
            data.appendChild(dSprite);
            console.log(y);
            document.getElementsByTagName('tr')[y].appendChild(data);

        });

};

submitButton.addEventListener('click', fetchPokemon);
// fetches pokemon also when pressed ^^^
submitButton.addEventListener('click', increaseIndex);



