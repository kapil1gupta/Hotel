import React from "react";
class Hotel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rooms: 1,
            adults: 1,
            children: 0,
            totalPerson:4
          };
    }
    plusRoomHandler(){
        debugger;
        console.log("plus");
        if(this.state.rooms!==5){
            let t=this.state;
            t['rooms']=t['rooms']+1;
            // t['adults']=t['rooms'];
            t['totalPerson']=t['totalPerson']+4;
            // t['totalPerson']=t['totalPerson']-4;
            if((t['adults']>=t['totalPerson'])&&(t['adults']+t['children']>t['totalPerson'])){
                t['adults']=t['totalPerson'];
                t['children']=0
            }else if((t['adults']<t['totalPerson'])&&(t['adults']+t['children']>t['totalPerson'])){
                t['children']=t['totalPerson']-t['adults'];
            }
            else if(t['adults']<t['rooms']){
                t['adults']=t['rooms'];
            }
        // this.setState({
        //    rooms:this.state.rooms+1,
        //    totalPerson:this.state.totalPerson+4
        // })

        this.setState(t);

        // if(this.state.rooms>this.state.adults){
        //     debugger;
        //     this.setState({
        //         adults:this.state.rooms
                
        //      })
        // }
       
    }
    
    }
    minusRoomHandler(){
        debugger;
        if(this.state.rooms!==1){
        let t=this.state;
            t['rooms']=t['rooms']-1;
            // t['adults']=t['rooms'];
            // t["children"]=0;
            t['totalPerson']=t['totalPerson']-4;
            if((t['adults']>=t['totalPerson'])&&(t['adults']+t['children']>t['totalPerson'])){
                t['adults']=t['totalPerson'];
                t['children']=0
            }else if((t['adults']<t['totalPerson'])&&(t['adults']+t['children']>t['totalPerson'])){
                t['children']=t['totalPerson']-t['adults'];
            }
            this.setState(t);
        }
        console.log("minus");
        // if(this.state.rooms!==1){
        //     this.setState({
        //        rooms:this.state.rooms-1,
        //        totalPerson:this.state.totalPerson-4
        //     })
        // }
    }
    plusAdultHandler(){
        if(this.state.adults+this.state.children!==this.state.totalPerson){
            this.setState({
                adults:this.state.adults+1
            })
        }
    }
    minusAdultHandler(){
        debugger;
        if(this.state.rooms<this.state.adults){
            this.setState({
                adults:this.state.adults-1
            })
        }
        // if(this.state.adults+this.state.children!==this.state.totalPerson){
        //     if(this.state.adults!==1){
        //     this.setState({
        //         adults:this.state.adults-1
        //     })
        // }
        // }else{
        //     if(this.state.adults!==1){
        //         this.setState({
        //             adults:this.state.adults-1
        //         })
        //     }
        // }
    }
    plusChildrenHandler(){
        debugger;
        if(this.state.adults+this.state.children!==this.state.totalPerson){
            this.setState({
                children:this.state.children+1
            })
        }
    }
    minusChildrenHandler(){
        // if(this.state.adults+this.state.children!==this.state.totalPerson){
            if(this.state.children!==0){
            this.setState({
                children:this.state.children-1
            })
        }
    }
    
render(){
    console.log(this.state.rooms+''+this.state.totalPerson);
    return(
        <div className="outer">
        <div class="alignuser">
          <p className="user"> 
          <i class="fa fa-users user" aria-hidden="true"></i> 
          <span className="mar-left-10">Choose number of <b>People</b></span>
          </p>
        <div className="inside">
            <div className="particular-div displayflex">
                <div><p><i class="fa fa-bed user" aria-hidden="true"></i>
                <span className="mar-left-10 user">ROOMS</span></p>
                </div>
                <div><p>
                <button className="btn minus" onClick={()=>this.minusRoomHandler()}>-</button>
                
                <span className="pad-5">{this.state.rooms}</span>
                <button className="btn plus" onClick={()=>this.plusRoomHandler()}>+</button>
               </p>
                </div>
            </div>
            <div className="particular-div displayflex">
               <div><p><i class="fa fa-user user" aria-hidden="true"></i>
               <span className="mar-left-10 user">ADULTS</span></p>
               </div>
                <div><p>
                <button className="btn minus" onClick={()=>this.minusAdultHandler()}>-</button>
                
                <span className="pad-5">{this.state.adults}</span>
                <button className="btn plus" onClick={()=>this.plusAdultHandler()}>+</button></p>
                </div>
            </div>
            <div className="pad-15 displayflex">
              <div><p><i class="fa fa-child user" aria-hidden="true"></i>
              
              <span className="mar-left-10 user">CHILDREN</span></p>
              </div>
                <div>
                    <p> <button className="btn minus" onClick={()=>this.minusChildrenHandler()}>-</button>
                
                <span className="pad-5">{this.state.children}</span>
                <button className="btn plus" onClick={()=>this.plusChildrenHandler()}>+</button>
                    </p>
                </div>
            </div>
        </div>
       </div>
       </div>
)
}


}
export default Hotel;