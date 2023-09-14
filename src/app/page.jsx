import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const API_KEY = process.env.API_KEY

  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(`https://api.themoviedb.org/3/${genre === "fetchToprated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
  {next: { revalidate: 10000 } });

  const data = await response.json();

  const results = data.results;

  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }

  // console.log(results)
  
  return (
    <div>
      <Results results={results} />
    </div>
  )
}
