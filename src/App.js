import React from 'react';
//import Categories from './components/Categories';
//import NewsList from './components/NewsList';
import NewsPage from './pages/Newspage';
import { Route } from 'react-router-dom';
const App = () => {
  //const [category, setCategory] = useState('all');
  //const onSelect = useCallback((category) => setCategory(category), []); // 카테고리 값 업데이트를 위한 함수

  return <Route path="/:category?" component={NewsPage}></Route>;
};

export default App;
