import orderProduct from "./order-product.interface";

export default interface receivedOrderFirestore {
    id?: string,
    waiter: string,
    table: string,
    order: orderProduct[],
    time: string,
    status: string,
    total: number
}