const {ccclass, property} = cc._decorator;
@ccclass
export default class MouseScript extends cc.Component {
    @property
    nextScene : string = "opening-scene"

    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN,(e:cc.Event.EventMouse)=>{
            console.log("Mouse down on top of selected node");
            console.log("correct next scene? this.nextScene: ", this.nextScene)
            cc.director.loadScene(this.nextScene)
            e.bubbles = false; // Handled event don't let it propogate!
        });
        this.node.on(cc.Node.EventType.MOUSE_LEAVE,(e:cc.Event.EventMouse)=>{
            console.log("Mouse no longer over " + e.currentTarget.name);
        });
        this.node.parent.on(cc.Node.EventType.MOUSE_DOWN,(e:cc.Event.EventMouse)=>{
            // add some visual feedback here, that it was pressed before scene change?
            // wonder how that timing would even work
            console.log("Mouse button pressed on parent.  Button: " + e.getButton());
        });
    }
}