import "./style.css";

export default function QuemSomos() {
  return (
    <article id='quemsomos'>
      <header>
        <h1 className="title1">Quem Somos?</h1>
      </header>
      <section className='books-container'>
        <main>
          <div>
            <p className="title1">
              O que fazemos?
            </p>
            <div className="caixa-2 caixa-1">
              <p className='texto'>
                Promovemos trocas de roupas infantis, com o intuito de aumentar a vida útil das mesmas. Resolvemos o problema de descarte indevido de roupas pouco utilizadas e controle de orçamentos familiares.
              </p>
            </div>
            <div className="caixa-2">
              <p className='texto'>
                Aumentamos a vida útil das roupas através da troca entre usuários, fazendo com que não sejam descartadas rapidamente e ajudando famílias a diminuir os gastos que têm com elas.
              </p>
            </div>
          </div>
        </main>
      </section>
    </article>
  );
}


