/* Medição da Hair Clinic: Tag Manager e/ou Pixel da Meta. Fica DESLIGADO enquanto os dois IDs estiverem vazios.
   Para ativar: preencher HC_GTM_ID (GTM-XXXXXXX) e/ou HC_PIXEL_ID, copiar este ficheiro para public/diagnostico/pixel.js no site e fazer deploy.
   Só carrega depois de o visitante aceitar os cookies (consent.js, evento hc-consent).
   Eventos enviados ao dataLayer: hc_view_lp, hc_abrir_formulario, hc_lead (parâmetro lp = mulher|homem). */
(function(){
var HC_GTM_ID='';
var HC_PIXEL_ID='1644036223761736';
var d=document,w=window,ok=false;
w.dataLayer=w.dataLayer||[];
function dl(e,p){var o={event:e};for(var k in p)o[k]=p[k];w.dataLayer.push(o)}
var obrigado=/\/obrigado/.test(location.pathname),lp=/diagnostico-homem/.test(location.pathname)?'homem':'mulher';
function evento(nome,fbNome,custom){
  dl(nome,{lp:lp});
  if(!HC_GTM_ID&&HC_PIXEL_ID&&w.fbq)w.fbq(custom?'trackCustom':'track',fbNome,{lp:lp});
}
function iniciar(){
  if(ok||w.hcConsent!=='aceitar')return;
  if(!HC_GTM_ID&&!HC_PIXEL_ID)return;
  ok=true;
  if(HC_GTM_ID){
    w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var s=d.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+HC_GTM_ID;d.head.appendChild(s);
  }else{
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(w,d,'script','https://connect.facebook.net/en_US/fbevents.js');
    w.fbq('init',HC_PIXEL_ID);w.fbq('track','PageView');
  }
  if(obrigado){var k='hc_lead_ok';try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,'1')}catch(e){}evento('hc_lead','Lead',false)}else evento('hc_view_lp','ViewContent',false);
}
if(!obrigado){
  var feito=false;
  d.addEventListener('click',function(ev){
    if(!feito&&ev.target.closest&&ev.target.closest('[data-abrir]')){feito=true;if(ok)evento('hc_abrir_formulario','AbrirFormulario',true)}
  });
}
d.addEventListener('hc-consent',iniciar);
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',iniciar);else iniciar();
})();
