import React,{useState,useEffect} from 'react'
import './Histogram.css'
import axios from 'axios'

export default function Histogram(){
    const [age,setAge]= useState(null)
    const [fare,setFare]= useState(null)
    const [parch,setParch]= useState(null)
    const [pclass,setPclass]= useState(null)
    const [sibsp,setSibsp]= useState(null)
    const [survived,setSurvived]= useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5000/image/histogram/age',{ responseType: 'blob' })
        .then(res=>{
            setAge(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get('http://localhost:5000/image/histogram/fare',{ responseType: 'blob' })
        .then(res=>{
            setFare(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get('http://localhost:5000/image/histogram/parch',{ responseType: 'blob' })
        .then(res=>{
            setParch(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get('http://localhost:5000/image/histogram/pclass',{ responseType: 'blob' })
        .then(res=>{
            setPclass(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get('http://localhost:5000/image/histogram/sibsp',{ responseType: 'blob' })
        .then(res=>{
            setSibsp(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get('http://localhost:5000/image/histogram/survived',{ responseType: 'blob' })
        .then(res=>{
            setSurvived(URL.createObjectURL(res.data))
            console.log(res.text())
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div className="ht-container">
            <div className="ht-body">
                <div className="ht-body-image">
                    <img className="ht-image" src={age} alt="histogram-age"/>
                </div>
                <div className="ht-body-image">
                    <img className="ht-image" src={fare} alt="histogram-fare"/>
                </div>
                <div className="ht-body-image">
                    <img className="ht-image" src={parch} alt="histogram-parch"/>
                </div>
                <div className="ht-body-image">
                    <img className="ht-image" src={pclass} alt="histogram-pclass"/>
                </div>
                <div className="ht-body-image">
                    <img className="ht-image" src={sibsp} alt="histogram-sibsp"/>
                </div>
                <div className="ht-body-image">
                    <img className="ht-image" src={survived} alt="histogram-survived"/>
                </div>
            </div>
        </div>
    )
}