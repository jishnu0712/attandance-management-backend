import{go as xe,d as F,gp as K,eS as X,h as ee,aZ as se,l as Y,c1 as ke,gh as de,j as e,P as re,B as U,gq as ce,b1 as ge,F as O,T as q,bo as je,u as G,s as Re,ar as Se,o as ue,v as Ce,r as A,g9 as Me,gi as Te,gr as Ae,_ as De,bu as Ee,U as Ie,a1 as Oe,bk as oe,bl as fe,gj as H,cL as Fe,bp as pe,bT as $,aW as Z,a9 as Le,V as ae,gs as Ne,I as we,eX as Pe,S as Q,$ as he,gt as We,gu as ne,W as E,ae as $e,af as _e,Y as Be,aj as qe,b0 as me,gv as ve,bi as Ge,gg as Ve,t as He,ew as Ke,ex as Ue,gw as ze,gx as ie}from"./strapi-2EhdZULj.js";import{u as ye,D as Ye,H as Qe,R as Xe,a as Ze}from"./Layout-BJOxxAeM-D6E8lEA7.js";import{g as Je}from"./getEmptyImage-CjqolaH3.js";import"./useDragLayer-Ds5UJ6xK.js";const es=xe.injectEndpoints({endpoints(s){return{getAdminRoles:s.query({query:()=>({url:"/admin/roles",method:"GET"}),transformResponse:t=>t.data})}}}),{useGetAdminRolesQuery:ss}=es,ts=(s,t,{onCancel:o,onDropItem:a,onGrabItem:l,onMoveItem:d})=>{const[f,u]=A.useState(!1),k=v=>{f&&typeof t=="number"&&d&&(v==="UP"?d(t-1,t):v==="DOWN"&&d(t+1,t))},j=()=>{f?(a&&a(t),u(!1)):(l&&l(t),u(!0))},h=()=>{f&&(u(!1),o&&o(t))};return v=>{if(s&&!(v.key==="Tab"&&!f))switch(v.preventDefault(),v.key){case" ":case"Enter":j();break;case"Escape":h();break;case"ArrowDown":case"ArrowRight":k("DOWN");break;case"ArrowUp":case"ArrowLeft":k("UP");break}}},le={UPWARD:"upward",DOWNWARD:"downward"},te={REGULAR:"regular",IMMEDIATE:"immediate"},rs=(s,{type:t="STRAPI_DND",index:o,item:a,onStart:l,onEnd:d,onGrabItem:f,onDropItem:u,onCancel:k,onMoveItem:j,dropSensitivity:h=te.REGULAR})=>{const c=A.useRef(null),[{handlerId:v,isOver:C},i]=Ke({accept:t,collect(n){return{handlerId:n.getHandlerId(),isOver:n.isOver({shallow:!0})}},drop(n){const m=n.index;C&&u&&u(m,o)},hover(n,m){if(!c.current||!j)return;const R=n.index,x=o,D=c.current?.getBoundingClientRect(),M=(D.bottom-D.top)/2,P=m.getClientOffset();if(!P)return;const W=P&&P.y-D.top;if(typeof R=="number"&&typeof x=="number"){if(R===x||h===te.REGULAR&&(R<x&&W<M||R>x&&W>M))return;j(x,R),n.index=x}else{if(Array.isArray(R)&&Array.isArray(x)){const V=Math.min(R.length,x.length);let _=!0,B=!1,g=!1;for(let r=0;r<V;r++)if(R[r]<x[r]){B=!0,_=!1;break}else if(R[r]>x[r]){g=!0,_=!1;break}if(_&&R.length===x.length||h===te.REGULAR&&(B&&!g&&W<M||g&&!B&&W>M))return}j(x,R),n.index=x}}}),y=n=>{if(n&&n.isDragging()&&!n.didDrop()&&n.getInitialClientOffset()&&n.getClientOffset()){const m=n.getInitialClientOffset().y-n.getClientOffset().y;return m>0?le.UPWARD:m<0?le.DOWNWARD:null}return null},[{isDragging:S,direction:b},p,L]=Ue({type:t,item(){l&&l();const{width:n}=c.current?.getBoundingClientRect()??{};return{index:o,width:n,...a}},end(){d&&d()},canDrag:s,isDragging:a?.id?n=>a.id===n.getItem().id:void 0,collect:n=>({isDragging:n.isDragging(),initialOffset:n.getInitialClientOffset(),currentOffset:n.getClientOffset(),direction:y(n)})}),N=ts(s,o,{onGrabItem:f,onDropItem:u,onCancel:k,onMoveItem:j});return[{handlerId:v,isDragging:S,handleKeyDown:N,isOverDropTarget:C,direction:b},c,i,p,L]},os=({children:s,...t})=>e.jsx(as,{tag:"button",background:"neutral0",borderColor:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...t,children:e.jsx(q,{variant:"pi",fontWeight:"bold",children:e.jsxs(O,{tag:"span",gap:2,children:[e.jsx(ze,{width:"2.4rem",height:"2.4rem","aria-hidden":!0}),s]})})}),as=F(U)`
  border-radius: 26px;
  color: ${({theme:s})=>s.colors.neutral500};

  &:hover {
    color: ${({theme:s})=>s.colors.primary600};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary600};
  }
`,ns=({canDelete:s=!0,canUpdate:t=!0,isCreating:o})=>{const{formatMessage:a}=G(),{trackUsage:l}=pe(),d=$("Stages",u=>u.addFieldRow),{value:f=[]}=Z("stages");return e.jsxs(O,{direction:"column",gap:6,width:"100%",children:[e.jsxs(U,{position:"relative",width:"100%",children:[e.jsx(is,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2}),e.jsx(O,{direction:"column",alignItems:"stretch",gap:6,position:"relative",tag:"ol",children:f.map((u,k)=>e.jsx(U,{tag:"li",children:e.jsx(ls,{index:k,canDelete:f.length>1&&s,canReorder:f.length>1,canUpdate:t,stagesCount:f.length,defaultOpen:o,...u})},u.__temp_key__))})]}),t&&e.jsx(os,{type:"button",onClick:()=>{d("stages",{name:""}),l("willCreateStage")},children:a({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},is=F(U)`
  transform: translateX(-50%);
`,ls=({index:s,canDelete:t=!1,canReorder:o=!1,canUpdate:a=!1,stagesCount:l,name:d,permissions:f,color:u,defaultOpen:k})=>{const[j,h]=A.useState(),{formatMessage:c}=G(),{trackUsage:v}=pe(),i=$("Stages",r=>r.errors.stages)?.[s],y=$("Stage",r=>r.addFieldRow),S=$("Stage",r=>r.moveFieldRow),b=$("Stage",r=>r.removeFieldRow),p=r=>`${r+1} of ${l}`,L=r=>{h(c({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:d,position:p(r)}))},N=r=>{h(c({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:d,position:p(r)}))},n=()=>{h(c({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:d}))},m=(r,w)=>{h(c({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:d,position:p(r)})),S("stages",w,r)},[{handlerId:R,isDragging:x,handleKeyDown:D},M,P,W,V]=rs(o,{index:s,item:{index:s,name:d},onGrabItem:L,onDropItem:N,onMoveItem:m,onCancel:n,type:Ze.STAGE}),_=Le(M,P);A.useEffect(()=>{V(Je(),{captureDraggingState:!1})},[V,s]);const B=()=>{y("stages",{name:d,color:u,permissions:f})},g=A.useId();return e.jsxs(U,{ref:_,shadow:"tableShadow",children:[j&&e.jsx(ae,{"aria-live":"assertive",children:j}),x?e.jsx(U,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6}):e.jsx(ds,{onValueChange:r=>{r&&v("willEditStage")},defaultValue:k?g:void 0,$error:Object.values(i??{}).length>0,children:e.jsxs(K.Item,{value:g,children:[e.jsxs(K.Header,{children:[e.jsx(K.Trigger,{children:d}),e.jsx(K.Actions,{children:t||a?e.jsxs(e.Fragment,{children:[e.jsxs(X.Root,{children:[e.jsxs(gs,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[e.jsx(Ne,{"aria-hidden":!0,focusable:!1}),e.jsx(ae,{tag:"span",children:c({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),e.jsx(X.Content,{popoverPlacement:"bottom-end",zIndex:2,children:e.jsxs(X.SubRoot,{children:[a&&e.jsx(ce,{onClick:B,children:c({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),t&&e.jsx(cs,{onClick:()=>b("stages",s),children:c({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),a&&e.jsx(we,{background:"transparent",hasRadius:!0,variant:"ghost","data-handler-id":R,ref:W,label:c({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:r=>r.stopPropagation(),onKeyDown:D,children:e.jsx(Pe,{})})]}):null})]}),e.jsx(K.Content,{children:e.jsx(Q.Root,{gap:4,padding:6,children:[{disabled:!a,label:c({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),name:`stages.${s}.name`,required:!0,size:6,type:"string"},{disabled:!a,label:c({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),name:`stages.${s}.color`,required:!0,size:6,type:"color"},{disabled:!a,label:c({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),name:`stages.${s}.permissions`,placeholder:c({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,size:6,type:"permissions"}].map(({size:r,...w})=>e.jsx(Q.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(us,{...w})},w.name))})})]})})]})},ds=F(K.Root)`
  border: 1px solid
    ${({theme:s,$error:t})=>t?s.colors.danger600:s.colors.neutral200};
`,cs=F(ce)`
  color: ${({theme:s})=>s.colors.danger600};
`,gs=F(X.Trigger)`
  :hover,
  :focus {
    background-color: ${({theme:s})=>s.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,us=s=>{switch(s.type){case"color":return e.jsx(fs,{...s});case"permissions":return e.jsx(ps,{...s});default:return e.jsx(he,{...s})}},fs=({disabled:s,label:t,name:o,required:a})=>{const{formatMessage:l}=G(),{value:d,error:f,onChange:u}=Z(o),k=We.map(({hex:h,name:c})=>({value:h,label:l({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:c}),color:h})),{themeColorName:j}=ne(d)??{};return e.jsxs(E.Root,{error:f,name:o,required:a,children:[e.jsx(E.Label,{children:t}),e.jsx($e,{disabled:s,onChange:h=>{u(o,h.toString())},value:d?.toUpperCase(),startIcon:e.jsx(O,{tag:"span",height:2,background:d,borderColor:j==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:k.map(({value:h,label:c,color:v})=>{const{themeColorName:C}=ne(v)||{};return e.jsx(_e,{value:h,startIcon:e.jsx(O,{tag:"span",height:2,background:v,borderColor:C==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:c},h)})}),e.jsx(E.Error,{})]})},ps=({disabled:s,name:t,placeholder:o,required:a})=>{const{formatMessage:l}=G(),{toggleNotification:d}=ue(),[f,u]=A.useState(!1),{value:k=[],error:j,onChange:h}=Z(t),c=$("PermissionsField",p=>p.values.stages),v=$("PermissionsField",p=>p.onChange),C=A.useRef(0),{data:i=[],isLoading:y,error:S}=ss(),b=i?.filter(p=>p.code!=="strapi-super-admin")??[];return A.useEffect(()=>{!y&&S&&"status"in S&&S.status==403&&C.current===0&&(C.current=1,d({blockTransition:!0,type:"danger",message:l({id:"review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don’t have the permission to see roles. Contact your administrator."})}))},[l,y,i,d,S]),!y&&b.length===0?e.jsxs(E.Root,{name:t,hint:l({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don’t have the permission to see roles"}),required:a,children:[e.jsx(E.Label,{children:l({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"})}),e.jsx(Be,{disabled:!0,placeholder:l({id:"components.NotAllowedInput.text",defaultMessage:"No permissions to see this field"}),startAction:e.jsx(qe,{fill:"neutral600"}),type:"text",value:""}),e.jsx(E.Hint,{})]}):e.jsx(e.Fragment,{children:e.jsxs(O,{alignItems:"flex-end",gap:3,children:[e.jsx(hs,{grow:1,children:e.jsxs(E.Root,{error:j,name:t,required:!0,children:[e.jsx(E.Label,{children:l({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"})}),e.jsx(me,{disabled:s,onChange:p=>{const L=p.map(N=>({role:parseInt(N,10),action:"admin::review-workflows.stage.transition"}));h(t,L)},placeholder:o,value:k.map(p=>`${p.role}`),withTags:!0,children:e.jsx(ve,{label:l({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:b.map(p=>`${p.id}`),children:b.map(p=>e.jsx(ws,{value:`${p.id}`,children:p.name},p.id))})}),e.jsx(E.Error,{})]})}),e.jsxs(oe.Root,{open:f,onOpenChange:u,children:[e.jsx(oe.Trigger,{children:e.jsx(we,{disabled:s,label:l({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",children:e.jsx(Ge,{})})}),e.jsx(fe,{onConfirm:()=>{v("stages",c.map(p=>({...p,permissions:k}))),u(!1),d({type:"success",message:l({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variant:"default",children:l({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})]})]})})},ws=F(ge)`
  padding-left: ${({theme:s})=>s.spaces[7]};
`,hs=F(O)`
  > * {
    flex-grow: 1;
  }
`,ms=({canUpdate:s=!0})=>{const{formatMessage:t}=G();return e.jsxs(Q.Root,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[e.jsx(Q.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(he,{disabled:!s,label:t({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),name:"name",required:!0,type:"string"})}),e.jsx(Q.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(vs,{disabled:!s})})]})},vs=({disabled:s})=>{const{formatMessage:t,locale:o}=G(),{data:a,isLoading:l}=Ve(),{workflows:d}=ye(),f=$("ContentTypesSelector",i=>i.values),{error:u,value:k,onChange:j}=Z("contentTypes"),h=He(o,{sensitivity:"base"}),c=s||l||!a||a.collectionType.length===0&&a.singleType.length===0,v=(a?.collectionType??[]).toSorted((i,y)=>h.compare(i.info.displayName,y.info.displayName)).map(i=>({label:i.info.displayName,value:i.uid})),C=(a?.singleType??[]).map(i=>({label:i.info.displayName,value:i.uid}));return e.jsxs(E.Root,{error:u,name:"contentTypes",children:[e.jsx(E.Label,{children:t({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"})}),e.jsx(me,{customizeContent:i=>t({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:i?.length}),disabled:c,onChange:i=>{j("contentTypes",i)},value:k,placeholder:t({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...v.length>0?[{label:t({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:v}]:[],...C.length>0?[{label:t({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:C}]:[]].map(i=>e.jsx(ve,{label:i.label,values:i.children.map(y=>y.value.toString()),children:i.children.map(y=>{const{name:S}=d?.find(b=>(f&&b.id!==f.id||!f)&&b.contentTypes.includes(y.value))??{};return e.jsx(ys,{value:y.value,children:e.jsx(q,{children:t({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:y.label,name:S,em:(...b)=>e.jsx(q,{tag:"em",fontWeight:"bold",children:b}),i:(...b)=>e.jsx(bs,{children:b})})})},y.value)})},i.label))})]})},ys=F(ge)`
  padding-left: ${({theme:s})=>s.spaces[7]};
`,bs=F(q)`
  font-style: italic;
`,xs=ee({contentTypes:se().of(Y()),name:Y().max(255,{id:"review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"}).required().nullable(),stages:se().of(ee().shape({name:Y().nullable().required({id:"review-workflows.validation.stage.name",defaultMessage:"Name is required"}).max(255,{id:"review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"}).test("unique-name",{id:"review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"},(s,t)=>{const{stages:o}=t.from[1].value;return o.filter(a=>a.name===s).length===1}),color:Y().nullable().required({id:"review-workflows.validation.stage.color",defaultMessage:"Color is required"}).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:se(ee({role:ke().strict().typeError({id:"review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"}).required(),action:Y().required({id:"review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)}),ks=()=>{const{id:s=""}=je(),t=s==="create",{formatMessage:o}=G(),{_unstableFormatValidationErrors:a}=Re(),l=Se(),{toggleNotification:d}=ue(),{isLoading:f,meta:u,workflows:k,error:j,update:h,create:c}=ye(),v=de(g=>g.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canDelete:C,canUpdate:i,canCreate:y}}=Ce(v),[S,b]=A.useState({}),{getFeature:p,isLoading:L}=Me(),[N,n]=A.useState(null),m=k?.find(g=>g.id===parseInt(s,10)),R=k?.filter(g=>g.id!==parseInt(s,10)).flatMap(g=>g.contentTypes),x=p("review-workflows"),D=x?.[Te],M=x?.[Ae],P=async(g,r)=>{try{if(t){const w=await c(g);"error"in w&&ie(w.error)&&w.error.name==="ValidationError"?r.setErrors(a(w.error)):"data"in w&&l(`../${w.data.id}`,{replace:!0})}else{const w=await h(s,{...g,stages:g.stages.map(I=>{let T=!0;const z=m?.stages?.find(J=>J.id===I?.id);return z&&(T=z.permissions?.length!==I.permissions?.length||!z.permissions?.every(J=>!!I.permissions?.find(be=>be.role===J.role))),{...I,permissions:T?I.permissions:void 0}})});"error"in w&&ie(w.error)&&w.error.name==="ValidationError"&&r.setErrors(a(w.error))}}catch{d({type:"danger",message:o({id:"notification.error",defaultMessage:"An error occurred"})})}b({})},W=(g,r)=>async()=>{await P(g,r)},V=()=>{b({})},_=async(g,r)=>{const w=g.contentTypes.some(T=>R?.includes(T)),I=!t&&!m?.stages.every(T=>g.stages.some(z=>z.id===T.id));u&&D&&u?.workflowCount>parseInt(D,10)?n("workflow"):g.stages&&M&&g.stages.length>parseInt(M,10)?n("stage"):I||w?(I&&b(T=>({...T,hasDeletedServerStages:!0})),w&&b(T=>({...T,hasReassignedContentTypes:!0}))):await P(g,r)};A.useEffect(()=>{!f&&!L&&(u&&D&&u?.workflowCount>parseInt(D,10)?n("workflow"):m&&m.stages&&M&&m.stages.length>parseInt(M,10)&&n("stage"))},[m,L,f,x,u,D,M]);const B=A.useMemo(()=>t||!m?{name:"",stages:[],contentTypes:[]}:{name:m.name,stages:js(m.stages),contentTypes:m.contentTypes},[m,t]);return f?e.jsx(re.Loading,{}):j?e.jsx(re.Error,{}):e.jsxs(e.Fragment,{children:[e.jsx(Ye,{}),e.jsx(De,{method:t?"POST":"PUT",initialValues:B,validationSchema:xs,onSubmit:_,children:({modified:g,isSubmitting:r,values:w,setErrors:I})=>e.jsxs(e.Fragment,{children:[e.jsx(Qe,{navigationAction:e.jsx(Ee,{}),primaryAction:i||y?e.jsx(Ie,{startIcon:e.jsx(Oe,{}),type:"submit",size:"M",disabled:!g||r||w.stages.length===0,loading:!(Object.keys(S).length>0)&&r,children:o({id:"global.save",defaultMessage:"Save"})}):null,subtitle:o({id:"review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:m?.stages?.length??0}),title:m?.name||o({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"})}),e.jsx(Xe,{children:e.jsxs(O,{alignItems:"stretch",direction:"column",gap:7,children:[e.jsx(ms,{canUpdate:i||y}),e.jsx(ns,{canDelete:C,canUpdate:i||y,isCreating:t})]})}),e.jsx(oe.Root,{open:Object.keys(S).length>0,onOpenChange:V,children:e.jsx(fe,{onConfirm:W(w,{setErrors:I}),children:e.jsxs(O,{direction:"column",gap:5,children:[S.hasDeletedServerStages&&e.jsx(q,{textAlign:"center",variant:"omega",children:o({id:"review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),S.hasReassignedContentTypes&&e.jsx(q,{textAlign:"center",variant:"omega",children:o({id:"review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:R?.filter(T=>w.contentTypes.includes(T)).length??0})}),e.jsx(q,{textAlign:"center",variant:"omega",children:o({id:"review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})})]})}),e.jsxs(H.Root,{open:N==="workflow",onOpenChange:()=>n(null),children:[e.jsx(H.Title,{children:o({id:"review-workflows.edit.page.workflows.limit.title",defaultMessage:"You’ve reached the limit of workflows in your plan"})}),e.jsx(H.Body,{children:o({id:"review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),e.jsxs(H.Root,{open:N==="stage",onOpenChange:()=>n(null),children:[e.jsx(H.Title,{children:o({id:"review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),e.jsx(H.Body,{children:o({id:"review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},js=s=>{const t=Fe(void 0,void 0,s.length);return s.map((o,a)=>({...o,__temp_key__:t[a]}))},Ts=()=>{const s=de(t=>{const{create:o=[],update:a=[],read:l=[]}=t.admin_app.permissions.settings?.["review-workflows"]??{};return[...o,...a,...l]});return e.jsx(re.Protect,{permissions:s,children:e.jsx(ks,{})})};export{Ts as ProtectedEditPage};
