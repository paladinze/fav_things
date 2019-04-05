import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import AppFooter from './footer'
import HeaderMenu from '../menu/HeaderMenu'
import MovieScreen from '../movie/MovieScreen'
import PageNotFound from '../404/PageNotFound'
import './DefaultLayout.scss'


class DefaultLayout extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router >
        <header>
          <HeaderMenu {...this.props} />
        </header>

        <div className="content">
          <Switch>
            <Route exact path="/" layout={DefaultLayout} component={MovieScreen} />
            <Route exact path="/home" layout={DefaultLayout} component={MovieScreen} />
            <Route exact path="/movie" layout={DefaultLayout} component={MovieScreen} />
            <Route layout={DefaultLayout} component={PageNotFound} />
          </Switch>
        </div>

        <AppFooter />
      </Router>

    )
  }
}

export default DefaultLayout
