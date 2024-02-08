import { CountryCard } from "@/components/CountryCard";
import { Country } from "@/types/Country";

// Pegar os dados da API de países
const getCountries = async(): Promise<Country[]> => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = res.json();
  return data;
}

// Função assíncrona, renderiza no servidor
const Home = async () => {
  const countries = await getCountries();

  return(
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-2 mt-16">
        {countries.map((country) => (
          <CountryCard 
          name={country.name.common} 
          ptName={country.translations.por.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt ? country.flags.alt : `Bandeira do país`}
          key={country.name.common} 
          />
        ))}
      </section>
  );
}

export default Home;