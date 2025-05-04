import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SectionTitle from "@/components/global/SectionTitle";
import { fetchUserOrders } from "@/utils/action";
import { formatCurrency, formatDate } from "@/utils/format";

const SalesPage = async () => {
  const orders = await fetchUserOrders();
  return (
    <Table>
      <TableCaption>Total Orders: {orders.length}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Order Total</TableHead>
          <TableHead>Tax</TableHead>
          <TableHead>Shipping</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const { id, products, orderTotal, tax, shipping, createdAt, email } =
            order;
          return (
            <TableRow key={id}>
              <TableCell>{email}</TableCell>
              <TableCell>{products}</TableCell>
              <TableCell>{formatCurrency(orderTotal)}</TableCell>
              <TableCell>{formatCurrency(tax)}</TableCell>
              <TableCell>{formatCurrency(shipping)}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default SalesPage;
