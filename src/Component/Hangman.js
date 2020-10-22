import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import img0 from '../Images/0.jpg';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpg';
import gameover from '../Images/gameover.png';
import styles from '../Styles/HangmanStyles';
import {lists,choice} from './words';
import userGuess from '../Hooks/useGuess';
function Hangman({classes}){
    const images = [img0,img1,img2,img3,img4,img5,img6,gameover]
    //Initial Value (State)
    let initVal = {
        userGuess : new Set(),
        ques : choice(lists),
        wrongCtr : 0,
        hasWon : false
    }
    //states => current state
    //handleclick => func used to change the curr state
    //reset => play again
    const {states,handleClick,reset} = userGuess(initVal);

    //The letters which are crctly guessed will be displayed and others will be displayed as "_"
    const guess = () =>{
        let {userGuess,ques} = states;
        return ques.split("").map(ltr=> (userGuess.has(ltr) ? ltr : "_"));
    }

    //Generating Buttons
    const generateBtns = () => {
        let btns = [];
        for(let i of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
            let ug = states.userGuess;
            if(ug.has(i)){
                btns.push(<Button key={i} onClick={()=>handleClick(i)} value={i}  variant="outlined" disabled>{i}</Button>)
            }else{
                btns.push(<Button key={i} style={{fontWeight: "700"}} onClick={()=>handleClick(i)} value={i} variant="outlined" color="secondary">{i}</Button>)
            }
        }
        return btns;
    }
    let imgSrc = images[states.wrongCtr];
    let {wrongCtr,hasWon,ques} = states;
    //Main
    return(
        <div>
          <div className={classes.imgContainer}>
            <img alt="man" src={imgSrc} />
          </div> 
          <h4 className={classes.remGuess}>Remaining Chance: {7-wrongCtr}</h4>
          <div className={classes.btnContainer}>
            <h2 className={classes.answer}>{wrongCtr<7?guess():ques}</h2>
            {(wrongCtr<7 && !hasWon) && generateBtns()}
            {hasWon && <h2>You Have Won!</h2>}
            {(wrongCtr>6 || hasWon) && <Button variant="outlined" onClick={()=>reset()}>Play Again</Button>} 
           </div>
        </div>
    )
}

export default withStyles(styles)(Hangman);