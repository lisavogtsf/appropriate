const {ccclass, property} = cc._decorator;

@ccclass
export default class KeyboardScript extends cc.Component {
    public keys : Map<number,boolean> = new Map();
    onKeyDown(e:cc.Event.EventKeyboard){
        this.keys.set(e.keyCode,true);
        console.log("Key down: ", e.keyCode)

        switch(e.keyCode){
            // case cc.macro.KEY.right:
            //     if(this.keys.has(cc.macro.KEY.shift))
            //         console.log("Right and shift pressed");
            //     else                    
            //         console.log("Right pressed");
            //     break;
            case cc.macro.KEY.enter:
                console.log("*******  Enter pressed  ********")
                // fire off some other system or custom event to interact?
                break;
        }
        // console.log(this.keys.size);
    }
    onKeyUp(e:cc.Event.EventKeyboard){
        this.keys.delete(e.keyCode);
        // console.log("Key up: ", e.keyCode)
    }
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,
            this.onKeyDown,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,
            this.onKeyUp,this);         
    }
}