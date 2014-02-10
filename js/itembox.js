function ItemMod() {
    var addy = document.getElementById('txtBoxSlot').value;
    if (addy < 1 || addy > 800 || addy != parseInt(addy)) addy = 800;
    addy = 0x140E06F0 + ((addy - 1) * 0x4);
    var code = document.getElementById('txtAmount').value;
    if (code < 0 || code > 99 || code != parseInt(code)) code = 99;
    code = (document.getElementById('slctItem').selectedIndex << 16) | code;
    document.getElementById('txtCode').value += "4A000000 90000000\n" + addy.toString(16).toUpperCase() + " " +
        (code + 0x100000000).toString(16).substr(1).toUpperCase() + "\nE0000000 80008000\n";

    addy = null;
    code = null;
}