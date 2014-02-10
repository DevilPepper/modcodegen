function makePouch() {
    s = 'Slot';
    makeLbl(s + "1", s + "1", 'divSlct');
    makeSlct(s + "1", 0x2EA, 'divSlct', false);
    ReadTableContents('mhBin/mh3Item.bin', s);
    makeLbl('Amount', 'Amount', 'divSlct');
    makeInputBox('Amount', 'divSlct');
    makeLbl('Box Slot', 'BoxSlot', 'divSlct');
    makeInputBox('BoxSlot', 'divSlct');
    makeButton('ItemMod()', 'Item', 'Code', 'divSlct');
}

function pouch() {
    var addy = 0x14000278;
    var code = "48000000 806BBC74\nDE000000 9014901C\n";
    var temp = "";
    var x = 0;
    //if p2, addy += 0xB20;
    //35 ifs...
    //temp = padTo32(((item & 0xFFFF) << 16) | (amount & 0xFF));
    //addy += 4
    //code += addy.toString(16).toUpperCase() + " " + temp;
    //x++;
    if (x > 0) document.getElementById('txtCode').value += code + "\n";
    addy = null;
    code = null;
    temp = null;
    x = null;
}
/*
806BBC74+278
48000000 806BBC74
DE000000 90009100
14000278 ????00XX
1400027C ????00XX (14000278+4)
...+4 for 24 slots(includinging the previous line)
The No Item Slot
The Mask Slot
8 ammo slots
the normal lvl1 slot
E0000000 80008000
*/