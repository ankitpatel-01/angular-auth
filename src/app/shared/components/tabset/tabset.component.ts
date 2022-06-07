import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabsComponent) tabs: QueryList<TabsComponent>;

  constructor() {
    console.log(this.tabs)
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.tabs)

    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
    console.log(this.tabs.toArray())
  }

  selectTab(tab: TabsComponent) {
    this.tabs.toArray().forEach(tab => (tab.active = false));
    tab.active = true;
  }

}
