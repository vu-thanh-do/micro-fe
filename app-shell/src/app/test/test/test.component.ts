import { Component, QueryList, ViewChildren } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { loadRemoteModule } from 'src/app/utils/federation-utils';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
 @ViewChildren('comp') components!: QueryList<any>;
  loaders: any = [];

  constructor(readonly appService: AppService) {}

  async ngAfterViewInit() {
    for (const m of this.appService.authorized_modules) {
      loadRemoteModule(m).then((module) => {
        console.log(module,'module')
        if (module.default) {
          this.loaders.push(module.default);
        } else {
          this.loaders.push(module);
        }
      });
    }
  }

}
