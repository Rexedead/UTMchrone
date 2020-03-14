chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("data from popup: " +request.y_poisk);
    console.log("data from popup: " +request.y_poisk_link);
    var y_poisk = document.getElementById("customfield_10108");
    var y_poisk_link = document.getElementById("customfield_10130");
    var y_rsy_tranz = document.getElementById("customfield_10121");
    var y_rsy_tranz_link = document.getElementById("customfield_10128");
    var y_rsy_info = document.getElementById("customfield_10122");
    var y_rsy_info_link = document.getElementById("customfield_10131");
    var y_rsy_retagret = document.getElementById("customfield_10126");
    var y_rsy_retagret_link = document.getElementById("customfield_10137");
    var g_poisk = document.getElementById("customfield_10123");
    var g_poisk_link = document.getElementById("customfield_10134");
    var g_kms = document.getElementById("customfield_10124");
    var g_kms_link = document.getElementById("customfield_10135");
    var g_kms_ret = document.getElementById("customfield_10125");
    var g_kms_ret_link = document.getElementById("customfield_10136");

    y_poisk.value = request.y_poisk_d
    y_poisk_link.value = request.y_poisk_link_d
    y_rsy_tranz.value = request.y_rsy_tranz_d
    y_rsy_tranz_link.value = request.y_rsy_tranz_link_d
    y_rsy_info.value = request.y_rsy_info_d
    y_rsy_info_link.value = request.y_rsy_info_link_d
    y_rsy_retagret.value = request.y_rsy_retagret_d
    y_rsy_retagret_link.value = request.y_rsy_retagret_link_d
    g_poisk.value = request.g_poisk_d
    g_poisk_link.value = request.g_poisk_link_d

    sendResponse({success: true});
});