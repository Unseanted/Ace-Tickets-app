const movies = [
    {
        id: 1, 
        name: "The Dark Knight", 
        genres: ["Action", "Adventure", "Crime"], 
        description: "A superhero movie", 
        date: "2021-01-01", 
        venue: "Mees Palace", 
        available: true
    }, 
    {
        id: 2, 
        name: "The Dark Knight", 
        genres: ["Action", "Adventure", "Crime"], 
        description: "A superhero movie", 
        date: "2021-01-01", 
        venue: "Eko Atlantic", 
        available: true
}
]
const getAllMovies = async (req, res) => {
    try {
        res.status(200).json(movies)
    } catch (error) {
        res.status(500).json({Message: "Movies not found"})
    }
}

const getOneMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = movies.find(movie => movie.id === parseInt(id))
        if (!movie) {
            return res.status(404).json({Message: "Movie not found"})
        }
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({Message: "Movie not found"})
    }
}

module.exports = {getAllMovies, getOneMovie};