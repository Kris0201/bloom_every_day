function t(o,n){if(!o)return;const e=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");if(!e){console.warn("沒有 token"),n.push({name:"toLogin"});return}o.defaults.headers.common.Authorization=e}export{t as s};