
       const _radius= new WeakMap()
    
// Use export keyword to export class to different class
    export class Circle{
    constructor(radius){
        _radius.set(this,radius);
        
    }
    draw(){
        console.log('circle with radius');
    }
}
