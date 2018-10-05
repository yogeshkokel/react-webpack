import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import SecondPage from './SecondPage';
import { Link, Route } from 'react-router-dom';
import List from './List';
import axios from 'axios';
import history from './history';
import { baseURL } from './constants/helper';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: null,
      categories: [],
    }
  }

  componentDidMount() {
    let currentComponent = this;
    let { categories } = this.state;
    axios.get(baseURL + 'all-cat')
      .then(function (response) {
        currentComponent.setState({ categories: response.data.categories })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onInputChange(fieldName) {
    return function (event) {
      this.setState({ [fieldName]: event.target.value });
    }
  }

  onSubmit() {
    let { search } = this.state;
    axios.post(baseURL + 'getSlug', {
      post_name: search
    })
      .then(function (response) {
        if (response && response.data.status && response.data.hit._source.post_status == 'publish') {
          history.push('/2018/10/03/' + response.data.hit._source.post_name);
        } else if (response.data.status == false) {
          history.push('/404');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    let { categories } = this.state;
    let mainCategory = categories.filter(x => x._source.category_parent == 0);
    let subCategories = []
    mainCategory.map((x, index) => {
      subCategories.push({ name: x._source.cat_name, sub_cat: categories.filter(y => y._source.category_parent == x._id) })
    })
    console.log('subCategories :', subCategories);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Webapck Demo App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List />
        {
          subCategories.map((subCat, key) => {
            return (<div key={key} className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{subCat.name}
                <span className="caret"></span></button>
              <ul className="dropdown-menu">
                {
                  subCat.sub_cat.map((c, index) => {
                    return (
                      <li key={index}><a href={c._source.category_nicename} dangerouslySetInnerHTML={{ __html: c._source.cat_name }}></a></li>
                    )
                  })
                }

              </ul>
            </div>)
          })
        }
        <Link to="/2018/10/03/10-yoga-centres-to-get-your-zen-on"><h2>10 yoga centres to get your zen on</h2></Link>
        <input type="text" name="search" onChange={this.onInputChange('search').bind(this)} placeholder="Enter Post name" />
        <button onClick={this.onSubmit.bind(this)}>Search</button>
      </div>

    );
  }
}
export default App;
