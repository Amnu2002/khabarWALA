import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    

    static defaultProps={
        country: 'in',
        pageSize: 8,
        category: 'general',
        headline: 'Top Headlines'
    }
    static propTypes={
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
        headline: PropTypes.string
    }
    
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            pageno: 1,
            totalResults: 1
        }
    }

    async updateNews(page){
        this.props.setProgress(0);
        this.setState({
            loading: true
        })
        this.props.setProgress(20);
        
        let apiurl= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageno}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(50);
        let data = await fetch(apiurl);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading: false})
        this.props.setProgress(100);

    }

    async componentDidMount(){
        // this.setState({
        //     loading: true
        // })
        // let apiurl= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=174942723ba6458bb66fb59224d190ee&page=${this.state.pageno}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(apiurl);
        // let parsedData = await data.json()
        // this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults,loading: false})
        this.updateNews()

    }
    handlePreviousClick= async()=>{
        // this.setState({
        //     loading: true
        // })
        // let apiurl= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=174942723ba6458bb66fb59224d190ee&page=${this.state.pageno -1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(apiurl);
        // let parsedData = await data.json()
        // this.setState({articles: parsedData.articles})
        
        // this.setState({
        //     pageno: this.state.pageno-1,
        //     loading: false
        // })
        this.setState({pageno: this.state.pageno-1})
        this.updateNews()
    }
    handleNextClick= async()=>{
        // this.setState({
        //     loading: true
        // })
        // let apiurl= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=174942723ba6458bb66fb59224d190ee&page=${this.state.pageno +1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(apiurl);
        // let parsedData = await data.json()
        // this.setState({articles: parsedData.articles})
            
        // this.setState({
        //     pageno: this.state.pageno+1,
        //     loading: false
        // })

        this.setState({pageno: this.state.pageno+1})
        this.updateNews()
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    
                    <h1>khabarWALA - {this.props.headline}</h1>
                    <div className ="container d-flex justify-content-between">
               { !this.state.loading && <button disabled={this.state.pageno<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>{`<`}-Previous</button>}
               {!this.state.loading &&  <button disabled={this.state.pageno+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next-{'>'}</button>}
                </div>
                   {this.state.loading && <Spinner />}
                    
                    {!this.state.loading &&<div className="row md-4" >
                    {console.log(this.state.articles)}
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}> <NewsItem title={element.title} description ={element.description} imageUrl={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} publisher={element.source.name}/></div>
                    })}
                    </div>}
                </div>
                <div className ="container d-flex justify-content-between">
                {!this.state.loading && <button disabled={this.state.pageno<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>{`<`}-Previous</button>}
                {!this.state.loading && <button disabled={this.state.pageno+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next-{'>'}</button>}
                </div>
            </div>
        )
    }
}

export default News
