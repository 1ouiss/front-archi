import { useState } from "react";
import { CreateOderService } from "../../domain/use-case/create-order-service";
import { CreateOrderDto } from "../../domain/dto/create-order-dto";

export const CreateOrderViewModel = () => {
  const [order, setOrder] = useState({} as CreateOrderDto);

  const createOrderCommandHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log(event.target);

    await CreateOderService(order);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  return {
    createOrderCommandHandler,
    handleChange,
  };
};
