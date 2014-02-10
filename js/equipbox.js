function EquipMod() {
    var addy = document.getElementById('txtBoxSlot').value;
    if (addy < 1 || addy > 800 || addy != parseInt(addy)) addy = 800;
    addy = 0x140E1370 + ((addy - 1) * 0xC);
    var code = (document.getElementById('mysteryData').value << 24) | document.getElementById('slctEquip').selectedIndex;
    document.getElementById('txtCode').value += "4A000000 90000000\n" + addy.toString(16).toUpperCase() + " " +
        (code + 0x100000000).toString(16).substr(1).toUpperCase() + "\nE0000000 80008000\n";

    addy = null;
    code = null;
}

function makeTalisman() {
    makeTable('T', 'divStuff', 4);

    makeTR('Slot', 'tblT');
    makeTD('lblSlot', 'trSlot');
    makeLbl('Slots', 'tSlot', 'tdlblSlot');

    makeTD('Slot', 'trSlot');
    makeSlct('tSlot', 3, 'tdSlot', true);
    document.getElementById('opttSlot' + 0).innerHTML = '---';
    document.getElementById('opttSlot' + 1).innerHTML = 'O';
    document.getElementById('opttSlot' + 2).innerHTML = 'OO';
    document.getElementById('opttSlot' + 3).innerHTML = 'OOO';
    //=================================
    makeTR('Skill1', 'tblT');
    makeTD('lblSkill1', 'trSkill1');
    makeLbl('First Skill points:', 'tSkill1', 'tdlblSkill1');

    makeTD('Skill1', 'trSkill1');
    makeInputBox('tSkill1', 'tdSkill1');
    //==================================
    makeTR('Skill2', 'tblT');
    makeTD('lblSkill2', 'trSkill2');
    makeLbl('Second Skill points:', 'tSkill2', 'tdlblSkill2');

    makeTD('Skill2', 'trSkill2');
    makeInputBox('tSkill2', 'tdSkill2');
    //=================================
    makeTR('A', 'tblT');
    makeTD('lblA', 'trA');
    makeLbl('Skill 1:', 'tA', 'tdlblA');

    makeTD('A', 'trA');
    dropDown('Skill Tree', 'tA', 'tdA');
    //=================================  
    makeTR('B', 'tblT');
    makeTD('lblB', 'trB');
    makeLbl('Skill 2:', 'tB', 'tdlblB');

    makeTD('B', 'trB');
    dropDown('Skill Tree', 'tB', 'tdB');
    //=================================  
    makeTR('y', 'tblT');
    makeTD('lbly', 'try');
    makeLbl('', 'ty', 'tdlbly');

    makeTD('y', 'try');
    noSlct('ty', 'tdy');
}

function slcttSlot_onchange() {

    var selection = document.getElementById('slcttSlot').value;

    document.getElementById('txttSkill1').disabled = false;
    document.getElementById('txttSkill2').disabled = false;

    removeSlct('slcttA');
    removeSlct('slcttB');
    removeSlct('slctty');

    if (selection == 0) {
        document.getElementById('lbltA').innerHTML = 'Skill 1:';
        document.getElementById('lbltB').innerHTML = 'Skill 2:';
        document.getElementById('lblty').innerHTML = '';
        
        dropDown('Skill Tree', 'tA', 'tdA');
        dropDown('Skill Tree', 'tB', 'tdB');
        noSlct('ty', 'tdy');

    }
    if (selection == 1) {
        document.getElementById('lbltA').innerHTML = 'Decoration:';
        document.getElementById('lbltB').innerHTML = 'Skill 1:';
        document.getElementById('lblty').innerHTML = 'Skill 2:';

        dropDown('Decoration', 'tA', 'tdA');
        dropDown('Skill Tree', 'tB', 'tdB');
        dropDown('Skill Tree', 'ty', 'tdy');
    }
    if (selection == 2) {
        document.getElementById('lbltA').innerHTML = 'Decoration 1:';
        document.getElementById('lbltB').innerHTML = 'Decoration 2:';
        document.getElementById('lblty').innerHTML = 'Skill:';

        document.getElementById('txttSkill2').value = '';
        document.getElementById('txttSkill2').disabled = true;

        dropDown('Decoration', 'tA', 'tdA');
        dropDown('Decoration', 'tB', 'tdB');
        dropDown('Skill Tree', 'ty', 'tdy');

    }
    if (selection == 3) {
        document.getElementById('lbltA').innerHTML = 'Decoration 1:';
        document.getElementById('lbltB').innerHTML = 'Decoration 2:';
        document.getElementById('lblty').innerHTML = 'Decoration 3:';

        document.getElementById('txttSkill1').value = '';
        document.getElementById('txttSkill1').disabled = true;
        document.getElementById('txttSkill2').value = '';
        document.getElementById('txttSkill2').disabled = true;

        dropDown('Decoration', 'tA', 'tdA');
        dropDown('Decoration', 'tB', 'tdB');
        dropDown('Decoration', 'ty', 'tdy');
    }
}

function Talisman() {
    var addy = document.getElementById('txtBoxSlot').value;
    if (addy < 1 || addy > 800 || addy != parseInt(addy)) addy = 800;

    addy = 0x160E1370 + ((addy - 1) * 0xC);
    var code = "4A000000 90000000\n" + addy.toString(16).toUpperCase() + " 0000000C\n";

    var sS = document.getElementById('slcttSlot').value;
    var sA = document.getElementById('slcttA').selectedIndex & 0xFFFF;
    var sB = document.getElementById('slcttB').selectedIndex & 0xFFFF;
    var sy = document.getElementById('slctty').selectedIndex & 0xFFFF;

    addy = ((0x06000000 | (sS << 16)) | document.getElementById('slctEquip').selectedIndex);
    code += padTo32(addy) + " ";

    addy = (((document.getElementById('txttSkill1').value & 0xFF) + 10) << 16) |
        (((document.getElementById('txttSkill2').value & 0xFF) + 10) << 24) | (sA);
    if ((sS == 0 && sA == 0) || (sS == 1 && sB == 0) || (sS == 2 && sy == 0) || (sS == 3)) addy &= 0xFF00FFFF;
    if ((sS == 0 && sB == 0) || (sS == 1 && sy == 0) || (sS >= 2)) addy &= 0x00FFFFFF;
    code += padTo32(addy) + "\n";

    addy = ((sB) << 16) | (sy);
    code += padTo32(addy) + " 00000000\nE0000000 80008000";

    document.getElementById('txtCode').value += code + "\n";

    addy = null;
    code = null;
}