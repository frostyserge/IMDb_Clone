
const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(`https://api.themoviedb.org/3/${genre === "fetchToprated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`)

  return (
    <main>
      <h1 className="text-blue-400">
        Home
      </h1>
    </main>
  )
}
