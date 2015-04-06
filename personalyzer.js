/**
 *
 * Copyright (c) 2015 AddActors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

var prsn_div = document.createElement('div');
prsn_div.id = 'prsn';
prsn_div.style.width = prsn_width + 'px';
prsn_div.style.height = prsn_height + 'px';
prsn_div.style.position = 'fixed';
if(prsn_align == 'right'){
	prsn_div.style.right = '0';
} else if(prsn_align == 'center'){
	prsn_div.style.left = '50%';
	prsn_div.style.marginLeft = '-' + prsn_width/2 + 'px';
} else {
	prsn_div.style.left = '0';
}
prsn_div.style.bottom = '0';
prsn_div.style.zIndex = '99999';

var prsn_controls = document.createElement('div');
prsn_controls.id = 'prsn_ctrl';
prsn_controls.style.position = 'absolute';
prsn_controls.style.zIndex = '2';
prsn_controls.style.borderRadius = '50%';
prsn_controls.style.MozBorderRadius = '50%';
prsn_controls.style.webkitBorderRadius = '50%';
prsn_controls.style.backgroundColor = '#2196F3';
prsn_controls.style.width = '32px';
prsn_controls.style.height = '32px';
prsn_controls.style.textAlign = 'center';
prsn_controls.style.padding = '15px';
prsn_controls.style.cursor = 'pointer';
prsn_controls.style.bottom = '15px';
prsn_controls.style.left = '15px';
prsn_controls.style.webkitBoxShadow = '0 2px 5px 0 rgba(0,0,0,0.3)';
prsn_controls.style.boxShadow = '0 2px 5px 0 rgba(0,0,0,0.3)';
prsn_controls.style.MozBoxShadow = '0 2px 5px 0 rgba(0,0,0,0.3)';
prsn_controls.style['-webkit-transition'] = 'all 100ms ease';
prsn_controls.style['-moz-transition'] = 'all 100ms ease';
prsn_controls.style['-ms-transition'] = 'all 100ms ease';
prsn_controls.style['-o-transition'] = 'all 100ms ease';
prsn_controls.style['transition'] = 'all 100ms ease';
prsn_controls.style.opacity = '0.2';
prsn_controls.style.display = 'none';

var prsn_play_btn = document.createElement('img');
prsn_play_btn.id = 'prsn_play_btn';
prsn_play_btn.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQklEQVRYR+WXMWvCQBiGe1sXoT/I39LBwbUVdCjoUAc71aVu7dS5dCxu4uDiZgdRl2ZqQYUqKCi2ps9BvkUaquYu39DAy71cIO/D5ZL7PnMSXWEY5rE51EdlY8y73PM5Gvtwwk8ZxigThS0Zb9AtIKs0AM4I+fwlKGCuBMSTLwhZgTgAyW1jLgDpuQbZF8DmbtFDtD8mrkAOAZDMOaaK7liRTVKQYwAkc4QpAPGSBCIJgOQ2I5DBMSAuAGzuF2qga1ZkdgiIKwDJnGIq6B6Q731AXANI5ivmEojWXxC+ACT3GVME5C0OxDeAzV2jOqoBstgFSQNAMj8wV+gRkFAm0wSQzC7mHIihndAAsLkdALL/FkDtFahtQtXPUO1HpPYrVjuMVI9jtYJErSRTK0pVy3K1xiTgxEqlNdNtTu25rNWe/wDWQcwho92NcgAAAABJRU5ErkJggg==';
prsn_play_btn.width = 32;
prsn_play_btn.height = 32;
prsn_play_btn.style.position = 'relative';
prsn_play_btn.style.left = '2px';
prsn_play_btn.style.display = 'none';
prsn_play_btn.style['-moz-transform'] = 'scale(0.7)';
prsn_play_btn.style['-webkit-transform'] = 'scale(0.7)';
prsn_play_btn.style['-o-transform'] = 'scale(0.7)';
prsn_play_btn.style['-ms-transform'] = 'scale(0.7)';
prsn_play_btn.style['transform'] = 'scale(0.7)';
prsn_play_btn.style['-webkit-transition'] = 'all 100ms ease';
prsn_play_btn.style['-moz-transition'] = 'all 100ms ease';
prsn_play_btn.style['-ms-transition'] = 'all 100ms ease';
prsn_play_btn.style['-o-transition'] = 'all 100ms ease';
prsn_play_btn.style['transition'] = 'all 100ms ease';

var prsn_pause_btn = document.createElement('img');
prsn_pause_btn.id = 'prsn_pause_btn';
prsn_pause_btn.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjUlEQVRYR2P8//+/AAMDw2YgtgFiQuAVUEEBIyPjcmwKgWZFAsUnALEYIYOA8keA2JcRqCkRyJhHhAaYkktAB+jjcMBFoLgeCWYlgRxQANTQT4Kmh0AHKOBwwAOguDwJZhWOOmA0BEZDYDQERkNgNARGQ2A0BEZDYDQERkNgNARGQ2BQhMCAd04HtHsOACxJMPJcPSrxAAAAAElFTkSuQmCC';
prsn_pause_btn.width = 32;
prsn_pause_btn.height = 32;
prsn_pause_btn.style.position = 'relative';
prsn_pause_btn.style.left = '0';
prsn_pause_btn.style['-moz-transform'] = 'scale(0.7)';
prsn_pause_btn.style['-webkit-transform'] = 'scale(0.7)';
prsn_pause_btn.style['-o-transform'] = 'scale(0.7)';
prsn_pause_btn.style['-ms-transform'] = 'scale(0.7)';
prsn_pause_btn.style['transform'] = 'scale(0.7)';
prsn_pause_btn.style['-webkit-transition'] = 'all 100ms ease';
prsn_pause_btn.style['-moz-transition'] = 'all 100ms ease';
prsn_pause_btn.style['-ms-transition'] = 'all 100ms ease';
prsn_pause_btn.style['-o-transition'] = 'all 100ms ease';
prsn_pause_btn.style['transition'] = 'all 100ms ease';

var prsn_close_btn = document.createElement('button');
prsn_close_btn.id = 'prsn_close_btn';
prsn_close_btn.style.background = '#2196F3';
prsn_close_btn.style.border = 'none';
prsn_close_btn.style.outline = 'none';
prsn_close_btn.style.borderRadius = '50%';
prsn_close_btn.style.MozBorderRadius = '50%';
prsn_close_btn.style.webkitBorderRadius = '50%';
prsn_close_btn.style.width = '24px';
prsn_close_btn.style.height = '24px';
prsn_close_btn.style.padding = '0';
prsn_close_btn.style.position = 'absolute';
prsn_close_btn.style.bottom = '-2px';
prsn_close_btn.style.right = '-2px';
prsn_close_btn.style.cursor = 'pointer';

var prsn_close_img = document.createElement('img');
prsn_close_img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVQ4T3WSyS5EURCG70lY2uOFpFmY0lg2QvMAtngJMSbaRgwxtBU707MQe0QMub7/pq7UPe7p5M+pqq7/u3WGkOd5f5ZlHfSM2iGET9bkj/7An6toEK0ECtcEQ+a4Ym2mIGbeoGfZ+rsC7JO03CdrITVmWQ4F6CU4RaMpSMJ8S/+I9pMZ5IRwLIaQfyE/tlru0DBbfS8ADnJMPB5BnsiXXO3ezG+q/QEc5Ih4whl8+EDS4MuF+R/AID2sgkxGkEczv/p6ZQIDqLaH5iLAGfkMX/9OAuy0d2mYT2zh3CA62OoWzLxNdcGZNfZLtJ0L8mkmKSDlNWrdQouRuUH+gXQ7/mAvyacE0UOSeRO1YzMNxYHZO4mvuMtfTQHWCNZT5rKeeGwdAbTvcvTaq4og/tnfCNBHwwH6QbPl2G6iSmiT7FAcQK1fAbiO2q1A3eoAAAAASUVORK5CYII=';
prsn_close_img.width = 16;
prsn_close_img.height = 16;
prsn_close_img.style['-moz-transform'] = 'scale(0.5)';
prsn_close_img.style['-webkit-transform'] = 'scale(0.5)';
prsn_close_img.style['-o-transform'] = 'scale(0.5)';
prsn_close_img.style['-ms-transform'] = 'scale(0.5)';
prsn_close_img.style['transform'] = 'scale(0.5)';
prsn_close_btn.appendChild(prsn_close_img);

var prsn_player = document.createElement('object');
prsn_player.id = 'prsn_player';
prsn_player.data = prsn_swf;
prsn_player.width = prsn_width;
prsn_player.height = prsn_height;
prsn_player.wmode = 'transparent';
prsn_player.position = 'relative';
prsn_player.zIndex = '1';
prsn_player.innerHTML = '<param name="movie" value="' + prsn_swf + '" wmode="transparent"></param><param name="wmode" value="transparent"></param><param name="flashvars" value="src=' + prsn_flv + '"></param><embed id="prsn_player" type="application/x-shockwave-flash" src="' + prsn_swf + '" width="' + prsn_width + '" height="' + prsn_height + '" wmode="transparent" flashvars="src=' + prsn_flv + '"></embed>';

var prsn_c2p = document.createElement('button');
prsn_c2p.id = 'prsn_c2p';
prsn_c2p.style.background = 'rgba(0,0,0,0.7)';
prsn_c2p.style.border = 'none';
prsn_c2p.style.outline = 'none';
prsn_c2p.style.borderRadius = '5px';
prsn_c2p.style.MozBorderRadius = '5px';
prsn_c2p.style.webkitBorderRadius = '5px';
prsn_c2p.style.width = '60px';
prsn_c2p.style.height = '60px';
prsn_c2p.style.padding = '0';
prsn_c2p.style.position = 'absolute';
prsn_c2p.style.bottom = '50%';
prsn_c2p.style.left = '50%';
prsn_c2p.style.marginLeft = '-30px';
prsn_c2p.style.marginBottom = '-30px';
prsn_c2p.style.cursor = 'pointer';
prsn_c2p.style.display = 'none';
prsn_c2p.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQklEQVRYR+WXMWvCQBiGe1sXoT/I39LBwbUVdCjoUAc71aVu7dS5dCxu4uDiZgdRl2ZqQYUqKCi2ps9BvkUaquYu39DAy71cIO/D5ZL7PnMSXWEY5rE51EdlY8y73PM5Gvtwwk8ZxigThS0Zb9AtIKs0AM4I+fwlKGCuBMSTLwhZgTgAyW1jLgDpuQbZF8DmbtFDtD8mrkAOAZDMOaaK7liRTVKQYwAkc4QpAPGSBCIJgOQ2I5DBMSAuAGzuF2qga1ZkdgiIKwDJnGIq6B6Q731AXANI5ivmEojWXxC+ACT3GVME5C0OxDeAzV2jOqoBstgFSQNAMj8wV+gRkFAm0wSQzC7mHIihndAAsLkdALL/FkDtFahtQtXPUO1HpPYrVjuMVI9jtYJErSRTK0pVy3K1xiTgxEqlNdNtTu25rNWe/wDWQcwho92NcgAAAABJRU5ErkJggg==" width="20" height="20" />';

prsn_controls.appendChild(prsn_play_btn);
prsn_controls.appendChild(prsn_pause_btn);
prsn_controls.appendChild(prsn_close_btn);
prsn_div.appendChild(prsn_controls);
prsn_div.appendChild(prsn_c2p);
prsn_div.appendChild(prsn_player);

document.getElementsByTagName('body')[0].appendChild(prsn_div);

function prsn_addEventListener(el, eventName, handler) {
	if (el.addEventListener) {
		el.addEventListener(eventName, handler);
	} else {
		el.attachEvent('on' + eventName, function(){
				handler.call(el);
				});
	}
}

function getFlashMovieObject(movieName){
	if(window.document[movieName]){
		return window.document[movieName];
	}
	if(navigator.appName.indexOf('Microsoft Internet') == -1){
		if(document.embeds && document.embeds[movieName]){
			return document.embeds[movieName];
		}
	} else {
		return document.getElementById(movieName);
	}
}

function prsn_end_func(){
	if(prsn_end == 'close' || !prsn_hasflash){
		document.getElementById('prsn').parentNode.removeChild(document.getElementById('prsn'));
	} else {
		prsn_shrink();
	}
}

function prsn_shrink(){
	getFlashMovieObject('prsn_player').prsn_end();
	prsn_resize(prsn_width/2, prsn_height/2);
	document.getElementById('prsn_ctrl').style.display = 'none';
	document.getElementById('prsn_c2p').style.display = '';
}

function prsn_player_loaded(){
	document.getElementById('prsn_ctrl').style.display = '';
	if(prsn_start == 'shrink'){
		prsn_shrink();
	}
}

function prsn_resize(w, h){
	document.getElementById('prsn_player').width = w;
	document.getElementById('prsn_player').height = h;
	document.getElementById('prsn').style.width = w + 'px';
	document.getElementById('prsn').style.height = h + 'px';

	if(prsn_align == 'center'){
		document.getElementById('prsn').style.marginLeft = '-' +  w/2 + 'px';
	}
}

var prsn_flashObj = null;
var prsn_hasflash = false;
try {
	prsn_flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	prsn_hasflash = true;
} catch (ex) {
	if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin.description){
		prsn_hasflash = true;
	} else {
		prsn_hasflash = false;
	}

}

function prsn_ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', function() {
				if (document.readyState != 'loading')
				fn();
				});
	}
}

prsn_ready(function(){
	if(!prsn_hasflash){
		document.getElementById('prsn_player').parentNode.removeChild(document.getElementById('prsn_player'));
		var prsn_player = document.createElement('video');
		prsn_player.id = 'prsn_player';
		prsn_player.width = prsn_width;
		prsn_player.height = prsn_height;
		prsn_player.position = 'relative';
		prsn_player.zIndex = '1';
		prsn_player.autoplay = 'autoplay';
		prsn_player.innerHTML = '<source src="' + prsn_mp4 + '" type="video/mp4">';
		document.getElementById('prsn').appendChild(prsn_player);
		document.getElementById('prsn_ctrl').style.display = '';
		document.getElementById("prsn_player").addEventListener("webkitendfullscreen", prsn_end_func, false);
	}	
});

prsn_addEventListener(document.getElementById('prsn_play_btn'), 'click', function(){
	document.getElementById('prsn_play_btn').style.display = 'none';
	document.getElementById('prsn_pause_btn').style.display = 'block';
	if(prsn_hasflash){
		getFlashMovieObject('prsn_player').prsn_play();
	} else {
		document.getElementById('prsn_player').play();
	}
});

prsn_addEventListener(document.getElementById('prsn_pause_btn'), 'click', function(){
	document.getElementById('prsn_play_btn').style.display = 'block';
	document.getElementById('prsn_pause_btn').style.display = 'none';
	if(prsn_hasflash){
		getFlashMovieObject('prsn_player').prsn_pause();
	} else {
		document.getElementById('prsn_player').pause();
	}
});

prsn_addEventListener(document.getElementById('prsn_c2p'), 'click', function(){
	document.getElementById('prsn_c2p').style.display = 'none';
	document.getElementById('prsn_ctrl').style.display = '';
	document.getElementById('prsn_player').style.opacity = '0';
	getFlashMovieObject('prsn_player').prsn_seek(0);
	getFlashMovieObject('prsn_player').prsn_vlm(1);
	getFlashMovieObject('prsn_player').prsn_play();
	prsn_resize(prsn_width, prsn_height);
	document.getElementById('prsn_player').style.opacity = '1';
});

prsn_addEventListener(document.getElementById('prsn_ctrl'), 'mouseover', function(){
	var prsn_ctrl = document.getElementById('prsn_ctrl');
	prsn_ctrl.style.webkitBoxShadow = '0 2px 5px 0 rgba(0,0,0,0.5)';
	prsn_ctrl.style.boxShadow = '0 2px 5px 0 rgba(0,0,0,0.5)';
	prsn_ctrl.style.MozBoxShadow = '0 2px 5px 0 rgba(0,0,0,0.5)';

	var prsn_play_btn = document.getElementById('prsn_play_btn');
	prsn_play_btn.style['-moz-transform'] = 'scale(0.75)';
	prsn_play_btn.style['-webkit-transform'] = 'scale(0.75)';
	prsn_play_btn.style['-o-transform'] = 'scale(0.75)';
	prsn_play_btn.style['-ms-transform'] = 'scale(0.75)';
	prsn_play_btn.style['transform'] = 'scale(0.75)';

	var prsn_pause_btn = document.getElementById('prsn_pause_btn');
	prsn_pause_btn.style['-moz-transform'] = 'scale(0.75)';
	prsn_pause_btn.style['-webkit-transform'] = 'scale(0.75)';
	prsn_pause_btn.style['-o-transform'] = 'scale(0.75)';
	prsn_pause_btn.style['-ms-transform'] = 'scale(0.75)';
	prsn_pause_btn.style['transform'] = 'scale(0.75)';
});

prsn_addEventListener(document.getElementById('prsn_ctrl'), 'mouseout', function(){
	var prsn_ctrl = document.getElementById('prsn_ctrl');
	prsn_ctrl.style.webkitBoxShadow = '0 2px 5px 0 rgba(0,0,0,0.3)';
	prsn_ctrl.style.boxShadow = '0 2px 5px 0 rgba(0,0,0,0.3)';
	prsn_ctrl.style.MozBoxShadow = '0 2px 5px 0 rgba(0,0,0,0.3)';

	var prsn_play_btn = document.getElementById('prsn_play_btn');
	prsn_play_btn.style['-moz-transform'] = 'scale(0.7)';
	prsn_play_btn.style['-webkit-transform'] = 'scale(0.7)';
	prsn_play_btn.style['-o-transform'] = 'scale(0.7)';
	prsn_play_btn.style['-ms-transform'] = 'scale(0.7)';
	prsn_play_btn.style['transform'] = 'scale(0.7)';

	var prsn_pause_btn = document.getElementById('prsn_pause_btn');
	prsn_pause_btn.style['-moz-transform'] = 'scale(0.7)';
	prsn_pause_btn.style['-webkit-transform'] = 'scale(0.7)';
	prsn_pause_btn.style['-o-transform'] = 'scale(0.7)';
	prsn_pause_btn.style['-ms-transform'] = 'scale(0.7)';
	prsn_pause_btn.style['transform'] = 'scale(0.7)';
});

prsn_addEventListener(document.getElementById('prsn_close_btn'), 'click', function(){
	prsn_end_func();
});

prsn_addEventListener(document.getElementById('prsn'), 'mouseover', function(){
	document.getElementById('prsn_ctrl').style.opacity = '1';
});

prsn_addEventListener(document.getElementById('prsn'), 'mouseout', function(){
	document.getElementById('prsn_ctrl').style.opacity = '0.2';
});


