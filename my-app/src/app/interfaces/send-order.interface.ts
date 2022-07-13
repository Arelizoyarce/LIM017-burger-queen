import orderProduct from "./order-product.interface";

export default interface sendOrderList {
    client: string,
    table: string,
    order: orderProduct[],
    time: string,
    status: string,
    total: number,
}