import '../styles/quemsomos.css';
import '../styles/home.css';
import trocaDeRoupa from '../images/trocaDeRoupa.png';

const Quemsomos = () => {
    return (
        <>
            <form>
                <h1 className="title">Quem Somos?</h1>
                <div className="caixa-2 caixa-1">
                    <p className='texto'>
                        Promovemos trocas de roupas infantis, com o intuito de aumentar a vida útil das mesmas. Resolvemos o problema de descarte indevido de roupas pouco utilizadas e controle de orçamentos familiares.
                    </p>
                    <div className="caixa-2">
                        <p className='texto'>
                            Aumentamos a vida útil das roupas através da troca entre usuários, fazendo com que não sejam descartadas rapidamente e ajudando famílias a diminuir os gastos que têm com elas.
                        </p>
                    </div>
                </div>
                <img className='imagem-troca' src={trocaDeRoupa} alt="troca de roupa" />
                {/* <div className="caixa-2">
                    <p className='texto'>
                        Aumentamos a vida útil das roupas através da troca entre usuários, fazendo com que não sejam descartadas rapidamente e ajudando famílias a diminuir os gastos que têm com elas.
                    </p>
                </div> */}
            </form>
        </>
    );
}
export default Quemsomos;