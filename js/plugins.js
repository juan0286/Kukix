// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"HIME_LevelUpEvents","status":false,"description":"Allows you to run common events when an actor levels up","parameters":{}},
{"name":"ChangeWeaponOnBattle","status":true,"description":"make battle command that changes weapon.","parameters":{"commandName":"Equip"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"(Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"(Requires YEP_BattleEngineCore.js) Visual functions are\nadded to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"(Requires YEP_BattleEngineCore.js) Camera control is added\nto the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"Enable specified maps to memorize the locations of events\nwhen leaving and loading them upon reentering the map.","parameters":{}},
{"name":"YEP_VictoryAftermath","status":false,"description":"v1.05b Display an informative window after a battle is over\r\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Resultados de la Batalla","Battle Drops Text":"Objetos Obtenidos","---EXP Window---":"","Font Size":"28","Level Up Text":"Nivel UP!","Max Level Text":"MAXIMO NIVEL","Show Skills Learned":"true","Gained EXP Text":"EXP Obtenida","Gained EXP Format":"%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"40","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_BattleAICore","status":true,"description":"This plugin allows you to structure battle A.I.\npatterns with more control.","parameters":{"Dynamic Actions":"true","Element Testing":"true","Default AI Level":"80"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"Have more control over the flow of the battle system with\nthis plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Immortal State ID":"3","Default System":"dtb","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","---Sideview---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","---Selection Help---":"","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_CoreEngine","status":true,"description":"Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Open Console":"false","Reposition Battlers":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_X_AftermathLevelUp","status":false,"description":"v1.00 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 Ha subido a Nivel %2!","Level Down Title":"%1 ha descendido a Nivel %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Habilidad Aprendida","Skill Text Plural":"Habilidades Aprendidas","Skill Lost Text Singular":"Habilidades Olvidadas","Skill Lost Text Plural":"Habilidades Olvidadas","Skill List Width":"200"}},
{"name":"MOG_BattleResult","status":true,"description":"(v1.0) Modifica a tela de vítoria.","parameters":{"Exp X-Axis":"760","Exp Y-Axis":"160","Gold X-Axis":"760","Gold Y-Axis":"230","Treasure -Axis":"32","Treasure Y-Axis":"330","Actor X-Axis":"250","Actor Y-Axis":"0","Parameter Real X-Axis":"0","Parameter Real Y-Axis":"0","Parameter 1 X-Axis":"550","Parameter 1 Y-Axis":"140","Parameter 2 X-Axis":"700","Parameter 2 Y-Axis":"140","New Skill X-Axis":"570","New Skill Y-Axis":"520","Name X-Axis":"155","Name Y-Axis":"540"}},
{"name":"MOG_DmgPopupEffects","status":true,"description":"(v1.0) Adiciona alguns efeitos nos sprites do dano.","parameters":{"Duration":"90","PopUp Type":"0","Zoom Effect":"true","Center Y-Axis":"true"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v1.6) Adiciona novos efeitos de climas.","parameters":{}}
];
