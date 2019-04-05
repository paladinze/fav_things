import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import { Container, Button, Card, Image, Icon } from 'semantic-ui-react'
import jsonp from 'fetch-jsonp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      movies: [],
    }
  }

  componentWillMount() {
    let that = this
    jsonp('https://api.douban.com/v2/movie/in_theaters')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      console.log('parsed json', json)
      that.setState({
        movies: json.subjects
      })
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })

  }

  renderUsers(user) {
    return (
    <Card>
      <Image src={user.images["large"]} referrerpolicy ="never" />
      <Card.Content>
        <Card.Header>{user.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{user.year}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    )
  }

  render() {

    return  (

      <Container>
        <Card.Group itemsPerRow={5} stackable>
          {
            this.state.movies.map(
                movie => this.renderUsers(movie)
            )
          }
        </Card.Group>
      </Container>
    )


  }
}

export default App;
