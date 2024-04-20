import { lazy } from "react";

/* can be helpfull but be careful with the path, when calling the function
path is relative to this very file*/
export function lazyLoad(path, namedExport) {
  return lazy(async () => {
    const promise = import(path);
    if (namedExport === null) {
      return promise;
    } else {
      const module = await promise;
      return {
        default: module[namedExport],
      };
    }
  });
}
