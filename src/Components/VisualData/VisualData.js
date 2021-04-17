import React,{useState,useEffect} from 'react'
import './VisualData.css'
import Histogram from './Histogram/Histogram'
import Categorial from './Categorial/Categorial'
import Scatter from './Scatter/Scatter'

export default function VisualData(){
    
    return(
        <div className="vd-container">
            <div className="vd-head">Training Plots</div>
            <h3>Histogram Data</h3>
            <Histogram/>
            <h3>Categorial Data</h3>
            <Categorial/>
            <h3>Scatter Data</h3>
            <Scatter/>
        </div>
    )
}