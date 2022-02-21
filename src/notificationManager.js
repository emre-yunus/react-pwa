let notify = true;
const timer = ms => new Promise(res => setTimeout(res, ms))

export async function notificationManager() {
    while(notify) {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            console.log(permission);
            new Notification("notification!!!!!!!");
            await timer(5000);
        } else {
            console.log('geen notifications mogelijk in deze browser.')
        }
    }
}