

        // fetch('https://rickandmortyapi.com/api/location')
        // .then(response => response.json())
        // .then(json => console.log(json))




        // fetch('https://rickandmortyapi.com/api/episode')
        // .then(response => response.json())
        // .then(json => console.log(json))

       

//Character 1
        function chooseCharacter({results}){

            const [myCharacter]=results;

        //   myDiv.innerHTML=myCharacter
        console.log("here are my result :", myCharacter)

        console.log("here are my resultImage :", myCharacter.image)

        console.log("here are my episode Link :", myCharacter.episode)


        console.log("here are my result :", myCharacter.id)

        console.log("here are my result Name :", myCharacter.name)

        console.log("here are my result species Type :", myCharacter.species)


        console.log("here are my result :", myCharacter.status)

        console.log("here are my result :", myCharacter.url)

        console.log("here are my result :", myCharacter.url)

        }
        // fetch('https://rickandmortyapi.com/api/character/?page=20')
        // .then(response => response.json())
        // .then(json => chooseCharacter(json))
        // .catch(chooseCharacter);


    //    const results= fetch('https://rickandmortyapi.com/api/character/?page=20')
    //     .then(response => response.json())
    //     .then(json => {const results= console.log(json)
        
    //     console.log("Here are my new results:",results)
    //     })
       
        fetch('https://rickandmortyapi.com/api/character/?page=20')
        .then(response => response.json())
        .then(json => {const results= json.results;
        
        console.log("Here are my new results:",results)
       
        console.log(results[0].image)

        const choosePic= document.querySelector('.pic')
        const choosePic2= document.querySelector('.pic2')

        const choosePic3= document.querySelector('.pic3')


        choosePic.src =results[2].image
        choosePic2.src =results[19].image
        choosePic3.src =results[11].image


        console.log(results[1])


        console.log(results[2])


        console.log(results[3])


        console.log(results[4])


        console.log(results[5])

    
    })
       

       