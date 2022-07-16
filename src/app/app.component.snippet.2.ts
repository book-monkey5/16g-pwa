// ...
/*BS*/import { WebNotificationService } <TEX>\lstbreak</TEX>from './shared/web-notification.service';/*BE*/

@Component({ /* ... */ })
export class AppComponent {
  /*BS*/permission: NotificationPermission | null = null;/*BE*/

  constructor(
    // ...
    /*BS*/private notificationService: WebNotificationService/*BE*/
  ) {
    // ...
    /*BS*/this.permission = this.notificationService.isEnabled
      ? Notification.permission
      : null;/*BE*/
  }

  /*BS*/requestSubscription() {
    this.notificationService.requestSubscription()
    .subscribe(() => {
      this.permission = Notification.permission;
    });
  }/*BE*/
}
