import { useCart } from "../CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-auto bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
