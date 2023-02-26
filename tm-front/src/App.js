import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/haeder';
import Footer from './common/footer';
import Main from './pages/main';
import intro from './pages/intro';
import location from './pages/location';
import now from './pages/now';
import past from './pages/past';
import programe from './pages/programe';
import Reserve from './pages/reserve/Reserve';
import ReserveOk from './pages/reserve/ReserveOk';
import attention from './pages/attention';
import NoticeList from './pages/notice/list';
import NoticeCreate from './pages/notice/create';
import NoticeRead from './pages/notice/read';
import login from './pages/login';

//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/intro" component={intro} />
        <Route exact path="/location" component={location} />
        <Route exact path="/now" component={now} />
        <Route exact path="/past" component={past} />
        <Route exact path="/programe" component={programe} />
        <Route exact path="/attention" component={attention} />
        <Route exact path="/notice" component={NoticeList} />
        <Route path = "/create-board/:ntcNo" component = {NoticeCreate} />
        <Route path = "/read-board/:ntcNo" component = {NoticeRead} />
        <Route exact path="/reserve" component={Reserve} />
        <Route path="/reserveOk" component={ReserveOk} />
        <Route exact path="/login" component={login} />
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
