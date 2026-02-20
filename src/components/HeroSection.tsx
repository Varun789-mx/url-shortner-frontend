import { Link } from "lucide-react"

export const HeroSection = () => {
    return <div className="flex justify-center w-full p-2 py-3" >
        <div className="flex justify-center gap-5 flex-col items-center align-middle">
            <h2 className="font-bold text-6xl p-4 text-purple-500">
                Shorten Your Loooong Links
            </h2>
            <p className="text-gray-500 p-2 w-3/4 font-semibold text-xl text-pretty text-center">Shrinky is an efficient and easy-to-use URL shortening service that streamlines your online experience</p>
            <div className="flex  p-2 justify-center w-3/4 relative gap-2 focus-within:border focus-within:border-blue-500  rounded-4xl outline-none focus-within:ring-1 focus-within:ring-blue-400">
                <div className="p-4 h-10 w-7 absolute left-2 top-0">  <Link className=" " /></div>
                <input type="url" className="p-2 w-[90%]   placeholder-gray-400 rounded-3xl plac   placeholder:text-xl outline-none" placeholder="Enter the link here" />
                <button className=" absolute bg-purple-500 right-0 top-0 font-bold rounded-3xl shadow-2xl p-4">Shorte Now!</button>
            </div>
        </div>
    </div>
}