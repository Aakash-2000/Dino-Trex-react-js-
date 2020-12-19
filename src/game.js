
import React from 'react';
import "./App.css";

 class  Game extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            over:false,
            score:0
        }
    }
    componentDidMount=()=>{
        document.addEventListener("keydown",this.jump)
    }
    jump=()=>{
        const dino = document.getElementById("dino");
        dino.classList.add("jump");
        if(dino.classList.contains("jump")){
            setTimeout(()=>{dino.classList.remove("jump");} ,300);
        }
        
       
    }
    render(){
        setInterval(() => {
            const cactus = document.getElementById("cactus");
            
            const dino = document.getElementById("dino");
            const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
            const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
            
           
           if(dinoTop>175 && cactusLeft>0 &&  cactusLeft<50){
              
                this.setState({over:true});
                cactus.style.animation ="none";

            }
            if(dinoTop<175 && cactusLeft>0 &&  cactusLeft<50){
              
                this.setState({score:this.state.score+1});
            }
            
                
            
            if(cactusLeft<0){
                cactus.style.display="none";
            }else{
                cactus.style.display="";
            }
            
        },1);
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Dino Trex</h1>
                <div className="container">
                    <div className="dino" id="dino">
    
                    </div>
                    <div className="cactus" id="cactus">
    
                    </div>
                    
                </div>
                <div className="score">
                        <h4>Score : {this.state.score}</h4>
                        {this.state.over?<h4>Game over <br/>Refresh the screen to continue the game</h4>:null}

                    </div>
    
            </div>
        )
    }
 
}
export default Game;
