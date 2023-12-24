import React from "react";
import "./quotes.scss";
import { useEffect } from "react";

interface Quote {
  quotes: string;
  author: string;
}

const Quotes: React.FC = () => {
  const quotes: Quote[] = [
    {
      quotes:
        "Книги — це кораблі думки, що мандрівні хвилями часу і дбайливо несуть свій дорогоцінний вантаж від покоління до покоління.",
      author: "Бекон Ф.",
    },
    {
      quotes: "Людина з гарною книгою в руках ніколи не може бути самотньою",
      author: "К. Гольдоні",
    },
    {
      quotes:
        "Одні книги змушують нас мріяти, інші занурюють у дійсність, але всі вони пройняті найголовнішим для автора – щирістю",
      author: "П. Коельо",
    },
  ];

  const randomQuote: Quote = quotes[Math.floor(quotes.length * Math.random())];

  const { quotes: text, author } = randomQuote;

  return (
    <article className="quotes">

      <p className="quotes__text">{text}</p>
      <hr className="quotes__line" />
      <span className="quotes__author">{author}</span>
    </article>
  );
};

export default Quotes;
