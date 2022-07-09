import orderProduct from "./order-product.interface";

export default interface receivedOrderFirestore {
    id?: string,
    waiter: string,
    table: string,
    order: orderProduct[],
    time: number,
    status: string,
    total: number
}