// import Maariage from './mariage.jpg';
// import Mariagee from './mariagee.jpg';
// import Mariage5 from './mariage5.jpg';
// import Mariee_simple from './mariee_simple.jpg';
// import Mariage_nb from './mariagenb.jpg';
// import Romantic from './romantic.jpg';
// import Mariageblanccasse from './mariageblanccasse.jpg';


const Mariage = ()=>{
  var Mariages = [
    {'description':'Abcdefgh',
    'photo':require('./mariage.jpg')
    },
    {
     'description':'ijklmnop',
     'photo': require('./mariagee.jpg')
    }
];
var Mars = [
  {
    'description':'',
    'photo':require('./mariage5.jpg')
  },
  {
    'description':'',
    'photo':require('./mariee_simple.jpg')
  }
];
return (
   <>
   <center><h1><em>Mettez votre grand jour entre de bonnes mains</em></h1></center>
    <div className='f'>
    
     {Mariages.map(Mariage=>
     <div className='c'>
        <img src={Mariage.photo} alt=""/>
     </div>
    )}
    </div>
    <div className='f'>
    {Mars.map(Mar=>
      <div className='c'>
      <img src={Mar.photo} alt=""/>
   </div>
      )}
    </div>
    </>
)
}
export default Mariage