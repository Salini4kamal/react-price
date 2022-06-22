//import logo from './logo.svg';
import './App.css';
import { Cards } from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  const card=[
    {
     title:"FREE",
     price:"$0",
     period:"/month",
     check:[
      {
user:"Single User",
isDisable:true
     },
     {
      user:"5GB Storage",
      isDisable:true
           },
           {
            user:"Unlimited Public Projects",
            isDisable:true
                 },
                 {
                  user:"Community Access",
                  isDisable:true
                       },
                       {
                        user:"Unlimited Private Projects",
                        isDisable:false
                             },
                             {
                              user:"Dedicated Phone Support",
                              isDisable:false
                                   },
                                   {
                                    user:"Free Subdomain",
                                    isDisable:false
                                         },{
                                          user:"Monthly Status Reports",
                                          isDisable:false
                                         }
    ]
    },
    {
      title:"Plus",
      price:"$9",
      period:"/month",
      check:[
       {
 user:"5 User",
 isDisable:true
      },
      {
       user:"50GB Storage",
       isDisable:true
            },
            {
             user:"Unlimited Public Projects",
             isDisable:true
                  },
                  {
                   user:"Community Access",
                   isDisable:true
                        },
                        {
                         user:"Unlimited Private Projects",
                         isDisable:true
                              },
                              {
                               user:"Dedicated Phone Support",
                               isDisable:true
                                    },
                                    {
                                     user:"Free Subdomain",
                                     isDisable:true
                                          },{
                                           user:"Monthly Status Reports",
                                           isDisable:false
                                          }
     ]
     },
     {
      title:"pro",
      price:"$59",
      period:"/month",
      check:[
       {
 user:"unlimited user",
 isDisable:true
      },
      {
       user:"150GB Storage",
       isDisable:true
            },
            {
             user:"Unlimited Public Projects",
             isDisable:true
                  },
                  {
                   user:"Community Access",
                   isDisable:true
                        },
                        {
                         user:"Unlimited Private Projects",
                         isDisable:false
                              },
                              {
                               user:"Dedicated Phone Support",
                               isDisable:false
                                    },
                                    {
                                     user:"unlimited Free Subdomain",
                                     isDisable:false
                                          },{
                                           user:"Monthly Status Reports",
                                           isDisable:false
                                          }
     ]
     }
     
    ]
  
  return (
    <div className="App">
     <section className="pricing py-5">
          <div className='container'>
               <div className='row'>
    {card.map((e)=>
    <Cards names={e}/>
      
    )}
   
   </div>
   </div>
   </section>
    </div>
  );
}
export default App;
