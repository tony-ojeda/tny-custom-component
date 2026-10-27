import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-DNvWX5XB.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./compiler-runtime-qC7kDvPd.js";var i,a,o;function s(){return(s=e((()=>{i=r(),t(),a=n(),o=e=>{let t=(0,i.c)(9),{label:n,size:r,allCaps:o,color:s,fontColor:c}=e,l=r===void 0?`normal`:r,u=o!==void 0&&o,d=`${l} ${s} label`,f;t[0]===c?f=t[1]:(f={color:c},t[0]=c,t[1]=f);let p;t[2]!==u||t[3]!==n?(p=u?n.toUpperCase():n,t[2]=u,t[3]=n,t[4]=p):p=t[4];let m;return t[5]!==d||t[6]!==f||t[7]!==p?(m=(0,a.jsx)(`span`,{className:d,style:f,children:p}),t[5]=d,t[6]=f,t[7]=p,t[8]=m):m=t[8],m},o.__docgenInfo={description:``,methods:[],displayName:`MyLabel`,props:{label:{required:!0,tsType:{name:`string`},description:`Text to display`},size:{required:!1,tsType:{name:`union`,raw:`'normal' | 'h1' | 'h2' | 'h3'`,elements:[{name:`literal`,value:`'normal'`},{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`}]},description:`Label size`,defaultValue:{value:`'normal'`,computed:!1}},allCaps:{required:!1,tsType:{name:`boolean`},description:`Text to uppercase`,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'text-primary' | 'text-secondary' | 'text-tertiary'`,elements:[{name:`literal`,value:`'text-primary'`},{name:`literal`,value:`'text-secondary'`},{name:`literal`,value:`'text-tertiary'`}]},description:`Text color`},fontColor:{required:!1,tsType:{name:`string`},description:`Font color in hex format`}}}})))()}var c,l,u,d,f,p;function m(){return(m=e((()=>{s(),c={title:`UI/labels/MyLabel`,component:o,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{size:{control:`inline-radio`},color:{control:`select`},fontColor:{control:`color`}}},l={args:{label:`Basic label`}},u={args:{label:`All Caps label`,allCaps:!0}},d={args:{label:`Secondary`,color:`text-secondary`}},f={args:{label:`Custom Color`,fontColor:`#5517ac`}},p=[`Basic`,`AllCaps`,`Secondary`,`CustomColor`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    allCaps: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    color: 'text-secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color',
    fontColor: '#5517ac'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{u as AllCaps,l as Basic,f as CustomColor,d as Secondary,p as __namedExportsOrder,c as default};