import { useSelector } from "react-redux/es/exports";
import  './Inbox.css';
const Outbox=()=>{

    const email=useSelector(state=>state.sentbox.email);
    console.log(email);
   
 const display=email.map((data)=>(

    <ul className='goal-item'>
        <li><span>{data.email}</span></li>
        <li>{data.data}</li>
        </ul>
    
 ))



return(

    <ul>{display}</ul>
)

}


export default Outbox;