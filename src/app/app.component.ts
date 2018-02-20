import { SearcherService } from './services/searcher.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private list: Array<any>;
  private inputSearch: string;
  constructor(private searchService: SearcherService) {
    this.inputSearch = '';
  }

  public search(event: any) {
    this.searchService.getList(event.target.value)
    .subscribe(list => {
      console.log(event.target.value);
      console.log(this.list);
      this.list = list;
    });
  }

  public select(text: string) {
    this.inputSearch = text;
  }
}
