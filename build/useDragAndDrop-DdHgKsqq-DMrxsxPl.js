import{r as L,ew as B,ex as G}from"./strapi-2EhdZULj.js";const x={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation",BLOCKS:"blocks"},_=(O,n,{onCancel:a,onDropItem:f,onGrabItem:D,onMoveItem:l})=>{const[c,i]=L.useState(!1),R=s=>{c&&typeof n=="number"&&l&&(s==="UP"?l(n-1,n):s==="DOWN"&&l(n+1,n))},g=()=>{c?(f&&f(n),i(!1)):(D&&D(n),i(!0))},h=()=>{c&&(i(!1),a&&a(n))};return s=>{if(O&&!(s.key==="Tab"&&!c))switch(s.preventDefault(),s.key){case" ":case"Enter":g();break;case"Escape":h();break;case"ArrowDown":case"ArrowRight":R("DOWN");break;case"ArrowUp":case"ArrowLeft":R("UP");break}}},N={UPWARD:"upward",DOWNWARD:"downward"},b={REGULAR:"regular",IMMEDIATE:"immediate"},M=(O,{type:n="STRAPI_DND",index:a,item:f,onStart:D,onEnd:l,onGrabItem:c,onDropItem:i,onCancel:R,onMoveItem:g,dropSensitivity:h=b.REGULAR})=>{const o=L.useRef(null),[{handlerId:s,isOver:T},k]=B({accept:n,collect(e){return{handlerId:e.getHandlerId(),isOver:e.isOver({shallow:!0})}},drop(e){const u=e.index;T&&i&&i(u,a)},hover(e,u){if(!o.current||!g)return;const t=e.index,r=a,I=o.current?.getBoundingClientRect(),A=(I.bottom-I.top)/2,p=u.getClientOffset();if(!p)return;const w=p&&p.y-I.top;if(typeof t=="number"&&typeof r=="number"){if(t===r||h===b.REGULAR&&(t<r&&w<A||t>r&&w>A))return;g(r,t),e.index=r}else{if(Array.isArray(t)&&Array.isArray(r)){const v=Math.min(t.length,r.length);let E=!0,y=!1,C=!1;for(let d=0;d<v;d++)if(t[d]<r[d]){y=!0,E=!1;break}else if(t[d]>r[d]){C=!0,E=!1;break}if(E&&t.length===r.length||h===b.REGULAR&&(y&&!C&&w<A||C&&!y&&w>A))return}g(r,t),e.index=r}}}),U=e=>{if(e&&e.isDragging()&&!e.didDrop()&&e.getInitialClientOffset()&&e.getClientOffset()){const u=e.getInitialClientOffset().y-e.getClientOffset().y;return u>0?N.UPWARD:u<0?N.DOWNWARD:null}return null},[{isDragging:P,direction:W},S,K]=G({type:n,item(){D&&D();const{width:e}=o.current?.getBoundingClientRect()??{};return{index:a,width:e,...f}},end(){l&&l()},canDrag:O,isDragging:f?.id?e=>f.id===e.getItem().id:void 0,collect:e=>({isDragging:e.isDragging(),initialOffset:e.getInitialClientOffset(),currentOffset:e.getClientOffset(),direction:U(e)})}),Y=_(O,a,{onGrabItem:c,onDropItem:i,onCancel:R,onMoveItem:g});return[{handlerId:s,isDragging:P,handleKeyDown:Y,isOverDropTarget:T,direction:W},o,k,S,K]};export{b as D,x as I,N as a,M as u};
