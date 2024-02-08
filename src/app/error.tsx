"use client"

import Image from "next/image";
import Link from "next/link";

export const Error = () => {
    return(
        <section className=" flex flex-col container">
            <h1 className="text-5xl font-bold text-gray-800 my-16 text-center">Ops, ocorreu um erro ao carregar este país!</h1>
            <Link href={`/`} className="flex items-center gap-1 py-2 px-3  w-fit rounded-md">
                <Image src='/arrow-back.svg' alt="seta de voltar" width={15} height={24}/>
                Voltar
            </Link>
            <article className=" items-center lg:items-stretch flex md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl">
                <section>
                    <h2 className=" text-xl text-gray-800 mt-8">
                        <b>🏙️ Capital:</b> 
                    </h2>
                    <h2 className=" text-xl text-gray-800 mt-3">
                        <b>🗺️ Continente:</b>
                    </h2>
                    <h2 className=" text-xl text-gray-800 mt-3">
                        <b>👨‍👨‍👦‍👦 População:</b> 
                    </h2>      
                    <h2 className=" text-xl text-gray-800 mt-3">
                        <b>🗣 Línguas faladas:</b> <br />
                            <span className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-xl mb-8">--</span>
                        </h2>
                </section>
                <div className="relative lg:h-auto h-48 w-80 md:w-96 shadow-2xl order-first md:order-last overflow-hidden rounded-xl">
                    <svg
                    className="w-full h-40 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                    >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                </div>
            </article>              
        </section>
    );
}
export default Error;

