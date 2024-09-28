function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["index-Df1alkCk-C_CNa0Nr.js","strapi-2EhdZULj.js","strapi-COJtagOC.css","Layout-BJOxxAeM-D6E8lEA7.js","useDragLayer-Ds5UJ6xK.js","_id-6LK95-rZ-BZgkqcFp.js","getEmptyImage-CjqolaH3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as o,bz as a,j as e,R as r,a as s}from"./strapi-2EhdZULj.js";const d=o.lazy(()=>a(()=>import("./index-Df1alkCk-C_CNa0Nr.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.ProtectedListPage}))),i=o.lazy(()=>a(()=>import("./_id-6LK95-rZ-BZgkqcFp.js"),__vite__mapDeps([5,1,2,3,4,6])).then(t=>({default:t.ProtectedEditPage}))),n=[{path:"/",Component:d},{path:":id",Component:i}],_=()=>e.jsx(r,{children:n.map(t=>e.jsx(s,{...t},t.path))});export{_ as Router};
