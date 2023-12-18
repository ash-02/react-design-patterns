import logo from './logo.svg';
import './App.css';
import { CustomList } from './Chapters/layout/customList';
import { ProductListItem } from './Chapters/layout/ProductListItem';
import { ProductList, UserList } from './Chapters/assets/testingJsonLists';
import { UserListItem } from './Chapters/layout/UserListItem';
import Layout from './Chapters/pages/layout';

function App() {

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
