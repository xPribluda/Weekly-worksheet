self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : { title: 'Weekly Worksheet', body: 'Reminder' };
  e.waitUntil(self.registration.showNotification(data.title, { body: data.body }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
