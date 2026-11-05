/* Pixel da Meta da Hair Clinic. Fica DESLIGADO enquanto HC_PIXEL_ID estiver vazio.
   Para ativar: colar o ID do Pixel da nova BM em HC_PIXEL_ID, copiar para public/diagnostico/pixel.js e fazer deploy.
   Só dispara depois de o visitante aceitar os cookies (consent.js, evento hc-consent). */
(function(){
var HC_PIXEL_ID='';
if(!HC_PIXEL_ID)return;
var d=document,w=window,iniciado=false;
function iniciar(){
  if(iniciado||w.hcConsent!=='aceitar')return;iniciado=true;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(w,d,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init',HC_PIXEL_ID);
  fbq('track','PageView');
  var obrigado=/\/obrigado/.test(location.pathname);
  var homem=/diagnostico-homem/.test(location.pathname);
  if(obrigado){fbq('track','Lead',{content_name:'Diagnostico capilar'})}
  else{
    fbq('track','ViewContent',{content_name:homem?'LP homem':'LP mulher'});
    d.addEventListener('click',function(ev){
      if(ev.target.closest&&ev.target.closest('[data-abrir]')&&!w.__hcFormEv){w.__hcFormEv=1;fbq('trackCustom','AbrirFormulario',{lp:homem?'homem':'mulher'})}
    });
  }
}
d.addEventListener('hc-consent',iniciar);
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',iniciar);else iniciar();
})();
