import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData() {
  return payments;
}



export default async function Page() {

  const data = await getData();
  
  return (
    <div>
      <h1>DataTable</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
