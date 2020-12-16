import { BrowserRouter as Router, Route } from 'react-router-dom';
import RemarkPage from './RemarkPage'
import Marked from './Marked'
import Layout from './Layout'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Route path='/' exact render={() => <p>markdown practice</p>} />
          <Route path='/remark' exact component={RemarkPage} />
          <Route path='/marked' exact component={Marked} />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
