import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.view.html'
})
export class AppComponent {
    
    color: string;
    fontSize: number;
    
    visible: boolean;
    // options: Array<number>;
    currentOption: number = 1;
    
    constructor() {
        // this.options = [ 1, 2, 3, 4 ];
    }
    
    toggle() {
        this.visible = !this.visible;
        
        if(this.currentOption === 3) {
            this.currentOption = 1;
        } else {
            this.currentOption++;
        }
    }
    
    apply(color, fontSize) {
        this.color = color;
        this.fontSize = fontSize;
    }
}