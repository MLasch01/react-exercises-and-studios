import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile()
{
   return(
      <div>
         <Fish />
         <FishName />
         <Facts />
         <ul>
            {listItem}
            
         </ul>
         <Button />
      </div>
         
   );
}

const listItem = oceans.map(oceans =>
   <div key={oceans.id} className="profile" >
      <img src={oceans.image} alt={oceans.name} className="img"/>
   </div>
);

function Fish() {
   return(
   <div key={oceans.id}  className={`${oceans.fishCheck === "true" ? "isAFish" : "profile"}`}>
      </div>
   );
}

function FishName() {
   return(
      <h1>{oceans.name}</h1>
   );
}

function Facts(){
   return(
      <>
         <h3>Fun Facts:</h3>
         <ol>
            <li>{oceans.fact1}</li>
            <li>{oceans.fact2}</li>
            <li>{oceans.fact3}</li>
         </ol>
      </>
   );
}


export default Profile;