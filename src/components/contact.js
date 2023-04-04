import { useState } from "react";

const Contact=()=>{
 var[nom,setNom]= useState('');
 var[email,setEmail]= useState('');
 var[numero,setNumero]= useState('');
 var[message,setMessage]= useState('');
 return(
    <center>
    <div>
    <form method="post">
        <label htmlFor="nom">Nom et prenoms</label>
        <input type="text" value={nom} onChange={(e)=>setNom(nom = e.target.value)}/><br></br>
        <label htmlFor="email">Votre email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(email=e.target.value)}/><br></br>
        <label htmlFor="numero">Votre numéro</label>
        <input type="text" value={numero} onChange={(e)=>setNumero(numero=e.target.value)}/><br></br>
        <label htmlFor="message">Message</label>
        <input type="text" value={message} onChange={(e)=>setMessage(message=e.target.value)}/><br></br>
        <button type="submit" onClick={console.log(['nom:'+nom,'email:'+email,'numero:'+numero,'message:'+message])}>Envoyer</button>
    </form>
    </div>
    </center>
 )
}

export default Contact;