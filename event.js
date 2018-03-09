<!-- 原始对象-->
//绑定listener
var events = require("events");

var eventEmitter = new events.EventEmitter();
//on(event, listener)绑定事件
//addListener(event, listener)为指定事件添加一个监听器到监听器数组的尾部。
//once(event, listener)为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器
//removeListener(event, listener)移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
//removeAllListeners([event])移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
//setMaxListeners(n)默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
//listeners(event)返回指定事件的监听器数组。
eventEmitter.on("any",function(arg1,arg2){
    console.log(arg1,arg2)
});
setTimeout(function(){
    // emit执行事件
    //emit(event, [arg1], [arg2], [...])按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
    eventEmitter.emit("any","arg1c","arg2c")
},1000);

//listenerCount(emitter, event)返回指定事件的监听器数量。
//newListener该事件在添加新监听器时被触发。
//removeListener从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
//emitter.emit('error'); error监听器