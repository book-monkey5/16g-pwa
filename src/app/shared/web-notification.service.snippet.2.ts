// ...
@Injectable({ /* ... */ })
export class WebNotificationService {
  // ...
  constructor(/*BS*/private router: Router,/*BE*/ /* ... */) {
    /*BS*/this.swPush.notificationClicks.subscribe(e => {
      const data = e.notification.data;
      if (data?.book?.isbn) {
        this.router.navigate(['/books', data.book.isbn])
      }
    });/*BE*/
  }
  // ...
}
