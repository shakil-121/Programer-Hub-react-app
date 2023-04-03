import React from 'react';
import './cosmatic.css'
import { addDB, removeDB} from '../utilites/fakedb';
const Cosmatic= (props) => {  

    const {id,details,title,userProfile,img,name}=props.cosmatic;
    const addPost=(id)=>{ 
        addDB(id);
    }
    const removePost=(id)=>{ 
        removeDB(id);
    }
    return (

        

        <div className='card' style={{border:'1px solid #ffff',padding:'20px',borderRadius:'20px',backgroundColor:'#ffff',marginTop:'50px' ,color:'#000',height:'1000px' ,width:'90%'}}> 
            <img style={{borderRadius:'10px',height:'500px',width:'100%'}} src={img} alt=''/> 

            <div style={{display:'flex',alignItems:'center',marginTop:'20px',backgroundColor:'#dfe6e9',borderRadius:'10px',padding:'10px'}}>
               <div>
               <img style={{borderRadius:'100%',height:'100px'}} src={userProfile} alt=''/>
               </div>
               <div style={{marginLeft:'10px', textAlign:'left'}}>
               <h3>{name}</h3>
               <p>Publised Date:12/02/2023</p> 
               </div> 
            </div> 

            <h2 style={{textAlign:'left',fontSize:'40px'}}>{title}</h2> 
            <p style={{textAlign:'left'}}>{details}</p>  

            <button onClick={()=>addPost(id)} style={{float: 'left',marginTop:'20px'}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <i style={{marginRight:'2px'}} class="fa-solid fa-bookmark"></i>
  Book Mark
</button>
            <button onClick={()=>removePost(id)} style={{float: 'left',marginTop:'20px'}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <i style={{marginRight:'2px'}} class="fa-solid fa-trash-can"></i>
  Remove Book Mark
</button>

            {/* <button onClick={()=>addPost(id)} style={{padding:'10px 20px',backgroundColor:'red',float: 'left'}}>Book Mark</button> */}
        </div>
    );
};

export default Cosmatic;