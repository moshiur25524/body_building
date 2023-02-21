import React from 'react';
import Expert from '../Expert/Expert'
import image1 from '../../../assets/experts/expert-1.jpg'
import image2 from '../../../assets/experts/expert-2.png'
import image3 from '../../../assets/experts/expert-3.jpg'
import image4 from '../../../assets/experts/expert-4.jpg'
import image5 from '../../../assets/experts/expert-5.jpg'
import image6 from '../../../assets/experts/expert-6.jpg'

const Experts = () => {
    const experts = [
        {id:1, name: 'Moshiur', img:image1},
        {id:2, name: 'Sayma', img:image2},
        {id:3, name: 'Osman', img:image3},
        {id:4, name: 'Hafiz', img:image4},
        {id:5, name: 'Tazrin', img:image5},
        {id:6, name: 'Nahid', img:image6},
    ]
    return (
        <div className='container'>
            <h1 className='text-center highlight mt-5'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert key={expert.id} expert = {expert}/>)
                }
            </div>
        </div>
    );
};

export default Experts;