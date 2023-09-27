import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { useSelector } from 'react-redux';
import ComplexPaginationContainer from '../components/ComplexPaginationContainer';
import { CartTitle } from '../components';
import OrdersList from '../components/OrdersList';

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  ( queryClient) =>
  async ({ request }) => {
    const user =useSelector((store)=> store.userInfo.user)
    

    if (!user) {
      toast.warn('You must logged in to view orders');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  const basket =useSelector((store)=>store.product.cartTotal)
  return (
    <>
  <div className='pt-20 align-elements'>
  <CartTitle/>
      {basket <  1 ?null :
      <>
      <OrdersList/>
      <ComplexPaginationContainer />
      </>}
      
  </div>
     
    </>
  );
};

export default Orders;