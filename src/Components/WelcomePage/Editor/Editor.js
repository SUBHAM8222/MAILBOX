
import React, { useState,useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import axios from "axios";

const DrafJs = () => {
    const Emailref=useRef();
    


   
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
 const x= JSON.stringify(convertToRaw(editorState.getCurrentContent()))
  console.log(x)

  

  const sendemailhandler=async()=>{

const email=Emailref.current.value;
if((email.length>7)&&(email.includes('@')))

{
    const emailz=localStorage.getItem('EMAIL')
    const E_mail=email.replace('@','').replace('.','');
    await axios.post(`https://mailbox-react-default-rtdb.firebaseio.com/email/${E_mail}/.json`,{
        email:emailz,
        data:x})
        
        


}
else
{
    alert('enter valid email');
}
  }


  return (
    <div>
        <input type='email' required className="input" placeholder="CC" ref={Emailref}></input>
      
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
      <button onClick={sendemailhandler}>SEND</button>
    </div>
  );
};

export default DrafJs;