import { OrderEntity } from "../../domain/entity/order-entity";
import { GetOrdersViewModel } from "./GetOrdersViewModel";

const GetOrders = () => {
  const { orders } = GetOrdersViewModel();

  return (
    <div>
      {orders.map((order: OrderEntity) => (
        <div key={order.id}>
          <h1>{order.id}</h1>
          <p>{order.customerName}</p>
          <p>{order.createdAt}</p>
          <p>{order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default GetOrders;
