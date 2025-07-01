import React from 'react';
import {Link} from 'react-router-dom'
function Item({ data }) {
    return (
        <article className="w-full max-w-xs mx-auto text-center" data-aos="fade-up">
            <div className="w-full h-[28.125rem] relative z-[1] group">
                <img src={data.image} alt={data.description} className="w-full h-full object-cover" />
                <span className="absolute top-[0.625rem] left-[0.625rem] text-red-500 border border-red-500 rounded-md px-2 py-[0.0625rem] text-sm">
                    15%
                </span>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={'/item/' + data.id}>
                    <button className="bg-white text-black py-1 px-4 rounded hover:bg-gray-200 text-sm">
                        Ver más
                    </button>
                </Link>
                </div>
            </div>

            <div className="flex flex-col gap-[0.0625rem]">
                <h3 className="text-[0.8125rem] uppercase font-medium">
                    {data.name}
                </h3>
                <div>
                    <span className="text-red-600 text-[0.875rem]">
                        $<del>{data.price}</del>
                    </span>
                    <span className="text-[0.875rem] ml-2">
                        {parseInt(data.price)}
                    </span>
                </div>
                <p className="text-sm">
                    hasta 6 cuotas sin interes
                </p>
            </div>
        </article>
    );
}

export default Item;
