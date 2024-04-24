import { useState } from 'react';
import { Flipped } from 'react-flip-toolkit';

function Card({ frontContent, backContent }) {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => setFlipped(!flipped);

  return (
    <div onClick={handleClick} className="card">
      <Flipped flipId="card">
        <div>
          {flipped ? backContent : frontContent}
        </div>
      </Flipped>
      <style jsx>{`
        .card {
          width: 100px;
          height: 150px;
          perspective: 1000px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Card;
