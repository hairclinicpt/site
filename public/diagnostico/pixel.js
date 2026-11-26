/* Medição da Hair Clinic: Pixel da Meta (e/ou Tag Manager, se HC_GTM_ID for preenchido).
   Desde 26/11/2026: com PIXEL_SO_COM_ACEITE a true, o pixel da Meta só carrega depois de Aceitar (Recusar revoga, se já tinha carregado).
   Os eventos do dataLayer seguem sempre, e o GTM trata-os com o Consent Mode (negado por defeito).
   Eventos: PageView em todas as páginas; ViewContent nas LPs (/diagnostico e /diagnostico-homem);
   AbrirFormulario no 1.º clique num botão do formulário; Lead em /diagnostico/obrigado (uma vez por sessão).
   Correspondência avançada: se o formulário do GHL guardou o contacto no navegador (chave _ud do form_embed.js),
   o email, o telefone e o nome seguem no init; o pixel normaliza e faz o hash antes de enviar.
   Eventos enviados ao dataLayer: hc_view_lp, hc_abrir_formulario, hc_lead (parâmetro lp = mulher|homem). */
(function(){
var HC_GTM_ID='';
var HC_PIXEL_ID='1644036223761736';
var PIXEL_SO_COM_ACEITE=true;
var d=document,w=window,ok=false,fb=false,fila=[];
if(w.__hcPixel)return;w.__hcPixel=true;
w.dataLayer=w.dataLayer||[];
function dl(e,p){var o={event:e};for(var k in p)o[k]=p[k];w.dataLayer.push(o)}
var path=location.pathname,obrigado=/\/obrigado/.test(path),eLp=/^\/diagnostico(-homem)?\/?$|^\/diagnostico\/lp(-homem)?\.html$/.test(path),lp=/homem/.test(path)?'homem':'mulher';
function evento(nome,fbNome,custom){
  dl(nome,{lp:lp});
  if(HC_GTM_ID||!HC_PIXEL_ID)return;
  var a=[custom?'trackCustom':'track',fbNome,{lp:lp}];
  if(fb)w.fbq.apply(w,a);else fila.push(a);
}
function dadosContacto(){
  var am={};
  try{
    var u=JSON.parse(localStorage.getItem('_ud')||'null');
    if(!u||typeof u!=='object')return am;
    var em=u.email||u.Email,ph=u.phone||u.Phone,fn=u.first_name||u.firstName,ln=u.last_name||u.lastName;
    if(!fn&&(u.full_name||u.name)){var p=String(u.full_name||u.name).trim().split(/\s+/);fn=p[0];if(p.length>1)ln=p[p.length-1]}
    if(em)am.em=String(em).trim().toLowerCase();
    if(ph){var t=String(ph).replace(/\D/g,'');if(t.length===9)t='351'+t;if(t.length>=9)am.ph=t}
    if(fn)am.fn=String(fn).trim().toLowerCase();
    if(ln)am.ln=String(ln).trim().toLowerCase();
  }catch(e){}
  return am;
}
function aceite(){try{return localStorage.getItem('hc-cookies-v2')==='aceitar'}catch(e){return false}}
function iniciarMeta(){
  if(fb||HC_GTM_ID||!HC_PIXEL_ID)return;
  if(PIXEL_SO_COM_ACEITE&&!aceite())return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(w,d,'script','https://connect.facebook.net/en_US/fbevents.js');
  var am=dadosContacto();
  if(am.em||am.ph)w.fbq('init',HC_PIXEL_ID,am);else w.fbq('init',HC_PIXEL_ID);
  w.fbq('track','PageView');
  fb=true;
  while(fila.length)w.fbq.apply(w,fila.shift());
}
function iniciar(){
  if(ok)return;
  if(!HC_GTM_ID&&!HC_PIXEL_ID)return;
  ok=true;
  if(HC_GTM_ID){
    w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var s=d.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+HC_GTM_ID;d.head.appendChild(s);
  }else iniciarMeta();
  if(obrigado){var k='hc_lead_ok';try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,'1')}catch(e){}evento('hc_lead','Lead',false)}
  else if(eLp)evento('hc_view_lp','ViewContent',false);
}
if(eLp){
  var feito=false;
  d.addEventListener('click',function(ev){
    if(!feito&&ev.target.closest&&ev.target.closest('[data-abrir]')){feito=true;if(ok)evento('hc_abrir_formulario','AbrirFormulario',true)}
  });
}
iniciar();
d.addEventListener('hc-consent',function(e){if(e.detail==='aceitar'){if(fb)w.fbq('consent','grant');else iniciarMeta()}else if(e.detail==='recusar'&&fb)w.fbq('consent','revoke')});
})();
