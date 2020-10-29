<<<<<<< HEAD
import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {

    return(
        <div>
            {
                robots.map((user ,i) => {
                    return( <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />)
    })
            }
        </div>
    );
}

=======
import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {

    return(
        <div>
            {
                robots.map((user ,i) => {
                    return( <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />)
    })
            }
        </div>
    );
}

>>>>>>> 54b7c030acd6005cf60d91cf599a9889e288077a
export default CardList;