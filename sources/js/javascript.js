var mlv=function(){
function loadscr1(ids1,url1) {
	var now1=new Date();
	var ms1=document.createElement('script');
	ms1.type='text/javascript';
	ms1.src=url1+'?ts='+now1.getTime();
	var s1=document.getElementById(ids1);
	s1.parentNode.insertBefore(ms1,s1);
}
function affcomp1() {
//        var datM=['134#Euro 2012 - Qualifications#2#','134#France - Ligue 1#20#15','132#France - Coupe de France#20#','135#France - Ligue 2#2#4'];
	var txt1='';
	for (var i=0, l1=datM.length; i<l1; i++ ) {
		var d1=datM[i].split('#');
		txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result">'+d1[1]+'</span><span class="matchs">'+d1[2]+'</span>';
		if ((d1[3]!='')&&(d1[3]!='0')) { txt1+='<span class="isLive">'+d1[3]+'</span>'; }
		txt1+='</a>';
	}
	document.getElementById('datas').innerHTML=txt1;
}
function affmatch() {
	var IDcompOK=new Array();
	var txt1=new Array();
	for (var c=0, c1=IDcomp1.length; c<c1; c++) {
		IDcompOK[IDcomp1[c]]=c;
		txt1[IDcomp1[c]]='';
	}
        var nbm=0;
        for (var i=0, l1=datM.length; i<l1; i++ ) {
		var d1=datM[i].split('#');
	 	if (IDcompOK[d1[0]]==undefined) { continue; } else { nc=IDcompOK[d1[0]]; nbm++; }
		if (txt1[d1[0]]=='') {
			txt1[d1[0]]='<div class="header">'+"\n"+'<span class="competition">'+tpays1+' - '+tcomp1[nc]+'</span>';
			if (clive1[nc]!='') { txt1[d1[0]]+='<a onclick="mlv.cla1('+"'"+clive1[nc]+"',"+d1[0]+');return false;" class="clasLive" id=cliv'+d1[0]+' href="#">Clas. live</a>'+"\n"; }
			txt1[d1[0]]+='</div><div id=lclas'+d1[0]+'></div><div class="datas">';
			
		}
                var cla1='matchIsPlaying';
                var lnk1=tpays1+' - '+tcomp1[nc]+'_'+d1[3]+'_'+d1[5]+'_'+d1[4]+'_0_1';
                if (d1[2]=='Fin') { cla1='matchIsFinished'; lnk1=lnk1.slice(0,-1)+'2'; }
                else if (/^[0-9]{2}h[0-9]{2}$/.test(d1[2])) { cla1='matchFuture'; lnk1=lnk1.slice(0,-1)+d1[2]; }
                else if (/^[0-9]+$/.test(d1[2])) { d1[2]=d1[2]+'<img src="http://img.maxifoot-live.com/im.gif">'; }
                lnk1=escape(lnk1);
                txt1[d1[0]]+='<a href="livematch_'+d1[1]+'.html?id='+lnk1+'" class="'+cla1+'"><span class="time">'+d1[2]+'</span><span class="team team1">'+d1[3]+'</span><span class="score">';
                txt1[d1[0]]+=d1[4]+'</span><span class="team team2">'+d1[5]+'</span></a>'+"\n";
        }
	var txt2=txt1[IDcomp0]+'</div>';
	for (var c=0, c1=IDcomp1.length; c<c1; c++) {
		if (IDcomp1[c]==IDcomp0) { continue; }
		txt2+=txt1[IDcomp1[c]]+'</div>';
	}
//	alert(txt2);
// var IDcomp0=134;
// var IDcomp1=[134,135,132,131,133,243,409,410,411,412,413];
// var tpays1="FRANCE";
// var tcomp1=["Ligue 1","Ligue 2","Coupe de France","Coupe de la Ligue","Supercou$
// var clive1=["france#ligue-1","fr
// <div class="header">
//                <span id=cp1 class="competition">PAYS - comp</span><a onclick="mlv.cla1('...');return false;" class="clasLive" id=cliv1 href="#">Clas. live</a>
//        </div>
//        <div id=lclas1></div>
//        <div class="datas" id=datas></div>
        if (nbm==0) { txt2="<br><center>pas de match aujourd'hui</center>"; }
	document.getElementById('contents').innerHTML=txt2;
}
function affcomp2() {
//        var datM=['134#Euro 2012 - Qualifications#2#','134#France - Ligue 1#20#15','132#France - Coupe de France#20#','135#France - Ligue 2#2#4'];
        var txt1='';
        for (var i=0, l1=datM.length; i<l1; i++ ) {
                var d1=datM[i].split('#');
		var d2=d1[1].split(' - ');
                txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result result2" style="width:50%">'+d2[0]+'<br><i>'+d2[1]+'</i>';
		txt1+='</span><span class="matchs matchs2" style="width:25%;">'+d1[2];
		if (d1[5]!='0') { txt1+='<br><i>prochain: '+d1[5]+'</i>'; }
		txt1+='</span>';
                if ((d1[3]!='')&&(d1[3]!='0')) { txt1+='<span class="isLive">'+d1[3]+'</span>'; }
		if ((d1[4]!='')&&(d1[4]!='0')) { txt1+='<span class="isLive" style="background:#aaa;">'+d1[4]+'</span>'; }
                txt1+='</a>';
        }
	document.getElementById('datas').innerHTML=txt1;
}
function affcomp3() {
	var txt1='';
	for (var i=0, l1=datM.length; i<l1; i++ ) {
		var d1=datM[i].split('#');
		var d2=d1[1].split(' - ');
		txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result result2" style="width:50%">'+d2[0]+'<br><i>'+d2[1]+'</i></span>';
		if ((d1[3]!='')&&(d1[3]!='0')) {
			txt1+='<span class="isLive" style="width:12%;display:inline-block;padding:0 6px;"><i>LIVE</i></span>';
		} else {
			txt1+='<span class="matchs2" style="width:12%;display:inline-block;text-align:center;float:left;">';
			if (d1[5]!='0') { txt1+='<i>à</i><br><i>'+d1[5]+'</i>'; } else { txt1+='&nbsp;'; }
			txt1+='</span>';
		}
		txt1+='<span class="matchs2" style="width:25%;text-align:center;display:inline-block;">';
		if (d1[4]==d1[2]) {
			txt1+='<span class="isLive" style="background:#aaa;width:32%;text-align:center;display:inline-block;padding:0 6px;">'+d1[4]+'/'+d1[2]+' </span></a>';
		} else {
			if (d1[4]>0) {
				txt1+='<span class="isLive" style="background:#aaa;">';
			} else {
				txt1+='<span style="background:transparent;color:#999;">';
			}
			txt1+=d1[4]+'</span><b style="color:#666;">/</b>'+d1[2]+'</span></a>';
		}
	}
	document.getElementById('datas').innerHTML=txt1;
}
function affcomp3b() {
        var txt1='';
        for (var i=0, l1=datM.length; i<l1; i++ ) {
                var d1=datM[i].split('#');
                var d2=d1[1].split(' - ');
                txt1+='<tr><td width="50%" onlick="livecomp_'+d1[0]+'.html" class="result result2">'+d2[0]+'<br><i>'+d2[1]+'</i></td>';
		txt1+='<td width="18%">';
                if ((d1[3]!='')&&(d1[3]!='0')) { txt1+='<span class="isLive">LIVE</span></td>'; }
                else {
			txt1+='<span class="matchs matchs2">&nbsp;';
//                        if (d1[5]!='0') { txt1+='<i>prochain:</i><br><i>'+d1[5]+'</i>'; } else { txt1+='&nbsp;'; }
                }
		txt1+='</td><td width="32%">';
                if (d1[4]>0) { txt1+='<span class="isLive" style="background:#ccc">'; }
                else { txt1+='<span class="isLive" style="background:transparent;color:#666;">'; }
                txt1+=d1[4]+'</span>/'+d1[2]+'</span>';
		txt1+='</td></tr>';
        }
        document.getElementById('datas').innerHTML='<table cellpadding=0 cellspacing=0 border=0>'+txt1+'</table>';
}
function affcomp4() {
	var txt1='';
	for (var i=0, l1=datM.length; i<l1; i++ ) {
		var d1=datM[i].split('#');
		var d2=d1[1].split(' - ');
		txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result result2" style="width:50%">'+d2[0]+'<br><i>'+d2[1]+'</i></span>';
		if ((d1[3]!='')&&(d1[3]!='0')) {
			txt1+='<span class="isLive" style="width:12%;padding:0 10px 0 6px;"><i>LIVE</i></span>';
		} else {
			txt1+='<span style="width:12%;display:inline-block;padding:0 10px 0 6px;">&nbsp;</span>';
		}
		txt1+='<span class="matchs matchs2" style="width:32%;text-align:center;">'+d1[4]+'/'+d1[2]+'</span></a>';
	}
	document.getElementById('datas').innerHTML=txt1;
}
function affcomp5() {
//	var datM=['134#Euro 2012 - Qualifications#nbmatch#nblive#nbfini#heu_next','134#France - Ligue 1#20#15','132#France - Coupe de France#20#','135#France - Ligue 2#2#4'];
//        var datM=['134#Euro 2012 - groupe A#2#0#0#18h00','134#France - Ligue 1#4#2#1','132#France - Coupe de France#10#0#10#0','135#France - Ligue 2#2#4#0'];
	var txt1='';
        for (var i=0, l1=datM.length; i<l1; i++ ) {
                var d1=datM[i].split('#');
		var d2=d1[1].split(' - ');
// d1[4]=d1[2];
// if (i==1) { d1[4]=1; } else {
//	d1[5]=0;
// }
// if (i==2) { d1[3]=1; }
		txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result result2" style="width:50%">'+d2[0]+'<br><i>'+d2[1]+'</i></span>';
                if ((d1[3]!='')&&(d1[3]!='0')) {
			txt1+='<span style="width:10%;display:inline-block;text-align:center;padding:0 10px 0 6px;" class="isLive">LIVE</span>';
		} else {
			txt1+='<span class="matchs2" style="width:10%;display:inline-block;text-align:center;float:left;">';
			if (d1[5]!='0') {
				txt1+='<i>'+d1[5]+'</i>';
			} else {
				txt1+='&nbsp;';
			}
                        txt1+='</span>';
		}
		if (d1[4]==0) {
			txt1+='<span class="matchs2" style="width:32%;display:inline-block;text-align:center;"><span style="color:#bbb;">'+d1[4]+'/</span>'+d1[2]+'</span></a>';
		} else {
			txt1+='<span class="matchs2" style="width:32%;display:inline-block;text-align:center;">'+d1[4]+'/'+d1[2]+'</span></a>';
		}
        }
        document.getElementById('datas').innerHTML=txt1;
}
function affcomp6() {
	var txt1='';
	for (var i=0, l1=datM.length; i<l1; i++ ) {
		var d1=datM[i].split('#');
		var d2=d1[1].split(' - ');
		var pays1=d2[0];
		pays1=pays1.substring(0,3);
//		txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result">'+d1[1]+'</span>';
		txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result">'+pays1+' - '+d2[1]+'</span>';
		if ((d1[3]!='')&&(d1[3]!='0')) {
			txt1+='<span style="width:18%;display:inline-block;text-align:center;"><span class="isLive">'+d1[3]+'</span></span>';
		} else {
			txt1+='<span style="width:18%;display:inline-block;">&nbsp;</span>';
		}
		txt1+='<span class="matchs matchs2" style="width:32%;text-align:left;">'+d1[4]+'/'+d1[2]+'</span></a>';
	}
	document.getElementById('datas').innerHTML=txt1;
}
function affcomp7() {
        var txt1='';
        for (var i=0, l1=datM.length; i<l1; i++ ) {
                var d1=datM[i].split('#');
                var d2=d1[1].split(' - ');
                txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result result2" style="width:50%">'+d2[1]+'<br><i>'+d2[0]+'</i></span>';
                if ((d1[3]!='')&&(d1[3]!='0')) {
                        txt1+='<span style="width:10%;display:inline-block;text-align:center;padding:0 10px 0 6px;" class="isLive">LIVE</span>';
                } else {
                        txt1+='<span class="matchs2" style="width:10%;display:inline-block;text-align:center;float:left;">';
                        if (d1[5]!='0') {
//                                txt1+='<i>à venir:</i><br><i>'+d1[5]+'</i>';
				txt1+='&nbsp;';
                        } else {
                                txt1+='&nbsp;';
                        }
                        txt1+='</span>';
                }
                txt1+='<span class="matchs2" style="width:32%;display:inline-block;text-align:center;">'+d1[4]+'/'+d1[2]+'</span></a>';
        }
        document.getElementById('datas').innerHTML=txt1;
}
function affcomp8() {
        var txt1='';
        for (var i=0, l1=datM.length; i<l1; i++ ) {
                var d1=datM[i].split('#');
                var d2=d1[1].split(' - ');
                txt1+='<a href="livecomp_'+d1[0]+'.html"><span class="result result2" style="width:50%">'+d2[0]+'<br><i>'+d2[1]+'</i></span>';
if (i==6) { d1[3]=1; }
                if ((d1[3]!='')&&(d1[3]!='0')) { // en LIVE
                        txt1+='<span class="isLive" style="width:12%;display:inline-block;padding:0 6px;"><i>LIVE</i></span>';
                } else { // PROCHAIN
                        txt1+='<span class="matchs2" style="width:12%;display:inline-block;text-align:center;float:left;padding-top:12px;">';
                        if (d1[5]!='0') { txt1+='<i>'+d1[5]+'</i>'; } else { txt1+='&nbsp;'; }
                        txt1+='</span>';
                }
// if (i<2) { d1[4]=0; } else if (i<5) { d1[4]=1; }
                txt1+='<span class="matchs2" style="width:25%;text-align:center;display:inline-block;">';
                if (d1[4]==d1[2]) { // TOUT FINI
			txt1+='<div class="islive6" style="border:0;"><span class="islive4" style="color:#969696">/</span><span class="isLive2" style="color:#e6e6e6;">'+d1[2]+'</span><span class="isLive3" style="color:#e6e6e6;">'+d1[2]+'</span></div>';
//			txt1+='<div class="islive6" style="border:0;"><span class="isLive3">'+d1[2]+'</span></div>';
//			txt1+='<span class="isLive3">'+d1[2]+'</span>';
                } else {
                        if (d1[4]>0) { // QQUES FINI
				txt1+='<div class="islive5" style="border:0;"><span class="islive4">/</span><span class="isLive2">'+d1[4]+'</span><span class="isLive3" style="color:#444;">'+d1[2]+'</span></div>';
                        } else { // AUCUN FINI
//                                txt1+='<div style="width:40px; text-align:right;border:0;"><span class="isLive3">'+d1[2]+'</span></div>';
txt1+='<div class="islive6" style="border:0;background:transparent;"><span class="islive4" style="color:#ccc">/</span><span class="isLive2" style="color:#ccc;">0</span><span class="isLive3">'+d1[2]+'</span></div>';
                        }
                        txt1+='</a>';
                }
        }
        document.getElementById('datas').innerHTML=txt1;
}
function affclas1(ajx1) {
	document.getElementById('lclas'+lvclas1).innerHTML=ajx1.responseText;
	document.getElementById('cliv'+lvclas1).innerHTML='Fermer';
	document.getElementById('lclas'+lvclas1).style.display='block';
}
var lvclas1=0;
function showclas1(idc,id1) {
	lvclas1=id1;
	var v1=document.getElementById('cliv'+id1);
	if (v1.innerHTML=='Clas. live') {
		var d1=new Date();
		var ajx1=newajx('affclas1');
		if (ajx1) {
			ajx1.open("POST", 'http://www.maxifoot-live.com/0_mobile/live_clas.php', true);
			ajx1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajx1.send('idc='+idc+'&ts='+d1.getTime());
		}
	} else {
		v1.innerHTML='Clas. live';
		document.getElementById('lclas'+id1).style.display='none';
	}
	return false;
}
function newajx(func1) {
	var ajx=null;
	if (window.XMLHttpRequest) { ajx=new XMLHttpRequest(); }
	else if (window.ActiveXObject) {
		try { ajx=new ActiveXObject("Msxml2.XMLHTTP"); }
		catch (e) { ajx=new ActiveXObject("Microsoft.XMLHTTP"); }
	}
	if (ajx) {
		if (func1!='') {
			ajx.onreadystatechange = function(){
				if (ajx.readyState==4 && ajx.status==200) { eval(func1+'(ajx);'); }
			}
		}
		return ajx;
	}
	return false;
}
return{
load:loadscr1,
affc:affcomp1,
affc2:affcomp2,
affc3:affcomp3,
affc4:affcomp4,
affc5:affcomp5,
affc6:affcomp6,
affc7:affcomp7,
affc8:affcomp8,
affm:affmatch,
cla1:showclas1,
newajx:newajx
}
}();

function loadplus1(o1) {
        var dat1=new Date();
        var ajx=mlv.newajx('loadplus2');
        if (ajx) {
                ajx.open("GET", '/0_templates/articles_precedent.php?ts='+dat1.getTime(), true);
                ajx.send(null);
        }
	o1.innerHTML='';
        if (window.event) { window.event.cancelBubble=true; }
        return false;
}
function loadplus2(ajx) {
        var d1=document.createElement('div');
        d1.innerHTML=ajx.responseText;
        document.getElementById('contents').appendChild(d1);
}
