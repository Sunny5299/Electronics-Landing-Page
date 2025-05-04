import React from 'react'
import './App.css'
import first from './assets/first.jpg';
import second from './assets/second.jpg';
import third from './assets/third.jpg';




function App() {
  return (
    <div className='Main-Container'>
      <heading className='header'>
        <p>My Electronics</p>
        <nav className='mybtn'>
          <button className='Btn'>HOME</button>
          <button className='Btn'>ABOUT US</button>
          <button className='Btn'>PRODUCT</button>
          <button className='Btn'>SERVICES</button>
          <button className='Btn'>BLOG</button>
          <button className='Btn'>GALLERY</button>
          <button className='Btn'>PAGES</button>
          <button className='Btn'>CONTACTS</button>
        </nav>
      </heading>
      <section className='first'>
        <h1>Welcome TO Bazzar</h1>
        <h4>our one-stop shop for the latest trends, unbeatable prices, and fast delivery. Whether you're looking for fashion, gadgets, home essentials</h4>
      </section>
      <section className='Music'>

        <div className='MusicCont'>
          <h1 className='my-music'>WE LOVE MUSIC</h1>
          <p>Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis lorem. Donec quis arcu elit. In vehicula purus sem</p>
        </div>
        <div className='Secpara'>
          <p>Aenean facilisis, purus ut tristique pulvinar, odio neque commodo ligula, non vestibulum lacus justo vel diam. Aenean ac aliquet tortor, nec gravida urna. Ut nec urna elit. Etiam id scelerisque ante. Cras velit nunc, luctus a volutpat nec, blandit id dolor. Quisque commodo elit nulla, eu semper quam feugiat et. Integer quam velit, suscipit eget consectetur ac, molestie eu diam.
          </p>
          <br />
          <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, sagittis in justo. Vestibulum egestas nulla nec purus porttitor fermentum. Integer mauris mi, viverra eget nibh at, efficitur consectetur erat. Curabitur et imperdiet enim.</p>
        </div>
        </section>
        <section className='musiccent'>
        <div className='product'>
          <div className='products'>
            <img src={first} alt="Myimage" />
            <h3>Transformation Of Music</h3>
            <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, </p>
          </div>
          <div className='products'>
          <img src={second} alt="Myimage" />
            <h3>Transformation Of Music</h3>
            <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, </p>
          </div>
          <div className='products'>
          <img src={third} alt="Myimage" />
          <h3>Transformation Of Music</h3>
            <p>Fusce semper rhoncus dignissim. Curabitur dapibus convallis varius. Suspendisse sem urna, ullamcorper eget porttitor ut, </p>
          </div>
        </div>
        </section>

      

    </div>

  )
}

export default App;
