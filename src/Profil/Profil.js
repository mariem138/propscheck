import React from 'react'
import Card from './Card'
import Data from '../Data'

const Profil = () => {

    return (
        <div id="profil">
        
          

            <Card  FullName={Data.FullName} Bio={Data.Bio} Profession={Data.Profession} >
             
             <img src={Data.image} style={{width:"100%"}} alt="..."/>

            </Card>
           




        


        </div>
    )
}

export default Profil ; 
