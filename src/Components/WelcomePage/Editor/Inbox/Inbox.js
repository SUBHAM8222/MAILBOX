import { useSelector } from "react-redux/es/exports";
import  './Inbox.css';
const Inbox=(props)=>{

    const email=useSelector(state=>state.outbox.email);
    console.log(email);
   
 const display=email.map((data)=>(

    <ul className='goal-item'>
        <li><span>{data.email}</span><button onClick={props.delete.bind(null,data.id)}>Delete</button></li>
        <li>{data.data}</li>
        </ul>
    
 ))



return(

    <ul>{display}</ul>
)

}



export default Inbox;