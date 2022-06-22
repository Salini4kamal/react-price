

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck ,faTimes} from '@fortawesome/fontawesome-free-solid'
import {  Button } from 'react-bootstrap';
export function Cards({ names }) {

  return (
  
     
    
      <div className="col-lg-4">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{names.title}</h5>
            <h6 className="card-price text-center">{names.price}<span className="period">{names.period}</span></h6>
            <hr></hr>
               <ul className="fa-ul">
               { names.check.map((e)=>{
return <li className={e.isDisable ? " " : "text-muted"}>
  {e.isDisable ?   <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} /> }
    {e.user}
    </li>
})} 
</ul>
 <div className="d-grid">
             
              <Button href="#">Button</Button>
            </div>
          </div>
        </div>
      </div>
    
 
  );
}
