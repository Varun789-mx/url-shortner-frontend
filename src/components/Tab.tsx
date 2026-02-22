import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const TableView = () => {
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const handleCopy = (id: number, url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const Links = [
        { id: 1, Date: "2024-12-01", shorten_url: "https://example.com/fsfasga", orignal_url: "https://www.example.com/original", clicks: 42 },
        { id: 2, Date: "2024-12-01", shorten_url: "https://example.com/fsfasga", orignal_url: "https://www.example.com/original", clicks: 42 },
    ];

    return (
        <div className="w-full mt-6 overflow-x-auto rounded-xl border border-white/10 backdrop-blur-sm">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-widest">
                        <th className="px-6 py-4 font-medium">Date</th>
                        <th className="px-6 py-4 font-medium">Shorten URL</th>
                        <th className="px-6 py-4 font-medium">Original URL</th>
                        <th className="px-6 py-4 font-medium text-center">Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {Links.map((row: any) => (
                        <tr
                            key={row.id}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200 group"
                        >
                            <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                                {row.Date}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <a
                                        href={row.shorten_url}
                                        className="text-purple-400 hover:text-purple-300 transition-colors duration-150 truncate max-w-45 block"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {row.shorten_url}
                                    </a>
                                    <button
                                        onClick={() => handleCopy(row.id, row.shorten_url)}
                                        title="Copy link"
                                        className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-all duration-200 ${copiedId === row.id
                                            ? "bg-purple-600/40 border-purple-400/60 text-purple-200"
                                            : "bg-white/5 border-white/10 text-gray-400 hover:bg-purple-600/20 hover:border-purple-500/40 hover:text-purple-300"
                                            }`}
                                    >
                                        {copiedId === row.id ? (
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
                            </td>
                            <td className="px-6 py-4">
                                <a
                                    href={row.orignal_url}
                                    className="text-gray-300 hover:text-white transition-colors duration-150 truncate max-w-65 block"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {row.orignal_url}
                                </a>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30">
                                    {row.clicks}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};