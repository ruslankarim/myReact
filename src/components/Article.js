import React, {Component, PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

class Article extends PureComponent {
    static propTypes = {

        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }
    /*constructor(props){
        super(props)
        /!*for(let key in props){
            console.log(`key: ${key}, props: ${props[key]}`)
        }*!/

    }*/
    /*componentWillReceiveProps(nextProps){
        console.log("------", "updating", this.props.isOpen, nextProps.isOpen)
    }
    componentWillMount(){
        console.log("----", 'mounting', 'before render()')/!*before render()*!/
    }*/

    //Если унаследоваться от PureComponent shouldComponentUpdate не нужен
    /*shouldComponentUpdate(nextProps, nextState){
        return nextProps.isOpen != this.props.isOpen
    }*/
    render(){
        console.log('-----', 'update article')
        const {article, isOpen, toggleOpen} = this.props
        //const {isOpen} = this.state
            return (
                <div ref = {this.setContainerRef}>
                    <h3>{article.title}!</h3>
                    <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                    </button>
                    {this.getBody()}
                </div>
            )
    }
    setContainerRef = ref => {
        this.container = ref
        //console.log(`setContainer ref -  ${ref}`)
    }

    componentDidMount(){
        //console.log("----", 'mounted', 'after render')/*after render()*/
    }

    getBody(){
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                //Добавляем refs в CommentList
                <CommentList comments = {article.comments} ref = {this.setCommentsRef}/>
            </section>
        )
    }
    setCommentsRef = ref => {
        //console.log('-----', ref)
    }
}

export default Article


// export default function Article(props){
//     const {article} = props
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }