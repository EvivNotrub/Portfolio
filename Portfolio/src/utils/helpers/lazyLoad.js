import { lazy } from "react";

/* can be helpfull but be careful with the path, when calling the function
path is relative to this very file*/
export function lazyLoad(path, namedExport) {
  return lazy(() => {
    const promise = import(path);
    if (namedExport === null) {
      return promise;
    } else {
      return promise.then((module) => ({
        default: module[namedExport],
      }));
    }
  });
}
