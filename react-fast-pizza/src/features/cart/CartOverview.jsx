import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="items-center justify-end bg-stone-800 p-4 text-stone-200 px-4 py-4 uppercase md:text-base flex">
      <p className="space-x-4 sm:space-x-6 font-semibold font-semibold text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
