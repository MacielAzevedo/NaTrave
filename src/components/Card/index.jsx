export const Card = ({ timeA, timeB, match }) => (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
        <span className="text-sm md:text-base text-gray-700 font-bold">{match.time}</span>

        <div className="flex space-x-5 justify-center items-center">
            <span className="uppercase">{timeA.slug}</span>
            <img src={`/imagem/flags/${timeA.slug}.png`}/>

            <input type="number" className="bg-red-300/[0.2] text-center w-16 h-16 text-red-700 text-xl" />
            <span className="text-red-500 font-bold">X</span>
            <input type="number" className="bg-red-300/[0.2] text-center w-16 h-16 text-red-700 text-xl" />

            <img src={`/imagem/flags/${timeB.slug}.png`}/>
            <span className="uppercase">{timeB.slug}</span>
        </div>
    </div>
)