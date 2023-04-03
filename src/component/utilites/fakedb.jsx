 
    const addDB=id=>{  
        // আমরা যদি লোকাল ডাটাবেজ(local storage) এ ডাটা অবজেক্টের মদ্ধে রাখতে চাই  
        let shoppingCart={}; 

        // get the shopping cart  
        const storedCart=localStorage.getItem('shoppingCart'); 
        if(storedCart)
        {
         shoppingCart=JSON.parse(storedCart);
        } 


        const quntity=shoppingCart[id] 
        if(quntity)
        {
          const newQunatity=quntity+1; 
          shoppingCart[id]=newQunatity
        } 
        else{
            shoppingCart[id]=1; 

        } 
        localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
    } 


    // Remove form shopping cart 
    const removeDB=id=>
    { 
        const storedCart=localStorage.getItem('shoppingCart') 
        if(storedCart)
        {
            const shoppingCart=JSON.parse(storedCart);
            if(id in shoppingCart)
            {
              delete shoppingCart[id] 
              localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
            }
        }
    }


export {addDB,removeDB}