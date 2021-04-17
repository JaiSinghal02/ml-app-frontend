import React,{useState,useEffect} from 'react'
import './Scatter.css'
import axios from 'axios'

export default function Scatter(){
    const [fig,setFig]= useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/image/scatter',{ responseType: 'blob' })
        .then(res=>{
            setFig(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div className="st-container">
            <div className="st-body">
                <div className="st-body-image">
                    <img className="st-fig" src={fig} alt="scatter-fig"/>
                </div>
            </div>
        </div>
    )
}