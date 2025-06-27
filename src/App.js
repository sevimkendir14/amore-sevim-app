import './App.css';
import phone from './phonePhoto.svg';
import humanPics from './humanpics.svg';
import amoreLogo from './amore-logo.svg';
import pink from './pinkcircle.svg';
import apple from './applelogo.svg';
import playstore from './playstorelogo.svg';


function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={amoreLogo} alt="Amore Logo" height={40} />
        </div>
        <div>
          <a href="#">Amore Hakkında</a>
          <a href="#">Amore Nedir?</a>
          <button className="button secondary">Oturum Aç</button>
          <button className="button">Kayıt Ol</button>
        </div>
      </nav>

      <section className="orta">
        <h1>Tadı Damağında Kalacak</h1>
        <h2>Sohbet Et ve Flörtleş</h2>

        <div className="apple-buttons">App Store
          <img src={apple} alt="App Store" height={50} />
        </div>

        <div className="playstore-buttons">
          <img src={playstore} alt="App Store ve Google Play" height={50} />
        </div>


        <div className="phone-preview">
           <img src={pink} alt="Pembe daire"/> 
          <img src={phone} alt="Telefon ve El Görseli" />
        </div>

        

        <div className="tagline-box">Sadece gerçek insanlar <br/> Amore’da sahte profillere yer yok. </div>
        <div className="tagline-box right">Tanış, Konuş, Görüş<br />Aşka açılan kapı</div>
        <div className="right-side-avatars">
          <img src={humanPics} alt="Küçük İnsan Görselleri" />
        </div>
      </section>
    </div>
  );
}

export default App;
