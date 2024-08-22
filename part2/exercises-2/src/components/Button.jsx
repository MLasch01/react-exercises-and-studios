import './styles.css';

function Button() {
   function onLearnMore() {
      return alert("Slipsh Splash");
   }

   return ( 
         <button onClick={() =>onLearnMore()}>
            Learn More
         </button>
   );
}

export default Button;