import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoginDir]'
})
export class LoginDirDirective {

  constructor() { }

@Input('appLoginDir')
@HostBinding('class.bet.active')
  t:String
@HostListener('mouseenter')
  onEnter(){
 this.t='active'
  }
@HostListener('mouseleave')
  onLeave(){
 this.t=''
}

}
