var url = 'http://production.shippingapis.com/ShippingAPITest.dll?API=Verify&XML=<AddressValidateRequest USERID="729UHS005798" ><Address ID="0"><Address1>301 Village Drive</Address1><Address2>344</Address2><City>King of Prussia</City><State>PA</State><Zip5>19406</Zip5><Zip4></Zip4></Address></AddressValidateRequest>';

function httpGet(url_text) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url_text, false);
    xmlHttp.send( null);
    return XMLHttpRequest.responseText;
}

//console.log.alert(httpGet(url) + " hi");