/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_682485692826866817783913582
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('682485692826866817783913582',event);/*luc!d_debug_end*/
	/*luc!d_function*/log(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidDataAction_10_166_180863474993203158949897843
function dataProcessor(senderObject, event) {
	lucidDebug('180863474993203158949897843',event);
/*lucidcode*/
    /*luc!d_variable*/event.pics/*luc!d_variable_end*/ = /*luc!d_data*/[["GalleryImages/road.jpg"],["GalleryImages/tube.jpg"],["GalleryImages/tube2.jpg"],["GalleryImages/DSC00223.jpg"],["GalleryImages/DSC00238.jpg"],["GalleryImages/DSC00246.jpg"]]/*luc!d_data_end*/;
    /*luc!d_callback*//*luc!d_callback_end*/
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidLoopAction_148_250_10259135843834045251428910675
function createThumbs(senderObject, event) {
	lucidDebug('10259135843834045251428910675',event);
/*lucidcode*/
    /*luc!d_setup*/var i = 0;
/*luc!d_setup_end*/ 
    while(/*luc!d_condition*/i < event.pics.length/*luc!d_condition_end*/) {
    /*luc!d_body*/event.currentpic = event.pics[i];
createThumbnail(senderObject,event);
i++;/*luc!d_body_end*/
    }
    /*luc!d_after*//*luc!d_after_end*/
/*lucidcode_end*/

/*luc!d_callback*/myTimer(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCreateElementAction_28_307_5531464902763495671747527755
function createThumbnail(senderObject, event) {
	lucidDebug('5531464902763495671747527755',event);
/*lucidcode*/
var temp = document.createElement(/*luc!d_tagname*/'IMG'/*luc!d_tagname_end*/);
/*luc!d_variable*/var newPic/*luc!d_variable_end*/ = temp;
temp.setAttribute(/*luc!d_attr_0*/'src'/*luc!d_attr_0_end*/, /*luc!d_val_0*/event.currentpic/*luc!d_val_0_end*/);
temp.setAttribute(/*luc!d_attr_1*/'class'/*luc!d_attr_1_end*/, /*luc!d_val_1*/'thumb'/*luc!d_val_1_end*/);
temp.setAttribute(/*luc!d_attr_2*/'style'/*luc!d_attr_2_end*/, /*luc!d_val_2*/'cursor:pointer;opacity:0'/*luc!d_val_2_end*/);
/*luc!d_element*/document.getElementById('gallery')/*luc!d_element_end*/.appendChild(temp);
/*lucidcode*/

}
//EndLucid

//Lucid_LucidBindingAction_257_498_956654936289444263639267786
function binding(senderObject, event) {
	lucidDebug('956654936289444263639267786',event);
/*lucidcode*/
$(/*luc!d_bindto*/'IMG.thumb'/*luc!d_bindto_end*/).bind(/*luc!d_event*/'click'/*luc!d_event_end*/, function(event) {	/*luc!d_function*/prepareBigImage(this,event);/*luc!d_function_end*/
    });
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidCustomAction_586_213_21198068098393351332032986835
function prepareBigImage(senderObject, event) {
	lucidDebug('21198068098393351332032986835',event);
/*lucidcode*/var src = senderObject.src;
event.bigImage = src.replace('GalleryImages/','GalleryImages/big/'); // save the new SRC in the event object for use later.
/*lucidcode_end*/

/*luc!d_callback*/jquerymethod_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCreateElementAction_595_406_58788045208194695877377902
function createElement_1(senderObject, event) {
	lucidDebug('58788045208194695877377902',event);
/*lucidcode*/
var temp = document.createElement(/*luc!d_tagname*/'IMG'/*luc!d_tagname_end*/);
/*luc!d_variable*/var bigImage/*luc!d_variable_end*/ = temp;
temp.setAttribute(/*luc!d_attr_0*/'src'/*luc!d_attr_0_end*/, /*luc!d_val_0*/event.bigImage/*luc!d_val_0_end*/);
temp.setAttribute(/*luc!d_attr_1*/'style'/*luc!d_attr_1_end*/, /*luc!d_val_1*/'z-index:999;cursor:pointer;opacity:0'/*luc!d_val_1_end*/);
temp.setAttribute(/*luc!d_attr_2*/'id'/*luc!d_attr_2_end*/, /*luc!d_val_2*/'bigimage'/*luc!d_val_2_end*/);
temp.setAttribute(/*luc!d_attr_3*/'width'/*luc!d_attr_3_end*/, /*luc!d_val_3*/'100%'/*luc!d_val_3_end*/);
temp.setAttribute(/*luc!d_attr_4*/'height'/*luc!d_attr_4_end*/, /*luc!d_val_4*/'auto'/*luc!d_val_4_end*/);
/*luc!d_element*/document.getElementById('largeimage')/*luc!d_element_end*/.appendChild(temp);
/*lucidcode*/

/*luc!d_callback*/showBigImage(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidTimeoutAction_98_385_4550166202750653731638915667
function myTimer(senderObject, event) {
	lucidDebug('4550166202750653731638915667',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/splitter(senderObject,event);/*luc!d_callback_end*/ };
    setTimeout(delayFunction,/*luc!d_delay*/1000/*luc!d_delay_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidJQueryAnimateAction_73_572_145514274910404104071365856575
function myAnimator_1(senderObject, event) {
	lucidDebug('145514274910404104071365856575',event);
/*lucidcode*/
$(/*luc!d_element*/'IMG.thumb'/*luc!d_element_end*/).animate(    {
    /*luc!d_allprops*//*luc!d_prop_0*/'opacity'/*luc!d_prop_0_end*/: /*luc!d_value_0*/'1'/*luc!d_value_0_end*/
/*luc!d_allprops_end*/
    }, {
    duration: /*luc!d_duration*/1000/*luc!d_duration_end*/,
    specialEasing: {
    /*luc!d_alleasings*//*luc!d_prop_0*/'opacity'/*luc!d_prop_0_end*/: /*luc!d_easing_0*/'swing'/*luc!d_easing_0_end*/
/*luc!d_alleasings_end*/
    },
    complete: function() {
        /*luc!d_callback*//*luc!d_callback_end*/
    }
    });
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidSplitterAction_139_460_11177553102074034861349350723
function splitter(senderObject, event) {
	lucidDebug('11177553102074034861349350723',event);
/*lucidcode*/
/*luc!d_call_0*/myAnimator_1(senderObject,event);/*luc!d_call_0_end*/
/*luc!d_call_1*/binding(senderObject,event);/*luc!d_call_1_end*/
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidGenericAction_590_314_1697089118990067721854474226_MiscJQuery
function jquerymethod_1(senderObject, event) {
	lucidDebug('1697089118990067721854474226',event);
/*lucidcode*/
$(/*luc!d_bindto*/'DIV.#largeimage'/*luc!d_bindto_end*/)./*luc!d_method*/empty/*luc!d_method_end*/();
/*lucidcode_end*/

/*luc!d_callback*/createElement_1(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCommentAction_247_244_182_95_1806899572994854377209838697
/*We create all the thumbnail elements from the list in the 'json' object. They look nice, because we've setup a '.thumb' selector in the CSS.*/
//EndLucid

//Lucid_LucidCommentAction_190_576_184_86_103159272913435140721797943546
/*All the hidden thumbs exist now, so let's show them.*/
//EndLucid

//Lucid_LucidCommentAction_375_478_158_94_213112797221355607381475131255
/*All the new thumbs are bound to click events, so they'll show the big image when clicked.*/
//EndLucid

//Lucid_LucidCommentAction_717_205_173_80_2079281695486060234186559650
/*The custom code converts the thumbnail path into the big image path*/
//EndLucid

//Lucid_LucidCommentAction_711_304_156_80_12396722582852970121803380580
/*Remove any existing big image by emptying the container.*/
//EndLucid

//Lucid_LucidCommentAction_722_400_154_82_88979738218959652131124980705
/*Create the big image with the converted path!*/
//EndLucid

//Lucid_LucidJSONAction_220_151_107117762992699780258199229
function jsonRequest(senderObject, event) {
	lucidDebug('107117762992699780258199229',event);
/*lucidcode*/
    jQuery.getJSON(/*luc!d_url*/'data.json'/*luc!d_url_end*/,function (data) {/*luc!d_var*/event.pics/*luc!d_var_end*/ = data ;  /*luc!d_function*/log_1(senderObject,event);/*luc!d_function_end*/ });/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidDebugAction_360_183_161124029134678216797262811
function log_1(senderObject, event) {
	lucidDebug('161124029134678216797262811',event);	var uid = '161124029134678216797262811';
/*lucidcode*/
    lucidLog(uid,/*luc!d_debug*/"'picture-data read'"/*luc!d_debug_end*/);
    /*luc!d_callback*/createThumbs(senderObject,event);/*luc!d_callback_end*/
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidDebugAction_113_153_2251092851693050628943582046
function log(senderObject, event) {
	lucidDebug('2251092851693050628943582046',event);	var uid = '2251092851693050628943582046';
/*lucidcode*/
    lucidLog(uid,/*luc!d_debug*/"Requesting picture-data. If successful, a further log-entry will say: 'picture-data read'.  If unsuccessful, there will be NO further log-entry."/*luc!d_debug_end*/);
    /*luc!d_callback*/jsonRequest(senderObject,event);/*luc!d_callback_end*/
    /*lucidcode_end*/


}
//EndLucid

//Lucid_LucidJQueryAnimateAction_598_499_749275691232432629222441710
function showBigImage(senderObject, event) {
	lucidDebug('749275691232432629222441710',event);
/*lucidcode*/
$(/*luc!d_element*/'IMG.#bigimage'/*luc!d_element_end*/).animate(    {
    /*luc!d_allprops*//*luc!d_prop_0*/'opacity'/*luc!d_prop_0_end*/: /*luc!d_value_0*/'1'/*luc!d_value_0_end*/
/*luc!d_allprops_end*/
    }, {
    duration: /*luc!d_duration*/1000/*luc!d_duration_end*/,
    specialEasing: {
    /*luc!d_alleasings*//*luc!d_prop_0*/'opacity'/*luc!d_prop_0_end*/: /*luc!d_easing_0*/'swing'/*luc!d_easing_0_end*/
/*luc!d_alleasings_end*/
    },
    complete: function() {
        /*luc!d_callback*//*luc!d_callback_end*/
    }
    });
/*lucidcode_end*/

}
//EndLucid

