import db from "@codewithkyle/jsql";

(async () => {
    // @ts-ignore
    await db.start();

    //@ts-ignore
    await import("/js/router.js");
})();