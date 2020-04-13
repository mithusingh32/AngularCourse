import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root',})
export class LoggingService {
  logStatusChange(account: string, status: string) {
    console.log(account + " status changed, new status: " + status);
  }
}