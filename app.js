

        // fetch('https://rickandmortyapi.com/api/location')
        // .then(response => response.json())
        // .then(json => console.log(json))




        // fetch('https://rickandmortyapi.com/api/episode')
        // .then(response => response.json())
        // .then(json => console.log(json))

        const myDiv=document.querySelector('div')


        function chooseCharacter({results}){

            const [myCharacter]=results;

        //   myDiv.innerHTML=myCharacter
        console.log("here are my result :", myCharacter)

        console.log("here are my resultImage :", myCharacter.image)

        console.log("here are my result :", myCharacter.url)


        console.log("here are my result :", myCharacter.url)

        console.log("here are my result :", myCharacter.url)

        console.log("here are my result :", myCharacter.url)


        console.log("here are my result :", myCharacter.url)

        console.log("here are my result :", myCharacter.url)

        console.log("here are my result :", myCharacter.url)

        }
        fetch('https://rickandmortyapi.com/api/character/?page=20')
        .then(response => response.json())
        .then(json => chooseCharacter(json))
        .catch(chooseCharacter);


