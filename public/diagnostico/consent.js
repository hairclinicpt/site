(function(){
var K='hc-cookies',d=document;
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}window.hcConsent=v;d.dispatchEvent(new CustomEvent('hc-consent',{detail:v}))}
window.hcConsent=get();
var css=d.createElement('style');css.textContent='#hc-ck{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:640px;margin:0 auto;background:#FDFAF5;color:#2F2925;border:1px solid rgba(74,90,64,.45);border-radius:8px;box-shadow:0 14px 40px -16px rgba(42,37,32,.45);padding:16px 16px 14px;font:400 16px/1.5 Jost,sans-serif}#hc-ck p{margin:0 0 14px}#hc-ck a{color:#3F4D36;text-underline-offset:3px}#hc-ck .b{display:flex;flex-direction:row;gap:10px}#hc-ck button{flex:1 1 0;width:auto;margin:0;padding:0 8px;min-height:48px;border:1px solid #4A5A40;border-radius:6px;background:#4A5A40;color:#fff;font:500 17px Jost,sans-serif;cursor:pointer}#hc-ck button.r{background:#4A5A40}';
d.head.appendChild(css);
function fechar(){var e=d.getElementById('hc-ck');if(e)e.remove()}
function mostrar(){fechar();var e=d.createElement('div');e.id='hc-ck';e.setAttribute('role','dialog');e.setAttribute('aria-label','Cookies');
e.innerHTML='<p>Usamos cookies para medir os anúncios e melhorar o site. Pode aceitar ou recusar, e a recusa não afeta o pedido de diagnóstico. <a href="/diagnostico/cookies">Política de Cookies</a></p><div class="b"><button type="button" data-v="recusar">Recusar</button><button type="button" data-v="aceitar" class="r">Aceitar</button></div>';
e.addEventListener('click',function(ev){var v=ev.target.getAttribute&&ev.target.getAttribute('data-v');if(v){set(v);fechar()}});d.body.appendChild(e)}
d.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('#hc-cookies-abrir,[data-cookies]');if(t){ev.preventDefault();mostrar()}});
if(!window.hcConsent){if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',mostrar);else mostrar()}
})();