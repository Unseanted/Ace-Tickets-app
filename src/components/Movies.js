import React, { useState } from 'react';
import TicketModal from './TicketModal';
import PaystackPayment from './PaystackPayment';
import './Movies.css';

const Movies = () => {
  const [showModal, setShowModal] = useState(false);
  const [ticket, setTicket] = useState({});
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const moviesByGenre = {
    "Showing Now": ["Rambo Red Blood", "Fast and Furious", "John Wick"],
    "Comedy": ["Three Stooges", "Superbad", "Dumb and Dumber"],
    "Action": ["Die Hard", "Mad Max: Fury Road", "Gladiator"],
    "Thriller": ["Sleeping Dogs", "Gone Girl", "Shutter Island"],
    "Romantic": ["Notting Hill", "Pride and Prejudice", "The Notebook"]
  };

  const handlePaymentSuccess = (reference) => {
    const ticketDetails = {
      event: `Movie - ${selectedMovie}`,
      date: '2024-09-30',
      seat: 'B5',
      id: reference
    };
    setTicket(ticketDetails);
    setShowModal(true);
  };

  return (
    <div className="movies-page">
      <h1>Movie Tickets</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="genreSelect">Select Genre:</label>
          <select
            id="genreSelect"
            className="form-control"
            value={selectedGenre}
            onChange={(e) => {
              setSelectedGenre(e.target.value);
              setSelectedMovie('');
            }}
            required
          >
            <option value="">Select a genre</option>
            {Object.keys(moviesByGenre).map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        {selectedGenre && (
          <div className="form-group">
            <label htmlFor="movieSelect">Select Movie:</label>
            <select
              id="movieSelect"
              className="form-control"
              value={selectedMovie}
              onChange={(e) => setSelectedMovie(e.target.value)}
              required
            >
              <option value="">Select a movie</option>
              {moviesByGenre[selectedGenre].map((movie) => (
                <option key={movie} value={movie}>
                  {movie}
                </option>
              ))}
            </select>
          </div>
        )}
        <PaystackPayment amount={3000} email="user@example.com" onPaymentSuccess={handlePaymentSuccess} />
      </form>
      <TicketModal show={showModal} handleClose={() => setShowModal(false)} ticket={ticket} />
    </div>
  );
};

export default Movies;
