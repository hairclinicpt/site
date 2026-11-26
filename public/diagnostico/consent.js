/* Aviso de cookies da Hair Clinic (desde 26/11/2026).
   Padrão negado no layout (Consent Mode v2 avançado). Só o botão Aceitar concede; Recusar mantém tudo negado.
   Aceitar e Recusar com o mesmo destaque (mesmo tamanho, cor e peso). Barra compacta no fundo, que se esconde
   enquanto o pop-up do formulário está aberto, para não tapar o botão de envio.
   Chave nova hc-cookies-v2, para quem carregou em "Entendi" voltar a escolher. */
(function(){
var K='hc-cookies-v2',d=document;
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}window.hcConsent=v;d.dispatchEvent(new CustomEvent('hc-consent',{detail:v}))}
window.hcConsent=get();
var css=d.createElement('style');css.textContent='#hc-ck{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#FDFAF5;color:#2F2925;border-top:1px solid rgba(74,90,64,.45);box-shadow:0 -10px 30px -18px rgba(42,37,32,.45);padding:10px 14px calc(10px + env(safe-area-inset-bottom));font:400 15px/1.45 Jost,sans-serif}#hc-ck .w{max-width:980px;margin:0 auto;display:flex;align-items:center;gap:10px 18px;flex-wrap:wrap}#hc-ck p{margin:0;flex:1 1 320px}#hc-ck a{color:#3F4D36;text-underline-offset:3px}#hc-ck .b{display:flex;gap:10px;flex:1 1 240px;max-width:320px}#hc-ck button{flex:1 1 0;margin:0;padding:0 8px;min-height:44px;border:1px solid #4A5A40;border-radius:6px;background:#4A5A40;color:#fff;font:500 16px Jost,sans-serif;cursor:pointer}@media (max-width:560px){#hc-ck .b{max-width:none}}body:has(.modal.aberto) #hc-ck{display:none}';
d.head.appendChild(css);
function fechar(){var e=d.getElementById('hc-ck');if(e)e.remove()}
function mostrar(){fechar();var e=d.createElement('div');e.id='hc-ck';e.setAttribute('role','region');e.setAttribute('aria-label','Cookies');
e.innerHTML='<div class="w"><p>Usamos cookies da Meta e da Google para medir e melhorar os anúncios, só se aceitar. <a href="/diagnostico/cookies">Saber mais</a></p><div class="b"><button type="button" data-v="aceitar">Aceitar</button><button type="button" data-v="recusar">Recusar</button></div></div>';
e.addEventListener('click',function(ev){var v=ev.target.getAttribute&&ev.target.getAttribute('data-v');if(v){set(v);fechar()}});d.body.appendChild(e)}
d.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('#hc-cookies-abrir,[data-cookies]');if(t){ev.preventDefault();mostrar()}});
if(!window.hcConsent){if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',mostrar);else mostrar()}
})();
