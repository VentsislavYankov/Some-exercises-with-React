

const ButtonStatelessCom =({
  fontSize=10,
  padding=10,
  borderRadius=4,
  backgroundColor="lightblue",
}) => {
  
  return (<button 
  style={{
    fontSize: `${fontSize}px`,
    padding: "10px",
    border: "2px solid blue",
    borderRadius: "10px",
    backgroundColor: backgroundColor,
    color: "white",

  }}
  >Login
  </button>);
  
};

export default ButtonStatelessCom;