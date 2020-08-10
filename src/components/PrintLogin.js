import React from 'react';
import Comment from './Comment';
import LikeButton from './LikeButton';

function PrintLogin ({ login }) {
 return ( <ul>
  <h4>Post feed</h4>
    {login.map((value,key)=><ul>  
      <li>Email :{value.email}</li>
      <li><img src ={value.postimg} width = '50' height ='50' alt='pic not visible' /></li>
      <li>caption :{value.caption}</li>
      <Comment />
      <LikeButton itemId={value.id} />
    </ul>
   )}
  </ul>
 )
};

export default PrintLogin;