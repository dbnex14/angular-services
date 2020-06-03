import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

// @Injectable tells Angular that this service is injectable,
// so something can be injected in there.
// Note that the service injected into this service also needs to be
// added into AppModule providers section.
@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    // let's provide an event which we trigger in one event and listen
    // to in another component.  We could trigger this event below in
    // the update status method for example as well but we can also
    // trigger it in other components that get this service injected
    // like AccountComponent for example.
    statusUpdated = new EventEmitter<string>();

    // to inject service into service, we start same way by adding
    // a ctor with property to that service being injected.  But, 
    // if you inject service into another service or anything else,
    // that else has to have some metadata.  With component, we had
    // @Component metadata, directive has it because we had @Directive
    // decorator but service has none.  Hence we need to add 
    // @Injectable into service which is going to receive another
    // service.  So, receiving service needs it only.
    constructor(private loggingService: LoggingService) {}

    addAccount(newName: string, newStatus: string){
        this.accounts.push({name: newName, status: newStatus});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}