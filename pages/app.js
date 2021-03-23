import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Button, Paper, Grid } from '@material-ui/core';
import style from '../styles/app.module.css'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';


export default function Home() {
    console.log("render")
    const [state, setState]= useState({
        pet:null,
        name:null,
        age:null,
    })
    const questions=["What's your name?","Whats Your Age?","What's Your Favorite Pet?",    `Hello ${state.name}, nice to meet you, your ${state.age} years old and your favorite pet are ${state.pet}`]
    const createEntry =(type, text, name)=> {
        let entry = new Object({
            type: type,
            message:text,
        });
        return(entry)
    }

    let entryRender = []
    const [entry, setEntry] = useState([createEntry("message", questions[0])])
  



    const handleEntryClick = (next,value,name)=>{
        if(value != ""){
            let newEntry = createEntry("response", value, name)
            entry.push(newEntry)
            next < 4?entry.push(createEntry("message", questions[next] )):null
            next == 4 ? null : setPage(next)
            setState({
                [name]: value,
            })
        }
    }


    const TopSide=(        
        <Paper className={style.title}> 
            <div className={style.titleInner}>
                <IconButton disabled>
                <ArrowBackOutlinedIcon  />
                </IconButton>
                <div> 💪🍻⚽Front End  </div>
                <IconButton disabled>
                <PhoneOutlinedIcon  />
                <VideoCallOutlinedIcon  />
                </IconButton>
            </div>
        </Paper>)


    const Name =()=>{
    const [value, setValue]= useState('')
    

    const handleChange = (e)=>{
        console.log("Typing")
        setValue(e.target.value)
    }

        return(
            <React.Fragment>

                <Paper className={style.textContainer}>
                <TextField 
                    className={style.TextField}
                    type='text'
                    name="setName"
                    value={value}
                    onChange={handleChange}
                    label="Name" 
                    variant="outlined"
                />
                <IconButton 
                    onClick={()=>handleEntryClick(1,value,"name")}
                >
                <ArrowForwardOutlinedIcon />
                </IconButton>
                </Paper>
           </React.Fragment>
        )
    }
    const Age =()=>{
        const [value, setValue]= useState('')
        
    
        const handleChange = (e)=>{
            console.log("Typing")
            setValue(e.target.value)
        }
    
            return(
                <React.Fragment>
    
                    <Paper className={style.textContainer}>
                    <TextField 
                        className={style.TextField}
                        type='text'
                        name="setName"
                        value={value}
                        onChange={handleChange}
                        label="Age" 
                        variant="outlined"
                    />
                    <IconButton 
                        onClick={()=>handleEntryClick(2,value,"age")}
                    >
                    <ArrowForwardOutlinedIcon />
                    </IconButton>
                    </Paper>
               </React.Fragment>
            )
    }

    // const Age =()=>{
    //     const daysOptions=["Please Choose"]
    //     const [value, setValue]=useState('')
    //     const handleChange = (e)=>{
    //         console.log("Typing")
    //         setValue(e.target.value)
    //     }
        
    //         return(
    //             <div>
                    
    //                 <select name="pets" id="pet-select">
    //                     {daysOptions.map((text,index)=>{
    //                             const options = (<option key={index} value={index}> {text} Month</option>)
    //                             let days =[options]
    //                         for (let i=1;i<=12; i++){
    //                             let newDay = new Array(<option key={i} value={i}> {i}</option>)
    //                             days.push(newDay)
    //                         }
                           
    //                         return days;
    //                     })}
    //                 </select>
    //                 <select name="pets" id="pet-select">
    //                     {daysOptions.map((text,index)=>{
    //                             const options = (<option key={index} value={index}> {text} Day</option>)
    //                             let days =[options]
    //                         for (let i=1;i<=31; i++){
    //                             let newDay = new Array(<option key={i} value={i}> {i}</option>)
    //                             days.push(newDay)
    //                         }
                            
    //                         return days;
    //                     })}
    //                 </select>
    //                 <select name="pets" id="pet-select">
    //                     {daysOptions.map((text,index)=>{
    //                             const options = (<option key={index} value={index}> {text} Year</option>)
    //                             let days =[options]
    //                         for (let i=index;i<=50; i++){
    //                             let newDay = new Array(<option key={2021-i} value={2021-i}> {2021-i}</option>)
    //                             days.push(newDay)
    //                         }
                            
    //                         return days;
    //                     })}
    //                 </select>

    //                 <IconButton 
    //                 onClick={()=>handleEntryClick(2)}
    //             >
    //             <ArrowForwardOutlinedIcon />
    //             </IconButton>
    //             </div>
    //         )
    //     }  


    const Pet =()=>{
            
            const [state, setState]=useState({
                value: "",
                newPet: false,
            })



            const handleOtherClick =()=>{
                setState({
                    newPet: true
                })
            }
            const handlePetClick=(e)=>{
                setState({
                    newPet: false,
                    value: e.target.value
                })
            }
            const otherPet=(e)=>{

                const handlePetChange = (e)=>{
                    console.log("Typing")
                    setState({
                        value: e.target.value,
                        newPet: true
                    })
                } 
                return(
                    <TextField 
                    className={style.TextField}
                    label="New Pet" 
                    variant="outlined"
                    onChange={handlePetChange} 
                    />)
                }
        
                return(
                    <div className={style.question2}>
                        <div className={style.petButtonsGroup}>
                        <div className={style.petButtonText}>
                            <button 
                            value="Dogs" 
                            className={style.petButton}
                            onClick={handlePetClick}>
                                🐶
                            </button >
                            <div>Dogs</div>
                        </div>
                        <div className={style.petButtonText}>
                            <button
                            value="Cats"
                            className={style.petButton}
                            onClick={handlePetClick}>
                            🐱
                            </button >
                            <div>Cats</div>
                        </div>
                        <div  className={style.petButtonText}>
                            <button  
                            value="Birds"
                            className={style.petButton}
                            onClick={handlePetClick}>
                            🐥
                            </button >
                            <div>Birds</div>
                        </div>
                        <div className={style.petButtonText}>
                            <button 
                             className={style.petButton}
                             onClick={handleOtherClick}>
                            🧸
                            </button >
                            <div>Other</div>
                        </div> 
                        
                        {state.newPet?null:                       
                        <IconButton 
                        onClick={()=>handleEntryClick(3,state.value,"age")}
                        >
                         <ArrowForwardOutlinedIcon />
                        </IconButton>}

                        </div>
                        <Paper className={style.textContainer}> 
                            {state.newPet?otherPet(): null }
                            
                            {state.newPet?                       
                            <IconButton 
                            onClick={()=>handleEntryClick(3,state.value,"age")}
                            >
                            <ArrowForwardOutlinedIcon />
                            </IconButton>:null}
                        </Paper>
                    </div>
                )
    }




    const MoreResponses =()=>{
        const [value, setValue]= useState('')
            
        
        const handleChange = (e)=>{
            console.log("Typing")
            setValue(e.target.value)
        }
        
            return(
                <React.Fragment>
        
                    <Paper className={style.textContainer}>
                    <TextField 
                            className={style.TextField}
                            type='text'
                            name="setName"
                            value={value}
                            onChange={handleChange}
                            label="Type" 
                            variant="outlined"
                    />
                    <IconButton 
                        onClick={()=>handleEntryClick(4,value,"age")}
                    >
                         <ArrowForwardOutlinedIcon />
                    </IconButton>
                    </Paper>
                </React.Fragment>
            )
    }


    const questionsArray=[<Name />, <Age />, <Pet />, <MoreResponses />]
    const [page , setPage,] = useState(0)

    entryRender = entry.map((object,ind)=>{



            if (object.type === "message"){
                return(
                <div key={ind} className={style.messagesContiner1}> 
                    <h4 className={style.message}> 
                    {object.message}
                    </h4>
                </div>)
            }else{
                return(
                    <div key={ind} className={style.messagesContiner2}> 
                        <h4 className={style.response}> 
                        {object.message}
                        </h4>
                    </div>)
            }
        
        })
    

    return (
      <div className={style.innerContainer}>
          {TopSide}
          <div className={style.nameContainer}>
          <div className={style.innerMessage} >
            {entryRender}
          </div>
            {questionsArray[page]}
          </div>

      </div >
    )
  }