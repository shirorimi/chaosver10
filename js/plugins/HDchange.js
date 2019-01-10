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
：
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

    Window_Message.hdchange = function(){
	this.x = (1920 -816)/2;
	this.y = (1080 - 624)/2;
	//Window_Base.prototype.initiaize.call(this,this.x,0,this.width,this.height);
    };
    Window_Message.normalchange = function(){
	this.x = (Graphics.boxWidth - this.width) / 2;
	this.y = (Graphics.boxHeight - this.height);
    };

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Game_Interpreter_pluginCommand.call(this, command, args);
        switch(command){
	case 'ChangeHD':
	    Window_Base.prototype.standardFontSize = function() {
		return 28
	    };
	    Graphics.width = 1920;
	    Graphics.height =  1080;
	    Graphics.boxHeight =  1080;
	    Graphics.boxWidth =  1920;
	    Graphics.requestFullScreen();
	    //Window_Message.hdchange();
	    console.log("aaa");
            break;
        
    	case 'ChangeNormal':
	    Window_Base.prototype.standardFontSize = function() {
		return 28
	    };
	    Graphics.width = 816;
	    Graphics.height =  624;
	    Graphics.boxHeight =  624;
	    Graphics.boxWidth =  816;
	    Graphics.requestswitchScreen();
	    console.log("bbb");
            break;
	}
    };

 
})();
