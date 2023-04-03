
import './App.css'
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
// import StepCounter from './component/StepCounter/StepCounter'
// import {formula, modulus, multiply, sum } from './component/calculator/Calculator';
import Cosmatic from './component/cosmatics/Cosmatic';
import Nav from './component/nav/Nav';

function App() {
  // const num1=27; 
  // const num2=5; 
  // const result=multiply(num1,num2); 
  // const total=sum(num1,num2); 
  // const res=modulus(num1,num2) 
  // const fml=formula(num1,num2) 

  const cosmatics=[

    {id:1,details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",userProfile:"https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/122219506_904942753368668_1713234143461621588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFKECs0ObyBTMyn_hRvbjFQIPHfC_AwAyAg8d8L8DADIANaqA8hcE0BERrYkiULxmTaDbVzp6nVfd3Ki268wa1c&_nc_ohc=MmmtkbWq34UAX8yhTRh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAu19jl95da4gOKIq8uAjrUs2RaGrtZkXR-vWLU3Gvgpw&oe=645122A8", img:"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"MD.Shahadat Hossain",title:"What is Fake data and how to use it ?", prize:'React Developer'},
    {id:2,details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.ots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", userProfile:"https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/122219506_904942753368668_1713234143461621588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFKECs0ObyBTMyn_hRvbjFQIPHfC_AwAyAg8d8L8DADIANaqA8hcE0BERrYkiULxmTaDbVzp6nVfd3Ki268wa1c&_nc_ohc=MmmtkbWq34UAX8yhTRh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAu19jl95da4gOKIq8uAjrUs2RaGrtZkXR-vWLU3Gvgpw&oe=645122A8",img:"https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"lipjel",title:"What is deffirent between Props and state?", prize:50},
    {id:3,details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has rContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.oots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", userProfile:"https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/122219506_904942753368668_1713234143461621588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFKECs0ObyBTMyn_hRvbjFQIPHfC_AwAyAg8d8L8DADIANaqA8hcE0BERrYkiULxmTaDbVzp6nVfd3Ki268wa1c&_nc_ohc=MmmtkbWq34UAX8yhTRh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAu19jl95da4gOKIq8uAjrUs2RaGrtZkXR-vWLU3Gvgpw&oe=645122A8",img:"https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"perfeum",title:"What is Fake data and how to use it ?", prize:500},
    {id:4,details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.ots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", userProfile:"https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/122219506_904942753368668_1713234143461621588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFKECs0ObyBTMyn_hRvbjFQIPHfC_AwAyAg8d8L8DADIANaqA8hcE0BERrYkiULxmTaDbVzp6nVfd3Ki268wa1c&_nc_ohc=MmmtkbWq34UAX8yhTRh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAu19jl95da4gOKIq8uAjrUs2RaGrtZkXR-vWLU3Gvgpw&oe=645122A8",img:"https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"bag",title:"What is Fake data and how to use it ?", prize:1000},
    {id:5,details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", userProfile:"https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/122219506_904942753368668_1713234143461621588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFKECs0ObyBTMyn_hRvbjFQIPHfC_AwAyAg8d8L8DADIANaqA8hcE0BERrYkiULxmTaDbVzp6nVfd3Ki268wa1c&_nc_ohc=MmmtkbWq34UAX8yhTRh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAu19jl95da4gOKIq8uAjrUs2RaGrtZkXR-vWLU3Gvgpw&oe=645122A8",img:"https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"shoe",title:"What is Fake data and how to use it ?", prize:800},
    {id:6,details:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", userProfile:"https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/122219506_904942753368668_1713234143461621588_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFKECs0ObyBTMyn_hRvbjFQIPHfC_AwAyAg8d8L8DADIANaqA8hcE0BERrYkiULxmTaDbVzp6nVfd3Ki268wa1c&_nc_ohc=MmmtkbWq34UAX8yhTRh&_nc_ht=scontent.fdac151-1.fna&oh=00_AfAu19jl95da4gOKIq8uAjrUs2RaGrtZkXR-vWLU3Gvgpw&oe=645122A8", img:"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",name:"Leptop",title:"What is Fake data and how to use it ?", prize:800}
  ] 


  return (
    <div className="App">    
        <Nav></Nav> 
        <div> 
          <img style={{width:'100%',height:'70vh',borderRadius:'15px',marginTop:'20px'}} src='https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg' alt=''/>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
          {
        cosmatics.map(cosmatic =><Cosmatic 
           cosmatic={cosmatic}
           > 
           </Cosmatic>)
         }  
          </div> 
          <div style={{border:'1px solid #000',borderRadius:'10px',marginTop:'50px',backgroundColor:'#ffff',height:'600px',color:'#ffff'}}>
             <h2 style={{backgroundColor:'#000a4e',borderRadius:'10px',fontSize:'30px',margin:'5px',fontWeight:'bold'}}>Book Mark List</h2> 
          </div>
        
          
        </div>
      

       {/* <h2>x=27 and y=5</h2>
        <h1>multiply : {result} | Total : {total} | Modulus : {res}</h1>
        <h1>(a+b)2 = {fml}</h1>

      <StepCounter></StepCounter>  */}
    </div>
  )
}

export default App
