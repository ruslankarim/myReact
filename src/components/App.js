import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticleChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'


class App extends Component {
    static propTypes = {

    }


    render(){
        //console.log('App called', this.props.articles)
        const options = this.props.articles.map(article =>({

        }))
        return(
            <div>
                <UserForm/>
                <Select/>
                <ArticleList articles = {this.props.articles}/>
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }


}
export  default App