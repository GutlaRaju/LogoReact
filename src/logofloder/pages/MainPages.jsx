import React from 'react'
import Header from '../components/Header'
import MainText from '../components/MainText'
import Selector from '../components/Selector.jsx';
import SideSelector from '../components/SideSelector.jsx';
import Product from '../components/Product.jsx';
import LowerBox from '../components/LowerBox.jsx';


const MainPages = () => {
    return (
        <div>
            <Header />
            <MainText />
            <Selector />
            <SideSelector />
            <Product />
            <LowerBox />
        </div>
    )
}
export default MainPages