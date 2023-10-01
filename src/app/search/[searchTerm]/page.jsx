

export default async function searchPage() {

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`);

    if (!response.ok) {
        throw new Error("Error fetching data");
    }

  return (
    <div>Search Page</div>
  )
}
