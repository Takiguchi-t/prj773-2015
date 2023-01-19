$(document).ready(function(){$(window).on("load resize",function(){let uid_val="5902ae6c0806869893732cec9bb1c499q";let deviceType_val="pcia";let cnt=10;if($(window).width()<=480){if($('#search_wordsEtEnSp').length>0){poplink3=[{uid:uid_val,target:"#search_wordsEtEnSp",deviceType:deviceType_val,suggestCount:cnt}];}
if($('#search_wordsSphead').length>0){poplink3=[{uid:uid_val,target:"#search_wordsSphead",deviceType:deviceType_val,suggestCount:cnt}];}}else{if($('#search_wordsEtEnPc').length>0){poplink3=[{uid:uid_val,target:"#search_wordsEtEnPc",deviceType:deviceType_val,suggestCount:cnt}];}
if($('#search_words2').length>0){poplink3=[{uid:uid_val,target:"#search_words2",deviceType:deviceType_val,suggestCount:cnt}];}}
(function(){var s=document.createElement("script");s.charset="utf-8";s.src="//poplink-f.probo.biz/pl3/poplink3.js";document.getElementsByTagName("head")[0].appendChild(s);})();});});var http='https://';var hostName=window.location.hostname;var url=http.concat(hostName);function search_submit2(){var targeturl=url.concat('/power/search')
var word="?q="+document.getElementById("search_words2").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_words2").value=targeturl+word+"&"+parmarr.join("&");}else{document.getElementById("search_ex_words2").value=targeturl+word}}
function search_submitSPhead(){var targeturl=url.concat('/power/search')
var word="?q="+document.getElementById("search_wordsSphead").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_wordsSpHead").value=targeturl+word+"&"+
parmarr.join("&");}else{document.getElementById("search_ex_wordsSpHead").value=targeturl+word}}
function search_submitEtEnPc(){var targeturl=url.concat('/search')
var word="?q="+document.getElementById("search_wordsEtEnPc").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_wordsEtEnPc").value=targeturl+word+"&"+parmarr.join("&");}else{document.getElementById("search_ex_wordsEtEnPc").value=targeturl+word}}
function search_submitEtEnSp(){var targeturl=url.concat('/search')
var word="?q="+document.getElementById("search_wordsEtEnSp").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_wordsEtEnSp").value=targeturl+word+"&"+parmarr.join("&");}else{document.getElementById("search_ex_wordsEtEnSp").value=targeturl+word}}
function search_submitEtJpPc(){var targeturl=url.concat('/jp/search')
var word="?q="+document.getElementById("search_wordsEtJpPc").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_wordsEtJpPc").value=targeturl+word+"&"+parmarr.join("&");}else{document.getElementById("search_ex_wordsEtJpPc").value=targeturl+word}}
function search_submitEtJpSp(){var targeturl=url.concat('/jp/search')
var word="?q="+document.getElementById("search_wordsEtJpSp").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_wordsEtJpSp").value=targeturl+word+"&"+parmarr.join("&");}else{document.getElementById("search_ex_wordsEtJpSp").value=targeturl+word}}
var http='https://';var hostName=window.location.hostname;var url=http.concat(hostName);$(".search_submit1").click(function(){var targeturl=url.concat(targetSearchUrl)
var word="?q="+document.getElementById("search_words1").value
var pair=window.location.search.replace("?","").split('&');let parmarr=[]
Array.prototype.slice.call(pair).forEach(function(paramerter){if(paramerter!==""&&paramerter.indexOf("q=")!==0){parmarr.push(paramerter);}});if(parmarr.length){document.getElementById("search_ex_words1").value=targeturl+word+"&"+
parmarr.join("&");}else{document.getElementById("search_ex_words1").value=targeturl+word}});