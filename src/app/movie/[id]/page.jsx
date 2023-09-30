import Image from 'next/image';

async function getMovie(movieId) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return await response.json();
}

export default async function MoviePage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);

    return (
        <div className="w-f">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    style={{ maxWidth: '100%', height: '100%' }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="movie poster"
                ></Image>
            </div>
        </div>
    );
}
