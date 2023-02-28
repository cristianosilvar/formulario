import './App.css';
import './blobz.css'

import Blob from './components/Blob';

import Header from './components/Header';
import Container from './components/Container';
import AboutForm from './components/AboutForm';
import Form from './components/Form';

function App() {
  const items = [
    {id: 1, item: 'Contato', link: '#contact'},
    {id: 2, item: 'Sobre', link: '#about'},
    {id: 3, item: 'Ajuda', link: '#help'},
  ]

  return (
    <div className="App">
      <Header items={items}/>
      <main>
        <Container>
          <section>
            <AboutForm/>
            <Form/>
          </section>
        </Container>
      </main>
      <Blob/>
    </div>
  );
}

export default App;
