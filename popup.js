var url = document.getElementById("url");
var utm_source = document.getElementById("utm_source");
var utm_medium = document.getElementById("utm_medium");
var acc = document.getElementById("acc");
var m = document.getElementById("m");
var region = document.getElementById("region");
var device = document.getElementById("device");
var daytime = document.getElementById("daytime");
var ssource = document.getElementById("ssource");
var targeting = document.getElementById("targeting");
var network = document.getElementById("network");
var wordtype = document.getElementById("wordtype");
//Textarea
var date_one = document.getElementById("date_one");
var date_two = document.getElementById("date_two");
var article = document.getElementById("article");
var op_name = document.getElementById("op_name");
var mscode = document.getElementById("mscode");

var short_header = document.getElementById("short_header");
var camp_len = document.getElementById("camp_len");
var clear_button = document.getElementById("clear_button");
var push_button = document.getElementById("push");

var textarea_camp = document.getElementById("textarea_camp");
var textarea_task = document.getElementById("textarea_task");
var textarea_code = document.getElementById("textarea_code");

var yandex_content =
  "ad_id|{ad_id}|banner_id|{banner_id}|campaign_type|{campaign_type}|campaign_id|{campaign_id}|device_type|{device_type}|group_id|{gbid}|phrase_id|{phrase_id}|position|{position}|position_type|{position_type}|placement|{source}|placement_type|{source_type}|region_name|{region_name}|correction|{coef_goal_context_id}";
var google_content =
  "network|{network}|position|{adposition}|ad_id|{creative}|match_type|{matchtype}|placement|{placement}|keyword|{keyword}|device_type|{device}|device|{devicemodel}|placement_category|{target}";

var utm_source_val;
var utm_medium_val;
var acc_val;
var m_val;
var region_val;
var device_val;
var daytime_val;
var ssource_val;
var targeting_val;
var network_val;
var wordtype_val;

var utm_source_text;
var utm_medium_text;
var acc_text;
var m_text;
var region_text;
var device_text;
var daytime_text;
var ssource_text;
var targeting_text;
var network_text;
var wordtype_text;

var acc_short;
var region_short;
var device_short;
var daytime_short;
var ssource_short;
var targeting_short;

var camp_name;
var s_content;
var date_or_comment;

var tree_children;
var tree_children_short;
var tree_parent;
var tree_parent_short;




var y_poisk
var y_poisk_link
var y_rsy_tranz
var y_rsy_tranz_link
var y_rsy_info
var y_rsy_info_link
var y_rsy_retagret
var y_rsy_retagret_link
var g_poisk
var g_poisk_link





$(document).keypress(function(event) {
  if (event.which == "13") {
    event.preventDefault();
  }
});



function upd_put_fc_data() {
  upd_tree();
  upd_fc_vars();
  put_fc_data();
  saveChanges();
}


function upd_fc_vars() {
  utm_source_val = utm_source[utm_source.selectedIndex].value;
  utm_medium_val = utm_medium[utm_medium.selectedIndex].value;
  acc_val = acc[acc.selectedIndex].value;
  m_val = m[m.selectedIndex].value;
  region_val = region[region.selectedIndex].value;
  device_val = device[device.selectedIndex].value;
  daytime_val = daytime[daytime.selectedIndex].value;
  ssource_val = ssource[ssource.selectedIndex].value;
  targeting_val = targeting[targeting.selectedIndex].value;
  network_val = network[network.selectedIndex].value;
  wordtype_val = wordtype[wordtype.selectedIndex].value;
  utm_source_text = utm_source[utm_source.selectedIndex].text;
  utm_medium_text = utm_medium[utm_medium.selectedIndex].text;
  acc_text = acc[acc.selectedIndex].text;
  m_text = m[m.selectedIndex].text;
  region_text = region[region.selectedIndex].text;
  device_text = device[device.selectedIndex].text;
  daytime_text = daytime[daytime.selectedIndex].text;
  ssource_text = ssource[ssource.selectedIndex].text;
  targeting_text = targeting[targeting.selectedIndex].text;
  network_text = network[network.selectedIndex].text;
  wordtype_text = wordtype[wordtype.selectedIndex].text;
  acc_short = acc[acc.selectedIndex].dataset.short;
  region_short = region[region.selectedIndex].dataset.short;
  device_short = device[device.selectedIndex].dataset.short;
  daytime_short = daytime[daytime.selectedIndex].dataset.short;
  ssource_short = ssource[ssource.selectedIndex].dataset.short;
  targeting_short = targeting[targeting.selectedIndex].dataset.short;

 
  if ((date_one.value && date_two.value) == "") {
    date_or_comment = "nodate";
  } else {
    var d1 = $("#date_one")
      .val()
      .split("-");
    day1 = d1[2];
    month1 = d1[1];
    year1 = d1[0];
    dc1 = day1 + "." + month1 + "." + year1;

    var d2 = $("#date_two")
      .val()
      .split("-");
    day2 = d2[2];
    month2 = d2[1];
    year2 = d2[0];
    dc2 = day2 + "." + month2 + "." + year2;

    date_or_comment = dc1 + "-" + dc2;
  }
}

function put_fc_data() {
  var camp_name_text =
    acc_text +    "_" +
    m_text +    "_" +
    article.value +    "_" +
    op_name.value +    "_" +
    mscode.value +    "_" +
    tree_children +    "_" +
    tree_parent +    "_" +
    region_text +    "_" +
    device_text +    "_" +
    daytime_text +    "_" +
    ssource_text +    "_" +
    targeting_text +    "_" +
    network_text +    "_" +
    wordtype_text +    "_" +
    date_or_comment;

  var camp_name_short =
    acc_short +    "_" +
    m_text +    "_" +
    article.value +    "_" +
    op_name.value +    "_" +
    mscode.value +    "_" +
    tree_children +    "_" +
    tree_parent +    "_" +
    region_short +    "_" +
    device_short +    "_" +
    daytime_short +    "_" +
    ssource_short +    "_" +
    targeting_short +    "_" +
    network_text +    "_" +
    wordtype_text +    "_" +
    date_or_comment;

  if (short_header.checked == true) {
    var camp_name = camp_name_short;
  } else camp_name = camp_name_text;

  var task_name_text =
    m_text +    " " +
    article.value +    " " +
    op_name.value +    " " +
    mscode.value +    " " +
    tree_children +    " " +
    tree_parent +    " " +
    date_or_comment;

  if (utm_source_text == "yandex") {
    s_content = yandex_content;
  } else s_content = google_content;

  var code_text =
    "{code}" +
    url.value +
    "?utm_source=" +
    utm_source_val +
    "&utm_medium=" +
    utm_medium_val +
    "&utm_campaign=" +
    acc_val +    "_" +
    m_val +    "_" +
    rus_to_latin(article.value) +    "_" +
    rus_to_latin(op_name.value) +    "_" +
    rus_to_latin(mscode.value) +    "_" +
    tree_children_short +    "_" +
    tree_parent_short +    "_" +
    region_val +    "_" +
    device_val +    "_" +
    daytime_val +    "_" +
    ssource_val +    "_" +
    targeting_val +    "_" +
    network_val +    "_" +
    wordtype_val +    "_" +
    date_or_comment +
    "&utm_content=" +
    s_content +
    "&utm_term={keyword}{code}";

  textarea_camp.value = camp_name;
  textarea_task.value = task_name_text;
  textarea_code.value = code_text.toLowerCase();
  camp_len.innerHTML = "(" + textarea_camp.value.length + " букв)";





   y_poisk =  
   acc_short +    "_" +
   m_text +    "_" +
   article.value +    "_" +
   op_name.value +    "_" +
   mscode.value +    "_" +
   tree_children +    "_" +
   tree_parent +    "_" +
   region_short +    "_" +
   device_short +    "_" +
   daytime_short +    "_" +
   "Я" +    "_" +
   "КС" +    "_" +
   "Поиск" +    "_" +
   "Транз" +    "_" +
   date_or_comment;


   y_poisk_link = 
   "{code}" +
   url.value +
   "?utm_source=" +
   "yandex" +
   "&utm_medium=" +
   utm_medium_val +
   "&utm_campaign=" +
   acc_val +    "_" +
   m_val +    "_" +
   rus_to_latin(article.value) +    "_" +
   rus_to_latin(op_name.value) +    "_" +
   rus_to_latin(mscode.value) +    "_" +
   tree_children_short +    "_" +
   tree_parent_short +    "_" +
   region_val +    "_" +
   device_val +    "_" +
   daytime_val +    "_" +
   "yandex" +    "_" +
   targeting_val +    "_" +
   "poisk" +    "_" +
   wordtype_val +    "_" +
   date_or_comment +
   "&utm_content=" +
   yandex_content +
   "&utm_term={keyword}{code}";


   y_rsy_tranz = 
   acc_short +    "_" +
   m_text +    "_" +
   article.value +    "_" +
   op_name.value +    "_" +
   mscode.value +    "_" +
   tree_children +    "_" +
   tree_parent +    "_" +
   region_short +    "_" +
   device_short +    "_" +
   daytime_short +    "_" +
   "Я" +    "_" +
   "КС" +    "_" +
   "РСЯ" +    "_" +
   "Транз" +    "_" +
   date_or_comment;



   y_rsy_tranz_link = 
   "{code}" +
   url.value +
   "?utm_source=" +
   "yandex" +
   "&utm_medium=" +
   utm_medium_val +
   "&utm_campaign=" +
   acc_val +    "_" +
   m_val +    "_" +
   rus_to_latin(article.value) +    "_" +
   rus_to_latin(op_name.value) +    "_" +
   rus_to_latin(mscode.value) +    "_" +
   tree_children_short +    "_" +
   tree_parent_short +    "_" +
   region_val +    "_" +
   device_val +    "_" +
   daytime_val +    "_" +
   "yandex" +    "_" +
   targeting_val +    "_" +
   "rsya" +    "_" +
   "tranz" +    "_" +
   date_or_comment +
   "&utm_content=" +
   yandex_content +
   "&utm_term={keyword}{code}";


   y_rsy_info = 
   acc_short +    "_" +
   m_text +    "_" +
   article.value +    "_" +
   op_name.value +    "_" +
   mscode.value +    "_" +
   tree_children +    "_" +
   tree_parent +    "_" +
   region_short +    "_" +
   device_short +    "_" +
   daytime_short +    "_" +
   "Я" +    "_" +
   "КС" +    "_" +
   "РСЯ" +    "_" +
   "Инф" +    "_" +
   date_or_comment;


   y_rsy_info_link =
   "{code}" +
   url.value +
   "?utm_source=" +
   "yandex" +
   "&utm_medium=" +
   utm_medium_val +
   "&utm_campaign=" +
   acc_val +    "_" +
   m_val +    "_" +
   rus_to_latin(article.value) +    "_" +
   rus_to_latin(op_name.value) +    "_" +
   rus_to_latin(mscode.value) +    "_" +
   tree_children_short +    "_" +
   tree_parent_short +    "_" +
   region_val +    "_" +
   device_val +    "_" +
   daytime_val +    "_" +
   "yandex" +    "_" +
   targeting_val +    "_" +
   "rsya" +    "_" +
   "info" +    "_" +
   date_or_comment +
   "&utm_content=" +
   yandex_content +
   "&utm_term={keyword}{code}";
   

   y_rsy_retagret = 
   acc_short +    "_" +
   m_text +    "_" +
   article.value +    "_" +
   op_name.value +    "_" +
   mscode.value +    "_" +
   tree_children +    "_" +
   tree_parent +    "_" +
   region_short +    "_" +
   device_short +    "_" +
   daytime_short +    "_" +
   "Я" +    "_" +
   "Рет" +    "_" +
   "РСЯ" +    "_" +
   "none" +    "_" +
   date_or_comment;


   y_rsy_retagret_link = 
   "{code}" +
   url.value +
   "?utm_source=" +
   "yandex" +
   "&utm_medium=" +
   utm_medium_val +
   "&utm_campaign=" +
   acc_val +    "_" +
   m_val +    "_" +
   rus_to_latin(article.value) +    "_" +
   rus_to_latin(op_name.value) +    "_" +
   rus_to_latin(mscode.value) +    "_" +
   tree_children_short +    "_" +
   tree_parent_short +    "_" +
   region_val +    "_" +
   device_val +    "_" +
   daytime_val +    "_" +
   "yandex" +    "_" +
   "retarget" +    "_" +
   "rsya" +    "_" +
   "none" +    "_" +
   date_or_comment +
   "&utm_content=" +
   yandex_content +
   "&utm_term={keyword}{code}";


   g_poisk =
   acc_short +    "_" +
   m_text +    "_" +
   article.value +    "_" +
   op_name.value +    "_" +
   mscode.value +    "_" +
   tree_children +    "_" +
   tree_parent +    "_" +
   region_short +    "_" +
   device_short +    "_" +
   daytime_short +    "_" +
   "G" +    "_" +
   "КС" +    "_" +
   "Поиск" +    "_" +
   "Транз" +    "_" +
   date_or_comment;

   g_poisk_link =
   "{code}" +
   url.value +
   "?utm_source=" +
   "google" +
   "&utm_medium=" +
   utm_medium_val +
   "&utm_campaign=" +
   acc_val +    "_" +
   m_val +    "_" +
   rus_to_latin(article.value) +    "_" +
   rus_to_latin(op_name.value) +    "_" +
   rus_to_latin(mscode.value) +    "_" +
   tree_children_short +    "_" +
   tree_parent_short +    "_" +
   region_val +    "_" +
   device_val +    "_" +
   daytime_val +    "_" +
   "google" +    "_" +
   "key" +    "_" +
   "poisk" +    "_" +
   "tranz" +    "_" +
   date_or_comment +
   "&utm_content=" +
   google_content +
   "&utm_term={keyword}{code}";

}






$(utm_source)
  .add(utm_medium)
  .add(acc)
  .add(m)
  .add(region)
  .add(device)
  .add(daytime)
  .add(ssource)
  .add(targeting)
  .add(network)
  .add(wordtype)
  .add(short_header)
  .add($('#jstree'))
  .on("change", function() {
    upd_put_fc_data();
    saveChanges();
  });

$(short_header)
  .add(date_one)
  .add(date_two)
  .on("change", function() {
    upd_put_fc_data();
  });


  $(url)
  .add(op_name)
  .add(article)
  .add(mscode)
  .on("input", function(){
    upd_put_fc_data();
    saveChanges();
  })

$(clear_button).on("click", function() {
  $(url).val("");
  $(utm_source).val("yandex");
  $(utm_medium).val("cpc");
  $(acc).val("edumsk-qt");
  $(m).val("m1-qt");
  $(region).val("rf");
  $(device).val("desktop");
  $(daytime).val("day");
  $(ssource).val("yandex");
  $(targeting).val("key");
  $(network).val("poisk");
  $(wordtype).val("tranz");
  $(date_one).val("");
  $(date_two).val("");

  $(article).val("none");
  $(op_name).val("none");
  $(mscode).val("none");
  
  $(textarea_camp).val("");
  $(textarea_code).val("");
  $(textarea_task).val("");
  $(".search-input").val("");
  upd_fc_vars();
  saveChanges();
  // window.location.reload(false); 
  

});


console.log('popup ok')





$(utm_source)
        .add(utm_medium)
        .add(acc)
        .add(m)
        .add(region)
        .add(device)
        .add(daytime)
        .add(ssource)
        .add(targeting)
        .add(network)
        .add(wordtype)
        .on("click", saveChanges);


function saveChanges() {
  chrome.storage.local.set({
    "url_key": url.value, 
    "utm_source_key": utm_source_val, 
    "utm_medium_key": utm_medium_val,
    "acc_key" : acc_val,
    "m_key" : m_val,
    "region_key" : region_val,
    "device_key" : device_val,
    "daytime_key" : daytime_val,
    "ssource_key" : ssource_val,
    "targeting_key" : targeting_val,
    "network_key" : network_val,
    "wordtype_key" : wordtype_val,
    "date_one_key" : date_one.value,
    "date_two_key" :date_two.value,
    "article_key": article.value,
    "op_name_key": op_name.value,
    "mscode_key": mscode.value,
    "camp_name_key": textarea_camp.value,
    "task_name_key": textarea_task.value,
    "code_key" : textarea_code.value,  
    "short_checkbox_key": short_header.checked 
  });
      }

function restore(){
	 chrome.storage.local.get(
     [
       'utm_source_key', 
       'url_key', 
       'utm_medium_key',
       "acc_key",
       "m_key",
       "region_key",
       "device_key",
       "daytime_key",
       "ssource_key",
       "targeting_key",
       "network_key",
       "wordtype_key",
       "date_one_key",
       "date_two_key",
       "article_key",
       "op_name_key",
       "mscode_key",
       "camp_name_key",
       "task_name_key",
       "code_key",
       "short_checkbox_key"       
      ], function(results) {
          if (results.utm_source_key != null){
          $(url).val(results.url_key);
          $(utm_source).val(results.utm_source_key);
          $(utm_medium).val(results.utm_medium_key);
          $(acc).val(results.acc_key);
          $(m).val(results.m_key);
          $(region).val(results.region_key);   
          $(device).val(results.device_key);   
          $(daytime).val(results.daytime_key);   
          $(ssource).val(results.ssource_key);   
          $(targeting).val(results.targeting_key);   
          $(network).val(results.network_key);   
          $(wordtype).val(results.wordtype_key);   
          $(date_one).val(results.date_one_key);   
          $(date_two).val(results.date_two_key);   
          $(article).val(results.article_key);   
          $(op_name).val(results.op_name_key);   
          $(mscode).val(results.mscode_key);   
          $(textarea_camp).val(results.camp_name_key);   
          $(textarea_task).val(results.task_name_key);   
          $(textarea_code).val(results.code_key);
          short_header.checked = results.short_checkbox_key;
          }
        });
}


window.onload = function() {
  restore()
  // console.log(utm_source_val, utm_medium_val);
};


push.onclick = function(element) {
  console.log('start u')
  upd_put_fc_data();
  console.log('end u')
  console.log(y_poisk)
  console.log(y_poisk_link)

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      y_poisk_d : y_poisk,
      y_poisk_link_d : y_poisk_link.toLowerCase(),
      y_rsy_tranz_d : y_rsy_tranz,
      y_rsy_tranz_link_d : y_rsy_tranz_link.toLowerCase(),
      y_rsy_info_d : y_rsy_info,
      y_rsy_info_link_d : y_rsy_info_link.toLowerCase(),
      y_rsy_retagret_d : y_rsy_retagret,
      y_rsy_retagret_link_d : y_rsy_retagret_link.toLowerCase(),
      g_poisk_d : g_poisk,
      g_poisk_link_d : g_poisk_link.toLowerCase()
     }, function(response) {
        console.log('success');
    });
})};








