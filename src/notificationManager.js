import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {checkForServiceWorker} from "./serviceWorkerRegistration";

let notify = false;
const timer = ms => new Promise(res => setTimeout(res, ms))

export async function sendNotifications() {
    notify = true;
    while(notify) {
        console.log(checkForServiceWorker())
        if('Notification' in window) {
            if(checkForServiceWorker()) {
                const notificationMessageServiceWorker = "online notification (service worker).";
                serviceWorkerRegistration.showNotification(notificationMessageServiceWorker);
                console.log(notificationMessageServiceWorker);
            } else {
                const notificationMessageMainThread = "online notification (main-thread).";
                new Notification(notificationMessageMainThread);
                console.log(notificationMessageMainThread);
            }
        } else {
            console.log('geen notifications mogelijk in deze browser.')
        }
        await timer(5000);
    }
}

export function stopNotification() {
    notify = false;
    console.log("online notifications stopped.")
}