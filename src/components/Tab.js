import React, {useState} from 'react'
import Menu from './menu'
import "../TabMenu/tab.css";

const Tabs = () => {

    const [items, setItems] = useState(Menu);

    const filterMenu = (category) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading"> Order Your Favourite Dish </h1>
            <hr/>
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                     <button className="btn btn-warning" onClick={() => setItems(Menu)} >All </button>
                    <button  className="btn btn-warning" onClick={() => filterMenu('Cereals and Pulses')}>Cereals and Pulses</button>
                    <button className="btn btn-warning" onClick={() => filterMenu('Oil and Oil seeds')} >Oil and Oil seeds</button>
                     <button className="btn btn-warning" onClick={() => filterMenu('Fibres')} >Fibres </button>
                    <button className="btn btn-warning" onClick={() => filterMenu('Spices')} >Spices</button>
                </div>
            </div>

            {/* Our Menu Items List will come here  */}
            
            <div className="menu-items container-fluid mt-5">
                <div className='row'>
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                
                                items.map((elem) => {
                                    const { id, name, image, description, price, category } = elem;
                                    return (
                                        
                                         <div className="Item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5" key={id}>
                                            <div className="row Item-inside">
                                            {/* only for image  */}
                                            <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src= {image} alt="menu-img" className='img-fluid' />  
                                            </div>
                                            
                                            {/* for the rest of the data  */}
                                            <div className="col-12 col-md-12 col-lg-8 ">
                                                <div className="main-title pt-4 pb-3">
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div> 
                                      
                                    )
                            })
                    }
                        </div>
                    </div>
                </div>
        </div>
    </>
    )
}

export default Tabs