import fruitsData from '../fruits.json'
import Fruit from './Fruit'


function Content() {

const fruitsArray = []
Object.keys(fruitsData).map(key =>  {
    fruitsArray.push(fruitsData[key])
})


    return (
        <>
      
             {fruitsArray.map(fruit => (
                <Fruit fruit={fruit} key={fruit.id} /> ))}
                
        </>
    )
}

export default Content
