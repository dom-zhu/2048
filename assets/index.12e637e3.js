import{j as r,B as a,r as d,a as n,R as p,b as u}from"./vendor.1409b7ee.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};f();const h=()=>r(a,{children:"Test hi"});var m="/2048/assets/logo.70aa190a.svg";const g=()=>{const[l,o]=d.exports.useState(0);return r("div",{className:"App",children:n("header",{className:"App-header",children:[r("img",{src:m,className:"App-logo",alt:"logo"}),r("p",{children:"Hello Vite + React!"}),r(h,{}),r("p",{children:n("button",{type:"button",onClick:()=>o(s=>s+1),children:["count is: ",l]})}),n("p",{children:["Edit ",r("code",{children:"App.tsx"})," and save to test HMR updates."]}),n("p",{children:[r("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})," | ",r("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer",children:"Vite Docs"})]})]})})};p.render(r(u.StrictMode,{children:r(g,{})}),document.getElementById("root"));
