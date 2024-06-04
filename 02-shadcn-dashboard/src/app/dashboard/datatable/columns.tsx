"use client";

import { Payment } from "@/data/payments.data";
import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table"; 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu" 
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox"

import { ArrowUpDown, ChevronDownIcon, ChevronUpIcon, MoreHorizontal } from "lucide-react"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === "asc") {
    return <ChevronUpIcon className="h-4 w-4 transform rotate-180" />
  }
  if (isSorted === "desc") {
    return <ChevronDownIcon className="h-4 w-4" />
  }
  return null
}

const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: any, addMeta: (meta: any) => void) => {
  
  filterValue = filterValue.toLowerCase()
  const filterParts = filterValue.split(" ")

  const rowValues = `${row.original.email} ${row.original.clientName} ${row.original.status}`.toLowerCase()

  if (filterParts.every((part:any) => rowValues.includes(part))) {
    return true
  }

  // if (row.original.email.includes(filterValue)) {
  //   return true
  // }

  // if (row.original.clientName.includes(filterValue)) {
  //   return true
  // }

  // if (row.original.status.includes(filterValue)) {
  //   return true
  // }

  return false
  
}



export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const color = {
        success: "bg-green-500",
        paid: "bg-green-500",
        pending: "bg-yellow-500",
        failed: "bg-red-500",
      }[status] ?? "bg-gray-500";
 
      return <div className={`text-white p-2 rounded-sm ${color}`}>{status}</div>
    },
    
  },
  {
    accessorKey: "email",
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    }
  },
  {
    accessorKey: "amount", 
    header:  ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    } ,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "clientName",
    header:  ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cliente
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    } 
  },
  {
    accessorKey: "id",
    header:  ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    } 
  },{
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast("Payment ID copied to clipboard")
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];
