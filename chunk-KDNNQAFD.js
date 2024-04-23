import{$ as t,Da as M,G as h,H as S,I as F,K as I,O as e,P as n,Q as d,Qa as P,R as f,Ra as T,S as g,T as m,Ua as V,Va as k,Wa as D,Xa as L,Za as B,ab as K,da as x,db as O,ea as _,fa as C,ha as E,ia as w,n as y,p as c,q as u,va as A,xb as U,y as p,z as v}from"./chunk-4UPY2NKH.js";var W=()=>({width:"50vw"});function j(a,o){a&1&&(e(0,"span"),t(1,"Canal 2/2"),n())}function z(a,o){if(a&1){let l=f();e(0,"div",12)(1,"div",13)(2,"span"),t(3," Para configurar Falabella, requerimos la siguiente informaci\xF3n: "),n(),e(4,"div",14)(5,"div",15),d(6,"img",16),e(7,"div",17)(8,"div",13)(9,"label",18),t(10,"User ID"),n(),e(11,"input",19),C("ngModelChange",function(i){c(l);let r=m();return _(r.userID,i)||(r.userID=i),u(i)}),n()(),e(12,"div",13)(13,"label",18),t(14,"API Key"),n(),e(15,"input",19),C("ngModelChange",function(i){c(l);let r=m();return _(r.apiKey,i)||(r.apiKey=i),u(i)}),n()(),e(16,"small",20),g("click",function(){c(l);let i=m();return u(i.openInstructions())}),t(17," \xBF C\xF3mo obtener tu User ID y API Key ? "),n()()()()()(),e(18,"div")(19,"button",21),g("click",function(){c(l);let i=m();return u(i.auth())}),n()()}if(a&2){let l=m();p(11),x("ngModel",l.userID),p(4),x("ngModel",l.apiKey)}}function N(a,o){if(a&1){let l=f();e(0,"div",13)(1,"strong"),t(2,"\xA1 Ya sincronizamos tu cuenta de Falabella \u2705 !"),n(),e(3,"span"),t(4," Contin\xFAa con las dem\xE1s plataformas para completar la configuraci\xF3n. "),n()(),e(5,"div")(6,"button",22),g("click",function(){c(l);let i=m();return u(i.nextChannel())}),n()()}}function q(a,o){if(a&1){let l=f();e(0,"div",13)(1,"strong"),t(2,"\xA1 Algo sali\xF3 mal \u274C !"),n(),e(3,"span"),t(4," No pudimos iniciar sesi\xF3n en Falabella. Por favor, intenta de nuevo. "),n()(),e(5,"button",23),g("click",function(){c(l);let i=m();return u(i.resetForm())}),n()}}var ie=(()=>{let o=class o{constructor(s){this.router=s,this.state="noAuth",this.userID="",this.apiKey="",this.modalInstructions=!1}ngOnInit(){}openInstructions(){this.modalInstructions=!0}auth(){this.state="authOk"}resetForm(){this.state="noAuth",this.userID="",this.apiKey=""}nextChannel(){this.router.navigate(["/initial-configuration/step-two/percents"])}};o.\u0275fac=function(i){return new(i||o)(v(M))},o.\u0275cmp=y({type:o,selectors:[["app-initialConfigFL"]],standalone:!0,features:[E],decls:73,vars:9,consts:[[1,"flex","justify-content-center","mb-4"],[1,"w-10",3,"value"],["pTemplate","content"],[1,"cont-fl"],[1,"flex","flex-column","gap-4","align-items-center","justify-content-center"],["src","./assets/icons/Falabella.png","width","20px"],[1,"text-2xl"],["header","Instrucciones Falabella para obtener User ID y API Key",3,"visibleChange","visible","modal","draggable","resizable"],[1,"m-0"],[1,"text-center","m-1","font-bold","text-xl"],["target","_blank","href","https://sellercenter.falabella.com/",1,"text-blue-700"],[1,"text-orange-400","font-bold"],[1,"flex","flex-column","align-content-center","justify-content-center"],[1,"flex","flex-column","gap-2"],[1,"card-orange"],[1,"flex","justify-content-evenly","align-items-center","h-full"],["src","https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt8307b3a04256a767/android-chrome-192x192.svg","width","120px"],[1,"flex","flex-column","gap-3"],["for","username",1,"font-bold"],["pInputText","","id","username","aria-describedby","username-help",3,"ngModelChange","ngModel"],[1,"p-help",3,"click"],["pButton","","label","Enrolarme en Falabella",1,"mt-2","pri-button-rounded",3,"click"],["pButton","","label","Siguiente",1,"mt-2","pri-button-rounded",3,"click"],["pButton","","label","Volver a intentar",1,"mt-2","pri-button-rounded",3,"click"]],template:function(i,r){i&1&&(e(0,"div",0)(1,"p-progressBar",1),h(2,j,2,0,"ng-template",2),n()(),e(3,"div",3)(4,"div",4)(5,"div"),d(6,"img",5),t(7,"\xA0\xA0\xA0"),e(8,"strong",6),t(9,"Falabella"),n()(),h(10,z,20,2)(11,N,7,0)(12,q,6,0),n(),e(13,"p-dialog",7),C("visibleChange",function(b){return _(r.modalInstructions,b)||(r.modalInstructions=b),b}),e(14,"span",8)(15,"p",9),t(16," \xBFC\xF3mo Obtener Tus Credenciales? "),n(),d(17,"br"),e(18,"strong"),t(19,"Acceder a credencial para usuario ya creado en Falabella Seller Center."),n(),d(20,"br")(21,"br"),t(22," Tal c\xF3mo comentamos anteriormente, para darnos el permiso a tus operaciones, se debe tener acceso el Api Key, para ello se debe hacer lo siguiente: "),e(23,"ol")(24,"li"),t(25," Ingresar a "),e(26,"a",10),t(27,"https://sellercenter.falabella.com/"),n(),t(28," con tu user y clave de falabella Seller center "),n(),e(29,"li"),t(30,"Una vez adentro, hacer clic en "),e(31,"strong"),t(32,'"Mi Cuenta"'),n()(),e(33,"li"),t(34,"Desplegado el men\xFA, ingresar a "),e(35,"strong"),t(36,'"Integraciones"'),n()(),e(37,"li"),t(38," Se encontrar\xE1 el "),e(39,"span",11),t(40,'"User ID"'),n(),t(41," y "),e(42,"span",11),t(43,'"API Key"'),n(),t(44,", en el apartado "),e(45,"strong"),t(46,'"API Explorer"'),n()()(),d(47,"hr"),e(48,"strong"),t(49," Crear nuevo usuario"),n(),d(50,"br")(51,"br"),t(52," El admin debe ingresar a "),e(53,"a",10),t(54,"https://sellercenter.falabella.com/"),n(),t(55," con su user y clave de falabella seller center "),e(56,"ol")(57,"li"),t(58,"Una vez adentro, hacer clic en "),e(59,"strong"),t(60,'"Mi cuenta"'),n()(),e(61,"li"),t(62," Desplegado el men\xFA, se debe hacer clic en "),e(63,"strong"),t(64,'"Usuarios"'),n()(),e(65,"li"),t(66," Posteriormente se debe dar clic en "),e(67,"strong"),t(68,'"Agregar Usuario"'),n()(),e(69,"li"),t(70,"Finalmente agregar datos c\xF3mo correo, nombre, rol, entre otros."),n(),e(71,"li"),t(72,' Para que el nuevo User pueda tener acceso al API Key, debe seguir los pasos de "Acceder a credencial para usuario ya creado en Falabella Seller Center" '),n()()()()()),i&2&&(p(),S("value",50),p(9),I(10,r.state==="noAuth"?10:r.state==="authOk"?11:r.state==="error"?12:-1),p(3),F(w(8,W)),x("visible",r.modalInstructions),S("modal",!0)("draggable",!1)("resizable",!1))},dependencies:[U,T,P,B,K,O,A,L,V,k,D],styles:[".p-help[_ngcontent-%COMP%]{color:#00f;font-size:12px}.p-help[_ngcontent-%COMP%]:hover{color:#fff;font-size:12px;cursor:pointer}.progress-cont[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.card-orange[_ngcontent-%COMP%]{background-color:var(--primary-color-b);height:200px;border-radius:25px}.cont-fl[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;align-items:center;height:100%}"]});let a=o;return a})();export{ie as InitialConfigFLComponent};
