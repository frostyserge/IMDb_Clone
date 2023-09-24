async function getMovie(movieId) {

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return await response.json();
}

export default async function MoviePage({params}) {

    const movieId = params.id;
    const movie = await getMovie(movieId)

    return (
    <div className="w-f">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            
        </div>
    </div>

    )
}
