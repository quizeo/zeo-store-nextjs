import EmptyList from "@/components/global/EmptyList";
import { fetchAdminProducts } from "@/utils/action";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminProductsPage = async () => {
  const items = await fetchAdminProducts();

  if (items.length === 0) {
    return <EmptyList />;
  }
  return <div>Admin Products Pagess</div>;
};

export default AdminProductsPage;
