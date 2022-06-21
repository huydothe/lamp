let Battery=function (energy){
    this.setenergy=function (energy){
        this.energy=energy;
    };
    this.getenergy=function(){
        this.energy=energy;
    };
    this.decreaseEnergy=function (){
        if(this.energy>0){
            this.energy--;
        }else {
            alert('Hãy sạc thêm pin');
        }
    };
}
let FlashLamp=function (){
    this.setBattery=function (battery){
        this.battery=battery;
    };
    this.getBatteryInfo=function(){
        return this.battery.getenergy();
    };
    this.light=function(){
        if(this.status){
            alert('Lighting');
        }else {
            alert('not lighting');
        }
    };
    this.turnOn=function (){
        this.status=true;
    }
    this.turnOff=function (){
        this.status=false;
    }
};
let battery = new Battery();
battery.setenergy(10);

let flashlamp = new FlashLamp();
flashlamp.setBattery(battery);

document.write('Battery Info:' + flashlamp.getBatteryInfo() +'<br>');
flashlamp.light();

document.write('turn on <br>')
flashlamp.turnOn();
flashlamp.light();
document.write('Battery Info:' + flashlamp.getBatteryInfo()+'<br>');

document.write('turn off <br> ')
flashlamp.turnOff();
flashlamp.light();