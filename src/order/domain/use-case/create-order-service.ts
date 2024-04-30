import { OrderRepository } from "../../infrastructure/repository/order.repository";
import { CreateOrderDto } from "../dto/create-order-dto";

export const CreateOderService = (createOrderDto: CreateOrderDto) => {
  const { fetchCreateOrder } = OrderRepository();

  const orderCreated = fetchCreateOrder(createOrderDto);

  return orderCreated;
};
