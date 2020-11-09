import { Switch, Route } from 'react-router-dom';
import Post from './components/Post';
import { Container } from 'react-bootstrap'
import AddPost from './components/AddPost'
const { default: HomePage } = require("./components/HomePage");
const { default: MyNavbar } = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/post/:id' component={Post} />
          <Route path='/addpost' component={AddPost} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
