importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "components/inline.js",
    "revision": "92b2d487f819998ef0c95cf9479b540e"
  },
  {
    "url": "components/layout.js",
    "revision": "fa2143b763c2a45a600c51a4d11c6fb9"
  },
  {
    "url": "components/progressiveImage.js",
    "revision": "14d311022f0da37cdb11f7e139958ac0"
  },
  {
    "url": "components/teaser.js",
    "revision": "0d695e396a1f5b4679682bcf3c14a2ed"
  },
  {
    "url": "config/apiUrl.js",
    "revision": "49d2b93bab55a72f8daf2d100f7b1ae5"
  },
  {
    "url": "pages/_document.js",
    "revision": "79ce7fc6367e181d9a3afa65e2c16684"
  },
  {
    "url": "pages/_error.js",
    "revision": "d31e175cf26a0ea65998df7cef17feda"
  },
  {
    "url": "pages/burger.js",
    "revision": "68038e644d7f7dd5f524877a59345dfd"
  },
  {
    "url": "pages/index.js",
    "revision": "cccc9659f484dfbd2b7ddcc4225a709b"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
