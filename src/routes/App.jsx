import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home, CreatePost, SinglePost } from '../containers';
import { Layout } from '../components';
import { theme, GlobalStyle } from '../shared';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
