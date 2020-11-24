'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a1e36f284c2b45d6deae405680174e05",
".git/config": "d838925007be02e2d979e5745c09ea5f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c9bdb3df46037d9aed2e5ad4ea833469",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44be95c0bf66212f2af113731601082d",
".git/logs/refs/heads/master": "44be95c0bf66212f2af113731601082d",
".git/objects/05/c555ff3fa7645fa3c7c3e0223733ea06e03b42": "e8e281234f24f9cf4aa898952ae48595",
".git/objects/09/95603410559749ba7c95218db1d45ead7f6dd5": "12196ca1740eec7fb72013a5b38588b1",
".git/objects/0c/4a328d8c882f97bd9786fab18df68fb8d70f42": "090121836f56e38801d06a698ce5e1a1",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/17/72b98c174d312143db6ea899c687142f088b58": "76dd524604c1af774ba0af1b56f43f9b",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1d/8e4a725f4451db4d99c0c6ccbd8369ddd778f6": "db4b1dc231f45595541605d0208f86d5",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/31/154319c0462e1325edeae308f2bce13d91d87c": "95699125d71db48d1c8a2a17df07dafc",
".git/objects/32/c4fb8baabf29b0d1efa41b1b27cc2d75ab9b9b": "dd25b55410da817a317b8de4a2ae1e9b",
".git/objects/32/cd858a4083f2a7f116408a5f5f8a6cc6f7dff0": "6014cd5e8a637b14d168ad1f3d3280a8",
".git/objects/36/551b8601f77568f95ce0b2021fee1b950e4f51": "2b4de05d5ed482e8b9a8d22b34bb70d1",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/49/a0738f64b9547057cf8efbc8b90569d3f84166": "733a392cef1f8b1320c3ddb5ce165983",
".git/objects/4b/a921ab39c5f248e8a728fcf526d27b1461f97e": "a34da8f97ceddb04d79d11e9b5038ec9",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2d6b09922ea8e7ade570cda3e0e201a9a5baef": "5b42bbd1fe2f190f57da4eb51de2a628",
".git/objects/8c/62ebd643a86401f04cec94e1489ecbdb7bad34": "dfaee4221bb6c08fd54defaf111f3230",
".git/objects/8f/2105d969e65bf3ae4c631856ad12ffb61eb0d7": "c2127bc52d7a0ea61e56a9b8c9c7d370",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/96/cc38e0e0683b094c4d82846959ee3a03147ae5": "fb86bff3bc0cf4baba12d70fe9815c9e",
".git/objects/9b/7928fac5f5d11d2fb24f5a5f5cc7619fd61467": "671d261239c9f9b8a3e99cc58f9ac0fe",
".git/objects/a1/fa82bc68237e64dfb540189ab7861027129f6c": "c96b909b31be933ef3b35b9db92c718b",
".git/objects/a3/3895bba94db09381149fad89a12ffbb614692e": "22858309893110d751a046e0f627ece8",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/ab72b9dc7e8a10618f89b614e55875ea20b3d0": "e5a1d6ae176f012a5504106626e92c75",
".git/objects/b0/c7e0938d1950109b2758993ff222f7292641ae": "cb7b859557098bddc22e4621091d67d1",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/22bf43226f3c5f8a7821b5bda8e8effae586b2": "bd44ac6e83aa968f055821873a9ae907",
".git/objects/b4/b7acef3960b4918f342ca3989ef037be0f6886": "d649023005f7ec4562571b8646177fcb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c7/9986c9549d57e724838235a0128d16eb467d80": "fc02ef7a2b8e8170e8c02079bd140054",
".git/objects/ca/cc4fef5bb76c8e7933c01a0db055694e656107": "5eb86859057252fdaeccff555ecbf0d0",
".git/objects/ce/fc96bac81ff276f796bd0d7fca1b05192bd9e5": "0c8725f0581121479afe419908292034",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/d2/d99977a13b506c919862ac6da1661db62deefc": "03911fafbd28f1b25a655bbb751e81fc",
".git/objects/d9/574d845a98761ea2cb19c53da356db48c2f2a6": "48e95d35a254566bf49857dd5a726965",
".git/objects/e9/d95d2f1c924dae030b32c8d7e2262122aa9fed": "a4511d3cca1ccdd0acc51b2fc08a709c",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/f7/d22843ca3502c8d6983b71f3e56de4eb630b45": "2ebad66bfd5bcf0cbcb19330fa8a2122",
".git/refs/heads/master": "3fa148538e9b2e123e0305151743dfac",
"assets/AssetManifest.json": "7a363a45b8f2373b7a28112cde81de5a",
"assets/assets/aipan1.png": "bde8ab115bfa03dd5bc429af30bb64a4",
"assets/assets/aipan2.jpg": "eadab04be4fd90ed8048b0549601e719",
"assets/assets/aipan3.png": "7345031cde15a7e739974d1a38825272",
"assets/assets/almora.jpg": "c2c8113bb07f672a6eceebfeee9aa797",
"assets/assets/festival1.jpg": "20865a1e8133772188718c4e4570db6b",
"assets/assets/festival2.jpg": "cb5210ff5847ff5efcb5589ad7347e40",
"assets/assets/gangotri.jpg": "9e7207d9b236429560ed24fc0d242873",
"assets/assets/haridwar.jpg": "b279bf7a27b69c5953a3ce57c56ca09c",
"assets/assets/jimcorbett.jpg": "5a74b853d59af3346e49c58d8c305130",
"assets/assets/manasa.jpg": "fe437ec5eb429875c07fc0714f13d6b5",
"assets/assets/mussoorie.jpg": "341401f0ca0f10d1bd7c6f8ebf057073",
"assets/assets/nainital.jpg": "05ce399d4e2a61e5bfdd27be6705208a",
"assets/assets/rishikesh.jpg": "f6d61ab47615e2e6ce447c50cef4a75e",
"assets/assets/shiva.png": "9d91222b314a1b26950a257147d10cb4",
"assets/assets/tour1.jpg": "2c56897b7914d0d74cbeebecfdca5899",
"assets/assets/tour3.jpg": "7a23409ef1f6abb89acc598ad4f6a9ab",
"assets/assets/tour4.jpg": "bdd4378574b1a7ce34e1e4d81e8f12e4",
"assets/assets/uk1.jpg": "381be7860d55be605d45b9ebbd0dfa1f",
"assets/assets/uk2.jpg": "3d0f8d4309b250914a63975c04885824",
"assets/assets/uk3.jpg": "c1f5440f87267afd993aff0027f80a21",
"assets/assets/uk4.jpg": "f7bc8cddf0989f2ceab65816cee125c1",
"assets/assets/valleyofflowers.jpg": "03a04a30601919dfa6a27f13d1d6185d",
"assets/FontManifest.json": "e039b742db4d311f613e83ec4e4bfddc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/NOTICES": "10a55009eda7bea85c36ff60f2f24b48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8f022bee8816ceccb5a7178c950eb829",
"/": "8f022bee8816ceccb5a7178c950eb829",
"main.dart.js": "ce8a689b23f7ff076991604bbff2904a",
"manifest.json": "1db294079158d015808e4c9b9360c722",
"version.json": "52248c91c59ffaa4577ffa1203f15c6c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
