//=============================================================================
// EnemyPaper.js
//=============================================================================

/*:ja
 * @plugindesc HDに変換するプラグイン。
 * @author As
 *
 * @help

 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * （プラグインコマンド）
 * command:ChangeHD
 * 解像度1920*1080のHDに画面を変えます。それに合わせてフルスクリーンにしちゃいます

 * command:ChangeNormal
 *    816*624のMVのデフォルトサイズに戻します。フルスクリーンも解除します。
 *　　実際にはフルスクリーンを解除じゃなくてスイッチなのでフルスクリーンじゃない時に呼ぶと
 * フルスクリーンになっちゃいます。

 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
    //var parameters = PluginManager.parameters('EnemyPaper');
    Graphics.requestFullScreen = function() {
        if (this._isFullScreen()) {
            this._requestFullScreen();
        }
    };
    Graphics.requestswitchScreen = function() {
	this._switchFullScreen();
	
    };
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.call(this, command, args);
        switch(command){
	case 'ChangeHD':
	    Graphics.width = 1920;
	    Graphics.height =  1080;
	    Graphics.requestFullScreen();
	    console.log("aaa");
            break;
        
    	case 'ChangeNormal':
	    Graphics.width = 816;
	    Graphics.height =  624;
	    Graphics.requestswitchScreen();
	    console.log("bbb");
            break;
	}
    };

 
})();
