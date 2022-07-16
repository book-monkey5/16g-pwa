// ...
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';
import { concatMap, from, Observable } from 'rxjs';

@Injectable({ /* ... */ })
export class WebNotificationService {
  readonly VAPID_PUBLIC_KEY = 'BGk2Rx3DEjXdRv9qP8aKrypFoNjISAZ54l-3V05xpPOV-5ZQJvVH9OB9Rz5Ug7H_qH6CEr40f4Pi3DpjzYLbfCA';
  private baseUrl = 'https://api5.angular-buch.com/notifications';

  constructor(private http: HttpClient, private swPush: SwPush) {}

  get isEnabled() {
    return this.swPush.isEnabled;
  }

  // request a subscription from the browser and register it on the server
  requestSubscription(): Observable<unknown> {
    const request = this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    });

    return from(request).pipe(
      concatMap(sub => this.registerOnServer(sub))
    );
  }

  private registerOnServer(params: PushSubscription) {
    return this.http.post(this.baseUrl, params);
  }
}
