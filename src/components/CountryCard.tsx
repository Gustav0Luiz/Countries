import Image from "next/image";
import Link from "next/link";

type CountryCardType = {
    name: string,
    ptName: string,
    flag: string,
    flagAlt: string,
}

export const CountryCard = ({name, ptName, flag, flagAlt}: CountryCardType) => {
    return(
     <Link href={`/pais/${name}`}>
        <article key={name} id={name}
            className="h-64 min-w-full p-2 px-10 sm:px-2  bg-white border-2 rounded-xl transition-all flex flex-col justify-evenly
            betterhover:hover:border-indigo-200 betterhover:hover:shadow-xl betterhover:hover:cursor-pointer 
            betterhover:hover:p-0 items-center ">
          <div className="relative w-full h-48 p-2 md:h-40 overflow-hidden rounded-xl">
            <Image src={flag} alt={flagAlt} fill className="object-cover"/>
          </div>
          <h1 className="font-bold text-xl text-center mt-1">{ptName}</h1>
        </article> 
      </Link>
    );
}
