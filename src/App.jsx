import React, { useState, useEffect } from "react";

function App() {
  const [pickupLine, setPickupLine] = useState(
    "Roses are Red, violets are blue, all I think about is you!"
  );
  const [timer, setTimer] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);

  const lines = [
    "Your curves are more dangerous than a sharp turn.",
    "You’ve got a body that could rival a goddess.",
    "I could get lost tracing the outline of your silhouette.",
    "Your beauty is breathtaking, but your curves leave me speechless.",
    "Your body is a wonderland, and I’d love to explore every inch.",
    "Your curves are poetry in motion.",
    "Every inch of you is perfection, wrapped in beauty.",
    "Your body is a masterpiece, and I’m an art lover.",
    "Your curves should come with a warning label – dangerously beautiful.",
    "You’ve got the kind of curves that could make a straight line jealous.",
    "Roses are red, violets are blue, my heart skips a beat every time I see you.",
    "Roses are red, violets are blue, your beauty outshines even the morning dew.",
    "Roses are red, violets are blue, there’s no one else I’d rather be with than you.",
    "Roses are red, violets are blue, every moment with you feels brand new.",
    "Roses are red, violets are blue, my love for you will always be true.",
    "Roses are red, violets are blue, your smile makes my heart feel renewed.",
    "Roses are red, violets are blue, I’m so lucky to have found you.",
    "Roses are red, violets are blue, I’m enchanted by everything you do.",
    "Roses are red, violets are blue, my world is brighter just because of you.",
    "Roses are red, violets are blue, every day with you is a dream come true.",
    "Roses are red, violets are blue, my love for you only grew.",
    "Roses are red, violets are blue, my heart belongs to you.",
    "Roses are red, violets are blue, loving you is the best thing I ever knew.",
    "Roses are red, violets are blue, life’s an adventure, and I choose to be with you.",
    "Roses are red, violets are blue, I’m so grateful for everything you do.",
    "Roses are red, violets are blue, your beauty and grace always shine through.",
    "Roses are red, violets are blue, being with you feels too good to be true.",
    "Roses are red, violets are blue, I’m so in love with you.",
    "Roses are red, violets are blue, forever and always, it’s just us two.",
    "Roses are red, violets are blue, my heart beats faster every time I’m with you.",
    "Roses are red, violets are blue, you make every day feel like something new.",
  ];

  const generateLine = () => {
    const nextIndex = (currentIndex + 1) % lines.length;
    setPickupLine(lines[nextIndex]);
    setCurrentIndex(nextIndex);
    setTimer(10); // Reset timer
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 10));
    }, 1000);

    const lineInterval = setInterval(generateLine, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(lineInterval);
    };
  }, [currentIndex]);

  return (
    <div className="app">
      <header className="app-header">
        Every time you see a new pick-up line, I think about you
      </header>
      <div className="container">
        <h1>This is how my heart beats for you</h1>
        <p className="pickup-line">{pickupLine}</p>
        <p className="timer">Next line in: {timer}s</p>
        <button className="skip-button" onClick={generateLine}>
          Let's see another line
        </button>
      </div>
    </div>
  );
}

export default App;
