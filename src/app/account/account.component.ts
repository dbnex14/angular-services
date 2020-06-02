import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }

  onSetTo(status: string) {
    // here too, we use accounts service to do data managing
    this.accountsService.updateStatus(this.id, status);

    //console.log('A server status changed, new status: ' + status);
    // so instead of calling above console.log all over the place, we call
    // our service like below to do that for us.
    //this.loggingService.logStatusChange(status);

    // since we inject this service here, we can also trigger events
    // defined in this service
    this.accountsService.statusUpdated.emit(status);
  }
}
