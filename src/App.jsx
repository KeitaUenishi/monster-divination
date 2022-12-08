import { Helmet } from 'react-helmet';

import './App.css';

import { Form } from './components/Form';
import Title from './components/Title';

function App() {
return (
  <>
    <Helmet>
      <title>モンスター占い</title>
      <meta name="description" content="モンスターで今日の運勢を占いましょう！！" />
    </Helmet>
    <div className="wrapper">
        <div className="container">
          <Title />
          <Form />
        </div>
      </div>
  </>
  );
}

export default App;
