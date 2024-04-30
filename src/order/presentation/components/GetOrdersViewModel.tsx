import { useState } from "react";
import { GetOrderService } from "../../domain/use-case/get-orders-service";

export const GetOrdersViewModel = () => {
  const [orders, setOrders] = useState([]);

  const useGetOrders = async () => {
    const response = await GetOrderService();
    setOrders(response);
    console.log(response);

    return orders;
  };
  useGetOrders();

  return {
    orders,
  };
};
