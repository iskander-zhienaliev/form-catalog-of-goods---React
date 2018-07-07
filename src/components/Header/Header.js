import React, {Component} from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <div className="container_header">
                <h1><strong>React</strong>ивное задание</h1>
                <nav>
                    <ul>
                        <li><Link to='/form'>Форма</Link></li>
                        <li><Link to='/goods'>Каталог товаров</Link></li>
                    </ul>
                </nav>
            </div>
        )
    } 
}

export default Header