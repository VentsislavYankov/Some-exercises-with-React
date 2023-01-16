//import ParentComp from "./components/ParentChildComp/ParentComp";
//import Message from "./components/Props/Message";
import StatefullComp from "./components/ComponentsPartTwo/StatefullComp";
import ButtonStatelessCom from "./components/ComponentsPartTwo/ButtonStatelessCom";
import CssInReact from "./components/CSSInReact/CssInReact";



//import StatelessComp from "./components/ComponentsPartTwo/ButtonStatelessCom.js";
//import UsestateComp from "./components/Usestate/UsestateComp"

//import Events from "./components/Ewents/Events.js";


const App = () => {
  
  return (
    <div>
      {/*<h1>App component</h1>
      <Message 
      userName="Djoshua"
      age={30}
      isMarried={true} 
      />*/}
      {/*<UsestateComp />*/}
      <CssInReact />
      <ButtonStatelessCom/>
      <StatefullComp/>
      
    </div>
  );
};

export default App;
