import { configure, mount } from "@codewithkyle/router";
import db from "@codewithkyle/jsql";

(async () => {
// @ts-ignore
await db.start();

const main = document.body;
mount(main);

configure({
    "/": "home-page",
    "404": "missing-page",
});
})();