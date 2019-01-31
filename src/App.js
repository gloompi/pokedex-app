import React from 'react'
import { Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { Layout, Row, Col, Empty } from 'antd'

import './App.scss'
import history from 'Src/history'

import stores from 'Stores'
import Menu from 'Components/Menu'
import Search from 'Components/Search'
import Main from 'Components/Main'
import Result from 'Components/Result'

const {
  Header, Footer, Content,
} = Layout

const App = () => (
  <Router history={history}>
    <Provider {...stores}>
      <div className='app'>
        <Layout>
          <Header>
          <Row>
            <Col className='app__title' span={6}>
              <Link to='/'>
                PokedeX
              </Link>
            </Col>
            <Col span={13}>
              <Menu />
            </Col>
            <Col span={5}>
              <Search />
            </Col>
          </Row>
          </Header>
          <Content className='app__main'>
            <Switch>
              <Route exact path='/' render={() => (
                <Link to='/pokemons/1'>
                  <h1 style={{ padding: 50, textAlign: 'center' }}>
                    Перейти к списку
                  </h1>
                </Link>
              )} />
              <Route path='/pokemons/:page' component={Main} />
              <Route path='/pokemon/:name' component={Result} />
              <Route component={Empty} />
            </Switch>
          </Content>
          <Footer style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#001529',
            color: '#fff',
          }}>
            &copy; GloompiQue 2019
          </Footer>
        </Layout>
      </div>
    </Provider>
  </Router>
)

export default App
