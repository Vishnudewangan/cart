import React from 'react';

class CartItem extends React.Component {

    constructor(){
        super(); // it is js thing--> we are extending from parent , so firstly we have call parents constructor 

        this.state={
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img:''
        }
        ///// we can also bind in constructor
          //this.increaseQuantity=this.increaseQuantity(this);
    }

    // increaseQuantity () {
      
    //     console.log("this",this);

    // }
    increaseQuantity = ()=>{
         console.log("this.state", this.state);// arrow function will bind 'this' by default

    }
    render () {
          
        const {price,title,qty} =this.state; // js thing -> object destructuring

        return (
          <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
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
                        
                       onClick={this.increaseQuantity}

                    />
                    <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                    />
                </div>
            </div>
          </div>
        );

    }
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