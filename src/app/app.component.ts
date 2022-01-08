import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Max-ReactiveForms';
    genders = ['male', 'female'];

    signUpForm!: FormGroup;

    constructor(private fb:FormBuilder) {
    }


    //todo:un commended method is the angular.io recommended method

    // ngOnInit() {
    //     this.signUpForm = new FormGroup({
    //         'username': new FormControl(null, [Validators.required]),
    //         'email': new FormControl(null),
    //         'gender': new FormControl('male')
    //     });
    //     console.log(this.signUpForm)
    // }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            username: new FormControl(null, [Validators.required]),
            email: new FormControl(null),
            gender: new FormControl('male'),

            address: new FormGroup({
                streetFCN:new FormControl(null,[Validators.required]),
                pincodeFCN: new FormControl(null,Validators.required),
                localityFCN: new FormControl(null,Validators.required),
                addressFCN : new FormControl(null,Validators.required),
            }),

            hobbiesFA: new FormArray( [])
        });
        console.log(this.signUpForm)
    }

    onsubmit() {
        console.log(this.signUpForm.value)
        console.log(this.signUpForm)
    }

    // onAddHobbies() {
    //     const controls = new FormControl(null,Validators.required);
    //     (<FormArray>this.signUpForm.get('hobbiesFA')).push(controls);
    // }

    get hobbiesFA() {
        return this.signUpForm.get('hobbiesFA') as FormArray;

    /*   Note: Because the returned control is of the type AbstractControl,
        you need to provide an explicit type to access the method syntax for the form array instance.*/

    }

    addHobbies(){
        this.hobbiesFA.push(new FormControl(''));
    }
}
