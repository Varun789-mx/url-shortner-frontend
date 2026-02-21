import { Link } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

export const HeroSection = () => {
     const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

  return (
    <div className="flex justify-center w-full p-2 py-3">
      <div className="flex justify-center gap-5 flex-col items-center align-middle">
        <h2 className="font-bold text-6xl p-4 text-purple-500">
          Shorten Your Loooong Links
        </h2>
        <p className="text-gray-300  p-2 w-3/4 font-semibold text-xl text-pretty text-center">
          Shrinky is an efficient and easy-to-use URL shortening service that
          streamlines your online experience
        </p>
        <div
          className="flex bg-gray-900 p-2 border-2
             border-gray-300 justify-center w-3/4 relative 
             gap-2 focus-within:border focus-within:border-purple-500 
              rounded-4xl outline-none focus-within:ring-1
               focus-within:ring-purple-500 transition-all duration-200 ease-in-out"
        >
          <div className="p-4 h-10 w-7 absolute left-2 text-white top-0">
            {" "}
            <Link />
          </div>
          <input
            type="url"
            className="p-2 w-[90%]  text-white  placeholder-gray-300 rounded-3xl plac   placeholder:text-xl outline-none"
            placeholder="Enter the link here"
          />
          <button className="absolute text-white bg-purple-500 right-0 top-0 font-bold rounded-3xl shadow-2xl p-4">
            Shorte Now!
          </button>
        </div>
        <div className="w-full bg-black text-white p-4 rounded-2xl">
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
      </div>
    </div>
  );
};
