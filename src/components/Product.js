import React, {Component} from 'react'
import './Product.scss'

class Product extends Component {
    render(){
        const { name, cost, description, image } = this.props
        return(
            <div className="product">
                <div className="product-image">
                    <img src={image} alt={name} className="product-image"/>
                </div>
                <div className="product-content">
                    <h1>Название: {name}</h1>
                    <h2>Цена: {cost}руб.</h2>
                    <p>Описание: {description}</p>
                </div>
            </div>
        )
    }
}

export default Product