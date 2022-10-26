import "./style.css";

const Home = () => {
  return (
    <article className='home-article' id='home'>
      <header>
        <h1 className="home-body title">Closet Match</h1>
      </header>
      <section className='home-container'>
        <main>
          <div className='home-card-container'>
            <div className='home-column-1'>
              <img className="home-logo" src={require('../../assets/mobile.png')} alt="mobile"></img>
            </div>
            <div className="home-column-2">
              <div className='home-column-2-container'>
                <div className='home-heading'>NEW</div>
                <h1 className='home-heading'>Trocas Inteligentes</h1>
                <h3 className='home-body'>Troque, use, reuse</h3>
              </div>
            </div>
          </div>
        </main>
        <div className='home-card-container'>
          <div>
            <img className="home-logo btn" src={require('../../assets/apple.png')} alt="apple"></img>
          </div>
          <div className='home-card-container'>
            <div>
              <img className="home-logo btn" src={require('../../assets/googleplay.png')} alt="google"></img>
            </div>
          </div>
        </div>
      </section>
    </article>


    // <article className='home-article' id='home'>
    //   <h5 className='texto-colorido'>NEW<h5 className='frase'>trocas de roupas inteligentes</h5> </h5>
    //   <div className='home'>
    //     <img className='home-logo' src={mobile} alt="Mobile" />
    //     <h1>Closet</h1>
    //     <h1>Match</h1>
    //     <h3>Troque, use, reuse</h3>
    //     <img className='download' src={apple} alt="Apple download" />
    //     <img className='download' src={google} alt="Google Play download" />
    //   </div>
    // </article>
  );
};

export default Home;

// import "./style.css";
// export default function Home() {
//   return (
//     <article className='home-article' id='home'>
//       <header>
//         <h1>Home</h1>
//       </header>
//       <section className='home-container'>
//         <main>
//           <div className='home-card-container'>
//             <div className='home-column-1'>
//               <img className="home-logo" src={require('../../assets/logo.png')} alt="logo"></img>
//             </div>
//             <div className="home-column-2">
//               <div className='home-column-2-container'>
//                 <h1 className='home-heading'>IVA React Vertical SPA</h1>
//                 <div className='home-body'>Web | Production</div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </article>
//   );
// }