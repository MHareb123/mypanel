!function(t){t.Zebra_Tooltips=function(o,e){var i,n,s,a=this;a.settings={},a.hide=function(t,o){var e=t.data("Zebra_Tooltip");e&&(e.sticky=!1,o&&(e.destroy=!0),t.data("Zebra_Tooltip",e),l(t))},a.show=function(t,o){var e=t.data("Zebra_Tooltip");e&&(e.sticky=!0,e.muted=!1,o&&(e.destroy=!0),t.data("Zebra_Tooltip",e),d(t))};var r=function(o){if(!(_=o.data("Zebra_Tooltip")).tooltip){var e=jQuery("<div>",{class:"Zebra_Tooltip",css:{opacity:0,display:"block"}}),r=jQuery("<div>",{class:"Zebra_Tooltip_Message",css:{"max-width":a.settings.max_width,"background-color":a.settings.background_color,color:a.settings.color}}).html(a.settings.content?a.settings.content:_.content).appendTo(e),_=jQuery("<div>",{class:"Zebra_Tooltip_Arrow"}).appendTo(e),p=jQuery("<div>").appendTo(_);a.settings.keep_visible&&(e.bind("mouseleave"+(a.settings.close_on_click?" click":""),(function(){l(o)})),e.bind("mouseenter",(function(){d(o)}))),e.appendTo("body");var c=e.outerWidth(),h=e.outerHeight(),w=p.outerWidth(),f=p.outerHeight();_={tooltip:e,tooltip_width:c,tooltip_height:h+f/2,message:r,arrow_container:_,arrow_width:w,arrow_height:f,arrow:p},p=r.outerWidth(),c=r.outerHeight();e.css({width:_.tooltip_width,height:_.tooltip_height}),_.tooltip_width+=r.outerWidth()-p,_.tooltip_height+=r.outerHeight()-c,e.css({width:_.tooltip_width,height:_.tooltip_height,display:"none"}),_=t.extend(o.data("Zebra_Tooltip"),_),o.data("Zebra_Tooltip",_)}return _.sticky&&!_.close&&(jQuery("<a>",{class:"Zebra_Tooltip_Close",href:"javascript:void(0)"}).html("x").bind("click",(function(t){t.preventDefault(),(t=o.data("Zebra_Tooltip")).sticky=!1,o.data("Zebra_Tooltip",t),l(o)})).appendTo(_.message),_.close=!0,_=t.extend(o.data("Zebra_Tooltip"),_),o.data("Zebra_Tooltip",_)),(_.window_resized||_.window_scrolled)&&(e=t(window),_.window_resized&&(i=e.width(),e.height(),r=o.offset(),t.extend(_,{element_left:r.left,element_top:r.top,element_width:o.outerWidth(),element_height:o.outerHeight()})),s=e.scrollTop(),n=e.scrollLeft(),e="left"==a.settings.position?_.element_left-_.tooltip_width+_.arrow_width:"right"==a.settings.position?_.element_left+_.element_width-_.arrow_width:_.element_left+(_.element_width-_.tooltip_width)/2,r=_.element_top-_.tooltip_height,p="left"==a.settings.position?_.tooltip_width-_.arrow_width-_.arrow_width/2:"right"==a.settings.position?_.arrow_width/2:(_.tooltip_width-_.arrow_width)/2,e+_.tooltip_width>i+n&&(p-=i+n-(e+_.tooltip_width)-6,e=i+n-_.tooltip_width-6,p+_.arrow_width>_.tooltip_width-6&&(p=_.tooltip_width-6-_.arrow_width),e+p+_.arrow_width/2<_.element_left&&(p=-1e4)),e<n&&(p-=n-e,e=n+2,0>p&&(p=_.arrow_width/2),e+p+_.arrow_width/2>_.element_left+_.element_width&&(p=-1e4)),_.arrow_container.removeClass("Zebra_Tooltip_Arrow_Top"),_.arrow_container.addClass("Zebra_Tooltip_Arrow_Bottom"),_.message.css("margin-top",""),_.arrow.css("borderColor",a.settings.background_color+" transparent transparent"),r<s?(r=_.element_top+_.element_height-a.settings.vertical_offset,_.animation_offset=Math.abs(_.animation_offset),_.message.css("margin-top",_.arrow_height/2),_.arrow_container.removeClass("Zebra_Tooltip_Arrow_Bottom"),_.arrow_container.addClass("Zebra_Tooltip_Arrow_Top"),_.arrow.css("borderColor","transparent transparent "+a.settings.background_color)):(_.animation_offset=-Math.abs(_.animation_offset),r+=a.settings.vertical_offset),_.arrow_container.css("left",p),_.tooltip.css({left:e,top:r}),t.extend(_,{tooltip_left:e,tooltip_top:r,arrow_left:p}),_.window_resized=!1,_.window_scrolled=!1,_=t.extend(o.data("Zebra_Tooltip"),_),o.data("Zebra_Tooltip",_)),_},l=function(o){var e=o.data("Zebra_Tooltip");clearTimeout(e.hide_timeout),e.sticky||(clearTimeout(e.show_timeout),e.hide_timeout=setTimeout((function(){e.tooltip&&(a.settings.onBeforeHide&&"function"==typeof a.settings.onBeforeHide&&a.settings.onBeforeHide(o),e.close=!1,e.destroy&&(e.muted=!0),o.data("Zebra_Tooltip",e),t("a.Zebra_Tooltip_Close",e.tooltip).remove(),e.tooltip.stop(),e.tooltip.animate({opacity:0,top:e.tooltip_top+e.animation_offset},a.settings.animation_speed,(function(){t(this).css("display","none"),a.settings.onHide&&"function"==typeof a.settings.onHide&&a.settings.onHide(o)})))}),a.settings.hide_delay))},d=function(t){var o=t.data("Zebra_Tooltip");clearTimeout(o.show_timeout),o.muted||(clearTimeout(o.hide_timeout),o.show_timeout=setTimeout((function(){o=r(t),a.settings.onBeforeShow&&"function"==typeof a.settings.onBeforeShow&&a.settings.onBeforeShow(t),"block"!=o.tooltip.css("display")&&o.tooltip.css({top:o.tooltip_top+o.animation_offset}),o.tooltip.css("display","block"),o.tooltip.stop(),o.tooltip.animate({top:o.tooltip_top,opacity:a.settings.opacity},a.settings.animation_speed,(function(){a.settings.onShow&&"function"==typeof a.settings.onShow&&a.settings.onShow(t)}))}),a.settings.show_delay))};a.settings=t.extend({},{animation_speed:250,animation_offset:20,background_color:"#000",close_on_click:!0,color:"#FFF",content:!1,hide_delay:100,keep_visible:!0,max_width:250,opacity:.95,position:"center",prerender:!1,show_delay:100,vertical_offset:0,onBeforeHide:null,onHide:null,onBeforeShow:null,onShow:null},e),o.each((function(){var o=t(this);o.bind({mouseenter:function(){d(o)},mouseleave:function(){l(o)}}),o.data("Zebra_Tooltip",{tooltip:null,content:o.attr("title")||"",window_resized:!0,window_scrolled:!0,show_timeout:null,hide_timeout:null,animation_offset:a.settings.animation_offset,sticky:!1,destroy:!1,muted:!1}),o.attr("title",""),a.settings.prerender&&r(o)})),t(window).bind("scroll resize",(function(e){o.each((function(){var o=t(this).data("Zebra_Tooltip");"scroll"==e.type?o.window_scrolled=!0:o.window_resized=!0,t(this).data("Zebra_Tooltip",o)}))}))}}(jQuery);