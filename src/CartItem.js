import React from 'react';

const CartItem = (props) => {

    
    
          
        //const {price,title,qty} =this.state; // js thing -> object destructuring
         
        const {price,title,qty} = props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = props;
        

        return (
          <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>

            <div className="right-block">
                <div style={ { fontSize: 25} }>{title}</div>
                <div style={ {color: '#777'} } >Rs {price}</div>
                <div style={ {color: '#777'} }>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                       // onClick={this.increaseQuantity(this)} // if we don't pass 'this' in increaseQuantity function it will give this as 'undefind' and using this will give error , thats why we need to bind the 'this'-> passing this in parameter
                        
                      // onClick={() => this.props.onIncreaseQuantity(this.props.product)} // we will call using destructuring -> next line

                      onClick={()=> onIncreaseQuantity(product)}

                    />
                    <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        //onClick={() => this.props.onDecreaseQuantity(this.props.product)}  // we will call using destructuring -> next line
                        onClick={()=> onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                       // onClick={() => this.props.onDeleteProduct(this.props.product)}  // we will call using destructuring -> next line
                       onClick={()=> onDeleteProduct(product.id)}
                    />
                </div>
            </div>
          </div>
        );

    }


const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;