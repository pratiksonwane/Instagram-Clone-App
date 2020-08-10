import React, { Component } from 'react';

import DpRutuja from './rutuja.jpeg';
import '../App.css';
import Rutu1 from './rutu1.jpeg';
import Rutu2 from './rutu2.jpeg';
import Icon from './insta-icon.jpeg';
class RutujaProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            follow:'Follow',
            Followers:548
        }
          
    }
    change = () => {
     if(this.state.follow === 'Following'){
         this.setState({
             follow:'Follow',
             Followers:this.state.Followers-1
         });
     }else{ 
         this.setState({
        follow:'Following',
        Followers:this.state.Followers+1
    });

     }
    }

  render(){
      
  return (
    <div style={{borderRadius:25,border:'1px solid grey',marginTop:-20}}>
        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Icon} style={{marginRight : 100, blockSize:100}}></img>
                <p ></p>
                <p style={{marginRight : 100, marginTop :20}}>rutuja_2803 </p>
                <hr />        
            </div>
        </div>

        <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={DpRutuja} height="105" width="105" style={{borderRadius : 70, marginTop :0, marginRight : 20}}></img>
                <p style={{marginLeft :40, marginTop : 30, fontSize : 25}}>2</p>
                <p style={{marginTop : 80, marginLeft:-30}}>Posts</p>
                <p style={{marginTop : 30,  marginLeft:35,fontSize : 25}}>{this.state.Followers}</p>
                <p style={{marginTop : 80, marginLeft:-50}}>Followers</p>
                <p style={{marginTop : 30, marginLeft:20, fontSize : 25}}>600</p>
                <p style={{marginTop : 80, marginLeft:-40}}>following</p>

            </div>
        </div>
        
        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop :-19,marginRight:280, fontWeight : 200}}> rutuja_2803</p>
                </div>
            </div>


        <div className="ctQZ">   
            <div className="_47KiJ">
                <p style={{marginTop : -19,marginRight:235, fontWeight : 200}}> <pre>mah lyf mah rules </pre></p>
                {/* <p style={{marginTop : 430, marginLeft : -191, fontWeight : 700}}> <pre>Papa ki Pari </pre></p> */}
                
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
            <button style={{marginTop : -29, marginRight:50,fontWeight : 200, blockSize : 30,background:'skyblue'}} onClick={this.change}> {this.state.follow}</button>
                <button style={{marginTop : -29,marginRight:70, fontWeight : 200, blockSize : 30,background:'skyblue'}}> Message</button>
                </div>
            </div>

            <div className="ctQZ">   
            <div className="_47KiJ">
                <img src={Rutu1} style={{marginTop :0, marginRight:20,fontWeight : 100, blockSize : 100}}></img>
                <img src={Rutu2} style={{marginTop : 0, marginRight:50,fontWeight : 100, blockSize : 100}}></img>
                
                
                </div>
            </div>         
   </div>
  );
 }
}

export default RutujaProfile;
