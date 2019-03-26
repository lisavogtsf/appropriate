const {ccclass, property} = cc._decorator;

@ccclass
export default class KeyboardScript extends cc.Component {
    onKeyDown(e:cc.Event.EventKeyboard){
        switch(e.keyCode){
            case cc.macro.KEY.enter:
                cc.director.loadScene("decision-scene")
                break;
            default:
                console.log("key pressed: ", e.keyCode)
        }
    }
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,
            this.onKeyDown,this);
    }
}