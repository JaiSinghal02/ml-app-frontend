import React,{useState,useEffect} from 'react'
import './Categorial.css'
import axios from 'axios'

export default function Categorial(){
    const [fig,setFig]= useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/image/categorial',{ responseType: 'blob' })
        .then(res=>{
            setFig(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div className="ct-container">
            <div className="ct-body">
                <div className="ct-body-image">
                    <img className="ct-fig" src={fig} alt="categorial-fig"/>
                </div>
            </div>
        </div>
    )
}