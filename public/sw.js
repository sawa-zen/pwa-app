self.addEventListener('install', function(event) {
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
});
