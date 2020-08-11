import React from 'react';
import Comment from './Comment';
import LikeButton from './LikeButton';
import '../App.css';

function PrintLogin ({ login }) {
 return ( <ul>
  <h4 className ='printform-h4' >Post Feed</h4>
    {login.map((value)=><ul className ='feed-block' >  
      <li className = 'feed-block-li' >Email :{value.email}</li>
      <li className='feed-block-image'>
        <img src ={value.postimg} width = '50' height ='50' alt='pic not visible' />
      </li>
      <li className = 'feed-block-li'>caption :{value.caption}</li>
      <Comment />
      <LikeButton itemId={value.id} />
    </ul>
   )}
  </ul>
 )
};

export default PrintLogin;