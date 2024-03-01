import './App.css'
import { useState } from "react";

    function App() {

// state (état, données)
      const [fruits, setFruits] = useState([
          {id: 1, nom: "ananas", couleur: "jaune"},
          {id: 2, nom: "mangue", couleur: "jaune"},
          {id: 3, nom: "corosole", couleur: "vert"},
          {id: 4, nom: "avocat", couleur: "vert"},
          {id: 5, nom: "carotte", couleur: "rouge"},
          {id: 6, nom: "banane", couleur: "jaune"},
    ])
 
    const [nouveauFruit, setNouveauFruit] = useState('')    //pour ajouter un new fruit

    // comportements
 
    const handleDelet = (id) =>{      //comment suprimer un element du tableau
      //1. copie du state
          const fruitsCopy = [...fruits] //spread operatoi || const fruitCopy =  fruits.slice()

      //2. modifier mon state avec setter
          const fruitCopyUpdated =  fruitsCopy.filter((fruit) =>fruit.id !== id) // on prend 'fruitsCopy.' on le filtre pour chaque element de [fruit] on concerve les fruit.id diff de "id" cliqué en paramettre
      
          //3. modifier mon state avec le setter
          setFruits(fruitCopyUpdated) //setFruits applique la modification "fruitCopyUpdated" 
        }

    const handleSubmit = (event)=>{   //ajout de notre nouveau fruits entré dans le imput
      event.preventDefault() //evité les rechargement de la page
      //1. copie du state
          const fruitsCopy = [...fruits] //copie du tableau fruit
      //2. manipulation sur la copie du state
        const id = new Date().getTime() //créé id en fontion du l'heure
        console.log(id)
        const nom = nouveauFruit;
        fruitsCopy.push({ id: id, nom: nom}) //push ajoute des elemnt dans le tableau | fruitsCopy.push(id,nom) correst si le nom et la valeur c'est la mm chose

      //3. modifier le state avec le setter
        setFruits(fruitsCopy) //ajoute le new fruit dans setFruits
        setNouveauFruit('') //mais le champs input a vide apres le declenchement de l'action
    }
    const handleChange = (event) => {
      setNouveauFruit(event.target.value)  //pouvoir ecrire sur le input
    }
      
      return(
        <div className='container'>
          <h1>Liste de Fruits</h1>
          <table>
            <tr><th>NomFruit</th> <th>------</th> <th>Action</th></tr>
            <tr>
              <td>
                {fruits.map((fruit) =>( <li key={fruit.id}> {fruit.nom} </li> ))}
              </td>
              <th></th>
              <td>
                {fruits.map((fruit) =>(
                <li key={fruit.id}> <button onClick={()=>handleDelet(fruit.id)}>x</button></li> ))}
              </td>
            </tr>

          </table>

                  <br/>
          <form action="submit" onSubmit={handleSubmit}>
                <input 
                      value={nouveauFruit}
                      type="text" 
                      placeholder="Ajoutez un fruit..."
                      onChange={handleChange}
                 />
                <button><strong>+</strong></button>
                
          </form>
        </div>
      )
    }

    export default App;
