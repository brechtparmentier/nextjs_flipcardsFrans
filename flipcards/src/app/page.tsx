"use client";

import Image from "next/image";
import Card from "../components/Card";

const cardsData = [
  { id: 1, front: "Vraag 1", back: "Antwoord 1" },
  { id: 2, front: "Vraag 2", back: "Antwoord 2" },
  // Voeg meer kaarten toe naar behoefte
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card-grid">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            frontContent={card.front}
            backContent={card.back}
          />
        ))}
        <style jsx>{`
          .card-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px;
          }
        `}</style>
      </div>
    </main>
  );
}
