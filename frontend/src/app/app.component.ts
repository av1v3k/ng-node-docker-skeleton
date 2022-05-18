import { Component, ViewChild, AfterViewInit, AfterViewChecked, OnInit, ElementRef, ContentChild, ChangeDetectorRef, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Hero } from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked, DoCheck {

  page = 1;
  flag = false;
  // @ViewChild('heroForm', {static: false}) episodicngForm!: NgForm;
  @ViewChild('heroForm') episodicngForm!: NgForm;
  // @ViewChild('heroForm', {static: false}) episodicngForm!: ElementRef;

  constructor(private cdref: ChangeDetectorRef) {

  }

  title = 'angular-docker';
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet', false);
  whatchecked: boolean = false;

  ngOnInit() {
    console.log('oninit');
    setTimeout(() => {
      this.page = 2;
      this.cdref.detectChanges();
      console.log('detect ran');
    }, 1000);
  }
  ngDoCheck() {
    // console.log('checked', this.episodicngForm);
    // if (this.episodicngForm && !this.flag) {
    //   this.flag = true;
    //   this.episodicngForm.form.valueChanges.subscribe((form: any) => {
    //     console.log('testing--->');
    //     console.log(form);
    //   })
    // }
  }

  ngAfterViewInit(): void {
    console.log('view init', this.episodicngForm);
      this.episodicngForm.form.valueChanges.subscribe((form: any) => {
        console.log('testing--->');
        console.log(form);
      })
  }

  ngAfterViewChecked() {
    // console.log('view checked', this.episodicngForm);

  }

  toggleCheck(ev: any) {
    this.whatchecked = ev.target.checked;

  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
