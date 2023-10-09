import {useState} from 'react'

const HogTile = ({hog}) => {
    
    const [showStuff, setShowStuff] = useState(true)
    const toggleShow = () => {
        setShowStuff(!showStuff)
         //setShowStuff(showStuff =>!showStuff)
    }

    return (
        <div onClick = {toggleShow} className="image ui three wide column pigTile">

            {showStuff ? 
            <NameAndImage name = {hog.name} image = {hog.image}/> 
            : 
            <Details hog = {hog}/>}
  
        </div>
    )
}

const NameAndImage = ({name, image}) => {
    return (
        <div>
           <h1>{name}</h1>
           <img src={image}/>
        </div>
    )
}

const Details = ({hog}) => {
    return (
        <div>
            <h3>{hog.specialty}</h3>
            <h2>{hog.weight} kilos</h2>
            <p>{hog['highest medal achieved']}  medal</p>
            {hog.greased ? <h1>Ready For Fun!</h1> : <h4>NO FUN</h4>}
        </div>
    )
}

export default HogTile