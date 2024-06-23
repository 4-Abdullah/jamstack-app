import { Button, Stack } from "react-bootstrap"
import { formatCurrency } from "../../utilities/index"
import { CldImage } from "next-cloudinary";

const CartItem=(id)=>{
 
    const quantity=2
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
       
    <div className="me-auto">
      <div>
        {id.attributes.products.data.attributes.title}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: ".65rem" }}>
            x{quantity}
          </span>
        )}
      </div>
      <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {formatCurrency(id.attributes.products.data.attributes?.price)}
      </div>
    </div>
    <div>{formatCurrency(id.attributes.products.data.attributes?.price * quantity)}</div>
    <Button
      variant="outline-danger"
      size="sm"
      onClick={() => removeFromCart(id)}
    >
      &times;
    </Button>
    </Stack>
  )
}
export default CartItem