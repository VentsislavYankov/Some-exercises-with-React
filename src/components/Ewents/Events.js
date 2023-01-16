

const Events = () => {
    const handleClick = () => {
        alert("Clicked");
    };
  return (
    <div>
        <h3>Event Handler</h3>
        <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Events;