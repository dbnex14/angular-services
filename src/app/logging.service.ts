
// service is just normal typescript class.  we use services to avoid code
// duplication so here we centralize functionality we can then use all over
// our app.
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}