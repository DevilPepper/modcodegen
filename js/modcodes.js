/*==============================
//E38380E3 839FE383 BC = ???
Functions
--------
//takes the selected option and does stuff
codeType(selection)//called by slctMod_onchange()
weapon(selection)//called by slctType_onchange if weapon was picked
equip(selection)//called by slctType_onchange if equip box was picked

dropDowns(l, s, where)//creates dropdowns with names as options and descriptions as tooltips
makeWeapon()//creates the fields necessary for weapon modding.

//onchange events
slctMod_onchange()
slctType_onchange()
slctEquip_onchange()

//TODO:
weaponMod()//outputs weapon mod code
EquipMod()//outputs equipbox mod code
Talisman()//outputs talisman creation code
makeTalisman()//creates the fields necessary for talisman creation
//not up to date
==============================*/

function slctMod_onchange() {
    removeNextSibling('slctMod');
    removeNextSibling('mysteryData');
    codeType(document.getElementById('slctMod').selectedIndex);
}

function slctType_onchange() {
    removeNextSibling('slctType');
    removeNextSibling('mysteryData');
    switch (document.getElementById('slctMod').selectedIndex) {
        case 1:
            weapon(document.getElementById('slctType').value);
            break;
        case 2:
            armor(document.getElementById('slctType').value);
            break;
        case 4:
            equip(document.getElementById('slctType').value);
            break;
        case 5:
            pouch(document.getElementById('slctType').value);
            break;
    }
}

function codeType(selection) {
    var s = 'Type'
    //removeSlct('slct' + s);
    //removeElement('lbl' + s);

    if (selection == 0) init();
    
    if (selection == 1) {
        makeLbl('Weapon Type', s, 'divSlct');
        makeSlct(s, 9, 'divSlct', true);
        document.getElementById('opt' + s + 0).innerHTML = 'Select One';
        document.getElementById('opt' + s + 1).innerHTML = 'GS';
        document.getElementById('opt' + s + 2).innerHTML = 'SnS';
        document.getElementById('opt' + s + 3).innerHTML = 'Hammer';
        document.getElementById('opt' + s + 4).innerHTML = 'Lance';
        document.getElementById('opt' + s + 5).innerHTML = 'Bowgun Frame';
        document.getElementById('opt' + s + 6).innerHTML = 'Bowgun Barrel';
        document.getElementById('opt' + s + 7).innerHTML = 'Bowgun Stock';
        document.getElementById('opt' + s + 8).innerHTML = 'LS';
        document.getElementById('opt' + s + 9).innerHTML = 'Axe';
    }
    if (selection == 3) {
        s = 'Item';
        /*makeLbl('Items', s, 'divSlct');
        makeSlct(s, 0x2EA, 'divSlct', false);
        ReadTableContents('mhBin/mh3Item.bin', s);*/
        dropDowns('Item', s, 'divSlct');
        makeLbl('Amount', 'Amount', 'divSlct');
        makeInputBox('Amount', 'divSlct');
        makeLbl('Box Slot', 'BoxSlot', 'divSlct');
        makeInputBox('BoxSlot', 'divSlct');
        makeButton('ItemMod()', 'Item', 'Code', 'divSlct');

    }
    if (selection == 4) {
        makeLbl('Equip Box', s, 'divSlct');
        makeSlct(s, 15, 'divSlct', true);
        document.getElementById('opt' + s + 0).innerHTML = 'Select One';
        document.getElementById('opt' + s + 1).innerHTML = 'Chest';
        document.getElementById('opt' + s + 2).innerHTML = 'Arms';
        document.getElementById('opt' + s + 3).innerHTML = 'Belt';
        document.getElementById('opt' + s + 4).innerHTML = 'Leggings';
        document.getElementById('opt' + s + 5).innerHTML = 'Helmet';
        document.getElementById('opt' + s + 6).innerHTML = 'Talisman';
        document.getElementById('opt' + s + 7).innerHTML = 'GS';
        document.getElementById('opt' + s + 8).innerHTML = 'SnS';
        document.getElementById('opt' + s + 9).innerHTML = 'Hammer';
        document.getElementById('opt' + s + 10).innerHTML = 'Lance';
        document.getElementById('opt' + s + 11).innerHTML = 'Bowgun Frame';
        document.getElementById('opt' + s + 12).innerHTML = 'Bowgun Barrel';
        document.getElementById('opt' + s + 13).innerHTML = 'Bowgun Stock';        
        document.getElementById('opt' + s + 14).innerHTML = 'LS';
        document.getElementById('opt' + s + 15).innerHTML = 'Axe';
    }

    selection = null;
    s = null;
}

//<div id="divCode" style = "border-style: inset; float: left; position: relative; width: 254px;" >
function weapon(selection) {
    //var binread = new BinaryReader(load_binary_resource('mhBin/mh3_80.BIN'));
    var s = 'Equip';
    if (selection == 1) {//Greatsword
        dropDowns('Great Sword', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80897860; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Great Sword.bin';
        document.getElementById('unownData').value = 0x81666B20; //Name LUT
        document.getElementById('_Data').value = 0x81667290; //Desc LUT
    }
    if (selection == 2) {//Sword and Shield
        dropDowns('Sword and Shield', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80898130; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Sword and Shield.bin';
        document.getElementById('unownData').value = 0x81666C98; //Name LUT
        document.getElementById('_Data').value = 0x81667408; //Desc LUT
    }
    if (selection == 3) {//Hammer
        dropDowns('Hammer', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x808989D0; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Hammer.bin';
        document.getElementById('unownData').value = 0x81666E08; //Name LUT
        document.getElementById('_Data').value = 0x81667578; //Desc LUT
    }
    if (selection == 4) {//Lance
        dropDowns('Lance', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80899BD0; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Lance.bin';
        document.getElementById('unownData').value = 0x81667108; //Name LUT
        document.getElementById('_Data').value = 0x81667878; //Desc LUT
    }

    if (selection == 5) {//Bowgun Frame
        dropDowns('Bowgun Frame', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80896FA8; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Bowgun Frame.bin';
        document.getElementById('unownData').value = 0x816705B0; //Name LUT
        document.getElementById('_Data').value = 0x816706A4; //Desc LUT
    }

    if (selection == 6) {//Bowgun Barrel
        dropDowns('Bowgun Barrel', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80897548; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Bowgun Barrel.bin';
        document.getElementById('unownData').value = 0x81670650; //Name LUT
        document.getElementById('_Data').value = 0x81670744; //Desc LUT
    }

    if (selection == 7) {//Bowgun Stock
        dropDowns('Bowgun Stock', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80897278; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Bowgun Stock.bin';
        document.getElementById('unownData').value = 0x81670600; //Name LUT
        document.getElementById('_Data').value = 0x816706F4; //Desc LUT
    }
    
    if (selection == 8) {//Longsword
        dropDowns('Longsword', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x808991E0; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Longsword.bin';
        document.getElementById('unownData').value = 0x81666F60; //Name LUT
        document.getElementById('_Data').value = 0x816676D0; //Desc LUT
    }
    if (selection == 9) {//Switch Axe
        dropDowns('Switch Axe', s, 'divSlct');
        document.getElementById('mysteryData').value = 0x80899600; //mod address
        document.getElementById('hiddenData').value = 'mhBin/mh3Switch Axe.bin';
        document.getElementById('unownData').value = 0x81667010; //Name LUT
        document.getElementById('_Data').value = 0x81667780; //Desc LUT
    }
    if (selection != 0) {
        if (selection < 5 || selection > 7) {
            makeWeapon();
        }
        else {
            makeBowgun();
        }
    }
    selection = null;
    s = null;
}

function equip(selection) {
    //var binread = new BinaryReader(load_binary_resource('mhBin/mh3_80.BIN'));
    var s = 'Equip';
    if (selection == 1) {
        dropDowns('Chest', s, 'divSlct');
    }
    if (selection == 2) {
        dropDowns('Arm', s, 'divSlct');
    }
    if (selection == 3) {
        dropDowns('Waist', s, 'divSlct');
    }
    if (selection == 4) {
        dropDowns('Legging', s, 'divSlct');
    }
    if (selection == 5) {
        dropDowns('Headgear', s, 'divSlct');
    }
    if (selection == 6) {
        dropDowns('Talisman', s, 'divSlct');
        makeLbl('Box Slot', 'BoxSlot', 'divSlct');
        makeInputBox('BoxSlot', 'divSlct');
        makeButton('Talisman()', 'Talisman', 'Code', 'divSlct');
        makeTalisman();
    }
    if (selection == 7) {
        dropDowns('Great Sword', s, 'divSlct');
    }
    if (selection == 8) {
        dropDowns('Sword and Shield', s, 'divSlct');
    }
    if (selection == 9) {
        dropDowns('Hammer', s, 'divSlct');
    }
    if (selection == 10) {
        dropDowns('Lance', s, 'divSlct');
    }
    if (selection == 11) {
        dropDowns('Bowgun Frame', s, 'divSlct');
    }
    if (selection == 12) {
        dropDowns('Bowgun Barrel', s, 'divSlct');
    }
    if (selection == 13) {
        dropDowns('Bowgun Stock', s, 'divSlct');
    }
    if (selection == 14) {
        dropDowns('Longsword', s, 'divSlct');
    }
    if (selection == 15) {
        dropDowns('Switch Axe', s, 'divSlct');
    }
    if (selection != 0 && selection != 6) {
        makeLbl('Box Slot', 'BoxSlot', 'divSlct');
        makeInputBox('BoxSlot', 'divSlct');
        makeButton('EquipMod()', 'Equip', 'Code', 'divSlct');
    }
    document.getElementById('mysteryData').value = selection;

    selection = null;
    s = null;
}

function loadText(t, s, where) {
    var binread = new jDataView(load_binary_resource(t));
    makeTextArea(s, 32, 20, where);

    var txtArea = s + ':\n\n';
    var c = binread.getUint8();
    while (c != 0) {
        txtArea += binread.getChar(binread.tell() - 1);
        c = binread.getUint8();
    }
    document.getElementById('txt' + s).value = txtArea;

    binread = null;
    txtArea = null;
    c = null;
}

function dropDowns(l, s, where) {

    var newLbl = document.createElement('label');
    newLbl.setAttribute('id', 'lbl' + s);
    document.getElementById(where).appendChild(newLbl);
    newLbl.innerHTML = l;
    newLbl = null;

    var newSlct = document.createElement('select');
    newSlct.setAttribute('id', 'slct' + s);
    newSlct.setAttribute('name', 'slct' + s);
    //newSlct.setAttribute('onchange', 'return slct' + s + '_onchange()');
    document.getElementById(where).appendChild(newSlct);

    var binread = new jDataView(load_binary_resource('mhBin/mh3' + l + '.bin'));
    var t = 0;
    var beginTable = binread.getUint32(0x0, false);
    var endTable = binread.getUint32(0x4, false);
    var bTable = binread.getUint32(0x8, false);
    var eTable = binread.getUint32(0xC, false);
    while (beginTable <= endTable) {

        if (binread.tell() >= binread.length) break;
        binread.seek(beginTable);
        var pointerHere = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        binread.seek(pointerHere);
        var txtTable = padTo16(t) + ' ';
        var c = binread.getUint8();
        if (c == 0xE3) txtTable += '???';
        else {
            while (c != 0) {
                txtTable += binread.getChar(binread.tell() - 1);
                c = binread.getUint8();
            }
        }

        if (binread.tell() >= binread.length) break;
        binread.seek(bTable);
        pointerHere = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        binread.seek(pointerHere);
        var txtTitle = '';
        c = binread.getUint8();
        while (c != 0) {
            txtTitle += binread.getChar(binread.tell() - 1);
            c = binread.getUint8();
        }

        var newOpt = document.createElement('option');
        newOpt.setAttribute('value', t);
        newOpt.setAttribute('id', ('opt' + s + t));
        newOpt.setAttribute('title', txtTitle);
        //document.getElementById('slct' + s).appendChild(newOpt);
        newSlct.appendChild(newOpt);
        newOpt.innerHTML = txtTable;
        beginTable += 0x4;
        bTable += 0x4;

        t++;

        pointerHere = null;
        txtTable = null;
        c = null;
        txtTitle = null;
        newOpt = null;
    }
    newSlct = null;
    binread = null;
    t = null;
    beginTable = null;
    endTable = null;
    bTable = null;
    eTable = null;
    l = null;
    s = null;
    where = null;
}

function dropDown(l, s, where) {

    var newSlct = document.createElement('select');
    newSlct.setAttribute('id', 'slct' + s);
    newSlct.setAttribute('name', 'slct' + s);
    //newSlct.setAttribute('onchange', 'return slct' + s + '_onchange()');
    document.getElementById(where).appendChild(newSlct);

    var binread = new jDataView(load_binary_resource('mhBin/mh3' + l + '.bin'));
    var t = 0;
    var beginTable = binread.getUint32(0x0, false);
    var endTable = binread.getUint32(0x4, false);
    var bTable = binread.getUint32(0x8, false);
    var eTable = binread.getUint32(0xC, false);
    while (beginTable <= endTable) {

        if (binread.tell() >= binread.length) break;
        binread.seek(beginTable);
        var pointerHere = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        binread.seek(pointerHere);
        var txtTable = padTo16(t) + ' ';
        var c = binread.getUint8();
        if (c == 0xE3) txtTable += '???';
        else {
            while (c != 0) {
                txtTable += binread.getChar(binread.tell() - 1);
                c = binread.getUint8();
            }
        }

        if (binread.tell() >= binread.length) break;
        binread.seek(bTable);
        pointerHere = (binread.getUint32(binread.tell(), false) & 0x0FFFFFFF);
        binread.seek(pointerHere);
        var txtTitle = '';
        c = binread.getUint8();
        while (c != 0) {
            txtTitle += binread.getChar(binread.tell() - 1);
            c = binread.getUint8();
        }

        var newOpt = document.createElement('option');
        newOpt.setAttribute('value', t);
        newOpt.setAttribute('id', ('opt' + s + t));
        newOpt.setAttribute('title', txtTitle);
        //document.getElementById('slct' + s).appendChild(newOpt);
        newSlct.appendChild(newOpt);
        newOpt.innerHTML = txtTable;
        beginTable += 0x4;
        bTable += 0x4;

        t++;

        pointerHere = null;
        txtTable = null;
        c = null;
        txtTitle = null;
        newOpt = null;
    }
    newSlct = null;
    binread = null;
    t = null;
    beginTable = null;
    endTable = null;
    bTable = null;
    eTable = null;
    l = null;
    s = null;
    where = null;
}

function regionSlct(where) {
    makeLbl('Region', 'region', where);
    makeSlct('Region', 1, where, false);
    document.getElementById('optRegion' + 0).innerHTML = 'NTSC-U';
    document.getElementById('optRegion' + 1).innerHTML = 'PAL';

    where = null;
}

function init() {
    loadText('changelog.txt', 'Changelog', 'divStuff');
    loadText('readme.txt', 'How to Use', 'divStuff');
}