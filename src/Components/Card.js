<<<<<<< HEAD
import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div>
                <h2> {name} </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

=======
import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
            <div>
                <h2> {name} </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

>>>>>>> 54b7c030acd6005cf60d91cf599a9889e288077a
export default Card;