# Machine State

Flight booking project with X-State / Machine State.

Though there seems to have been reservations regarding machine states due to its complexity at maintenance in large scale projects,
Machine states are gaining certain relavance for better state preservation, control, and smooth transition between components.

X-State proposes a method, createMachine() and a (React) hook useMachine to configure a machine to states, actions detonators, and contexts controls 
in such an intuitive way. 

State machines may not be a replacement of Redux or any other global state library, however, it would be a great tool in partial component construction
at noticing that it circles the same states. 

Though there might be a lot of things to mention about Machine States, one thing that might be a downside is its imperative API, which leads to 
large files and blocks of codes that kind of feels like antagonist to React principle of declatarive programming.

Nonetheless, I personally think there is a lot of potential in this concept and paradigm of stateful components..from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

![logo](https://i.ibb.co/NN7tXh5/state-machine.png)
