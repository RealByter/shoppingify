import Bottle from "../../bottle.svg";

const AddItemCta = () => {
  return (
    <div>
      <img src={Bottle} alt="bottle" />
      <div>
        <p>Didn't find what you need?</p>
        <button>Add item</button>
      </div>
    </div>
  );
};

export default AddItemCta;
