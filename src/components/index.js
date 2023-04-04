import Aaa from './logo_mada.jpg';
import Tantely from './tantely.jpg';
import Mariage from './mariage';
import Logo_tantely from './logo_tantely.jpg';
import TR from './TR.jpg';
// import Tr from './TRakotoarivelo.jpg';
import Collections from './collections';
import Contact from './contact';
const Sary=()=>{
    return(
        <>
        <div className='mere'>
        <div className='b'>
        <img src={Logo_tantely} alt=""/>
        <h3><em>Un artiste très réputé au niveau de la mode, vous accompagnera dans les meilleurs moments de vos vies</em></h3>
        </div>

        <div className='mere2'>
             <img className='sary' src={Tantely} alt=""/>
        </div>
        </div>
        {/* <div className='mere'>
            <img className='sary2' src={Tr} alt=""/>
            <h1>NANANA, NANANA, NANANA</h1>
        </div> */}
        </>
    )
}
 const Entete = ()=>{
return(
    <>
    <div className="mere1">
    <img src={Aaa} alt=""/>
    <h4 className="font"><em> MADAGASCAR</em></h4>
    </div>
    <center><h1 className='styled'><strong><em>TANTELY RAKOTOARIVELO</em></strong></h1></center>
    <img className='tr' src={TR} alt=""/>
    <Sary/>
    <Mariage/>
    <Collections/>
    <Contact/>
    </>
)
}

export default Entete;