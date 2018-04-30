import React, {Component} from 'react'
import {goods} from './goods'
import './ListOfGoods.scss'
//import { Pagination} from 'antd'
import Product from './Product'
import Pagination from './Pagination'
//import 'antd/dist/antd.css'
import { Route } from 'react-router-dom'

class ListOfGoods extends Component {

    constructor(props) {
      super(props);
      this.state = {
        goods: [],
        renderedGoods: [],
        page: 1,
      };
      this.handlePageChange = this.handlePageChange.bind(this);
    }
  
    handlePageChange(page) {
      const renderedGoods = this.state.goods.slice((page - 1) * 10, (page - 1) * 10 + 10);
      this.setState({ page, renderedGoods });
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ goods, renderedGoods: goods.slice(0, 10), total: goods.length });
      })
    }
  
    render() {
      const { page, total, renderedGoods } = this.state;
      return (
        <div>
          <div className="list">
            {
              renderedGoods.map((val,i) =>
              
                <Product key={i} {...val} />
              )
            }
            </div>
        
          <Pagination
            margin={2}
            page={page}
            count={Math.ceil(total / 10)}
            onPageChange={this.handlePageChange}
          />
        </div>
      );
    }
  }
  
  export default ListOfGoods;















// class ListOfGoods extends Component {
//     render(){
//         const btnCount = []
//         for (let i =0; i<Math.ceil(goods.length/10);i++){
//             btnCount.push(i+1)
//         }
//        return (
//            <div>
//             <div className="list">
//                 {
//                     goods.map((val, i)=>{
//                         return (
//                             <Product 
//                                 key={i} 
//                                 name={goods[i].name} 
//                                 cost={goods[i].cost} 
//                                 description={goods[i].description}
//                                 image={goods[i].image}
//                             />
//                         )
//                     })
//                 }
//             </div><div>

//                 {btnCount.map((val, i)=>{
//                     return <button>{i}</button>
//                 })}
//                 </div>
//             </div>
//        )}
// }
//     //     return(
//     //    <Table dataSource={goods} columns={columns}/>
//     //     )




// export default ListOfGoods


       //return (
            // <div>
            // <div className="list">
            //     {
            //         Goods.map((val, i)=>{
            //             return (
            //                 <Product 
            //                     key={i} 
            //                     productName={Goods[i].productName} 
            //                     productCost={Goods[i].productCost} 
            //                     productDescription={Goods[i].productDescription}
            //                     img={Goods[i].productImg}
            //                 />
            //             )
            //         })
            //     }
            // </div>
            // <Pagination defaultCurrent={2} total={5} />
            // </div>)