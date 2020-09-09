import{r as t,h as i,H as o,g as s}from"./p-e5b2bd64.js";import{A as e}from"./p-d5d33c5a.js";import{m as a}from"./p-14054f15.js";import"./p-6bd16f5b.js";import{i as n}from"./p-53bcbd1d.js";const r=class{constructor(i){t(this,i),this.mailPlaceHolder="Email",this.passwordPlaceHolder="Password"}doLogin(t){t.preventDefault(),class{static atteptLogin(t){const{email:i,password:o}=t;console.debug(`User login attempt --\x3e email: ${i} | password: ${o}`)}}.atteptLogin({email:this.email,password:this.password})}render(){return i("section",{class:"app-home"},i("h3",null,"Registered Customer"),i("form",{autocomplete:"on",method:"POST",novalidate:""},i("div",{class:"input-group"},i("ss-form-input",{initialValue:this.email,placeHolder:this.mailPlaceHolder,ssInputChange:t=>this.email=t,inputName:"email"})),i("div",{class:"input-group"},i("ss-form-input",{initialValue:"",type:"password",placeHolder:this.passwordPlaceHolder,ssInputChange:t=>this.password=t,inputName:"password"})),i("div",{class:"forgot-password"},i("stencil-route-link",{url:"/forgotpassword"},"Forgot password")),i("div",{class:"button-container"},i("button",{class:"primary login",onClick:t=>this.doLogin(t)},"login"))))}};r.style='@font-face{font-family:"GT America";font-weight:400;font-style:normal;src:url("https://a.suitsupplycdn.com/fonts/gt-america/gt-america-standard-regular.woff2") format("woff2"),\n    url("https://a.suitsupplycdn.com/fonts/gt-america/gt-america-standard-regular.woff") format("woff");font-display:swap;font-size:14px}:root{--font-family-base:"GT America", -apple-system, BlinkMacSystemFont, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important}.app-home{padding:10px;font-family:var(--font-family-base);font-size:14px}h3{font-family:var(--font-family-base);font-weight:400;font-size:18px;margin-bottom:30px;text-align:center}form{display:flex;flex-direction:column;width:100%;position:relative}button.primary{color:#fff;border-color:#2d2e2c;background-color:#2d2e2c;box-shadow:0 0 0 transparent;width:100%;font-family:var(--font-family-base);line-height:16px;text-transform:none;letter-spacing:0;height:46px;text-align:center;border-radius:4px;font-size:14px;cursor:pointer}button.login{width:140px}button.link{display:inline;color:blue;border:none;font-weight:300;outline:0;cursor:pointer;background:none}.input-group{margin:10px 0}.forgot-password{text-align:right;display:inline;color:#898989;text-decoration:none}.button-container{margin-top:20px;text-align:center}';const l=class{constructor(i){t(this,i),this.type="text",this.ssInputChange=t=>t,this.inputValue="",this.labelClass=""}handleChange(t){this.labelClass=t.target.value.length?"text-entered":""}render(){return i(o,null,i("label",{htmlFor:this.inputName,class:this.labelClass},this.placeHolder),i("input",{type:this.type,name:this.inputName,value:this.inputValue,onFocus:()=>{this.labelClass="input-focused"},onBlur:t=>this.handleChange(t),onChange:t=>this.ssInputChange(t.target.value)}))}};l.style='@font-face{font-family:"GT America";font-weight:400;font-style:normal;font-size:14px;src:url("https://a.suitsupplycdn.com/fonts/gt-america/gt-america-standard-regular.woff2") format("woff2"),\n    url("https://a.suitsupplycdn.com/fonts/gt-america/gt-america-standard-regular.woff") format("woff");font-display:swap}:root{--font-family-base:"GT America", -apple-system, BlinkMacSystemFont, "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important}:host{display:block;position:relative;font-size:14px}input{font-family:var(--font-family-base);width:100%;height:46px;padding-right:20px;padding-left:20px;font-weight:300;color:#333;border:1px solid #e1e1e1;border-radius:4px;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-sizing:border-box}input:focus{border-color:#333}label{font-family:var(--font-family-base);position:absolute;bottom:auto;display:flex;align-items:center;height:46px;width:auto;margin:0;padding-left:20px;font-weight:300;line-height:1.21429;color:#9f9f9f;letter-spacing:0;transition:none;pointer-events:none;transition:transform .1s ease-out}label.input-focused,label.text-entered{left:10px;padding:0 10px;height:unset;font-size:12px;transform:translate3d(0,-8px,0);background-color:white}';const p=class{constructor(i){t(this,i)}render(){return i("div",null,i("main",null,i("app-home",null)))}};p.style="header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}:host{display:block;max-width:295px;background:white}";const h=class{constructor(i){t(this,i),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=a(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var i,o;if(!n(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((o=this.root,"/"==(i=this.url).charAt(0)&&"/"==o.charAt(o.length-1)?o.slice(0,o.length-1)+i:o+i))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),i(this.custom,Object.assign({},t),i("slot",null))}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}};e.injectProps(h,["history","location","root"]);export{r as app_home,l as ss_form_input,p as ss_login,h as stencil_route_link}