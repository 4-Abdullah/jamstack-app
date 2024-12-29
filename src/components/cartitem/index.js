import { Button, Stack } from "react-bootstrap"
import { formatCurrency } from "../../utilities/index"
import { CldImage } from "next-cloudinary";
import { useCart } from '../../components/ShoppingCart/CartContext';


const CartItem = ({id,attributes}) => {
  // let quantity = 1; 
 
const { cartItems,addToCart, increaseCartQuantity,decreaseCartQuantity, removeFromCart} = useCart();
 const item = cartItems.find((item) => item.id === id) || { quantity: 0 };
  const quantity = item.quantity;
  console.log('quantity',quantity)
  // if (!attributes || !attributes.products || !attributes.products.data) { 
  //   return null;

  //  }
  
  //  const price = attributes.price;
  ; // Safe check to ensure price and quantity are valid numbers
   const totalPrice = Number.isNaN(attributes.price * quantity) ? 0 : attributes.price *quantity;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <div className="me-auto">
        <div> 
           <div className="mt-auto">
           {quantity === 0 ? (
             <Button className="w-100 rounded" onClick={() => addToCart(id)}>
               +
             </Button>
           ) : (
             <div
               className="d-flex align-items-center flex-column"
               style={{ gap: ".5rem" }}
             >
               <div
                 className="d-flex align-items-center justify-content-center"
                 style={{ gap: ".5rem" }}
               >
                 <Button onClick={() =>decreaseCartQuantity(id)}>-</Button>
                 <div>
                   <span className="fs-3">{quantity}</span> in cart
                 </div>
                 <Button onClick={() => increaseCartQuantity(id)}>+</Button>
               </div>
               <Button
                 onClick={() => removeFromCart(id)}
                 variant="danger"
                 size="sm"
               >
                 Remove
               </Button>
             </div>
           )}
         </div>
         <CldImage  src={attributes.image.data.attributes.url} alt='image' width={150}  height={100}  dpr="auto" crop="scale" responsive="true" />
          {attributes.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(attributes.price)}
        </div>
      </div>
      <div>{formatCurrency(totalPrice)}</div>
      {/* <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)} // Ensure `removeFromCart` and `id` are defined
      >
        &times;
      </Button> */}
    </Stack>
  );
};

export default CartItem;
