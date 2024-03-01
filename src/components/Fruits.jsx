export default function Fruit({fruits, handleDelet}) {
    return <div>
                      <td>
                {fruits.map((fruit) =>( <li key={fruit.id}> {fruit.nom} </li> ))}
              </td>
              <th></th>
              <td>
                {fruits.map((fruit) =>(
                <li key={fruit.id}> <button onClick={()=>handleDelet(fruit.id)}>x</button></li> ))}
              </td>
    </div>
}