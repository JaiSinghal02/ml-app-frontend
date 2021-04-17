import React,{useState} from 'react'
import './InputForm.css'
import axios from 'axios'
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function InputForm(){
    const [gender, setGender] = useState('male');
    const [pid, setPid] = useState(1);
    const [pClass, setPClass] = useState(1);
    const [age, setAge] = useState(1);
    const [sibsp, setSibsp] = useState(0);
    const [parch, setParch] = useState(0);
    const [fare, setFare] = useState(0);
    const [embarked, setEmbarked] = useState('s');
    const [showLoader, setShowLoader] = useState(false);
    const [result, setResult] = useState(null);
  const submitForm = (e)=>{
      e.preventDefault()
      setShowLoader(true)
      setResult(null)
      const male=gender==="male"?1:0
      const female=gender!=="male"?1:0
      const s=embarked === "s"?1:0
      const c=embarked === "c"?1:0
      const q=embarked === "q"?1:0
      const query= `pId=${pid}&pClass=${pClass}&male=${male}&female=${female}&age=${age}&sibsp=${sibsp}&parch=${parch}&fare=${fare}&e_s=${s}&e_c=${c}&e_q=${q}`
      axios.get(`http://localhost:5000/python?${query}`)
      .then(res=>{
        setShowLoader(false)
        setResult(res.data)
          console.log(res.data)
      })
      .catch(err=>{
        setShowLoader(false)
          console.log(err)
      })
  }
  const checkPClass = (val)=>{
      console.log(val)
  }
  let loader=null
  if(showLoader){
      loader=<CircularProgress style={{marginLeft: '15px'}} />
  }
  let res=null
  if(result !==null){
    //   let key=Object.keys(result)
      res=<p>{"Predicted value: " +result}</p>
  }
    return(
        <div className="if-container">
            <div className="if-body">
                <div className="if-form-body">
                    <form className="if-form" onSubmit={(e)=>submitForm(e)}>
                        <div className="if-form-input-body">
                        <label className="if-form-input-label" htmlFor="passengerId">Passenger Id</label>
                        <input onChange={(e)=>setPid(e.target.value)}required={true} className="if-form-input-input" type="number" max="890" min="1" id="passengerId"></input>
                        </div>
                        <div className="if-form-input-body">
                        <label className="if-form-input-label" htmlFor="pClass">Pclass</label>
                        <Slider
                                defaultValue={1}
                                aria-labelledby="pClass"
                                step={1}
                                marks
                                min={1}
                                max={3}
                                valueLabelDisplay="on"  
                                onChange={(e,val)=>setPClass(val)}
                                
                            />
                        </div>
                        <div className="if-form-input-body">
                        <label className="if-form-input-label" htmlFor="gender">Gender</label>
                        <RadioGroup  aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <div className="if-form-input-radio">
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />

                            </div>
                        </RadioGroup>
                        </div>
                        <div className="if-form-input-body">
                        <label  className="if-form-input-label" htmlFor="age">Age</label>
                        <input onChange={(e)=>setAge(e.target.value)} required={true} className="if-form-input-input" type="number" max="80" min="1" id="age"></input>
                        </div>
                        <div className="if-form-input-body">
                        <label className="if-form-input-label" htmlFor="sibsp">Sibsp</label>
                        <Slider
                                defaultValue={0}
                                aria-labelledby="sibsp"
                                step={1}
                                marks
                                min={0}
                                max={8}
                                valueLabelDisplay="on"
                                onChange={(e,val)=>setSibsp(val)}
                                style={{marginRight: '20px'}}
                            />
                        </div>
                        <div className="if-form-input-body" style={{marginLeft: '10px'}}>
                        <label className="if-form-input-label" htmlFor="parch">Parch</label>
                        <Slider
                                defaultValue={0}
                                aria-labelledby="parch"
                                step={1}
                                marks
                                min={0}
                                max={6}
                                valueLabelDisplay="on"
                                onChange={(e,val)=>setParch(val)}
                                style={{marginLeft: '10px'}}
                            />
                        </div>
                        <div className="if-form-input-body">
                        <label className="if-form-input-label" htmlFor="fare">Fare</label>
                        <input onChange={(e)=>setFare(e.target.value)} required={true} className="if-form-input-input" type="number" step="any" max="550" min="0" id="fare"></input>
                        </div>
                        <div className="if-form-input-body">
                        <label className="if-form-input-label" htmlFor="passengerId">Embarked</label>
                        <RadioGroup required={true} aria-label="gender" name="gender" value={embarked} onChange={(e)=>setEmbarked(e.target.value)}>
                            <div className="if-form-input-radio">
                            <FormControlLabel  value="s" control={<Radio />} label="S" />
                            <FormControlLabel value="c" control={<Radio />} label="C" />
                            <FormControlLabel value="q" control={<Radio />} label="Q" />
                            </div>
                        </RadioGroup>
                        </div>
                        <div className="if-form-button-body">
                        <Button type="submit" variant="contained" color="primary">
                            Predict
                        </Button>
                        {loader}
                        </div>
                        <div className="if-form-result-body">
                        {res}
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}
