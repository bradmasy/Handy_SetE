/*let HandyCache = "HandyCache";
let Handy = [
    "./index.html",
    "./scripts/handyIndex.js",
    "./styles/new-style-sheet.css",
    "./" 
];
// this function is saving all the files from artCache to the cache so that the program may run offline
self.addEventListener("install", function(event){
    caches.open(HandyCache).
        then(function(cache){
            cache.matchAll(Handy);
           // cache.addAll(artCache)
           // console.log(cache.addAll(artCache))
            console.log(Handy);
            console.log(cache);
            self.skipWaiting();
        })
    })


self.addEventListener("fetch",function(event){
    console.log("fetch event");
    console.log(event);
    event.respondWith(
        caches.match(event.request).//search for files in cache
            then(function(match){//if theres a match
                if(match){
                    return match;//return the files
                } else {
                    console.log("could not be found");
                    return fetch(event.request).
                        then(function(response){
                          return caches.open(HandyCache).then(function(cache)
                            {cache.put(event.request, response.clone())
                            return response;})
                        })
                }
            })
    );
});
*/
