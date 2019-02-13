import React, { Component } from 'react';
import MainPage from './components/pages/mainPage';
import ItemPage from './components/pages/itemPage';
import CoffeePage from './components/pages/coffeePage';
import ContactsPage from './components/pages/contactsPage';
import PleasurePage from './components/pages/pleasurePage';
import Page from './components/pages/page';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/coffee/' exact render={()=>{return (<Page title='Our Coffee' content={<CoffeePage/>}/>)}}/>
          <Route path='/coffee/:id' exact render={({match})=>{
                                              const {id} = match.params;
                                              return (<Page title='Our Coffee' content={<ItemPage id={id}/>}/>)
                                              }
                                            }
          />
          <Route path='/pleasure' render={()=> {return (<Page title='For your pleasure' content={<PleasurePage/>}/>)}}/>
          <Route path='/contacts' render={()=> {return (<Page title='Contact Us' content={<ContactsPage/>}/>)}}/>
        </Switch>

      </Router>
      // <Page title='Contact us' content={<CoffeePage pageType='goods'/>}/>
      // <MainPage/>
    );
  }
}

export default App;
