import{a as L,c as ge}from"./chunk-KQAUIZCO.js";import{$ as C,Ba as oe,G as b,H as h,J as E,K as z,L as Y,M as q,N as r,Na as v,O as a,Oa as re,P as p,Pa as ae,Q as y,Qa as se,R as x,S as c,Ta as k,Ua as D,Va as U,W as K,Wa as le,X as Z,Xa as pe,Y as Q,Z as G,_ as l,aa as N,ab as ce,ca as M,cb as me,da as P,ea as T,fa as V,ga as I,ha as F,i as j,ia as J,k as W,l as H,la as $,lb as de,mb as ue,n as w,nb as fe,ob as _e,p as f,q as _,qa as ee,rb as B,sa as te,sb as he,ta as ie,tb as O,ua as ne,w as X,y as m,z as S}from"./chunk-BEOUZLBQ.js";var R=(()=>{let n=class n{constructor(e){this.http=e}scrappingProducts(){return this.http.get(L.ms_webScrappingUrl)}bulkInsertProducts(e){return this.http.post(L.ms_adminMyProductsUrl+L.addCSVFile,e)}};n.\u0275fac=function(t){return new(t||n)(H(ne))},n.\u0275prov=W({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();var Ie=["dt1"],Ee=()=>({"max-width":"100%"}),Me=()=>[5,10,20,50,100],Pe=()=>["Category","SKU","Name","Stock","Price"];function Te(i,n){if(i&1&&(r(0,"div",5)(1,"div",6)(2,"div"),l(3),a(),r(4,"small"),l(5),a()()()),i&2){let o=n.$implicit;m(3),C(o.name),m(2),N("",o.size/1e3," KB")}}function Ve(i,n){if(i&1){let o=y();r(0,"p-fileUpload",3,0),x("uploadHandler",function(t){f(o);let s=c();return _(s.myUploaderEnd(t))})("onUpload",function(t){f(o);let s=c();return _(s.myUploaderEnd(t))}),b(2,Te,6,2,"ng-template",4),a()}i&2&&h("customUpload",!0)("showCancelButton",!0)("showUploadButton",!0)("multiple",!1)("maxFileSize",1e6)}function Fe(i,n){if(i&1){let o=y();r(0,"div",18)(1,"p-checkbox",19),T("ngModelChange",function(t){f(o);let s=c(3);return P(s.paginator,t)||(s.paginator=t),_(t)}),x("onChange",function(){f(o);let t=c(3);return _(t.refresh())}),a(),r(2,"span",20)(3,"input",21),x("input",function(t){f(o),c(2);let s=G(1);return _(s.filterGlobal(t.target.value,"contains"))}),a()()()}if(i&2){let o=c(3);m(),M("ngModel",o.paginator),h("binary",!0)}}function ke(i,n){if(i&1&&b(0,Fe,4,2,"div",17),i&2){let o=c(2);h("ngIf",o.data.length)}}function De(i,n){i&1&&(r(0,"tr")(1,"th",22),l(2,"#"),a(),r(3,"th",23),l(4," Categor\xEDa "),p(5,"p-sortIcon",24),a(),r(6,"th",25),l(7,"Imagen"),a(),r(8,"th",26),l(9," SKU "),p(10,"p-sortIcon",27),a(),r(11,"th",28),l(12," Nombre"),p(13,"p-sortIcon",29),a(),r(14,"th",25),l(15,"Stock"),a(),r(16,"th",30),l(17," PrecioBase"),p(18,"p-sortIcon",31),a()())}function Ue(i,n){if(i&1&&(r(0,"tr",32)(1,"td",25),l(2),a(),r(3,"td",25),l(4),a(),r(5,"td",25),p(6,"img",33),a(),r(7,"td",34),l(8),a(),r(9,"td",25),l(10),a(),r(11,"td",25),l(12),a(),r(13,"td",35),l(14),J(15,"currency"),a()()),i&2){let o=n.$implicit,e=n.rowIndex,t=c(2);h("pSelectableRow",o)("pSelectableRowIndex",e),m(2),C(e+1),m(2),C(o.Category),m(2),h("src",o.Image,X),m(2),C(o.SKU),m(2),C(o.Name),m(2),C(t.getDecision(o.Stock)),m(2),N(" ",$(15,9,o.Price,"USD",!0,"1.0-0")," ")}}function Be(i,n){if(i&1){let o=y();r(0,"p-table",7,1),x("sortFunction",function(t){f(o);let s=c();return _(s.customSort(t))}),b(2,ke,1,1,"ng-template",8)(3,De,19,0,"ng-template",9)(4,Ue,16,14,"ng-template",10),a(),r(5,"div",11)(6,"div",12)(7,"button",13),x("click",function(){f(o);let t=c();return _(t.clearData())}),a()(),r(8,"div",14)(9,"button",15),x("click",function(){f(o);let t=c();return _(t.saveData())}),a()()(),p(10,"p-toast",16)}if(i&2){let o=c();h("rows",o.nRows)("value",o.data)("tableStyle",F(10,Ee))("customSort",!0)("paginator",o.paginator)("rowsPerPageOptions",F(11,Me))("first",o.first)("globalFilterFields",F(12,Pe)),m(7),h("disabled",!o.data.length),m(2),h("disabled",!o.data.length)}}function Oe(i,n){i&1&&(r(0,"div",36),p(1,"img",37),l(2,` Hemos importado tus productos con \xE9xito.
`),a())}var et=(()=>{let n=class n{constructor(e,t,s,u){this.mus=e,this.messageService=t,this.router=s,this._cryptSS=u,this.companyName="",this.data=[],this.fileBuffer="",this.fileLines=[],this.debug="",this.reader=new FileReader,this.paginator=!1,this.first=0,this.success=!1,this.nRows=5,this.step=0,this.uploadedFiles=[],this.fileToUpload=null,this.companyName=this._cryptSS.getFromSS("companyData").companyName,this.data=[],this.reader=new FileReader,this.reader.onload=()=>{this.fileBuffer=this.reader.result,this.fileLines=this.fileBuffer.split(`\r
`),this.debug=this.fileLines[0],this.fileLines.shift(),this.fileLines.pop(),this.fileLines.forEach(g=>{let d=g.split(";"),Se={SKU:d[1],Name:d[2],Price:parseInt(d[4]),Stock:d[3]==="true",Image:d[5],Category:d[0],Description:[],DateSaved:new Date,Shop:this.companyName,ML:!0,LI:!0,IB:!0,FL:!0};this.data.push(Se)})}}ngOnInit(){}customSort(e){e.data.sort((t,s)=>{let u=t[e.field],g=s[e.field],d=null;return u==null&&g!=null?d=-1:u!=null&&g==null?d=1:u==null&&g==null?d=0:typeof u=="string"&&typeof g=="string"?d=u.localeCompare(g):d=u<g?-1:u>g?1:0,e.order*d})}refresh(){this.dt1.reset()}myUploader(e){this.step=1,this.data=[];for(let t of e.files)this.uploadedFiles.push(t)}myUploaderEnd(e){this.nRows=5,this.myUploader(e),this.readFile(this.uploadedFiles[0]),this.fileToUpload=this.uploadedFiles[0]}readFile(e){this.reader.readAsText(e)}getSeverity(e){switch(e){case"SI":return"success";case"NO":return"danger";default:return"info"}}getDecision(e){switch(e){case!0:return"Disponible";case!1:return"Agotado";default:return"Pendiente"}}clearData(){this.data=[],this.fileBuffer="",this.fileLines=[],this.debug="",this.fileToUpload=null,this.uploadedFiles=[],this.step=0}saveData(){this.mus.bulkInsertProducts(this.data).subscribe(e=>{e.success?(this.showBottomCenter("success","\xC9xito",e.message),setTimeout(()=>{this.step=2},1e3)):this.showBottomCenter("error","Error","No se pudieron importar los productos.")})}showBottomCenter(e,t,s){this.messageService.add({key:"bc",severity:e,summary:t,detail:s})}};n.\u0275fac=function(t){return new(t||n)(S(R),S(v),S(oe),S(ge))},n.\u0275cmp=w({type:n,selectors:[["app-importCSV"]],viewQuery:function(t,s){if(t&1&&K(Ie,5),t&2){let u;Z(u=Q())&&(s.dt1=u.first)}},standalone:!0,features:[V([v]),I],decls:3,vars:1,consts:[["fileuploader",""],["dt1",""],["chooseLabel","SELECCIONAR ARCHIVO","uploadLabel","PREVISUALIZAR","cancelLabel","CANCELAR","uploadStyleClass","p-button-success","cancelStyleClass","p-button-danger","invalidFileTypeMessageDetail","Solo se permiten archivos de tipo Csv (.csv) delimitados por comas (,)","invalidFileTypeMessageSummary","Tipo de archivo no permitido","accept",".csv",3,"customUpload","showCancelButton","showUploadButton","multiple","maxFileSize"],["chooseLabel","SELECCIONAR ARCHIVO","uploadLabel","PREVISUALIZAR","cancelLabel","CANCELAR","uploadStyleClass","p-button-success","cancelStyleClass","p-button-danger","invalidFileTypeMessageDetail","Solo se permiten archivos de tipo Csv (.csv) delimitados por comas (,)","invalidFileTypeMessageSummary","Tipo de archivo no permitido","accept",".csv",3,"uploadHandler","onUpload","customUpload","showCancelButton","showUploadButton","multiple","maxFileSize"],["pTemplate","file"],[1,"p-d-flex","p-ai-center"],[1,"p-d-flex","p-dir-col"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"sortFunction","rows","value","tableStyle","customSort","paginator","rowsPerPageOptions","first","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-end","bg-black-alpha-10"],[1,"flex","justify-content-center","m-4"],["pButton","","icon","pi pi-eraser","type","button","label","Volver a cargar archivo",1,"p-button-warning",3,"click","disabled"],[1,"flex","justify-content-center","m-4","mr-8"],["pButton","","icon","pi pi-save","type","button","label","Guardar datos",1,"p-button-success",3,"click","disabled"],["position","bottom-center","key","bc"],["class","flex",4,"ngIf"],[1,"flex"],["label","Paginador",1,"mr-2",3,"ngModelChange","onChange","ngModel","binary"],[1,"p-input-icon-left","ml-auto"],["pInputText","","type","text","placeholder","\u{1F50D} Buscar en tabla",3,"input"],[1,"text-center",2,"width","3rem"],["pSortableColumn","tipoDocumento",1,"text-center",2,"width","5rem"],["field","Category"],[1,"text-center"],["pSortableColumn","SKU",1,"text-center"],["field","SKU"],["pSortableColumn","Name",1,"text-center"],["field","Name"],["pSortableColumn","Price",1,"text-center"],["field","Price"],[1,"text-center",3,"pSelectableRow","pSelectableRowIndex"],["alt","img","height","45",2,"vertical-align","middle",3,"src"],[1,"text-center","text-primary","font-bold"],[1,"text-center","font-bold"],[1,"card","flex","flex-column","text-xl","font-bold","text-center","align-items-center","justify-content-center","gap-4"],["src","https://static-00.iconduck.com/assets.00/success-icon-1024x1024-p8wk1o4x.png","alt","check","width","200px"]],template:function(t,s){t&1&&b(0,Ve,3,5,"p-fileUpload",2)(1,Be,11,13)(2,Oe,3,0),t&2&&E(0,s.step===0?0:s.step===1?1:s.step===2?2:-1)},dependencies:[O,ae,re,ee,le,pe,me,de,ue,_e,fe,B,te,U,k,D,ie]});let i=n;return i})();var Ce=(()=>{let n=class n{constructor(){}ngOnInit(){}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=w({type:n,selectors:[["app-longLoader"]],standalone:!0,features:[I],decls:22,vars:0,consts:[[1,"cube"],[1,"topD"],[2,"--i","0"],[2,"--i","1"],[2,"--i","2"],[2,"--i","3"],[1,"cube2"],[1,"cube3"],[1,"top3"],[1,"text-primary"]],template:function(t,s){t&1&&(r(0,"div",0),p(1,"div",1),r(2,"div"),p(3,"span",2)(4,"span",3)(5,"span",4)(6,"span",5),a(),r(7,"div",6)(8,"div"),p(9,"span",2)(10,"span",3)(11,"span",4)(12,"span",5),a(),r(13,"div",7),p(14,"div",8),r(15,"div"),p(16,"span",2)(17,"span",3)(18,"span",4)(19,"span",5),a()()()(),r(20,"p",9),l(21,"... Estamos trabajando para cargar tus productos, espera por favor"),a())},styles:[".cube[_ngcontent-%COMP%]{position:relative;width:300px;height:300px;transform-style:preserve-3d;transform:rotateX(-30deg);animation:_ngcontent-%COMP%_animateD 8s linear infinite}@keyframes _ngcontent-%COMP%_animateD{0%{transform:rotateX(-15deg) rotateY(0)}to{transform:rotateX(-15deg) rotateY(-360deg)}}.cube[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;transform-style:preserve-3d}.cube2[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;transform-style:preserve-3d;animation:_ngcontent-%COMP%_animateD2 5s ease-out infinite alternate}@keyframes _ngcontent-%COMP%_animateD2{0%{transform:rotateX(0) rotateY(0)}to{transform:rotateX(180deg) rotateY(-360deg)}}.cube2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:35px;left:0;width:65%;height:65%;transform-style:preserve-3d}.cube2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:20%;left:20%;width:65%;height:65%;background:transparent;border:2px solid var(--primary-color);transform:rotateY(calc(90deg * var(--i))) translateZ(62px)}.cube3[_ngcontent-%COMP%]{position:absolute;width:300px;height:300px;transform-style:preserve-3d;transform:rotateX(-30deg);animation:_ngcontent-%COMP%_animateD3 1s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_animateD3{0%{transform:rotateX(-90deg) rotateY(0)}to{transform:rotateX(90deg) rotateY(45deg)}}.cube3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:70px;left:70px;width:15%;height:15%;transform-style:preserve-3d}.cube3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:var(--primary-color);transform:rotateY(calc(90deg * var(--i))) translateZ(14px);box-shadow:0 0 7px var(--primary-color)}.top3[_ngcontent-%COMP%]{position:absolute;top:0;left:0;background:var(--primary-color);transform:rotateX(90deg) translateZ(14px);box-shadow:0 0 10px var(--primary-color)}"]});let i=n;return i})();function Le(i,n){if(i&1){let o=y();r(0,"div",5)(1,"div",8)(2,"p-radioButton",9),T("ngModelChange",function(t){f(o);let s=c(2);return P(s.siteSelected,t)||(s.siteSelected=t),_(t)}),a(),r(3,"label",10),l(4),a()()()}if(i&2){let o=n.$implicit,e=c(2);m(2),h("value",o.code),M("ngModel",e.siteSelected),m(2),C(o.url)}}function Re(i,n){if(i&1){let o=y();r(0,"div",0)(1,"p-fieldset",2)(2,"p",3),l(3," Estos son los sitios que se han preconfigurado para la importaci\xF3n de tus productos."),p(4,"br"),l(5," Ten en cuenta que la importaci\xF3n de productos puede tardar varios minutos, esto depender\xE1 de la cantidad de productos que se importen. As\xED que no cierres esta ventana hasta que el proceso haya finalizado. "),r(6,"span",4),l(7,"\xA1No te preocupes!"),a(),l(8,", te avisaremos cuando est\xE9 listo o si ocurre alg\xFAn problema. "),p(9,"br")(10,"br"),l(11," Selecciona el sitio web del que deseas importar tus productos. "),a(),Y(12,Le,5,3,"div",5,z),r(14,"div",6)(15,"p-button",7),x("click",function(){f(o);let t=c();return _(t.importWeb())}),a()()()()}if(i&2){let o=c();m(12),q(o.sites)}}function Ne(i,n){i&1&&(r(0,"div",11)(1,"div",12),p(2,"app-longLoader"),a()())}function Ae(i,n){i&1&&(r(0,"div",13),p(1,"img",14),l(2,` Hemos importado tus productos con \xE9xito.
`),a())}var ct=(()=>{let n=class n{constructor(e,t){this.messageService=e,this.mus=t,this.siteSelected="",this.step=0,this.sites=[{name:"Ilumax",url:"https://ilumax.com",code:"ILM"},{name:"Amazon",url:"https://amazon.com",code:"AMZ"}]}ngOnInit(){}importWeb(){if(this.siteSelected===""){this.showBottomCenter("error","Error","Por favor selecciona un sitio web.");return}this.step=1,this.mus.scrappingProducts().pipe(j(e=>{throw console.error("Error en la solicitud HTTP:",e),this.step=0,this.showBottomCenter("error","Error","No se pudieron importar los productos."),e})).subscribe(e=>{this.step=0,e.success?(this.showBottomCenter("success","\xC9xito",`${e.inserted_count} Productos importados correctamente.`),this.step=2):this.showBottomCenter("error","Error","No se pudieron importar los productos.")})}showBottomCenter(e,t,s){this.messageService.add({key:"bc",severity:e,summary:t,detail:s})}};n.\u0275fac=function(t){return new(t||n)(S(v),S(R))},n.\u0275cmp=w({type:n,selectors:[["app-importWeb"]],standalone:!0,features:[V([v]),I],decls:4,vars:1,consts:[[1,"card","flex","flex-column","justify-content-center"],["position","bottom-center","key","bc"],["legend","SUBIDA MASIVA | Importaci\xF3n desde mi Sitio WEB"],[1,"my-2"],[1,"font-bold"],[1,"site-card"],[1,"flex","justify-content-end"],["severity","secondary","label","Iniciar importaci\xF3n",3,"click"],[1,"flex","align-items-center","gap-2"],["name","","inputId","one",3,"ngModelChange","value","ngModel"],["for","ingredient1",1,"ml-2"],[1,"black-card"],[1,"flex","justify-content-center"],[1,"card","flex","flex-column","text-xl","font-bold","text-center","align-items-center","justify-content-center","gap-4"],["src","https://static-00.iconduck.com/assets.00/success-icon-1024x1024-p8wk1o4x.png","alt","check","width","200px"]],template:function(t,s){t&1&&(b(0,Re,16,0,"div",0)(1,Ne,3,0)(2,Ae,3,0),p(3,"p-toast",1)),t&2&&E(0,s.step===0?0:s.step===1?1:s.step===2?2:-1)},dependencies:[O,se,ce,B,he,U,k,D,Ce],styles:[".site-card[_ngcontent-%COMP%]{border:2px solid var(--primary-color);border-radius:50px;color:var(--tertiary-color);width:50%;padding:10px;margin:5px 0}"]});let i=n;return i})();export{et as a,ct as b};
