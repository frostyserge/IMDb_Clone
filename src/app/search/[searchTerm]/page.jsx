import Results from "@/components/Results";


export default async function searchPage({ params }) {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`);

    if (!response.ok) {
        throw new Error("Error fetching data");
    }

    const data = await response.json();

    const results = data.results;

  return (
    <div>
        {results && results.length === 0 && (
            <h1 className="text-center pt-6">Nothing found by this criteria</h1>
        )}

        {results && <Results results={results} />}
    </div>
  )
}
