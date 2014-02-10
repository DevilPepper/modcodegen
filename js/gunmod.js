function makeBowgun() {/*
    makeTable('W', 'divStuff', 4);

    var trId = 'tr1';
    makeTR('1', 'tblW');
    makeTD('00', trId);
    //makeDiv('00', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');

    var divId = 'td00';
    makeLbl('Unknown', 'wUnknown1', divId);
    makeInputBox('wUnknown1', divId);
    makeBR(divId);
    makeLbl('Model', 'wModel', divId);
    makeInputBox('wModel', divId);
    makeHR(divId);
    makeLbl('Rare', 'wRare', divId);
    makeInputBox('wRare', divId);
    makeBR(divId);
    makeLbl('Unknown', 'wUnknown2', divId);
    makeInputBox('wUnknown2', divId);

    divId = 'td04';
    //makeBR('divStuff');
    //makeDiv('04', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');
    makeTD('04', trId);
    makeLbl('Cost', 'wCost', divId);
    makeInputBox('wCost', divId);

    //divId = 'div08';
    //makeBR('divStuff');
    makeHR(divId);
    //makeDiv('08', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');
    makeLbl('Sharpness', 'wSharp', divId);
    makeInputBox('wSharp', divId);
    makeA('http://adf.ly/5S6wt', 'Sharpness Video', divId);
    makeBR(divId);
    makeLbl('Attack', 'wAttack', divId);
    makeInputBox('wAttack', divId);

    divId = 'td0C';
    trId = 'tr2';
    makeTR('2', 'tblW');
    makeTD('0C', trId);

    //makeBR('divStuff');
    //makeDiv('0C', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');
    makeLbl('Defense', 'wDefense', divId);
    makeInputBox('wDefense', divId);
    makeBR(divId);
    makeLbl('Affinity', 'wAffinity', divId);
    makeInputBox('wAffinity', divId);
    makeHR(divId);
    makeLbl('Element', 'wElement', divId);
    makeSlct('wElement', 6, divId, false);
    document.getElementById('optwElement' + 0).innerHTML = 'Default';
    document.getElementById('optwElement' + 1).innerHTML = 'No Element';
    document.getElementById('optwElement' + 2).innerHTML = 'Fire';
    document.getElementById('optwElement' + 3).innerHTML = 'Water';
    document.getElementById('optwElement' + 4).innerHTML = 'Thunder';
    document.getElementById('optwElement' + 5).innerHTML = 'Dragon';
    document.getElementById('optwElement' + 6).innerHTML = 'Ice';
    makeCheck('wElement', divId);
    makeLbl('Awaken?', 'eAwaken', divId);
    makeBR(divId);
    makeLbl('Element Attack', 'wEleAtk', divId);
    makeInputBox('wEleAtk', divId);
    makeLbl('x10', 'e10', divId);

    divId = 'td10';
    makeTD('10', trId);
    //makeDiv('10', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');
    makeLbl('Status', 'wStatus', divId);
    makeSlct('wStatus', 4, divId, false);
    document.getElementById('optwStatus' + 0).innerHTML = 'Default';
    document.getElementById('optwStatus' + 1).innerHTML = 'No Status';
    document.getElementById('optwStatus' + 2).innerHTML = 'Poison';
    document.getElementById('optwStatus' + 3).innerHTML = 'Paralyze';
    document.getElementById('optwStatus' + 4).innerHTML = 'Sleep';
    makeCheck('wStatk', divId);
    makeLbl('Awaken?', 'sAwaken', divId);
    makeBR(divId);
    makeLbl('Status Attack', 'wStatk', divId);
    makeInputBox('wStatk', divId);
    makeLbl('x10', 's10', divId);
    makeHR(divId);
    makeLbl('Slots', 'wSlots', divId);
    makeSlct('wSlots', 4, divId, false);
    document.getElementById('optwSlots' + 0).innerHTML = 'Default';
    document.getElementById('optwSlots' + 1).innerHTML = '---';
    document.getElementById('optwSlots' + 2).innerHTML = 'O';
    document.getElementById('optwSlots' + 3).innerHTML = 'OO';
    document.getElementById('optwSlots' + 4).innerHTML = 'OOO';
    makeBR(divId);
    makeLbl('Phial', 'wPhial', divId);
    makeSlct('wPhial', 4, divId, false);
    document.getElementById('optwPhial' + 0).innerHTML = 'Default';
    document.getElementById('optwPhial' + 1).innerHTML = 'Power';
    document.getElementById('optwPhial' + 2).innerHTML = 'Element';
    document.getElementById('optwPhial' + 3).innerHTML = 'Para';
    document.getElementById('optwPhial' + 4).innerHTML = 'Dragon';

    divId = 'td14';
    trId = 'tr3';
    makeTR('3', 'tblW');
    makeTD('14', trId);
    //makeBR('divStuff');
    //makeDiv('14', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');
    makeLbl('Availability', 'wOline', divId);
    makeSlct('wOline', 4, divId, false);
    document.getElementById('optwOline' + 0).innerHTML = 'Default';
    document.getElementById('optwOline' + 1).innerHTML = 'N/A';
    document.getElementById('optwOline' + 2).innerHTML = 'Starter';
    document.getElementById('optwOline' + 3).innerHTML = 'Low Rank/Offline';
    document.getElementById('optwOline' + 4).innerHTML = 'High Rank';
    makeBR(divId);
    makeLbl('ID', 'wID', divId);
    makeInputBox('wID', divId);
    makeHR(divId);
    makeLbl('Bonus', 'wBonus', divId);
    makeInputBox('wBonus', divId);
    makeBR(divId);
    makeLbl('Color', 'wColor', divId);
    makeInputBox('wColor', divId);

    divId = 'tdText';
    makeTD('Text', trId);
    //makeDiv('Text', 'border-style: inset; float: left; position: relative; width: 254px;', 'divStuff');
    makeLbl('Name', 'wName', divId);
    makeInputBox('wName', divId);
    makeBR(divId);
    makeLbl('Description', 'wDesc', divId);
    makeBR(divId);
    makeTextArea('wDesc', 28, 4, divId);

    regionSlct('divSlct');
    makeButton('bowgunMod()', 'Bowgun', 'Code', 'divSlct');

    divId = null;
    trId = null;
    */
}

function bowgunMod() {
    var code = getOptionText('slctType') + getOptionText('slctEquip') + " Mod";
    var weapon = (document.getElementById('slctEquip').selectedIndex * 0x18) + (1 * document.getElementById('mysteryData').value);
    weapon += (document.getElementById('slctRegion').selectedIndex * 0x40);

    var temp2 = 0;
    var temp3 = 0;
    var temp = document.getElementById('txtwUnknown1').value;
    var binread = new jDataView(load_binary_resource(document.getElementById('hiddenData').value));

    if (temp != '') {
        code += "\n" + padTo32((weapon & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwModel').value;
    if (temp != "") {
        temp = parseInt(temp, 16);
        code += "\n" + padTo32(((weapon + 0x1) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwRare').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon + 0x2) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF) - 1);
    }
    temp = document.getElementById('txtwUnknown2').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon + 0x3) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwCost').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon & 0x0FFFFFFF) + 0x04000004)) + " " + padTo32((temp | 0));
    }
    temp = document.getElementById('txtwSharp').value;
    if (temp != '') {
        temp = parseInt(temp, 16);
        code += "\n" + padTo32(((weapon & 0x0FFFFFFF) + 0x02000008)) + " " + padTo32((temp & 0xFFFF));
    }
    temp = document.getElementById('txtwAttack').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon & 0x0FFFFFFF) + 0x0200000A)) + " " + padTo32((temp & 0xFFFF));
    }
    temp = document.getElementById('txtwDefense').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon + 0xC) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwAffinity').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon + 0xD) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    //temp = (document.getElementById('slctwElement').SelectedIndex << 8);
    temp = document.getElementById('slctwElement').value;
    if (temp != 0) {
        temp = ((temp - 1) << 8);
        if (temp != 0) {
            temp2 = document.getElementById('txtwEleAtk').value;
            if (temp2 == '') temp2 = 0;
            if (temp2 > 0x7F) {
                if (document.getElementById('chkwElement').checked) temp2 = 0x80;
                else temp2 = 0x7F;
            }
            if (document.getElementById('chkwElement').checked) temp2 *= -1;
            temp |= (temp2 & 0xFF);
        }
        code += "\n" + padTo32(((weapon + 0x0200000E) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFFFF));
    }
    temp = document.getElementById('slctwStatus').value;
    if (temp != 0) {
        temp = ((temp - 1) << 8);
        if (temp != 0) {
            temp2 = document.getElementById('txtwStatk').value;
            if (temp2 == '') temp2 = 0;
            if (temp2 > 0x7F) {
                if (document.getElementById('chkwStatk').checked) temp2 = 0x80;
                else temp2 = 0x7F;
            }
            if (document.getElementById('chkwStatk').checked) temp2 *= -1;
            temp |= (temp2 & 0xFF);
        }
        code += "\n" + padTo32(((weapon + 0x02000010) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFFFF));
    }
    temp = document.getElementById('slctwSlots').value;
    if (temp != 0) {
        temp -= 1;
        code += "\n" + padTo32(((weapon + 0x12) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('slctwPhial').value;
    if (temp != 0) {
        temp -= 1;
        code += "\n" + padTo32(((weapon + 0x13) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('slctwOline').value;
    if (temp != 0) {
        temp -= 1;
        code += "\n" + padTo32(((weapon + 0x14) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwID').value;
    if (temp != '') {
        temp = parseInt(temp, 16);
        code += "\n" + padTo32(((weapon + 0x15) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwBonus').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon + 0x16) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    temp = document.getElementById('txtwColor').value;
    if (temp != '') {
        code += "\n" + padTo32(((weapon + 0x17) & 0x0FFFFFFF)) + " " + padTo32((temp & 0xFF));
    }
    /*
    if (document.getElementById('txtwName').value != '') {
    code += "\n" + ((weapon & 0x00FFFFFF) | 0x100000000).toString(16).substr(1).toUpperCase() + " " +
    (document.getElementById('txtwName').value | 0x100000000).toString(16).substr(1).toUpperCase();
    }
    //add word wrap for 28 characters per line
    if (document.getElementById('txtwDesc').value != '') {
    code += "\n" + ((weapon & 0x00FFFFFF) | 0x100000000).toString(16).substr(1).toUpperCase() + " " +
    (document.getElementById('txtwDesc').value | 0x100000000).toString(16).substr(1).toUpperCase();
    }
    */
    temp = document.getElementById('txtwName').value;
    if (temp != '') {
        code += "\n";
        temp = temp.wordWrap(28, "\n", 1);
        temp2 = binread.getUint32(0x10, false);
        binread.seek((temp2 + (document.getElementById('slctEquip').selectedIndex * 4)));
        temp2 = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        temp3 = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);

        temp3 -= temp2;
        //temp2 += (document.getElementById('slctRegion').selectedIndex * 0x40);
        if (temp3 == (0 - temp2)) temp3 = 20;
        temp3--;

        if (temp.length > temp3) {//use pointer redirect
            temp2 = temp.length % 8;
            for (x = 0; x < (8 - temp2); x++) {
                temp += "\0";
            }
            temp2 = temp.length / 8;
            temp = temp.toHex();
            temp2 |= 0x68200000;
            temp3 = (document.getElementById('unownData').value & 0x0FFFFFFF) + (document.getElementById('slctEquip').selectedIndex * 4);
            //temp3 += (document.getElementById('slctRegion').selectedIndex * 0x40);
            code += padTo32(temp2) + " 00000001\n" + temp + "\n80000004 80001850\n8A00044F " + padTo32(temp3);
        }
        else {//use direct write
            temp2 += 0x06000000;
            temp3 = temp.length + 1;
            var y = temp.length % 8;
            for (x = 0; x < (8 - y); x++) {
                temp += "\0";
            }
            y = null;
            temp = temp.toHex();
            code += padTo32(temp2) + " " + padTo32(temp3) + "\n" + temp;
        }
    }

    temp = document.getElementById('txtwDesc').value;
    if (temp != '') {
        code += "\n";
        temp = temp.wordWrap(28, "\n", 1);
        temp2 = binread.getUint32(0x18, false);
        binread.seek((temp2 + (document.getElementById('slctEquip').selectedIndex * 4)));
        temp2 = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        temp3 = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);

        temp3 -= temp2;
        //temp2 += (document.getElementById('slctRegion').selectedIndex * 0x40);
        if (temp3 == (0 - temp2)) temp3 = 0x30;
        temp3--;

        if (temp.length > temp3) {//use pointer redirect
            temp2 = temp.length % 8;
            for (x = 0; x < (8 - temp2); x++) {
                temp += "\0";
            }
            temp2 = temp.length / 8;
            temp = temp.toHex();
            temp2 |= 0x68200000;
            temp3 = ((document.getElementById('_Data').value & 0x0FFFFFFF)) + (document.getElementById('slctEquip').selectedIndex * 4);
            //temp3 += (document.getElementById('slctRegion').selectedIndex * 0x40);
            code += padTo32(temp2) + " 00000001\n" + temp + "\n80000004 80001850\n8A00044F " + padTo32(temp3);
        }
        else {//use direct write
            temp2 += 0x06000000;
            temp3 = temp.length + 1;
            var y = temp.length % 8;
            for (x = 0; x < (8 - y); x++) {
                temp += "\0";
            }
            y = null;
            temp = temp.toHex();
            code += padTo32(temp2) + " " + padTo32(temp3) + "\n" + temp;
        }
    }


    document.getElementById('txtCode').value += code + "\n";

    weapon = null;
    code = null;
    temp = null;
    temp2 = null;
    temp3 = null;
    binread = null;
}