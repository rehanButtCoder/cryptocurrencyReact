import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, fetchAllCoins, increment } from '../features/coins/coinSlice'

const Coins = () => {
  const count = useSelector((state) => state.coins.value)
  const dispatch = useDispatch()
  // coin api redux toolkit

  const users = useSelector((state) => state.coins.users);
  const loading = useSelector((state) => state.coins.loading);
  const error = useSelector((state) => state.coins.error);

  // 
  useEffect(() => {
    dispatch(fetchAllCoins());
  }, [dispatch]);


  console.log(users);
  console.log(error);
  // const [data, setData] = useState()
  // const getFunc = async () => {
  //   const response = await showAllCoins();
  //   if (response.status === 200) {
  //     setData(response.data.data.coins);
  //   } else {
  //     Swal.fire({
  //       title: response.data.message,
  //       timer: 1500,
  //       icon: "error",
  //       showConfirmButton: false,
  //     });
  //   }
  // };

  // console.log(data);
  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Error",
        timer: 3500,
        icon: "error",
        showConfirmButton: false,
      })
    }
    // getFunc();
  }, [error])
  // hit login api
  // hit signup api
  // hadle multiple call api call requests hit 5 apis in a fucntion
  return (
    <div>Cryptocurrencies
      {loading ? <h1>loading.....</h1> :
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      }
    </div>

  )
}

export default Coins