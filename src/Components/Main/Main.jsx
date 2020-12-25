import React from 'react'
import FirstBlock from './FirstBlock/FirstBlock';
import SecondBlock from './SecondBlock/SecondBlock';
import ThirdBlock from './ThirdBlock/ThirdBlock';
import FourthBlock from './FourthBlock/FourthBlock';



const Main = (props) => {
    return(
        <div>
            <FirstBlock/>
            <SecondBlock />
            <ThirdBlock />
            <FourthBlock />
         </div>
        
    );
}

export default Main;