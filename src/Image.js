import React from 'react';

const Image = (props) =>{
    return(
        <div>
        {{ if(props.category==='Food_Cupboard')
        <img src="https://media.mnn.com/assets/images/2019/04/pantry_items.jpg.653x0_q80_crop-smart.jpg" class="card-img-top" alt="store cupboard"/>}}
        </div>   
    );

}
