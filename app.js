

       

       


        //fetching from my Rick and Morty Api
        fetch('https://rickandmortyapi.com/api/character/?page=20')
        .then(response => response.json())
        .then(json => {const results= json.results;
        
        console.log("Here are my new results:",results)
       
        console.log(results[0].image)

        //Querying all the areas on my webpage that i want to make the changes

        const choosePic= document.querySelector('.pic')
        const choosePic2= document.querySelector('.pic2')

        const choosePic3= document.querySelector('.pic3')

        const assignName=document.querySelector('.one')
        const assignName2=document.querySelector('.two')
        const assignName3=document.querySelector('.three')

        const assignId=document.querySelector('.id')
        const assignGender=document.querySelector('.gender')
        const assignEpisode=document.querySelector('.episode')
        const assignSpecies=document.querySelector('.species')

        const assignId2=document.querySelector('.id2')
        const assignGender2=document.querySelector('.gender2')
        const assignEpisode2=document.querySelector('.episode2')
        const assignSpecies2=document.querySelector('.species2')

        const assignId3=document.querySelector('.id3')
        const assignGender3=document.querySelector('.gender3')
        const assignEpisode3=document.querySelector('.episode3')
        const assignSpecies3=document.querySelector('.species3')


  // setting the areas i am querying equal to my results value
        choosePic.src =results[2].image
        choosePic2.src =results[19].image
        choosePic3.src =results[11].image

        assignName.textContent=results[2].name
        assignName2.textContent=results[19].name
        assignName3.textContent=results[11].name

      
        //person 1
        assignId.textContent="ID: "+results[2].id
        assignGender.textContent="GENDER: "+results[2].gender
        assignEpisode.textContent=results[2].episode
        assignSpecies.textContent="SPECIES: "+results[2].species

//person 2
        assignId2.textContent="ID: "+results[19].id
        assignGender2.textContent="GENDER: "+results[19].gender
        assignEpisode2.textContent=results[19].episode
        assignSpecies2.textContent="SPECIES: "+results[19].species

 //person 3       
        assignId3.textContent="ID: "+results[11].id
        assignGender3.textContent="GENDER: "+results[11].gender
        assignEpisode3.textContent=results[11].episode
        assignSpecies3.textContent="SPECIES: "+results[11].species



// there were just refrence i can see inside of the Dom
        console.log(results[1])


        console.log(results[2])


        console.log(results[3])


        console.log(results[4])


        console.log(results[5])

    
    })
       
//Figuring out How to Access the Data
        // function chooseCharacter({results}){

        //     const [myCharacter]=results;

        //   myDiv.innerHTML=myCharacter
        // console.log("here are my result :", myCharacter)

        // console.log("here are my resultImage :", myCharacter.image)

        // console.log("here are my episode Link :", myCharacter.episode)


        // console.log("here are my result :", myCharacter.id)

        // console.log("here are my result Name :", myCharacter.name)

        // console.log("here are my result species Type :", myCharacter.species)


        // console.log("here are my result :", myCharacter.status)

        // console.log("here are my result :", myCharacter.url)

        // console.log("here are my result :", myCharacter.url)

        // }
       