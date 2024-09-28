import{u as E,o as C,q as k,r as z,x as S,fX as L,a7 as T,y as I,j as e,P as d,fq as a,b as u,U as R,a1 as w,F as f,B as A,T as P,S as r,W as i,X as m,fY as F,aa as _,fZ as N}from"./strapi-2EhdZULj.js";const q=t=>t,H={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},G=(t,n)=>_(t,o=>{switch(n.type){case"GET_DATA_SUCCEEDED":{o.initialData=n.data,o.modifiedData=n.data;break}case"ON_CHANGE":{N(o,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),B=()=>{const{formatMessage:t}=E(),{toggleNotification:n}=C(),{get:o,put:b}=k(),[{initialData:x,modifiedData:l},p]=z.useReducer(G,H,q),{data:c,isLoading:j,refetch:y}=S({queryKey:["upload","settings"],async queryFn(){const{data:{data:s}}=await o("/upload/settings");return s}});L.useEffect(()=>{c&&p({type:"GET_DATA_SUCCEEDED",data:c})},[c]);const h=T(x,l),{mutateAsync:M,isLoading:O}=I({async mutationFn(s){return b("/upload/settings",s)},onSuccess(){y(),n({type:"success",message:t({id:"notification.form.success.fields"})})},onError(s){console.error(s)}}),D=async s=>{s.preventDefault(),!h&&await M(l)},g=({target:{name:s,value:v}})=>{p({type:"ON_CHANGE",keys:s,value:v})};return j?e.jsx(d.Loading,{}):e.jsxs(d.Main,{tabIndex:-1,children:[e.jsx(d.Title,{children:t({id:a("page.title"),defaultMessage:"Settings - Media Libray"})}),e.jsxs("form",{onSubmit:D,children:[e.jsx(u.Header,{title:t({id:a("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.jsx(R,{disabled:h,loading:O,type:"submit",startIcon:e.jsx(w,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:a("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.jsx(u.Content,{children:e.jsx(u.Root,{children:e.jsx(f,{direction:"column",alignItems:"stretch",gap:12,children:e.jsx(A,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(f,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(f,{children:e.jsx(P,{variant:"delta",tag:"h2",children:t({id:a("settings.blockTitle"),defaultMessage:"Asset management"})})}),e.jsxs(r.Root,{gap:6,children:[e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(i.Root,{hint:t({id:a("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),name:"responsiveDimensions",children:[e.jsx(i.Label,{children:t({id:a("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"})}),e.jsx(m,{checked:l.responsiveDimensions,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"responsiveDimensions",value:s.target.checked}})}}),e.jsx(i.Hint,{})]})}),e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(i.Root,{hint:t({id:a("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),name:"sizeOptimization",children:[e.jsx(i.Label,{children:t({id:a("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"})}),e.jsx(m,{checked:l.sizeOptimization,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"sizeOptimization",value:s.target.checked}})}}),e.jsx(i.Hint,{})]})}),e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(i.Root,{hint:t({id:a("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),name:"autoOrientation",children:[e.jsx(i.Label,{children:t({id:a("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"})}),e.jsx(m,{checked:l.autoOrientation,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"autoOrientation",value:s.target.checked}})}}),e.jsx(i.Hint,{})]})})]})]})})})})})]})]})},X=()=>e.jsx(d.Protect,{permissions:F.settings,children:e.jsx(B,{})});export{B as SettingsPage,X as default};
