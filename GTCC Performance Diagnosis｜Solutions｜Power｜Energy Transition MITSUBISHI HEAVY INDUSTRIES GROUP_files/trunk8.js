(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module==='object'&&module.exports){factory(require('jquery'));}else{factory(root.jQuery);}}(this,function($){var methods,utils,SIDES={center:'center',left:'left',right:'right'},WIDTH={auto:'auto'};function trunk8(element){this.$element=$(element);this.original_text=$.trim(this.$element.html());this.settings=$.extend({},$.fn.trunk8.defaults);}
trunk8.prototype.updateSettings=function(options){this.settings=$.extend(this.settings,options);};function stripHTML(html){var tmp=document.createElement("DIV");tmp.innerHTML=html;if(typeof tmp.textContent!='undefined'){return tmp.textContent;}
return tmp.innerText}
function getHtmlArr(str){if(stripHTML(str)===str){return str.split(/\s/g);}
var allResults=[],reg=/<([a-z]+)([^<]*)(?:>([\S\s]*?(?!<\1>))<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/ig,outArr=reg.exec(str),lastI,ind;while(outArr&&lastI!==reg.lastIndex){lastI=reg.lastIndex;if(outArr[5]){allResults.push(outArr[5]);}else if(outArr[1]){allResults.push({tag:outArr[1],attribs:outArr[2],content:outArr[3],after:outArr[4]});}
outArr=reg.exec(str);}
for(ind=0;ind<allResults.length;ind++){if(typeof allResults[ind]!=='string'&&allResults[ind].content){allResults[ind].content=getHtmlArr(allResults[ind].content);}}
return allResults;}
function rebuildHtmlFromBite(bite,htmlObject,fill){bite=bite.replace(fill,'');var biteHelper=function(contentArr,tagInfo){var retStr='',content,biteContent,biteLength,nextWord,i;for(i=0;i<contentArr.length;i++){content=contentArr[i];biteLength=$.trim(bite).split(' ').length;if($.trim(bite).length){if(typeof content==='string'){if(!/<br\s*\/?>/i.test(content)){if(biteLength===1&&$.trim(bite).length<=content.length){content=bite;if(tagInfo==='p'||tagInfo==='div'){content+=fill;}
bite='';}else{bite=bite.replace(content,'');}}
retStr+=$.trim(content)+((i===contentArr.length-1||biteLength<=1)?'':' ');}else{biteContent=biteHelper(content.content,content.tag);if(content.after)bite=bite.replace(content.after,'');if(biteContent){if(!content.after)content.after=' ';retStr+='<'+content.tag+content.attribs+'>'+biteContent+'</'+content.tag+'>'+content.after;}}}}
return retStr;},htmlResults=biteHelper(htmlObject);if(htmlResults.slice(htmlResults.length-fill.length)!==fill){htmlResults+=fill;}
return htmlResults;}
function truncate(){var data=this.data('trunk8'),settings=data.settings,width=settings.width,side=settings.side,fill=settings.fill,parseHTML=settings.parseHTML,line_height=utils.getLineHeight(this)*settings.lines,str=data.original_text,length=str.length,max_bite='',lower,upper,bite_size,bite,text,htmlObject;this.html(str);text=this.text();if(parseHTML&&stripHTML(str)!==str){htmlObject=getHtmlArr(str);str=stripHTML(str);length=str.length;}
if(width===WIDTH.auto){if(this.height()<=line_height){return;}
lower=0;upper=length-1;while(lower<=upper){bite_size=lower+((upper-lower)>>1);bite=utils.eatStr(str,side,length-bite_size,fill);if(parseHTML&&htmlObject){bite=rebuildHtmlFromBite(bite,htmlObject,fill);}
this.html(bite);if(this.height()>line_height){upper=bite_size-1;}
else{lower=bite_size+1;max_bite=(max_bite.length>bite.length)?max_bite:bite;}}
this.html('');this.html(max_bite);if(settings.tooltip){this.attr('title',text);}}
else if(!isNaN(width)){bite_size=length-width;bite=utils.eatStr(str,side,bite_size,fill);this.html(bite);if(settings.tooltip){this.attr('title',str);}}
else{$.error('Invalid width "'+width+'".');return;}
settings.onTruncate();}
methods={init:function(options){return this.each(function(){var $this=$(this),data=$this.data('trunk8');if(!data){$this.data('trunk8',(data=new trunk8(this)));}
data.updateSettings(options);truncate.call($this);});},update:function(new_string){return this.each(function(){var $this=$(this);if(new_string){$this.data('trunk8').original_text=new_string;}
truncate.call($this);});},revert:function(){return this.each(function(){var text=$(this).data('trunk8').original_text;$(this).html(text);});},getSettings:function(){return $(this.get(0)).data('trunk8').settings;}};utils={eatStr:function(str,side,bite_size,fill){var length=str.length,key=utils.eatStr.generateKey.apply(null,arguments),half_length,half_bite_size;if(utils.eatStr.cache[key]){return utils.eatStr.cache[key];}
if((typeof str!=='string')||(length===0)){$.error('Invalid source string "'+str+'".');}
if((bite_size<0)||(bite_size>length)){$.error('Invalid bite size "'+bite_size+'".');}
else if(bite_size===0){return str;}
if(typeof(fill+'')!=='string'){$.error('Fill unable to be converted to a string.');}
switch(side){case SIDES.right:return utils.eatStr.cache[key]=$.trim(str.substr(0,length-bite_size))+fill;case SIDES.left:return utils.eatStr.cache[key]=fill+$.trim(str.substr(bite_size));case SIDES.center:half_length=length>>1;half_bite_size=bite_size>>1;return utils.eatStr.cache[key]=$.trim(utils.eatStr(str.substr(0,length-half_length),SIDES.right,bite_size-half_bite_size,''))+
fill+
$.trim(utils.eatStr(str.substr(length-half_length),SIDES.left,half_bite_size,''));default:$.error('Invalid side "'+side+'".');}},getLineHeight:function(elem){var floats=$(elem).css('float');if(floats!=='none'){$(elem).css('float','none');}
var pos=$(elem).css('position');if(pos==='absolute'){$(elem).css('position','static');}
var html=$(elem).html(),wrapper_id='line-height-test',line_height;$(elem).html('i').wrap('<div id="'+wrapper_id+'" />');line_height=$('#'+wrapper_id).innerHeight();$(elem).html(html).css({'float':floats,'position':pos}).unwrap();return line_height;}};utils.eatStr.cache={};utils.eatStr.generateKey=function(){return Array.prototype.join.call(arguments,'');};$.fn.trunk8=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}
else{$.error('Method '+method+' does not exist on jQuery.trunk8');}};$.fn.trunk8.defaults={fill:'&hellip;',lines:1,side:SIDES.right,tooltip:true,width:WIDTH.auto,parseHTML:false,onTruncate:function(){}};}));