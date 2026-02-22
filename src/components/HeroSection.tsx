import { Check, Copy, Link } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { TableView } from "./Tab";

export const HeroSection = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [shortUrl, setShortUrl] = React.useState("");
    const [copied, setcopied] = useState(false);

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

    const handleCopy = (url: string) => {
        navigator.clipboard.writeText(`${import.meta.env.VITE_BACKEND_URL}/${url}`);
        setcopied(true);
        setTimeout(() => setcopied(false), 2000);
    };
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
                        <div className="flex gap-4">
                            <p className="text-purple-400">{shortUrl}</p>  <button
                                onClick={() => handleCopy(shortUrl)}
                                title="Copy link"
                                className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-200 ${copied
                                    ? "bg-purple-600/40 border-purple-400/60 text-purple-200"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-purple-600/20 hover:border-purple-500/40 hover:text-purple-300"
                                    }`}
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3 h-3" />

                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3 h-3" />

                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
                <br />
                <TableView />

            </div>
        </div>
    );
};
