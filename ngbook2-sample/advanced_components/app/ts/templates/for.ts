import { Component,
  Directive,

  ChangeDetectorRef,
  ViewRef,
  ViewContainerRef,
  TemplateRef,
  DoCheck,
  IterableDiffers,
  IterableDiffer,
} from '@angular/core';


@Directive({
  selector: '[ngBookRepeat]',
  inputs: ['ngBookRepeatOf']
})
class NgBookRepeat implements DoCheck {
  private items: any;
  private differ: IterableDiffer;
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();


  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>,
              private changeDetector: ChangeDetectorRef,
              private differs: IterableDiffers) {}

  set ngBookRepeatOf(items) {
    this.items = items;
    if (this.items && !this.differ) {
      this.differ = this.differs.find(items).create(this.changeDetector);
    }
  }

  ngDoCheck(): void {
    if (this.differ) {
      let changes = this.differ.diff(this.items);
      if (changes) {

        changes.forEachAddedItem((change) => {
          let view = this.viewContainer.createEmbeddedView(this.template,
            {'$implicit': change.item});
          this.views.set(change.item, view);
        });
        changes.forEachRemovedItem((change) => {
          let view = this.views.get(change.item);
          let idx = this.viewContainer.indexOf(view);
          this.viewContainer.remove(idx);
          this.views.delete(change.item);
        });
      }
    }
  }
}

@Component({
  selector: 'template-sample-app',
  directives: [NgBookRepeat],
  template: `
  <ul>
    <li *ngBookRepeat="let p of people">
      {{ p.name }} is {{ p.age }}
      <a href (click)="remove(p)">Remove</a>
    </li>
  </ul>

  <div class="ui form">
    <div class="fields">
      <div class="field">
        <label>Name</label>
        <input type="text" #name placeholder="Name">
      </div>
      <div class="field">
        <label>Age</label>
        <input type="text" #age placeholder="Age">
      </div>
    </div>
  </div>
  <div class="ui submit button"
       (click)="add(name, age)">
    Add
  </div>
  `
})
export class ForTemplateSampleApp {
  people: any[];

  constructor() {
    this.people = [
      {name: 'Joe', age: 10},
      {name: 'Patrick', age: 21},
      {name: 'Melissa', age: 12},
      {name: 'Kate', age: 19}
    ];
  }

  remove(p) {
    let idx: number = this.people.indexOf(p);
    this.people.splice(idx, 1);
    return false;
  }

  add(name, age) {
    this.people.push({name: name.value, age: age.value});
    name.value = '';
    age.value = '';
  }
}


