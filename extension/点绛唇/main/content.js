import {lib,game,ui,get,ai,_status} from '../../../noname.js'
export async function content(config,pack){
	const menuConfig=lib.config.extension_点绛唇_Menu_Beautification||'off';
    if(!_status.connectMode&&menuConfig!='off')lib.init.css(lib.assetURL+'extension/点绛唇/menu/',menuConfig);
};
