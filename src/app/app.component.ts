import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AuthService } from './shared/auth.service';
import { WebNotificationService } from './shared/web-notification.service';

interface AppData {
  version: string;
  changelog: string;
}

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  permission: NotificationPermission | null = null;

  constructor(
    public auth: AuthService,
    private swUpdate: SwUpdate,
    private notificationService: WebNotificationService
  ) {
    this.swUpdate.versionUpdates.subscribe(e => {
      switch (e.type) {
        case 'VERSION_DETECTED': {
          console.log(
            'Downloading new app version:',
            e.version.appData
          );
          break;
        }

        case 'VERSION_READY': {
          const current = e.currentVersion.appData as AppData;
          const latest = e.latestVersion.appData as AppData;

          const from = current.version;
          const to = latest.version;
          const changes = latest.changelog;

          const confirmText = `Update from ${from} to ${to}. Changes: ${changes}. Install?`;

          if (window.confirm(confirmText)) {
            window.location.reload();
          }
          break;
        }

        case 'VERSION_INSTALLATION_FAILED': {
          console.log(
            `Failed to install ${e.version.appData}:`,
            e.error
          );
          break;
        }
      }
    });

    this.permission = this.notificationService.isEnabled
      ? Notification.permission
      : null;
  }

  requestSubscription() {
    this.notificationService.requestSubscription()
      .subscribe(() => {
        this.permission = Notification.permission;
      });
  }
}
