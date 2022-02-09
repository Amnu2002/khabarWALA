import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

export default class App extends Component {
  apiKey= process.env.REACT_APP_API_KEY
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
    
  render() {

    return (
      <div>
        <Router>
          <LoadingBar 
            color='red'
            height={3}
            progress={this.state.progress}
            />
        <Navbar  />
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="1" pageSize={15} country='in' category="general"/>} />
        <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="2" pageSize={15} country='in' category="business" headline="Business"/>} />
        <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="3" pageSize={15} country='in' category="entertainment" headline="Entertainment"/>} />
        <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="4" pageSize={15} country='in' category="general" headline="General"/>} />
        <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="5" pageSize={15} country='in' category="health" headline="Health"/>} />
        <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="6" pageSize={15} country='in' category="science" headline="Science"/>} />
        <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="7" pageSize={15} country='in' category="sports" headline="Sports"/>} />
        <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}    key="8" pageSize={15} country='in' category="technology" headline="Technology"/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}


