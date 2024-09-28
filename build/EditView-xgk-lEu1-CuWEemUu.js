import{h as _,l as S,k as M,c1 as q,u as w,o as N,ar as K,aq as O,r as k,bp as U,b_ as G,aO as v,v as Q,aK as $,s as D,j as e,P as h,O as H,Q as z,b as Y,F as C,B as J,T as W,S as m,b2 as F}from"./strapi-2EhdZULj.js";import{u as X,a as Z,b as ee}from"./transferTokens-v8tNpI_l-CAQ4vBb9.js";import{T as f}from"./constants-EoEtSd4i-Q2dfXdfa.js";import{F as se,T as te,a as re,b as ne,L as ae,c as ie}from"./TokenTypeSelect-GplqVrbt-CQW_pCYF.js";import"./index-D5sSM2_z.js";import"./index-BRVyLNfZ.js";const oe=_().shape({name:S().max(100).required(M.required.id),description:S().nullable(),lifespan:q().integer().min(0).nullable().defined(M.required.id),permissions:S().required(M.required.id)}),le=()=>{const{formatMessage:a}=w(),{toggleNotification:n}=N(),d=K(),{state:p}=O(),[t,l]=k.useState(p&&"accessKey"in p.transferToken?{...p.transferToken}:null),{trackUsage:o}=U();G("EditView",r=>r.setCurrentStep);const x=v(r=>r.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:j,canUpdate:L,canRegenerate:R}}=Q(x),g=$("/settings/transfer-tokens/:id")?.params?.id,i=g==="create",{_unstableFormatAPIError:T,_unstableFormatValidationErrors:P}=D();k.useEffect(()=>{o(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:f})},[i,o]);const{data:y,error:E}=X(g,{skip:i||t!==null||!g});k.useEffect(()=>{E&&n({type:"danger",message:T(E)})},[E,T,n]),k.useEffect(()=>{y&&l(y)},[y]);const[A]=Z(),[V]=ee(),B=async(r,c)=>{o(i?"willCreateToken":"willEditToken",{tokenType:f});const u=r.permissions.split("-");if((s=>s.length===1?s[0]==="push"||s[0]==="pull":s[0]==="push"&&s[1]==="pull")(u))try{if(i){const s=await A({...r,lifespan:r?.lifespan&&r.lifespan!=="0"?parseInt(r.lifespan.toString(),10):null,permissions:u});if("error"in s){F(s.error)&&s.error.name==="ValidationError"?c.setErrors(P(s.error)):n({type:"danger",message:T(s.error)});return}l(s.data),n({type:"success",message:a({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),o("didCreateToken",{type:t?.permissions,tokenType:f}),d(`../transfer-tokens/${s.data.id.toString()}`,{replace:!0,state:{transferToken:s.data}})}else{const s=await V({id:g,name:r.name,description:r.description,permissions:u});if("error"in s){F(s.error)&&s.error.name==="ValidationError"?c.setErrors(P(s.error)):n({type:"danger",message:T(s.error)});return}l(s.data),n({type:"success",message:a({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),o("didEditToken",{type:t?.permissions,tokenType:f})}}catch{n({type:"danger",message:a({id:"notification.error",defaultMessage:"Something went wrong"})})}},I=L&&!i||j&&i;return!i&&!t?e.jsx(h.Loading,{}):e.jsxs(h.Main,{children:[e.jsx(h.Title,{children:a({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Transfer Tokens"})}),e.jsx(H,{validationSchema:oe,validateOnChange:!1,initialValues:{name:t?.name||"",description:t?.description||"",lifespan:t?.lifespan||null,permissions:t?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(r,c)=>B(r,c),children:({errors:r,handleChange:c,isSubmitting:u,values:b})=>e.jsxs(z,{children:[e.jsx(se,{title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:t,setToken:l,canEditInputs:I,canRegenerate:R,isSubmitting:u,regenerateUrl:"/admin/transfer/tokens/"}),e.jsx(Y.Content,{children:e.jsxs(C,{direction:"column",alignItems:"stretch",gap:6,children:[t&&!!t?.name&&"accessKey"in t&&e.jsx(te,{token:t.accessKey,tokenType:f}),e.jsx(ce,{errors:r,onChange:c,canEditInputs:I,isCreating:i,values:b,transferToken:t})]})})]})})]})},he=()=>{const a=v(n=>n.admin_app.permissions.settings?.["transfer-tokens"].read);return e.jsx(h.Protect,{permissions:a,children:e.jsx(le,{})})},ce=({errors:a={},onChange:n,canEditInputs:d,isCreating:p,values:t,transferToken:l={}})=>{const{formatMessage:o}=w(),x=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return e.jsx(J,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(C,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(W,{variant:"delta",tag:"h2",children:o({id:"global.details",defaultMessage:"Details"})}),e.jsxs(m.Root,{gap:5,children:[e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(re,{error:a.name,value:t.name,canEditInputs:d,onChange:n})},"name"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ne,{error:a.description,value:t.description,canEditInputs:d,onChange:n})},"description"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ae,{isCreating:p,error:a.lifespan,value:t.lifespan,onChange:n,token:l})},"lifespan"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ie,{name:"permissions",value:t.permissions,error:a.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:j=>{n({target:{name:"permissions",value:j}})},options:x,canEditInputs:d})},"permissions")]})]})})};export{le as EditView,he as ProtectedEditView};
