import React, {Component} from 'react'
import PropTypes from 'prop-types'

/*
* Здесь пример работы со
* сторонними библиотеками
* при работе с которыми
* понадобятся методы
* жизненного цикла
* */


class ArticlesChart extends Component {
    static propTypes = {

    }

    componentDidMount(){
        //d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps){
        //update chart for new articles
    }

    render(){
        return (
            <div ref = 'chart' />
        )
    }

    componentWillUnmount(){
        //do some cleanup
    }
}

export default ArticlesChart