import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ScrollToTop from '../utils/ScrollToTop';
import { Home, CreatePost, SinglePost, EditPost } from '../containers';
import { Layout } from '../components';
import { theme, GlobalStyle } from '../shared';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/posts/:postId" component={SinglePost} />
          <Route exact path="/edit/:postId" component={EditPost} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
