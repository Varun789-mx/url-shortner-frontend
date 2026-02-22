import { Copy, Link } from "lucide-react";
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
import React from "react";
import axios from "axios";

export const HeroSection = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [shortUrl, setShortUrl] = React.useState("");

    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const HandleSubmit = async () => {
        console.log(inputValue);
        try {
            const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/create`, {
                original_url: inputValue,
            }, {
                withCredentials: true
            });
            setShortUrl(result.data.short_url);
            console.log("Short URL:", result.data.short_url);
        } catch (error) {
            console.error("Error creating short URL:", error);
        }
    };
    const invoices = [
        {
            invoice: "2021-09-01",
            paymentStatus: "https://example.com/short-url",
            totalAmount: "412",
            paymentMethod: "https://example.com/short-url",
        },
        {
            invoice: "2025-09-01",
            paymentStatus: "https://example.com/short-url2",
            totalAmount: "15",
            paymentMethod: "https://example.com/short-url2",
        },
    ];

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
                    className="flex bg-gray-900 p-2 pl-4 border-2
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
                        onChange={HandleInput}
                        type="url"
                        className="p-2 w-[90%]  text-white  placeholder-gray-300 rounded-3xl plac   placeholder:text-xl outline-none"
                        placeholder="Enter the link here"
                    />
                    <button
                        onClick={HandleSubmit}
                        className="absolute text-white focus:bg-purple-800 bg-purple-500 right-0 top-0 font-bold rounded-3xl shadow-blue-500 p-4"
                    >
                        Shorten Now!
                    </button>
                </div>

                {shortUrl && (
                    <div className="w-full bg-gray-900 text-white p-4 rounded-2xl">
                        <p className="font-bold text-lg">Short URL:</p>
                        <p className="text-purple-400">{shortUrl}</p>
                    </div>
                )}
                <Table>
                    <TableCaption>A list of your all shortened links</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-25">Date</TableHead>
                            <TableHead>Short Url</TableHead>
                            <TableHead>Original Url</TableHead>
                            <TableHead className="text-right">Clicks</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium text-gray-300">{invoice.invoice}</TableCell>
                                <TableCell className="text-gray-300 gap-2 flex justify-evenly ">{invoice.paymentStatus} <Copy className="h-5 w-5" /></TableCell>
                                <TableCell className="text-gray-300">{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right text-gray-300">
                                    {invoice.totalAmount}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter></TableFooter>
                </Table>
            </div>
        </div>
    );
};
