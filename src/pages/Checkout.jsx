
import { CartTitle} from '../components';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import CartPaymentInfo from '../components/Cart/CartPaymentInfo';
import { useSelector } from 'react-redux';
import CheckoutForm from '../components/CheckoutForm';

export const loader = () => () => {
  const user = useSelector((store)=>store.userInfo.user)

  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const basket =useSelector((store)=>store.product.cartTotal)
  return (
    <>
  <div className='pt-20 align-elements'>
  <CartTitle/>
     {basket < 1 ?null :
     <>
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm/>
        <CartPaymentInfo/>
      </div></>}
  </div>
    </>
  );
};

export default Checkout;