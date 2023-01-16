import ButtonStatelessCom from '../ComponentsPartTwo/ButtonStatelessCom';
import './CssInReact.css';


const CssInReact = () =>{
  return (
    <div className="container">
      <h1 className="headerTitle">CSS in React with inline styling</h1>
      <p className="desc">This is just beginning of using CSS in React</p>

      <ButtonStatelessCom 
      fontSize={50} 
      padding={10} 
      borderRadius={20} 
      backgroundColor='red' />
    </div>
  );
};

export default CssInReact;