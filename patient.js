class Patient {
    constructor(object){
        console.log('hello am the patient constructor ...');
        this.al = object;
        
    }

    names(name){
        this.al.tell()
        return name;
    }
    tell(){
        console.log('keep telling ...');
        
    }
}