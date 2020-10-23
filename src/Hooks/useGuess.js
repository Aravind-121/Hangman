import {useState} from 'react';
import {lists,choice,intersection} from '../Component/words';
export default initVal => {
    let [states,setStates] = useState(initVal);
    return{
        states,
        handleClick : e =>{
            let {userGuess,ques,wrongCtr,hasWon} = states;
            userGuess = userGuess.add(e);
            //hasWon check
            let queSet = new Set(ques);
            let helper = intersection(queSet,userGuess);
            if(helper.size===queSet.size){
                hasWon = true;
            }
         
            if(!ques.includes(e)) wrongCtr += 1;

            let changeState = {...states,userGuess,wrongCtr,hasWon};
            setStates(changeState);
        },
        reset : () =>{
            let {userGuess,ques,wrongCtr,hasWon} = states;
            userGuess = new Set();
            wrongCtr = 0;
            hasWon = false;
            ques = choice(lists);
            let resetState = {...states,userGuess,wrongCtr,hasWon,ques};
            setStates(resetState);
        }
    }
}
