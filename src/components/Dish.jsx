const Dish = ({ image, name, price }) => {
    return (
      <div>
        <img src={image} alt={name} />
        <span>{name}</span>
        <span>{price} €</span>
      </div>
    );
  };
  
  export default Dish;