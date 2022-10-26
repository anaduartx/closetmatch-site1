import "./style.css";

export default function Books() {
  return (
    <article className='books-article' id='books'>
      <header>
        <h1>Books</h1>
      </header>
      <section className='books-container'>
        <main>
          <div>
            <p>
              Best books ever:
            </p>
            <ul className="no-bullets">
              <li>Book 1</li>
              <li>Book 2</li>
              <li>Book 3</li>
              <li>Book 4</li>
              <li>Book 5</li>
            </ul>
          </div>
        </main>
      </section>
    </article>
  );
}
