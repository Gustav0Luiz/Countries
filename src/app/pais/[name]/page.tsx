import { CountryCard } from "@/components/CountryCard";
import { Country } from "@/types/Country";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params:{
        name: string;
    }
}

// função que retorna todos os dados de 1 país //
const getCountryByName = async (name:string): Promise<Country> => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    return (await res.json())[0];
}

// função que retorna todos os países que fazem fronteira com o país dado //
const getCountriesBordersByName = async (name: string) => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries: Country[] = await res.json();
    const country = countries.find((country: Country) => country.name.common === name)!; 

// até aqui ele encontra todos os dados sobre o país passado, para depois procurar as fronteiras.

    return country.borders?.map((border) => {
        const borderCountry = countries.find((country) => country.cca3 === border)!
//      verifica se o país dado possui fronteiras e roda um map em todas as opçoes de fronteira, depois
//      procura no array com todos os dados o nome do país que bate com a abreviação cca3 obtida nas fronteiras.

        return {
            name: borderCountry.name.common,
            ptName: borderCountry.translations.por.common,
            flag: borderCountry.flags.svg,
            flagAlt:borderCountry.flags.alt,
        }
    })
}

const CountryPage =  async ({params}: Props) => { 

    const country = await getCountryByName(params.name);
    const borderCountries = await getCountriesBordersByName(decodeURI(params.name));

    const formatter = Intl.NumberFormat('en', {notation: "compact"})
    return(
        <section className=" flex flex-col container">
            <h1 className="text-5xl font-bold text-gray-800 my-16 text-center">{country.translations.por.common}</h1>
            <Link href={`/#${params.name}`} className="flex items-center gap-1 py-2 px-3  w-fit rounded-md">
                <Image src='/arrow-back.svg' alt="seta de voltar" width={15} height={24}/>
                Voltar
            </Link>
            <article className=" items-center lg:items-stretch flex md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl">
                <section>
                    {country.capital ? (<h2 className=" text-xl text-gray-800 mt-8">
                        <b>🏙️ Capital:</b> {country.capital}
                    </h2>) : (<h2 className=" text-xl text-gray-800 mt-8">
                        <b>🏙️ Capital:</b> --
                    </h2>)}
                    <h2 className=" text-xl text-gray-800 mt-3">
                        <b>🗺️ Continente:</b> {country.region} {country.subregion && `- ${country.subregion}`}
                    </h2>
                    <h2 className=" text-xl text-gray-800 mt-3">
                        <b>👨‍👨‍👦‍👦 População:</b> {formatter.format(country.population)}
                    </h2>
                    {country.languages ? (<h2 className=" text-xl text-gray-800 mt-3">
                        <b>🗣 Línguas faladas:</b> <br />
                        {Object.values(country.languages).map((language)=>(
                            <span key={language}
                             className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-xl mb-8">{language}
                             </span> ))}</h2>)          
                    : (<h2 className=" text-xl text-gray-800 mt-3">
                        <b>🗣 Línguas faladas:</b> <br />
                            <span className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-xl mb-8">--</span>
                        </h2>)}
                </section>
                <div className="relative lg:h-auto h-48 w-80 md:w-96 shadow-2xl order-first md:order-last overflow-hidden rounded-xl">
                    <Image className="object-cover"
                        src={country.flags.svg} 
                        alt={country.flags.alt ? country.flags.alt : `Bandeira do país: ${decodeURI(params.name)}`} 
                        fill
                    />
                </div>
            </article>
            <section className="mb-4">
                {borderCountries && <h3 className="mt-6 mb-6 sm:text-2xl text-xl font-semibold text-gray-800 text-center">Países que fazem fronteira:</h3>}
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2 ">
                    { borderCountries && borderCountries.map((border)=>( 
                        <CountryCard {...border}/> 
                    ))}
                </div>
            </section>               
        </section>
    );
  }
  
  export default CountryPage;