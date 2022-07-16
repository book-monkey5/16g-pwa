// ...
/*BS*/import { SwUpdate } from '@angular/service-worker';/*BE*/

@Component({ /* ... */ })
export class AppComponent {

  constructor(
    public auth: AuthService,
    /*BS*/private swUpdate: SwUpdate/*BE*/
  ) {
    /*BS*/this.swUpdate.versionUpdates/*BE*/.subscribe(e => {
      switch (e.type) {
        /*BS*/case 'VERSION_DETECTED':/*BE*/ {
          console.log(
            'Downloading new app version:',
            e.version.appData
          );
          break;
        }

        /*BS*/case 'VERSION_READY':/*BE*/ {
          const current = e.currentVersion.appData;
          const latest = e.latestVersion.appData;

          const from = current.version;
          const to = latest.version;
          const changes = latest.changelog;

          const confirmText = `Update from ${from} to ${to}. Changes: ${changes}. Install?`;

          /*BS*/if (window.confirm(confirmText)) {
            window.location.reload();
          }/*BE*/
          break;
        }

        /*BS*/case 'VERSION_INSTALLATION_FAILED':/*BE*/ {
          console.log(
            `Failed to install ${e.version.appData}:`,
            e.error
          );
          break;
        }
      }
    });
  }
}
