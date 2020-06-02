import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [LoggingService]
})
export class NewAccountComponent {
  // This is how we inject a dependency.  Here we make it private property so it
  // is accessible in entire class.  If it needed to be accessible only in c-tor,
  // then no need to add private and make it into a property.
  constructor(private loggingService: LoggingService
    , private accountsService: AccountsService) { 
      // subscribe to event from account service and now we have
      // cross-component communication using a service.
      accountsService.statusUpdated.subscribe(
        (status: string) => alert('New status: ' + status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    // here we use accounts service to pass and manage our data and instead
    // of emitting an event, we use the service to do the work of data
    // managing for us.
    this.accountsService.addAccount(accountName, accountStatus);

    // NOTE we could use our service like this by importing it first, instantiating
    // and then calling its methods.  This will work BUT THIS IS WRONG!  We 
    // dont do it this way in Angular.  Angular provides much better way to do this
    // and you shuld never have to create instances manually this way.
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

    // when injected and added to providers array in @component section, we can just 
    // do it this way instead.
    //this.loggingService.logStatusChange(accountStatus);
  }
}
