export default {
  0: {
    1: `








<!--  global include -->

\t
\t
\t
\t
\t
<html lang='ko'>
<head>


\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t<title>시가총액 : 네이버 금융</title>
\t\t\t
\t\t
\t





\t
\t
\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
\t


<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">




\t
    
        <meta property="og:url" content="http://finance.naver.com/sise/sise_market_sum.nhn"/>
        
\t\t\t
\t\t    
\t\t    \t<meta property="og:title" content="시가총액 : 네이버 금융"/>
\t\t     
\t\t
\t\t
\t\t\t
\t\t\t   <meta property="og:description" content="관심종목의 실시간 주가를 가장 빠르게 확인하는 곳"/>
\t\t    
\t\t    
\t\t
\t\t 
\t\t\t
\t\t\t    <meta property="og:image" content="https://ssl.pstatic.net/static/m/stock/im/2016/08/og_stock-200.png"/>
\t\t    
\t\t    
\t\t
    

<meta property="og:type" content="article"/>
<meta property="og:article:thumbnailUrl" content=""/>
<meta property="og:article:author" content="네이버금융"/>
<meta property="og:article:author:url" content="http://FINANCE.NAVER.COM"/>




<link rel='stylesheet' type='text/css' href='/css/finance_header.css?20191114133508'>

\t
\t
\t
\t
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/common.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/layout.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/main.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock2.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock3.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/world.css?20191114133508">
\t\t
\t\t
\t\t
\t\t

\t\t
\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindo.min.ns.1.5.3.euckr.js?20191114133508"></script>
\t\t\t
\t\t\t
\t\t\t\t<script type="text/javascript" src="/js/release/common.js?20191114133508"></script>
\t\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindoComponent/jindo.Component.1.0.3.js?20191114133508"></script>
\t\t\t<script type="text/javascript" src="/ac/nhn.autocomplete.stock.js?20191114133508"></script>
\t\t
\t\t
\t


\t<link rel="shortcut icon" href="https://www.naver.com/favicon.ico?20191114133508" type="image/x-icon">
\t
\t<script type="text/javascript">
    (function(){
        var sUserAgent = navigator.userAgent;
        if(/iPhone|iPad/.test(sUserAgent)){
            document.write(
                [
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_120X120_iphone.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_152x152_ipad.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="167x167" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_167x167_ipad_pro.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_180x180_iphone.png" />'
                ]
                .join('\\n')
            );
        }

        if(/Android/.test(sUserAgent)){
            document.write(
                [
                    '<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_72x72_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="96x96" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_96x96_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_144x144_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="192x192" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_192x192_xxxhpdi.png" />'
\t\t\t\t]
\t\t\t\t.join('\\n')
\t\t\t);
        }
    })();
    </script>
</head>




<body onload='getGNB();'>



<script type="text/javascript">
\tdocument.domain = 'naver.com';
\tvar nclk_evt = 3;
\tnclk_do();
</script>


<script type="text/javascript">




var nsc="finance.stock";





var ccsrv="cc.naver.com";


\t
\t
\tvar gnb_service='finance';
\t


var gnb_logout=document.URL; //GNB에서 로그아웃 후 redirect 될 URL
var gnb_searchbox='off'; //미니 검색창을 on 할지 off 할지. default는 off
var gnb_shortnick='off'; //닉네임 말줄임(10자)을 on할지 off 할지. default는 off.


var gnb_naverme_layer_open_callback = function(){
\t   var naverLayerSize = gnbNaverMeLayer.getLayerSize();
\t\t
\t\tvar me_layers = document.getElementById("me_layers");
\t\tme_layers.width=naverLayerSize.width;
\t\tme_layers.height=naverLayerSize.height;};

var gnb_naverme_layer_close_callback = function(){
\t\t
\t\t\tvar me_layers = document.getElementById("me_layers");
\t\t\tme_layers.width="0";
\t\t\tme_layers.height="0";};
</script>


<div id="u_skip">
\t<a href="#menu" tabindex="1"><span>메인 메뉴로 바로가기</span></a>

\t
\t
\t\t<a href="#start" tabindex="2"><span>본문으로 바로가기</span></a>
\t

</div>


<div id="header">
\t<div class="snb_area">
\t\t<div class="snb_inner">
\t\t\t<div id="gnb_area">
\t\t\t\t<div id="gnb">
\t\t\t\t\t<script charset="EUC-KR" type="text/javascript">
\t\t\t\t\tvar gnb_service = "gnbtest";
                    var gnb_template = location.protocol == "http:" ? "gnb_quirks_euckr" : "gnb_utf8" ;
\t\t\t\t\tvar gnb_dark = false;
\t\t\t\t\tvar gnb_brightness = 1;
\t\t\t\t\tvar gnb_logout=encodeURIComponent(location.href);
\t\t\t\t\tvar gnb_one_naver = 1;
\t\t\t\t\t</script>
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t<script type="text/javascript" charset="utf-8" src="https://ssl.pstatic.net/static.gn/templates/gnb_utf8.nhn?20191116">
                    \t\t</script>
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>

\t\t\t<div class="sta">
\t\t\t\t<h1 class="logo"> <a href="https://www.naver.com/" class="logo_naver" onClick="clickcr(this, 'STA.naver', '', '', event);"><span class="blind">네이버</span></a>
\t\t\t\t<a href="/" class="logo_service" onClick="clickcr(this, 'STA.finance', '', '', event);"><span class="blind">금융</span></a> </h1>
\t\t\t\t<form name="search" action="/search/search.nhn"  method="get"
\t\t\t\t\tonsubmit="return delayed_submit(this)" style="margin:0; padding:0;">
\t\t\t\t<fieldset>
\t\t\t\t\t<legend>검색</legend>
\t\t\t\t\t<div class="snb_search_box">
\t\t\t\t\t\t<div class="snb_search_box_sub">
\t\t\t\t\t\t\t<input id="stock_items" type="text" title="검색" name="query" value="종목명&middot;펀드명&middot;환율명&middot;원자재명 입력" accesskey="s" class="snb_search_text snb_default" autocomplete="off">
\t\t\t\t\t\t\t<a id="nautocomplete" href="#" onclick="return false" class="btn_arrow"><span class="blind">자동완성 펼치기</span></a>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="auto_area">
\t\t\t\t\t\t\t<h2 class="blind">자동완성</h2>
\t\t\t\t\t\t\t<iframe id="autoFrame" src="/ac/reatcmp.nhn?menu=sise&submenu=" scrolling="no" height="0" frameborder="0" width="400" style="display: none;" marginheight="0" marginwidth="0" title="자동완성"></iframe>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<button type="submit" class="snb_search_btn" onclick="clickcr(this, 'STA.search', '', '', event);" alt="검색"><span class="blind">검색</span></button>
\t\t\t\t\t\t<a href="#" target="_blank" class="snb_search_btn-total" onclick="itegrationSearch();clickcr(this, 'STA.nx', '', '', event);return false;">통합검색</a>
\t\t\t\t\t</div>
\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<div class="lnb_area ">
\t\t<div class="lnb_inner">
\t\t\t<div id="menu">
\t\t\t\t<ul class="menu">
\t\t\t\t\t<li class="m1 first "><a href="/" onClick="clickcr(this, 'LNB.home', '', '', event);"><span class="tx">금융 홈</span></a></li>
\t\t\t\t\t<li class="m2 on"><a href="/sise/" onClick="clickcr(this, 'LNB.sise', '', '', event);"><span class="tx">국내증시</span></a></li>
\t\t\t\t\t<li class="m3 "><a href="/world/" onClick="clickcr(this, 'LNB.world', '', '', event);"><span class="tx">해외증시</span></a></li>
\t\t\t\t\t<li class="m4 "><a href="/marketindex/" onClick="clickcr(this, 'LNB.market', '', '', event);"><span class="tx">시장지표</span></a></li>
\t\t\t\t\t<li class="m5 "><a href="/fund/" onClick="clickcr(this, 'LNB.fund', '', '', event);"><span class="tx">펀드</span></a>
\t\t\t\t\t\t
\t\t\t\t\t</li>
\t\t\t\t\t<li class="m6 "><a href="/research/" onClick="clickcr(this, 'LNB.research', '', '', event);"><span class="tx">투자전략</span></a></li>
\t\t\t\t\t<li class="m7 "><a href="/news/"><span class="tx">뉴스</span></a></li>
\t\t\t\t\t<li class="m8 "><a href="/mystock/" onClick="clickcr(this, 'LNB.mystock', '', '', event);"><span class="tx">MY</span></a></li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t</div>
\t
\t
\t
\t

\t
\t<script type="text/JavaScript">
\t\t/* lcs 집계 */
        ;(function(){
            var eventType = "onpageshow" in window ? "pageshow" : "load";
            jindo.$Fn(function(){
                lcs_do();
            }).attach(window, eventType);
        })();

\t\t/* 검색 자동완성 [ 인자1 : 검색input의 ID, 인자2 : iframe 태그 ID ]   */
\t\t// AutoComplete 생성
\t\tvar acDomain = "ac.finance.naver.com";
        if (location.hostname.indexOf("staging-") > -1) {
            acDomain = "staging-" + acDomain;
        }
        var acUrl = "https://" + acDomain + "/ac";

\t\tsmartSearch = new nhn.Autocomplete(
\t\t\t// InputManager 생성
\t\t\tnew nhn.AcInputManager(jindo.$("stock_items")),
\t\t\t// DataManager 생성
\t\t\tnew nhn.AcDataManager(acUrl, "jsonp", "get", {
                    st: "111",
                    r_lt : "111",
                    q_enc : "euc-kr",
                    r_enc : "euc-kr",
                    frm: "stock"}),
\t\t\t// ViewManager 생성
\t\t\tnew nhn.AcStockViewManager(jindo.$("autoFrame"), jindo.$("nautocomplete"), {
                                        strMax: 200,
                                        listMax: [7, 2, 2],
                                        aRedirectUrl : [
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com"]}),
\t\t\t// Autocomplete Option
            {formId:"search", cookieDomain:location.hostname, cookieName:"NaverCommonStock"});

\t\t\tsmartSearch.attach({
\t            onFocus: function () {
\t                var weInput = jindo.$Element('stock_items');
\t                if (weInput && weInput.hasClass("snb_default")) {
\t                        weInput.text("");
\t                        weInput.removeClass('snb_default');
\t                }
\t            }
\t        });

\t\t/* 통합검색  start ----->  */
\t\tdocument.domain = 'naver.com';
\t\tvar sSearchHintText = '종목명·펀드명·환율명·원자재명 입력';
\t\tfunction itegrationSearch() {
\t\t\tvar query = jindo.$('stock_items').value;

\t\t\tif ( query == ''  || encodeURIComponent(query) == encodeURIComponent(sSearchHintText))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}

            var url = location.protocol + "//search.naver.com/search.naver?sm=sta_hty.finance&where=nexearch&ie=UTF8&query=" + encodeURIComponent(query);
            window.open(url, "_blank");

\t\t\treturn false;
\t\t}

\t\tfunction delayed_submit(object) {
\t\t\tif (navigator.userAgent.indexOf('MSIE') == -1) {
\t\t\t\twindow.setTimeout(function() {stock_search(object)}, 300);
\t\t\t} else {
\t\t\t\tstock_search(object);
\t\t\t}
\t\t\treturn false;
\t\t}

\t\tfunction stock_search (object)
\t\t{
\t\t\tquery = object.query.value.replace(/^\\s*/,'').replace(/\\s*$/,'');\t// trim
\t\t\tobject.query.value=query;

\t\t\tif ( query == '' || query == sSearchHintText.replace(/^\\s*/,'').replace(/\\s*$/,''))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}
\t\t\telse {
\t\t\t\tobject.submit();
\t\t\t}
\t\t}
\t\t/* <---------- 통합검색  end */

\t\tfunction popup()
\t\t{
\t\t\twin = window.open('/template/group_limit_pop.jsp','finan_popup','width=569 height=278 scrollbars=no status=no');
\t\t\twin.focus();
\t\t}
\t</script>

\t<iframe id="me_layers" name="test" title="네이버미 영역" width="0" height="0" scrolling="no" frameborder="0" style="display:block;top: 22px; right: 209px; position: absolute; z-index: 15;"></iframe>
</div>
<div id="wrap"  >

<!-- //  global include -->
<script language="JavaScript">
function mouseOver(obj){
  obj.style.backgroundColor="#f6f4e5";
}
function mouseOut(obj){
  obj.style.backgroundColor="#ffffff";
}
</script>

\t<div id="newarea">
\t\t\t

\t\t\t<!-- leftmenu -->
\t\t\t<div class="snb snb2">
\t\t\t\t<h2 class="h_sise"><a href="/sise/"><span class="blind">국내증시</span></a></h2>
\t\t\t\t<ul class="nav1">
\t\t\t\t<li class="frst"><strong class="lst_sise"><span class="blind">주요시세정보</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst1_1"><a href="/sise/sise_index.nhn?code=KOSPI" onClick="clickcr(this,'siu.1','','',event);" class="off"><span class="blind">코스피</span></a></li> 
                     <li class="type1 lst1_2"><a href="/sise/sise_index.nhn?code=KOSDAQ" onClick="clickcr(this,'siu.2','','',event);" class="off"><span class="blind">코스닥</span></a></li>
                     <li class="type1 lst1_3"><a href="/sise/sise_index.nhn?code=FUT" onClick="clickcr(this,'siu.3','','',event);" class="off"><span class="blind">선물</span></a></li>
                     <li class="type1 lst1_26"><a href="/sise/sise_index.nhn?code=KPI200" onClick="clickcr(this,'siu.26','','',event);" class="off"><span class="blind">코스피200</span></a></li>
                     <li class="type1 lst1_31"><a href="/sise/konex.nhn" onClick="clickcr(this,'siu.konex','','',event);" class="off"><span class="blind">코넥스</span></a></li>
                     <li class="type1 lst1_16"><a href="/sise/sise_market_sum.nhn" onClick="clickcr(this,'siu.16','','',event);" class="on"><span class="blind">시가총액</span></a></li>
                     <li class="type1 lst1_32" ><a href="/sise/dividend_list.nhn" onClick="clickcr(this,'siu.dividend','','',event);" class="off"><span class="blind">배당</span></a></li>                     
                     <li class="type1 lst1_4"><a href="/sise/sise_group.nhn?type=upjong" onClick="clickcr(this,'siu.4','','',event);" class="off"><span class="blind">업종</span></a></li>
                     <li class="type1 lst1_5" ><a href="/sise/theme.nhn" onClick="clickcr(this,'siu.5','','',event);" class="off"><span class="blind">테마</span></a></li>
                     <li class="type1 lst1_30"><a href="/sise/sise_group.nhn?type=group"  onClick="clickcr(this,'siu.30','','',event);"  class="off"><span class="blind">그룹사</span></a></li>
\t\t\t\t\t <li class="type1 lst1_27 "><a href="/sise/etf.nhn" onClick="clickcr(this,'siu.27','','',event);" class="off"><span class="blind">ETF</span></a></li>
\t\t\t\t\t <li class="type1 lst1_34"><a href="/sise/etn.nhn" onClick="clickcr(this,'siu.34','','',event);" class="off"><span class="blind">ETN</span></a></li>
\t\t\t\t\t <li class="type1 lst1_8 "><a href="/sise/sise_rise.nhn" onClick="clickcr(this,'siu.8','','',event);" class="off"><span class="blind">ª?Ω?</span></a></li>
                     <li class="type1 lst1_9 "><a href="/sise/sise_steady.nhn" onClick="clickcr(this,'siu.9','','',event);" class="off"><span class="blind">보합</span></a></li>
                     <li class="type1 lst1_10"><a href="/sise/sise_fall.nhn" onClick="clickcr(this,'siu.10','','',event);" class="off"><span class="blind">하락</span></a></li>
                     <li class="type1 lst1_6"><a href="/sise/sise_upper.nhn" onClick="clickcr(this,'siu.6','','',event);" class="off"><span class="blind">상한가</span></a></li>
                     <li class="type1 lst1_7"><a href="/sise/sise_lower.nhn" onClick="clickcr(this,'siu.7','','',event);" class="off"><span class="blind">하한가</span></a></li>
                     <li class="type1 lst1_15 "><a href="/sise/sise_low_up.nhn" onClick="clickcr(this,'siu.15','','',event);" class="off"><span class="blind">급등</span></a></li>
                     <li class="type1 lst1_14 "><a href="/sise/sise_high_down.nhn" onClick="clickcr(this,'siu.14','','',event);" class="off"><span class="blind">급락</span></a></li>
                     <li class="type2 lst1_11"><a href="/sise/sise_quant.nhn" onClick="clickcr(this,'siu.11','','',event);" class="off"><span class="blind">거래상위</span></a></li>  
                     <li class="type1 lst1_12 "><a href="/sise/sise_quant_high.nhn" onClick="clickcr(this,'siu.12','','',event);" class="off"><span class="blind">급증</span></a></li> 
                     <li class="type1 lst1_13 "><a href="/sise/sise_quant_low.nhn" onClick="clickcr(this,'siu.13','','',event);" class="off"><span class="blind">급감</span></a></li>
                     <li class="lst1_23"><a href="/sise/sise_trans_style.nhn" onClick="clickcr(this,'siu.23','','',event);" class="off"><span class="blind">투자자별매매동향</span></a></li>  
                     <li class="type1 lst1_17"><a href="/sise/sise_deal_rank.nhn" onClick="clickcr(this,'siu.17','','',event);" class="off"><span class="blind">외국인매매</span></a></li> 
                     <li class="type1 lst1_18"><a href="/sise/sise_deal_rank.nhn?investor_gubun=1000" onClick="clickcr(this,'siu.18','','',event);" class="off"><span class="blind">기관매매</span></a></li> 
                     <li class="lst1_19"><a href="/sise/sise_program.nhn" onClick="clickcr(this,'siu.19','','',event);" class="off"><span class="blind">프로그램매매동향</span></a></li> 
                     <li class="lst1_22"><a href="/sise/sise_deposit.nhn" onClick="clickcr(this,'siu.22','','',event);" class="off"><span class="blind">증시자금동향</span></a></li>
                     <li class="lst1_21"><a href="/sise/sise_new_stock.nhn" onClick="clickcr(this,'siu.21','','',event);" class="off"><span class="blind">신규상장</span></a></li>  
                     <li class="lst1_24 "><a href="/sise/sise_foreign_hold.nhn" onClick="clickcr(this,'siu.24','','',event);" class="off"><span class="blind">외국인보유</span></a></li> 
                     <li class="lst1_25 "><a href="/sise/market3news_list.nhn" onClick="clickcr(this,'siu.25','','',event);" class="off"><span class="blind">장외시세</span></a></li>
                     <li class="lst1_33 "><a href="/sise/ipo.nhn" onClick="clickcr(this,'siu.33','','',event);" class="off"><span class="blind">IPO</span></a></li>
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><strong class="lst_prevent"><span class="blind">투자자보호</span></strong>
\t                <ul class="sub">
\t                 <li class="lst1_20"><a href="/sise/management.nhn" onClick="clickcr(this,'siu.20','','',event);" class="off"><span class="blind">관리종목</span></a></li>
\t                 <li class="lst1_29"><a href="/sise/trading_halt.nhn" onClick="clickcr(this,'siu.29','','',event);" class="off"><span class="blind">거래정지종목</span></a></li> 
\t                 <li class="lst1_28"><a href="/sise/investment_alert.nhn?type=caution" onClick="clickcr(this,'siu.28','','',event);" class="off"><span class="blind">시장경보종목</span></a></li>
\t                </ul>
            \t</li>
    \t\t\t<li><strong class="lst_search"><span class="blind">종목조건검색</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst2_2"><a href="/sise/item_gold.nhn" onClick="clickcr(this,'sih.2','','',event);" class="off"><span class="blind">골든크로스</span></a></li>
\t\t\t\t\t <li class="type1 lst2_1"><a href="/sise/item_gap.nhn" onClick="clickcr(this,'sih.1','','',event);" class="off"><span class="blind">갭상승</span></a></li>
\t\t\t\t\t <li class="type1 lst2_3"><a href="/sise/item_igyuk.nhn" onClick="clickcr(this,'sih.3','','',event);" class="off"><span class="blind">이격도과열</span></a></li>
\t\t\t\t\t <li class="type1 lst2_4"><a href="/sise/item_overheating_1.nhn" onClick="clickcr(this,'sih.4','','',event);" class="off"><span class="blind">투심과열</span></a></li>
\t\t\t\t\t <li class="lst2_5"><a href="/sise/item_overheating_2.nhn" onClick="clickcr(this,'sih.5','','',event);" class="off"><span class="blind">상대강도과열</span></a></li>  \t                 
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><a href="/sise/report.nhn"><strong class="lst_report"><span class="blind">기업 전자공시</span></strong></a></li>
\t\t\t\t<li class="last"><a href="/sise/short_trade.nhn"><strong class="lst_short"><span class="blind">공매도 종합 현황</span></strong></a></li>\t\t\t\t
\t\t\t\t</ul>
\t\t\t\t\t\t\t\t
\t\t\t</div>
\t\t\t<!-- //leftmenu -->
\t\t\t
\t\t\t<!-- //leftmenu -->
\t\t<div id="contentarea">
\t\t\t<!-- 컨텐츠 -->
\t\t\t<div id="contentarea_left" class="bnd_wid">
\t\t\t\t<!-- 로케이터 : 메뉴에 맞게 고쳐주세요 -->
\t\t\t\t<div class="sub_location tlt_bottom_line">
\t\t\t\t\t<a href="/">금융홈</a> &gt; <a href="/sise/">국내증시</a> &gt; <a href="#">시가총액</a>
\t\t\t\t</div>
\t\t\t\t<!-- //로케이터 -->

\t\t\t\t<h3 class="sub_tlt">시가총액<span class="tlt_page">항목을 자유롭게 변경하실 수 있습니다.&nbsp;&nbsp;<img src='https://ssl.pstatic.net/imgstock/images5/bar_C7C.gif'>&nbsp;&nbsp;최대 6개까지 설정 가능합니다.</span></h3>
\t\t\t<!-- 항목선택 -->
\t\t
\t\t
\t


 
 
 \t
 \t
 


<script language=javascript>
function fieldSubmit() {
\tvar chkcnt = 0;
\t
\tfor(i = 0; i < document.field_form.fieldIds.length ; i++) {
    \tif(document.field_form.fieldIds[i].checked == true) {
    \t\tchkcnt++;
    \t}
    }
    
    if(chkcnt > 6) {
    \talert('최대 6개까지만 가능합니다.');
    \treturn;
    }

\tdocument.field_form.action = 'field_submit.nhn';
\tdocument.field_form.submit();
}

function fieldDefault() {
\tdocument.field_form.action = 'field_del.nhn';
\tdocument.field_form.submit();

}
</script>
<!-- 항목선택 -->
<div class="box_type_m" style="margin-top:0">
<form name='field_form'>
<input type=hidden name=menu value="market_sum">
<input type=hidden name=returnUrl value="http://finance.naver.com/sise/sise_market_sum.nhn?sosok=0&page=1">
\t<div class="subcnt_sise_item sub810"><div class="subcnt_sise_item_top sub810t">
\t\t<table summary="원하시는 항목을 선택하여 결과를 보실 수 있습니다." cellpadding="0" cellspacing="0" class="item_list">
\t\t<caption>항목 선택표</caption>
\t\t<colgroup><col width=62><col width=84><col width=111><col width=97><col width=116><col width=85></colgroup>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option1" name="fieldIds" value="quant"  checked> <label for="option1">거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option2" name="fieldIds" value="ask_buy"  > <label for="option2">매수호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option3" name="fieldIds" value="amount"  > <label for="option3">거래대금</label>(백만)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option4" name="fieldIds" value="market_sum"  checked> <label for="option4">시가총액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option5" name="fieldIds" value="operating_profit"  > <label for="option5">영업이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option6" name="fieldIds" value="per"  checked> <label for="option6">PER</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option7" name="fieldIds" value="open_val"  > <label for="option7">시가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option8" name="fieldIds" value="ask_sell"  > <label for="option8">매도호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option9" name="fieldIds" value="prev_quant"  > <label for="option9">전일거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option10" name="fieldIds" value="property_total"  > <label for="option10">자산총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option11" name="fieldIds" value="operating_profit_increasing_rate"  > <label for="option11">영업이익증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option12" name="fieldIds" value="roe"  checked> <label for="option12">ROE</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option13" name="fieldIds" value="high_val"  > <label for="option13">고가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option14" name="fieldIds" value="buy_total"  > <label for="option14">매수총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option15" name="fieldIds" value="frgn_rate"  checked> <label for="option15">외국인비율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option16" name="fieldIds" value="debt_total"  > <label for="option16">부채총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option17" name="fieldIds" value="net_income"  > <label for="option17">당기순이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option18" name="fieldIds" value="roa"  > <label for="option18">ROA</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option19" name="fieldIds" value="low_val"  > <label for="option19">저가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option20" name="fieldIds" value="sell_total"  > <label for="option20">매도총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option21" name="fieldIds" value="listed_stock_cnt"  checked> <label for="option21">상장주식수</label>(천주)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option22" name="fieldIds" value="sales"  > <label for="option22">매출액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option23" name="fieldIds" value="eps"  > <label for="option23">주당순이익</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option24" name="fieldIds" value="pbr"  > <label for="option24">PBR</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option25" name="fieldIds" value="sales_increasing_rate"  > <label for="option25">매출액증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option26" name="fieldIds" value="dividend"  > <label for="option26">보통주배당금</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option27" name="fieldIds" value="reserve_ratio"  > <label for="option27">유보율</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t</table>
\t\t<div class="item_btn">
\t\t\t<a href="javascript:fieldSubmit()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_apply.gif" alt="적용하기" width="55" height="18"></a><a href="javascript:fieldDefault()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_initialize.gif" alt="초기항 목으로" width="76" height="18"></a>
\t\t</div>
\t</div></div>
</div>
</form>
<!-- //항목선택 끝 -->

\t\t\t<!-- //항목선택 끝 -->
\t\t\t</div>
\t\t\t<!--  right area -->
\t\t\t<div id="contentarea_right">
\t\t\t\t


\t

\t
\t\t<script>document.domain='naver.com';</script>
\t

\t\t\t</div>

\t\t\t<!-- 종목 -->
\t\t\t<div class="box_type_l">
\t\t\t\t<div class="tab_style_1">

\t
\t
\t
\t\t\t\t\t<div class="tab_smeun choice"><div class="choice_lt"></div>코스피</div>
\t\t\t\t\t<div class="tab_smeun"><a href="?sosok=1">코스닥</a></div>
\t

\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<!-- [D] 활성화된 탭메뉴에 따라 blind text 변경해주세요 -->

\t
\t
\t\t\t\t<h4 class="blind">코스피</h4>
\t\t\t\t<table summary="코스피 시세정보를 선택한 항목에 따라 정보를 제공합니다." cellpadding="0" cellspacing="0" class="type_2">
\t\t\t\t<caption>코스피</caption>
\t


\t\t\t\t<colgroup>
\t\t\t\t<col width="2%">
\t\t\t\t<col width="*">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="9%">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t<col width="6%">
\t\t\t\t</colgroup>
\t\t\t\t<thead>
\t\t\t\t<tr>
\t\t\t\t\t<th scope="col">N</th>
\t\t\t\t\t<th scope="col">종목명</th>
\t\t\t\t\t<th scope="col">현재가</th>
\t\t\t\t\t<th scope="col" class="tr" style="padding-right:8px">전일비</th>
\t\t\t\t\t<th scope="col">등락률</th>
\t\t\t\t\t<th scope="col">액면가</th>
\t
\t\t\t\t\t<th scope="col">시가총액</th>
\t
\t\t\t\t\t<th scope="col">상장주식수</th>
\t
\t\t\t\t\t<th scope="col">외국인비율</th>
\t
\t\t\t\t\t<th scope="col">거래량</th>
\t
\t\t\t\t\t<th scope="col">PER</th>
\t
\t\t\t\t\t<th scope="col">ROE</th>
\t
\t\t\t\t\t<th scope="col">토론실</th>
\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t<tr><td colspan="10" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">1</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005930" class="tltle">삼성전자</a></td>
\t\t\t\t\t<td class="number">53,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t900
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.70%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3,205,773</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,969,783</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">57.57</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,684,758</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.91</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.63</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005930"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">2</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000660" class="tltle">SK하이닉스</a></td>
\t\t\t\t\t<td class="number">85,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,800
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.16%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">620,258</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">728,002</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">51.06</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2,392,317</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38.53</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000660"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">3</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005935" class="tltle">삼성전자우</a></td>
\t\t\t\t\t<td class="number">43,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t750
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.77%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">354,664</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">822,887</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">92.38</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,478,543</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.15</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005935"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">4</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=035420" class="tltle">NAVER</a></td>
\t\t\t\t\t<td class="number">173,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t6,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-3.61%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">285,951</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">164,813</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">59.28</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">882,638</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">44.07</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.97</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=035420"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">5</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005380" class="tltle">현대차</a></td>
\t\t\t\t\t<td class="number">125,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.80%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">268,154</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">213,668</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">469,025</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23.45</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.20</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005380"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">6</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=207940" class="tltle">삼성바이오로직스</a></td>
\t\t\t\t\t<td class="number">398,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.63%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">2,500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">263,337</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">66,165</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.76</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60,516</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">117.51</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.51</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=207940"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">7</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=012330" class="tltle">현대모비스</a></td>
\t\t\t\t\t<td class="number">257,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t11,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+4.67%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">245,415</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">95,307</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">48.73</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">295,500</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.27</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.30</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=012330"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">8</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=068270" class="tltle">셀트리온</a></td>
\t\t\t\t\t<td class="number">186,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.27%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">238,708</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">128,338</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">363,962</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">90.78</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.84</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=068270"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">9</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=051910" class="tltle">LG화학</a></td>
\t\t\t\t\t<td class="number">317,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.63%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">224,131</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,592</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">130,909</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=051910"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">10</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=055550" class="tltle">신한지주</a></td>
\t\t\t\t\t<td class="number">43,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.23%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">207,699</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">474,200</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">65.02</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">972,619</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.21</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=055550"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">11</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=028260" class="tltle">삼성물산</a></td>
\t\t\t\t\t<td class="number">104,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.46%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">197,278</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">189,690</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">266,895</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.06</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=028260"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">12</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=017670" class="tltle">SK텔레콤</a></td>
\t\t\t\t\t<td class="number">243,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.62%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">196,616</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">80,746</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.82</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">109,440</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.29</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.52</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=017670"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">13</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005490" class="tltle">POSCO</a></td>
\t\t\t\t\t<td class="number">224,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t4,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.82%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">195,299</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">87,187</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">52.29</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">204,183</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.55</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.88</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005490"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">14</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=051900" class="tltle">LG생활건강</a></td>
\t\t\t\t\t<td class="number">1,233,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.16%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">192,572</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15,618</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">45.07</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,085</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32.00</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.98</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=051900"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">15</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=034730" class="tltle">SK</a></td>
\t\t\t\t\t<td class="number">270,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.12%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">200</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">189,973</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,360</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">198,417</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.88</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=034730"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">16</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=105560" class="tltle">KB금융</a></td>
\t\t\t\t\t<td class="number">43,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">182,715</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">418,112</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">66.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,154,514</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.97</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.78</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=105560"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">17</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=015760" class="tltle">한국전력</a></td>
\t\t\t\t\t<td class="number">28,050</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.36%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">180,071</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">641,964</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.77</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,429,566</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-13.70</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-1.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=015760"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">18</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000270" class="tltle">기아차</a></td>
\t\t\t\t\t<td class="number">43,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.23%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">176,738</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">405,363</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">624,169</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.29</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.27</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000270"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">19</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=006400" class="tltle">삼성SDI</a></td>
\t\t\t\t\t<td class="number">238,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.63%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">163,660</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">68,765</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">43.75</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">178,472</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23.89</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.05</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=006400"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">20</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=018260" class="tltle">삼성에스디에스</a></td>
\t\t\t\t\t<td class="number">202,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t5,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.79%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">156,690</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">77,378</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">79,655</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.91</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=018260"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">21</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=032830" class="tltle">삼성생명</a></td>
\t\t\t\t\t<td class="number">74,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.40%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">149,600</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">200,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.96</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">242,274</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.95</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=032830"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">22</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=096770" class="tltle">SK이노베이션</a></td>
\t\t\t\t\t<td class="number">159,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.31%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">147,483</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">92,466</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35.84</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">134,694</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.12</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=096770"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">23</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=033780" class="tltle">KT&G</a></td>
\t\t\t\t\t<td class="number">99,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">136,606</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">137,292</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49.37</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">324,442</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.15</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.38</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=033780"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">24</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=035720" class="tltle">카카오</a></td>
\t\t\t\t\t<td class="number">155,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.65%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">130,459</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">83,897</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.76</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">280,140</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">253.67</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1.05</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=035720"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">25</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=003550" class="tltle">LG</a></td>
\t\t\t\t\t<td class="number">72,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.14%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">125,622</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">172,557</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34.79</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">208,971</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.87</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.96</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=003550"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">26</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=036570" class="tltle">엔씨소프트</a></td>
\t\t\t\t\t<td class="number">549,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t23,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+4.37%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">120,528</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21,954</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49.91</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">90,407</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28.80</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.44</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=036570"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">27</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=066570" class="tltle">LG전자</a></td>
\t\t\t\t\t<td class="number">70,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.17%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">115,372</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">163,648</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.85</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">728,404</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.28</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.03</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=066570"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">28</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000810" class="tltle">삼성화재</a></td>
\t\t\t\t\t<td class="number">234,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t9,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+4.23%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">110,857</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">47,375</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">48.34</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">125,167</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.81</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000810"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">29</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=090430" class="tltle">아모레퍼시픽</a></td>
\t\t\t\t\t<td class="number">189,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.89%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">110,487</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">58,458</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32.40</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">218,146</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">39.27</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.75</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=090430"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">30</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=010950" class="tltle">S-Oil</a></td>
\t\t\t\t\t<td class="number">97,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.20%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">2,500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">109,881</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">112,583</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">79.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">203,660</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">44.10</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.88</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=010950"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">31</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=086790" class="tltle">하나금융지주</a></td>
\t\t\t\t\t<td class="number">35,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.98%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">107,787</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">300,242</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">67.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">774,837</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.81</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.88</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=086790"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">32</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=316140" class="tltle">우리금융지주</a></td>
\t\t\t\t\t<td class="number">12,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.33%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">89,561</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">722,268</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.89</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,298,403</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=316140"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">33</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=009150" class="tltle">삼성전기</a></td>
\t\t\t\t\t<td class="number">112,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.35%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">84,030</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">74,694</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.16</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">398,857</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.30</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.50</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=009150"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">34</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=009540" class="tltle">한국조선해양</a></td>
\t\t\t\t\t<td class="number">117,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.73%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">83,158</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,773</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">128,230</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-16.10</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-4.25</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=009540"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">35</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=010130" class="tltle">고려아연</a></td>
\t\t\t\t\t<td class="number">427,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.47%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">80,669</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18,870</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.86</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25,400</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.30</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.64</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=010130"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">36</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=011170" class="tltle">롯데케미칼</a></td>
\t\t\t\t\t<td class="number">226,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.22%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">77,462</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34,275</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.98</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">64,959</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.91</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.04</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=011170"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">37</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=251270" class="tltle">넷마블</a></td>
\t\t\t\t\t<td class="number">90,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.24%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">77,167</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">85,742</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">189,027</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40.43</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.36</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=251270"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">38</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=030200" class="tltle">KT</a></td>
\t\t\t\t\t<td class="number">27,450</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.73%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">71,675</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">261,112</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">48.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">559,143</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.41</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.50</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=030200"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">39</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=024110" class="tltle">기업은행</a></td>
\t\t\t\t\t<td class="number">12,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t250
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.08%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,702</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">577,157</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,444,392</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.59</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.63</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=024110"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">40</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=021240" class="tltle">웅진코웨이</a></td>
\t\t\t\t\t<td class="number">92,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.11%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">67,969</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">73,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">59.43</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">138,557</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.45</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.84</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=021240"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">41</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=069500" class="tltle">KODEX 200</a></td>
\t\t\t\t\t<td class="number">28,770</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.41%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">0</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">67,796</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">235,650</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2,642,044</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=069500"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">42</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=035250" class="tltle">강원랜드</a></td>
\t\t\t\t\t<td class="number">31,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t550
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.78%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">67,391</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">213,940</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.45</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">351,108</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.66</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.39</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=035250"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">43</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=002790" class="tltle">아모레G</a></td>
\t\t\t\t\t<td class="number">80,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.38%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">65,967</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">82,458</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.78</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">114,135</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">50.00</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.65</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=002790"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">44</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=032640" class="tltle">LG유플러스</a></td>
\t\t\t\t\t<td class="number">13,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.72%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60,907</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">436,611</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,132,573</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.65</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.97</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=032640"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">45</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=018880" class="tltle">한온시스템</a></td>
\t\t\t\t\t<td class="number">11,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.32%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60,052</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">533,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.41</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">712,533</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.63</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.83</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=018880"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">46</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=086280" class="tltle">현대글로비스</a></td>
\t\t\t\t\t<td class="number">153,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.99%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">57,562</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,500</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.07</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">58,515</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.16</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.60</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=086280"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">47</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=267250" class="tltle">현대중공업지주</a></td>
\t\t\t\t\t<td class="number">342,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">55,782</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,287</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.87</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18,840</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.77</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.53</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=267250"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">48</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=034220" class="tltle">LG디스플레이</a></td>
\t\t\t\t\t<td class="number">14,550</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.34%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">52,062</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">357,816</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,246,161</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-25.13</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-1.46</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=034220"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">49</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=006800" class="tltle">미래에셋대우</a></td>
\t\t\t\t\t<td class="number">7,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t190
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.60%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49,374</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">658,316</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.18</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,683,222</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.02</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.83</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=006800"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">50</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000720" class="tltle">현대건설</a></td>
\t\t\t\t\t<td class="number">44,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t650
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.50%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49,108</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">111,356</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.85</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">264,327</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.99</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000720"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line_1"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t
\t



\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t<table summary="페이지 네비게이션 리스트" class="Nnavi" align="center">
\t\t\t\t<caption>페이지 네비게이션</caption>
\t\t\t\t<tr>\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t<td class="on">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=1"  >1</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=2"  >2</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=3"  >3</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=4"  >4</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=5"  >5</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=6"  >6</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=7"  >7</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=8"  >8</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=9"  >9</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=10"  >10</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=11"  >
\t\t\t\t다음<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarR.gif" width="3" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgRR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=32"  >맨뒤
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarRR.gif" width="8" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t
\t\t\t\t</tr>
\t\t\t\t</table>
\t\t\t</div>
\t\t\t<!-- // 종목 -->
\t\t\t<!-- //컨텐츠 -->
\t\t</div>
\t</div>






\t






\t<div id="footer">
\t\t<ul>
\t\t\t<li class="first">
\t\t\t\t<a href="https://www.naver.com/rules/service.html" onClick="clickcr(this, 'fot.service', '', '', event);" target="_blank">이용약관</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://finance.naver.com/rules.nhn" onClick="clickcr(this, 'fot.policy', '', '', event);" target="_blank">금융게시판 운영원칙</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/privacy.html" onClick="clickcr(this, 'fot.privacy', '', '', event);" target="_blank"><strong>개인정보처리방침</strong></a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/disclaimer.html" onClick="clickcr(this, 'fot.limit', '', '', event);" target="_blank">책임의 한계와 법적고지</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://help.naver.com/support/alias/contents2/finance/finance_1.naver" onclick="clickcr(this, 'fot.help', '', '', event);" target="_blank">금융 고객센터</a>
\t\t\t</li>
\t\t</ul>
\t\t<p class="desc">네이버(주)에서 제공하는 금융정보는 각 컨텐츠 제공업체<a href="javascript:;" onclick="togglePanelFooter('footerPanel0');" class="desc_help"><img src="https://ssl.pstatic.net/static/nfinance/2018/06/29/btn_help.png" width="17" height="17" alt="제공업체 상세설명"></a>부터 받는 정보로 투자 참고 사항이며, 오류가 발생할 수 있고 지연될 수<br>있습니다. 네이버(주)는 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다. 게시된 정보를 무단으로 배포할 수 없습니다.</p>
\t\t<div id="footerPanel0" class="provider_layer" style="display:none" tabindex="0" onblur="hidePannel('footerPanel0')">
\t\t\t<strong class="provider_layer__tit">컨텐츠 제공업체</strong>
\t\t\t<div class="provider_layer__txt">
\t\t\t\t<p><span>코스콤 : </span>실시간 주가정보 및 국내시세정보</p>
\t\t\t\t<p><span>에프앤가이드 : </span>기업 및 재무정보</p>
\t\t\t\t<p><span>이데일리 : </span>해외 시세 및 시장지표 정보</p>
\t\t\t\t<p><span>제로인 : </span>펀드정보</p>
\t\t\t\t<p><span>한국예탁결제원 : </span>주주총회일 및 전자투표 정보</p>
\t\t\t</div>
\t\t\t<span class="arrow"></span>
\t\t</div>
\t\t<address>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" class="logo" onClick="clickcr(this, 'fot.nhn', '', '', event);"><img src="https://ssl.pstatic.net/static/nfinance/2019/02/22/ci_naver.png" width="58" height="11" alt="NAVER" /></a>
\t\t\t<em>Copyright &copy;</em>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" onClick="clickcr(this, 'fot.nhn', '', '', event);">NAVER Corp.</a>
\t\t\t<span>All Rights Reserved.</span>
\t\t</address>
\t\t
\t\t
\t\t
\t</div>



<script type="text/javascript">
function isVisible(obj) {
    if (obj == document) return true
 
    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }
 
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }
 
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }
 
    return isVisible(obj.parentNode)
}

function isChildOf(myobj, containerObj) {
\twhile(myobj != undefined) {
\t\tif (myobj == document.body) {
\t\t\tbreak;
\t\t} 
\t\tif (myobj == containerObj) {
\t\t\treturn true;
\t\t}
\t\tmyobj = myobj.parentElement;
\t}
\treturn false;\t
}

function gnbLayerClose(e){
\tvar target = e.target ? e.target : e.srcElement;
\tif (isVisible(document.getElementById('gnb_service_lyr')) || isVisible(document.getElementById('gnb_notice_lyr')) ||isVisible(document.getElementById('gnb_my_lyr')) ) {
\t\tif (!isChildOf(target, document.getElementById('gnb'))) {
\t\t\tgnbAllLayerClose();
\t\t}
\t}\t
}

var isIE = (navigator.userAgent.toLowerCase().indexOf("msie")!=-1 && window.document.all) ? true:false;
if (isIE) {
\tdocument.attachEvent('onmousedown', gnbLayerClose);
} else {
\twindow.addEventListener('mousedown', gnbLayerClose);
}

function showPannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='block';

    if (layerId == "summary_lyr") {
        var layerHeight = jindo.$Element(layer).height();
        jindo.$Element("summary_ifr").height(layerHeight);
    }
}

function hidePannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='none';
}

function togglePanelFooter(layerId) {
    var elTargetLayer = jindo.$Element(jindo.$$.getSingle("#" + layerId));

    if (elTargetLayer != null) {
        if (elTargetLayer.visible()) {
            hidePannel(layerId);
        } else {
            showPannel(layerId);
        }
    }
}

// add data-useragent
document.documentElement.setAttribute('data-useragent',navigator.userAgent);
</script>
</div>
</body>
</html>
    `,
    2: `








<!--  global include -->

\t
\t
\t
\t
\t
<html lang='ko'>
<head>


\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t<title>시가총액 : 네이버 금융</title>
\t\t\t
\t\t
\t





\t
\t
\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
\t


<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">




\t
    
        <meta property="og:url" content="http://finance.naver.com/sise/sise_market_sum.nhn"/>
        
\t\t\t
\t\t    
\t\t    \t<meta property="og:title" content="시가총액 : 네이버 금융"/>
\t\t     
\t\t
\t\t
\t\t\t
\t\t\t   <meta property="og:description" content="관심종목의 실시간 주가를 가장 빠르게 확인하는 곳"/>
\t\t    
\t\t    
\t\t
\t\t 
\t\t\t
\t\t\t    <meta property="og:image" content="https://ssl.pstatic.net/static/m/stock/im/2016/08/og_stock-200.png"/>
\t\t    
\t\t    
\t\t
    

<meta property="og:type" content="article"/>
<meta property="og:article:thumbnailUrl" content=""/>
<meta property="og:article:author" content="네이버금융"/>
<meta property="og:article:author:url" content="http://FINANCE.NAVER.COM"/>




<link rel='stylesheet' type='text/css' href='/css/finance_header.css?20191114133508'>

\t
\t
\t
\t
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/common.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/layout.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/main.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock2.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock3.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/world.css?20191114133508">
\t\t
\t\t
\t\t
\t\t

\t\t
\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindo.min.ns.1.5.3.euckr.js?20191114133508"></script>
\t\t\t
\t\t\t
\t\t\t\t<script type="text/javascript" src="/js/release/common.js?20191114133508"></script>
\t\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindoComponent/jindo.Component.1.0.3.js?20191114133508"></script>
\t\t\t<script type="text/javascript" src="/ac/nhn.autocomplete.stock.js?20191114133508"></script>
\t\t
\t\t
\t


\t<link rel="shortcut icon" href="https://www.naver.com/favicon.ico?20191114133508" type="image/x-icon">
\t
\t<script type="text/javascript">
    (function(){
        var sUserAgent = navigator.userAgent;
        if(/iPhone|iPad/.test(sUserAgent)){
            document.write(
                [
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_120X120_iphone.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_152x152_ipad.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="167x167" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_167x167_ipad_pro.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_180x180_iphone.png" />'
                ]
                .join('\\n')
            );
        }

        if(/Android/.test(sUserAgent)){
            document.write(
                [
                    '<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_72x72_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="96x96" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_96x96_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_144x144_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="192x192" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_192x192_xxxhpdi.png" />'
\t\t\t\t]
\t\t\t\t.join('\\n')
\t\t\t);
        }
    })();
    </script>
</head>




<body onload='getGNB();'>



<script type="text/javascript">
\tdocument.domain = 'naver.com';
\tvar nclk_evt = 3;
\tnclk_do();
</script>


<script type="text/javascript">




var nsc="finance.stock";





var ccsrv="cc.naver.com";


\t
\t
\tvar gnb_service='finance';
\t


var gnb_logout=document.URL; //GNB에서 로그아웃 후 redirect 될 URL
var gnb_searchbox='off'; //미니 검색창을 on 할지 off 할지. default는 off
var gnb_shortnick='off'; //닉네임 말줄임(10자)을 on할지 off 할지. default는 off.


var gnb_naverme_layer_open_callback = function(){
\t   var naverLayerSize = gnbNaverMeLayer.getLayerSize();
\t\t
\t\tvar me_layers = document.getElementById("me_layers");
\t\tme_layers.width=naverLayerSize.width;
\t\tme_layers.height=naverLayerSize.height;};

var gnb_naverme_layer_close_callback = function(){
\t\t
\t\t\tvar me_layers = document.getElementById("me_layers");
\t\t\tme_layers.width="0";
\t\t\tme_layers.height="0";};
</script>


<div id="u_skip">
\t<a href="#menu" tabindex="1"><span>메인 메뉴로 바로가기</span></a>

\t
\t
\t\t<a href="#start" tabindex="2"><span>본문으로 바로가기</span></a>
\t

</div>


<div id="header">
\t<div class="snb_area">
\t\t<div class="snb_inner">
\t\t\t<div id="gnb_area">
\t\t\t\t<div id="gnb">
\t\t\t\t\t<script charset="EUC-KR" type="text/javascript">
\t\t\t\t\tvar gnb_service = "gnbtest";
                    var gnb_template = location.protocol == "http:" ? "gnb_quirks_euckr" : "gnb_utf8" ;
\t\t\t\t\tvar gnb_dark = false;
\t\t\t\t\tvar gnb_brightness = 1;
\t\t\t\t\tvar gnb_logout=encodeURIComponent(location.href);
\t\t\t\t\tvar gnb_one_naver = 1;
\t\t\t\t\t</script>
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t<script type="text/javascript" charset="utf-8" src="https://ssl.pstatic.net/static.gn/templates/gnb_utf8.nhn?20191116">
                    \t\t</script>
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>

\t\t\t<div class="sta">
\t\t\t\t<h1 class="logo"> <a href="https://www.naver.com/" class="logo_naver" onClick="clickcr(this, 'STA.naver', '', '', event);"><span class="blind">네이버</span></a>
\t\t\t\t<a href="/" class="logo_service" onClick="clickcr(this, 'STA.finance', '', '', event);"><span class="blind">금융</span></a> </h1>
\t\t\t\t<form name="search" action="/search/search.nhn"  method="get"
\t\t\t\t\tonsubmit="return delayed_submit(this)" style="margin:0; padding:0;">
\t\t\t\t<fieldset>
\t\t\t\t\t<legend>검색</legend>
\t\t\t\t\t<div class="snb_search_box">
\t\t\t\t\t\t<div class="snb_search_box_sub">
\t\t\t\t\t\t\t<input id="stock_items" type="text" title="검색" name="query" value="종목명&middot;펀드명&middot;환율명&middot;원자재명 입력" accesskey="s" class="snb_search_text snb_default" autocomplete="off">
\t\t\t\t\t\t\t<a id="nautocomplete" href="#" onclick="return false" class="btn_arrow"><span class="blind">자동완성 펼치기</span></a>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="auto_area">
\t\t\t\t\t\t\t<h2 class="blind">자동완성</h2>
\t\t\t\t\t\t\t<iframe id="autoFrame" src="/ac/reatcmp.nhn?menu=sise&submenu=" scrolling="no" height="0" frameborder="0" width="400" style="display: none;" marginheight="0" marginwidth="0" title="자동완성"></iframe>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<button type="submit" class="snb_search_btn" onclick="clickcr(this, 'STA.search', '', '', event);" alt="검색"><span class="blind">검색</span></button>
\t\t\t\t\t\t<a href="#" target="_blank" class="snb_search_btn-total" onclick="itegrationSearch();clickcr(this, 'STA.nx', '', '', event);return false;">통합검색</a>
\t\t\t\t\t</div>
\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<div class="lnb_area ">
\t\t<div class="lnb_inner">
\t\t\t<div id="menu">
\t\t\t\t<ul class="menu">
\t\t\t\t\t<li class="m1 first "><a href="/" onClick="clickcr(this, 'LNB.home', '', '', event);"><span class="tx">금융 홈</span></a></li>
\t\t\t\t\t<li class="m2 on"><a href="/sise/" onClick="clickcr(this, 'LNB.sise', '', '', event);"><span class="tx">국내증시</span></a></li>
\t\t\t\t\t<li class="m3 "><a href="/world/" onClick="clickcr(this, 'LNB.world', '', '', event);"><span class="tx">해외증시</span></a></li>
\t\t\t\t\t<li class="m4 "><a href="/marketindex/" onClick="clickcr(this, 'LNB.market', '', '', event);"><span class="tx">시장지표</span></a></li>
\t\t\t\t\t<li class="m5 "><a href="/fund/" onClick="clickcr(this, 'LNB.fund', '', '', event);"><span class="tx">펀드</span></a>
\t\t\t\t\t\t
\t\t\t\t\t</li>
\t\t\t\t\t<li class="m6 "><a href="/research/" onClick="clickcr(this, 'LNB.research', '', '', event);"><span class="tx">투자전략</span></a></li>
\t\t\t\t\t<li class="m7 "><a href="/news/"><span class="tx">뉴스</span></a></li>
\t\t\t\t\t<li class="m8 "><a href="/mystock/" onClick="clickcr(this, 'LNB.mystock', '', '', event);"><span class="tx">MY</span></a></li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t</div>
\t
\t
\t
\t

\t
\t<script type="text/JavaScript">
\t\t/* lcs 집계 */
        ;(function(){
            var eventType = "onpageshow" in window ? "pageshow" : "load";
            jindo.$Fn(function(){
                lcs_do();
            }).attach(window, eventType);
        })();

\t\t/* 검색 자동완성 [ 인자1 : 검색input의 ID, 인자2 : iframe 태그 ID ]   */
\t\t// AutoComplete 생성
\t\tvar acDomain = "ac.finance.naver.com";
        if (location.hostname.indexOf("staging-") > -1) {
            acDomain = "staging-" + acDomain;
        }
        var acUrl = "https://" + acDomain + "/ac";

\t\tsmartSearch = new nhn.Autocomplete(
\t\t\t// InputManager 생성
\t\t\tnew nhn.AcInputManager(jindo.$("stock_items")),
\t\t\t// DataManager 생성
\t\t\tnew nhn.AcDataManager(acUrl, "jsonp", "get", {
                    st: "111",
                    r_lt : "111",
                    q_enc : "euc-kr",
                    r_enc : "euc-kr",
                    frm: "stock"}),
\t\t\t// ViewManager 생성
\t\t\tnew nhn.AcStockViewManager(jindo.$("autoFrame"), jindo.$("nautocomplete"), {
                                        strMax: 200,
                                        listMax: [7, 2, 2],
                                        aRedirectUrl : [
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com"]}),
\t\t\t// Autocomplete Option
            {formId:"search", cookieDomain:location.hostname, cookieName:"NaverCommonStock"});

\t\t\tsmartSearch.attach({
\t            onFocus: function () {
\t                var weInput = jindo.$Element('stock_items');
\t                if (weInput && weInput.hasClass("snb_default")) {
\t                        weInput.text("");
\t                        weInput.removeClass('snb_default');
\t                }
\t            }
\t        });

\t\t/* 통합검색  start ----->  */
\t\tdocument.domain = 'naver.com';
\t\tvar sSearchHintText = '종목명·펀드명·환율명·원자재명 입력';
\t\tfunction itegrationSearch() {
\t\t\tvar query = jindo.$('stock_items').value;

\t\t\tif ( query == ''  || encodeURIComponent(query) == encodeURIComponent(sSearchHintText))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}

            var url = location.protocol + "//search.naver.com/search.naver?sm=sta_hty.finance&where=nexearch&ie=UTF8&query=" + encodeURIComponent(query);
            window.open(url, "_blank");

\t\t\treturn false;
\t\t}

\t\tfunction delayed_submit(object) {
\t\t\tif (navigator.userAgent.indexOf('MSIE') == -1) {
\t\t\t\twindow.setTimeout(function() {stock_search(object)}, 300);
\t\t\t} else {
\t\t\t\tstock_search(object);
\t\t\t}
\t\t\treturn false;
\t\t}

\t\tfunction stock_search (object)
\t\t{
\t\t\tquery = object.query.value.replace(/^\\s*/,'').replace(/\\s*$/,'');\t// trim
\t\t\tobject.query.value=query;

\t\t\tif ( query == '' || query == sSearchHintText.replace(/^\\s*/,'').replace(/\\s*$/,''))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}
\t\t\telse {
\t\t\t\tobject.submit();
\t\t\t}
\t\t}
\t\t/* <---------- 통합검색  end */

\t\tfunction popup()
\t\t{
\t\t\twin = window.open('/template/group_limit_pop.jsp','finan_popup','width=569 height=278 scrollbars=no status=no');
\t\t\twin.focus();
\t\t}
\t</script>

\t<iframe id="me_layers" name="test" title="네이버미 영역" width="0" height="0" scrolling="no" frameborder="0" style="display:block;top: 22px; right: 209px; position: absolute; z-index: 15;"></iframe>
</div>
<div id="wrap"  >

<!-- //  global include -->
<script language="JavaScript">
function mouseOver(obj){
  obj.style.backgroundColor="#f6f4e5";
}
function mouseOut(obj){
  obj.style.backgroundColor="#ffffff";
}
</script>

\t<div id="newarea">
\t\t\t

\t\t\t<!-- leftmenu -->
\t\t\t<div class="snb snb2">
\t\t\t\t<h2 class="h_sise"><a href="/sise/"><span class="blind">국내증시</span></a></h2>
\t\t\t\t<ul class="nav1">
\t\t\t\t<li class="frst"><strong class="lst_sise"><span class="blind">주요시세정보</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst1_1"><a href="/sise/sise_index.nhn?code=KOSPI" onClick="clickcr(this,'siu.1','','',event);" class="off"><span class="blind">코스피</span></a></li> 
                     <li class="type1 lst1_2"><a href="/sise/sise_index.nhn?code=KOSDAQ" onClick="clickcr(this,'siu.2','','',event);" class="off"><span class="blind">코스닥</span></a></li>
                     <li class="type1 lst1_3"><a href="/sise/sise_index.nhn?code=FUT" onClick="clickcr(this,'siu.3','','',event);" class="off"><span class="blind">선물</span></a></li>
                     <li class="type1 lst1_26"><a href="/sise/sise_index.nhn?code=KPI200" onClick="clickcr(this,'siu.26','','',event);" class="off"><span class="blind">코스피200</span></a></li>
                     <li class="type1 lst1_31"><a href="/sise/konex.nhn" onClick="clickcr(this,'siu.konex','','',event);" class="off"><span class="blind">코넥스</span></a></li>
                     <li class="type1 lst1_16"><a href="/sise/sise_market_sum.nhn" onClick="clickcr(this,'siu.16','','',event);" class="on"><span class="blind">시가총액</span></a></li>
                     <li class="type1 lst1_32" ><a href="/sise/dividend_list.nhn" onClick="clickcr(this,'siu.dividend','','',event);" class="off"><span class="blind">배당</span></a></li>                     
                     <li class="type1 lst1_4"><a href="/sise/sise_group.nhn?type=upjong" onClick="clickcr(this,'siu.4','','',event);" class="off"><span class="blind">업종</span></a></li>
                     <li class="type1 lst1_5" ><a href="/sise/theme.nhn" onClick="clickcr(this,'siu.5','','',event);" class="off"><span class="blind">테마</span></a></li>
                     <li class="type1 lst1_30"><a href="/sise/sise_group.nhn?type=group"  onClick="clickcr(this,'siu.30','','',event);"  class="off"><span class="blind">그룹사</span></a></li>
\t\t\t\t\t <li class="type1 lst1_27 "><a href="/sise/etf.nhn" onClick="clickcr(this,'siu.27','','',event);" class="off"><span class="blind">ETF</span></a></li>
\t\t\t\t\t <li class="type1 lst1_34"><a href="/sise/etn.nhn" onClick="clickcr(this,'siu.34','','',event);" class="off"><span class="blind">ETN</span></a></li>
\t\t\t\t\t <li class="type1 lst1_8 "><a href="/sise/sise_rise.nhn" onClick="clickcr(this,'siu.8','','',event);" class="off"><span class="blind">ª?Ω?</span></a></li>
                     <li class="type1 lst1_9 "><a href="/sise/sise_steady.nhn" onClick="clickcr(this,'siu.9','','',event);" class="off"><span class="blind">보합</span></a></li>
                     <li class="type1 lst1_10"><a href="/sise/sise_fall.nhn" onClick="clickcr(this,'siu.10','','',event);" class="off"><span class="blind">하락</span></a></li>
                     <li class="type1 lst1_6"><a href="/sise/sise_upper.nhn" onClick="clickcr(this,'siu.6','','',event);" class="off"><span class="blind">상한가</span></a></li>
                     <li class="type1 lst1_7"><a href="/sise/sise_lower.nhn" onClick="clickcr(this,'siu.7','','',event);" class="off"><span class="blind">하한가</span></a></li>
                     <li class="type1 lst1_15 "><a href="/sise/sise_low_up.nhn" onClick="clickcr(this,'siu.15','','',event);" class="off"><span class="blind">급등</span></a></li>
                     <li class="type1 lst1_14 "><a href="/sise/sise_high_down.nhn" onClick="clickcr(this,'siu.14','','',event);" class="off"><span class="blind">급락</span></a></li>
                     <li class="type2 lst1_11"><a href="/sise/sise_quant.nhn" onClick="clickcr(this,'siu.11','','',event);" class="off"><span class="blind">거래상위</span></a></li>  
                     <li class="type1 lst1_12 "><a href="/sise/sise_quant_high.nhn" onClick="clickcr(this,'siu.12','','',event);" class="off"><span class="blind">급증</span></a></li> 
                     <li class="type1 lst1_13 "><a href="/sise/sise_quant_low.nhn" onClick="clickcr(this,'siu.13','','',event);" class="off"><span class="blind">급감</span></a></li>
                     <li class="lst1_23"><a href="/sise/sise_trans_style.nhn" onClick="clickcr(this,'siu.23','','',event);" class="off"><span class="blind">투자자별매매동향</span></a></li>  
                     <li class="type1 lst1_17"><a href="/sise/sise_deal_rank.nhn" onClick="clickcr(this,'siu.17','','',event);" class="off"><span class="blind">외국인매매</span></a></li> 
                     <li class="type1 lst1_18"><a href="/sise/sise_deal_rank.nhn?investor_gubun=1000" onClick="clickcr(this,'siu.18','','',event);" class="off"><span class="blind">기관매매</span></a></li> 
                     <li class="lst1_19"><a href="/sise/sise_program.nhn" onClick="clickcr(this,'siu.19','','',event);" class="off"><span class="blind">프로그램매매동향</span></a></li> 
                     <li class="lst1_22"><a href="/sise/sise_deposit.nhn" onClick="clickcr(this,'siu.22','','',event);" class="off"><span class="blind">증시자금동향</span></a></li>
                     <li class="lst1_21"><a href="/sise/sise_new_stock.nhn" onClick="clickcr(this,'siu.21','','',event);" class="off"><span class="blind">신규상장</span></a></li>  
                     <li class="lst1_24 "><a href="/sise/sise_foreign_hold.nhn" onClick="clickcr(this,'siu.24','','',event);" class="off"><span class="blind">외국인보유</span></a></li> 
                     <li class="lst1_25 "><a href="/sise/market3news_list.nhn" onClick="clickcr(this,'siu.25','','',event);" class="off"><span class="blind">장외시세</span></a></li>
                     <li class="lst1_33 "><a href="/sise/ipo.nhn" onClick="clickcr(this,'siu.33','','',event);" class="off"><span class="blind">IPO</span></a></li>
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><strong class="lst_prevent"><span class="blind">투자자보호</span></strong>
\t                <ul class="sub">
\t                 <li class="lst1_20"><a href="/sise/management.nhn" onClick="clickcr(this,'siu.20','','',event);" class="off"><span class="blind">관리종목</span></a></li>
\t                 <li class="lst1_29"><a href="/sise/trading_halt.nhn" onClick="clickcr(this,'siu.29','','',event);" class="off"><span class="blind">거래정지종목</span></a></li> 
\t                 <li class="lst1_28"><a href="/sise/investment_alert.nhn?type=caution" onClick="clickcr(this,'siu.28','','',event);" class="off"><span class="blind">시장경보종목</span></a></li>
\t                </ul>
            \t</li>
    \t\t\t<li><strong class="lst_search"><span class="blind">종목조건검색</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst2_2"><a href="/sise/item_gold.nhn" onClick="clickcr(this,'sih.2','','',event);" class="off"><span class="blind">골든크로스</span></a></li>
\t\t\t\t\t <li class="type1 lst2_1"><a href="/sise/item_gap.nhn" onClick="clickcr(this,'sih.1','','',event);" class="off"><span class="blind">갭상승</span></a></li>
\t\t\t\t\t <li class="type1 lst2_3"><a href="/sise/item_igyuk.nhn" onClick="clickcr(this,'sih.3','','',event);" class="off"><span class="blind">이격도과열</span></a></li>
\t\t\t\t\t <li class="type1 lst2_4"><a href="/sise/item_overheating_1.nhn" onClick="clickcr(this,'sih.4','','',event);" class="off"><span class="blind">투심과열</span></a></li>
\t\t\t\t\t <li class="lst2_5"><a href="/sise/item_overheating_2.nhn" onClick="clickcr(this,'sih.5','','',event);" class="off"><span class="blind">상대강도과열</span></a></li>  \t                 
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><a href="/sise/report.nhn"><strong class="lst_report"><span class="blind">기업 전자공시</span></strong></a></li>
\t\t\t\t<li class="last"><a href="/sise/short_trade.nhn"><strong class="lst_short"><span class="blind">공매도 종합 현황</span></strong></a></li>\t\t\t\t
\t\t\t\t</ul>
\t\t\t\t\t\t\t\t
\t\t\t</div>
\t\t\t<!-- //leftmenu -->
\t\t\t
\t\t\t<!-- //leftmenu -->
\t\t<div id="contentarea">
\t\t\t<!-- 컨텐츠 -->
\t\t\t<div id="contentarea_left" class="bnd_wid">
\t\t\t\t<!-- 로케이터 : 메뉴에 맞게 고쳐주세요 -->
\t\t\t\t<div class="sub_location tlt_bottom_line">
\t\t\t\t\t<a href="/">금융홈</a> &gt; <a href="/sise/">국내증시</a> &gt; <a href="#">시가총액</a>
\t\t\t\t</div>
\t\t\t\t<!-- //로케이터 -->

\t\t\t\t<h3 class="sub_tlt">시가총액<span class="tlt_page">항목을 자유롭게 변경하실 수 있습니다.&nbsp;&nbsp;<img src='https://ssl.pstatic.net/imgstock/images5/bar_C7C.gif'>&nbsp;&nbsp;최대 6개까지 설정 가능합니다.</span></h3>
\t\t\t<!-- 항목선택 -->
\t\t
\t\t
\t


 
 
 \t
 \t
 


<script language=javascript>
function fieldSubmit() {
\tvar chkcnt = 0;
\t
\tfor(i = 0; i < document.field_form.fieldIds.length ; i++) {
    \tif(document.field_form.fieldIds[i].checked == true) {
    \t\tchkcnt++;
    \t}
    }
    
    if(chkcnt > 6) {
    \talert('최대 6개까지만 가능합니다.');
    \treturn;
    }

\tdocument.field_form.action = 'field_submit.nhn';
\tdocument.field_form.submit();
}

function fieldDefault() {
\tdocument.field_form.action = 'field_del.nhn';
\tdocument.field_form.submit();

}
</script>
<!-- 항목선택 -->
<div class="box_type_m" style="margin-top:0">
<form name='field_form'>
<input type=hidden name=menu value="market_sum">
<input type=hidden name=returnUrl value="http://finance.naver.com/sise/sise_market_sum.nhn?sosok=0&page=2">
\t<div class="subcnt_sise_item sub810"><div class="subcnt_sise_item_top sub810t">
\t\t<table summary="원하시는 항목을 선택하여 결과를 보실 수 있습니다." cellpadding="0" cellspacing="0" class="item_list">
\t\t<caption>항목 선택표</caption>
\t\t<colgroup><col width=62><col width=84><col width=111><col width=97><col width=116><col width=85></colgroup>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option1" name="fieldIds" value="quant"  checked> <label for="option1">거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option2" name="fieldIds" value="ask_buy"  > <label for="option2">매수호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option3" name="fieldIds" value="amount"  > <label for="option3">거래대금</label>(백만)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option4" name="fieldIds" value="market_sum"  checked> <label for="option4">시가총액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option5" name="fieldIds" value="operating_profit"  > <label for="option5">영업이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option6" name="fieldIds" value="per"  checked> <label for="option6">PER</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option7" name="fieldIds" value="open_val"  > <label for="option7">시가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option8" name="fieldIds" value="ask_sell"  > <label for="option8">매도호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option9" name="fieldIds" value="prev_quant"  > <label for="option9">전일거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option10" name="fieldIds" value="property_total"  > <label for="option10">자산총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option11" name="fieldIds" value="operating_profit_increasing_rate"  > <label for="option11">영업이익증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option12" name="fieldIds" value="roe"  checked> <label for="option12">ROE</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option13" name="fieldIds" value="high_val"  > <label for="option13">고가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option14" name="fieldIds" value="buy_total"  > <label for="option14">매수총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option15" name="fieldIds" value="frgn_rate"  checked> <label for="option15">외국인비율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option16" name="fieldIds" value="debt_total"  > <label for="option16">부채총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option17" name="fieldIds" value="net_income"  > <label for="option17">당기순이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option18" name="fieldIds" value="roa"  > <label for="option18">ROA</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option19" name="fieldIds" value="low_val"  > <label for="option19">저가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option20" name="fieldIds" value="sell_total"  > <label for="option20">매도총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option21" name="fieldIds" value="listed_stock_cnt"  checked> <label for="option21">상장주식수</label>(천주)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option22" name="fieldIds" value="sales"  > <label for="option22">매출액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option23" name="fieldIds" value="eps"  > <label for="option23">주당순이익</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option24" name="fieldIds" value="pbr"  > <label for="option24">PBR</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option25" name="fieldIds" value="sales_increasing_rate"  > <label for="option25">매출액증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option26" name="fieldIds" value="dividend"  > <label for="option26">보통주배당금</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option27" name="fieldIds" value="reserve_ratio"  > <label for="option27">유보율</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t</table>
\t\t<div class="item_btn">
\t\t\t<a href="javascript:fieldSubmit()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_apply.gif" alt="적용하기" width="55" height="18"></a><a href="javascript:fieldDefault()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_initialize.gif" alt="초기항 목으로" width="76" height="18"></a>
\t\t</div>
\t</div></div>
</div>
</form>
<!-- //항목선택 끝 -->

\t\t\t<!-- //항목선택 끝 -->
\t\t\t</div>
\t\t\t<!--  right area -->
\t\t\t<div id="contentarea_right">
\t\t\t\t


\t

\t
\t\t<script>document.domain='naver.com';</script>
\t

\t\t\t</div>

\t\t\t<!-- 종목 -->
\t\t\t<div class="box_type_l">
\t\t\t\t<div class="tab_style_1">

\t
\t
\t
\t\t\t\t\t<div class="tab_smeun choice"><div class="choice_lt"></div>코스피</div>
\t\t\t\t\t<div class="tab_smeun"><a href="?sosok=1">코스닥</a></div>
\t

\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<!-- [D] 활성화된 탭메뉴에 따라 blind text 변경해주세요 -->

\t
\t
\t\t\t\t<h4 class="blind">코스피</h4>
\t\t\t\t<table summary="코스피 시세정보를 선택한 항목에 따라 정보를 제공합니다." cellpadding="0" cellspacing="0" class="type_2">
\t\t\t\t<caption>코스피</caption>
\t


\t\t\t\t<colgroup>
\t\t\t\t<col width="2%">
\t\t\t\t<col width="*">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="9%">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t<col width="6%">
\t\t\t\t</colgroup>
\t\t\t\t<thead>
\t\t\t\t<tr>
\t\t\t\t\t<th scope="col">N</th>
\t\t\t\t\t<th scope="col">종목명</th>
\t\t\t\t\t<th scope="col">현재가</th>
\t\t\t\t\t<th scope="col" class="tr" style="padding-right:8px">전일비</th>
\t\t\t\t\t<th scope="col">등락률</th>
\t\t\t\t\t<th scope="col">액면가</th>
\t
\t\t\t\t\t<th scope="col">시가총액</th>
\t
\t\t\t\t\t<th scope="col">상장주식수</th>
\t
\t\t\t\t\t<th scope="col">외국인비율</th>
\t
\t\t\t\t\t<th scope="col">거래량</th>
\t
\t\t\t\t\t<th scope="col">PER</th>
\t
\t\t\t\t\t<th scope="col">ROE</th>
\t
\t\t\t\t\t<th scope="col">토론실</th>
\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t<tr><td colspan="10" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">51</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=078930" class="tltle">GS</a></td>
\t\t\t\t\t<td class="number">50,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t750
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.51%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">46,922</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">92,915</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">126,095</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.30</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.14</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=078930"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">52</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=161390" class="tltle">한국타이어앤테크놀로지</a></td>
\t\t\t\t\t<td class="number">35,850</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.38%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">44,409</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">123,875</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">39.76</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">305,091</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.96</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=161390"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">53</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=010140" class="tltle">삼성중공업</a></td>
\t\t\t\t\t<td class="number">7,010</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t20
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.28%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">44,163</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">630,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.30</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3,129,207</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-10.12</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-6.19</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=010140"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">54</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=271560" class="tltle">오리온</a></td>
\t\t\t\t\t<td class="number">110,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.79%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">43,687</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">39,536</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40.73</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">104,427</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31.23</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.31</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=271560"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">55</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=004020" class="tltle">현대제철</a></td>
\t\t\t\t\t<td class="number">32,350</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.21%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">43,170</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">133,446</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.68</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">669,262</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.83</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.39</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=004020"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">56</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=029780" class="tltle">삼성카드</a></td>
\t\t\t\t\t<td class="number">37,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.53%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">43,100</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">115,859</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.09</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">87,459</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.48</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.04</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=029780"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">57</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=088980" class="tltle">맥쿼리인프라</a></td>
\t\t\t\t\t<td class="number">11,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.43%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">0</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40,838</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">349,044</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">592,683</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=088980"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">58</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=071050" class="tltle">한국금융지주</a></td>
\t\t\t\t\t<td class="number">73,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.81%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40,736</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">55,726</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42.07</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">206,424</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.96</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=071050"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">59</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005830" class="tltle">DB손해보험</a></td>
\t\t\t\t\t<td class="number">55,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+5.16%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38,940</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">46.98</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">219,812</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.31</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.06</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005830"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">60</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=004990" class="tltle">롯데지주</a></td>
\t\t\t\t\t<td class="number">36,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t950
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.64%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">200</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38,712</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">104,909</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.86</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">138,894</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.13</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.80</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=004990"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">61</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=023530" class="tltle">롯데쇼핑</a></td>
\t\t\t\t\t<td class="number">135,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.75%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38,190</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28,289</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.71</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">62,306</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-6.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-4.47</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=023530"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">62</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=036460" class="tltle">한국가스공사</a></td>
\t\t\t\t\t<td class="number">40,750</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.87%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,618</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">92,313</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.70</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">156,698</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.38</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.36</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=036460"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">63</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=097950" class="tltle">CJ제일제당</a></td>
\t\t\t\t\t<td class="number">249,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.42%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,560</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15,054</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.19</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,874</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.61</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.46</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=097950"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">64</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=128940" class="tltle">한미약품</a></td>
\t\t\t\t\t<td class="number">322,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t4,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.42%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">2,500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,449</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11,612</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.92</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,315</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">150.42</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.52</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=128940"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">65</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=047810" class="tltle">한국항공우주</a></td>
\t\t\t\t\t<td class="number">38,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.79%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,235</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">97,475</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">220,188</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">65.08</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.32</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=047810"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">66</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=028050" class="tltle">삼성엔지니어링</a></td>
\t\t\t\t\t<td class="number">18,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.53%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,142</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">196,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34.80</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">475,747</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">54.14</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.60</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=028050"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">67</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=139480" class="tltle">이마트</a></td>
\t\t\t\t\t<td class="number">132,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t2,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.86%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,796</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27,876</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.97</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">285,798</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.17</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.49</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=139480"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">68</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=012750" class="tltle">에스원</a></td>
\t\t\t\t\t<td class="number">95,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.31%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,289</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37,999</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">54.95</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">64,001</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35.24</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.34</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=012750"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">69</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=081660" class="tltle">휠라코리아</a></td>
\t\t\t\t\t<td class="number">59,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t800
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.34%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,058</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">61,115</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40.83</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">412,934</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.12</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.03</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=081660"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">70</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000120" class="tltle">CJ대한통운</a></td>
\t\t\t\t\t<td class="number">158,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.63%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,044</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,812</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.65</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">44,027</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">95.18</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1.50</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000120"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">71</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005940" class="tltle">NH투자증권</a></td>
\t\t\t\t\t<td class="number">12,750</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t250
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.00%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35,880</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">281,409</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.37</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">715,377</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.61</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.31</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005940"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">72</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=102110" class="tltle">TIGER 200</a></td>
\t\t\t\t\t<td class="number">28,770</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t380
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.34%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">0</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33,388</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">116,050</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.96</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,714,629</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=102110"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">73</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=241560" class="tltle">두산밥캣</a></td>
\t\t\t\t\t<td class="number">32,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t800
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.50%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32,882</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">100,249</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.38</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">142,535</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.43</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.38</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=241560"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">74</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000210" class="tltle">대림산업</a></td>
\t\t\t\t\t<td class="number">93,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.42%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32,642</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">50.26</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">127,093</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.37</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000210"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">75</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=008770" class="tltle">호텔신라</a></td>
\t\t\t\t\t<td class="number">83,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.84%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32,576</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">39,248</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28.04</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">289,285</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.09</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.41</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=008770"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">76</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=016360" class="tltle">삼성증권</a></td>
\t\t\t\t\t<td class="number">35,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.42%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31,880</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">89,300</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">261,372</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.54</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.37</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=016360"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">77</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=282330" class="tltle">BGF리테일</a></td>
\t\t\t\t\t<td class="number">183,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.10%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31,630</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17,284</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31,739</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.51</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.88</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=282330"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">78</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=007070" class="tltle">GS리테일</a></td>
\t\t\t\t\t<td class="number">39,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.38%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30,723</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">77,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.38</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">87,271</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.48</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=007070"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">79</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=042660" class="tltle">대우조선해양</a></td>
\t\t\t\t\t<td class="number">28,550</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.70%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30,607</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">107,206</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.92</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">209,961</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.87</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.53</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=042660"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">80</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=009830" class="tltle">한화케미칼</a></td>
\t\t\t\t\t<td class="number">18,650</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.27%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30,116</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">161,479</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">732,761</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.46</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.08</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=009830"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">81</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005387" class="tltle">현대차2우B</a></td>
\t\t\t\t\t<td class="number">82,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t600
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.73%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29,955</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,485</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">74.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27,354</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.34</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005387"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">82</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=011070" class="tltle">LG이노텍</a></td>
\t\t\t\t\t<td class="number">123,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.92%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29,229</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,667</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31.12</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">113,251</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.92</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.02</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=011070"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">83</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=003410" class="tltle">쌍용양회</a></td>
\t\t\t\t\t<td class="number">5,710</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t30
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.52%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28,770</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">503,860</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.25</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">943,900</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.69</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.51</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=003410"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">84</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=003670" class="tltle">포스코케미칼</a></td>
\t\t\t\t\t<td class="number">46,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.18%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28,603</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60,988</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.57</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">153,616</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.97</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.96</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=003670"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">85</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000100" class="tltle">유한양행</a></td>
\t\t\t\t\t<td class="number">219,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.46%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27,982</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12,777</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.25</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31,235</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.55</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000100"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">86</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=030000" class="tltle">제일기획</a></td>
\t\t\t\t\t<td class="number">24,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.47%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">200</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27,725</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">115,041</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40.70</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">242,553</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.37</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.01</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=030000"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">87</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=001040" class="tltle">CJ</a></td>
\t\t\t\t\t<td class="number">93,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.43%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27,135</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29,177</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.87</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">62,238</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.01</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.91</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=001040"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">88</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=008560" class="tltle">메리츠종금증권</a></td>
\t\t\t\t\t<td class="number">4,305</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t15
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.35%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26,575</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">617,311</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.47</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,502,210</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.15</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.00</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=008560"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">89</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=004170" class="tltle">신세계</a></td>
\t\t\t\t\t<td class="number">269,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.32%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26,484</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,845</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.09</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42,872</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.08</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.94</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=004170"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">90</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=006360" class="tltle">GS건설</a></td>
\t\t\t\t\t<td class="number">32,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,450
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+4.64%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26,135</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">79,924</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.75</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">440,744</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.24</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.34</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=006360"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">91</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=008930" class="tltle">한미사이언스</a></td>
\t\t\t\t\t<td class="number">39,650</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.13%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25,671</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">64,743</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.00</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">230,711</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">142.63</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.73</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=008930"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">92</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=003490" class="tltle">대한항공</a></td>
\t\t\t\t\t<td class="number">27,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+5.06%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25,608</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">94,845</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.37</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">686,499</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-13.42</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-5.91</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=003490"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">93</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=001450" class="tltle">현대해상</a></td>
\t\t\t\t\t<td class="number">28,350</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t850
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.09%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25,345</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">89,400</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">45.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">429,363</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.79</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.33</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=001450"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">94</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=122630" class="tltle">KODEX 레버리지</a></td>
\t\t\t\t\t<td class="number">13,480</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t380
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.90%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">0</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24,641</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">182,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0.75</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,941,660</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=122630"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">95</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=047050" class="tltle">포스코인터내셔널</a></td>
\t\t\t\t\t<td class="number">19,450</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.26%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,996</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">123,375</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.20</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">184,566</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.46</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.45</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=047050"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">96</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=079440" class="tltle">오렌지라이프</a></td>
\t\t\t\t\t<td class="number">29,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t550
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.92%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,903</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">82,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3,070,349</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.68</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.37</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=079440"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">97</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=002380" class="tltle">KCC</a></td>
\t\t\t\t\t<td class="number">225,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.22%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,805</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,557</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.53</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,421</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-100.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-0.41</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=002380"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">98</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=028670" class="tltle">팬오션</a></td>
\t\t\t\t\t<td class="number">4,440</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t60
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.33%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,735</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">534,569</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.97</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,340,956</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.06</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=028670"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">99</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=138930" class="tltle">BNK금융지주</a></td>
\t\t\t\t\t<td class="number">7,230</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t40
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.56%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,565</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">325,935</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">52.01</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">722,272</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.69</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.84</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=138930"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">100</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=011780" class="tltle">금호석유</a></td>
\t\t\t\t\t<td class="number">74,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.77%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,790</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30,468</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">66,921</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.10</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23.45</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=011780"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line_1"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t
\t



\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t<table summary="페이지 네비게이션 리스트" class="Nnavi" align="center">
\t\t\t\t<caption>페이지 네비게이션</caption>
\t\t\t\t<tr>\t\t
\t\t\t\t\t
\t\t\t\t\t<td class="pgLL">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=1"  >
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarLL.gif" width="7" height="5" alt="">맨앞
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t
\t\t\t\t\t<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=1"  >1</a>
\t\t\t\t</td>
<td class="on">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=2"  >2</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=3"  >3</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=4"  >4</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=5"  >5</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=6"  >6</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=7"  >7</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=8"  >8</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=9"  >9</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=10"  >10</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=11"  >
\t\t\t\t다음<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarR.gif" width="3" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgRR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=0&amp;page=32"  >맨뒤
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarRR.gif" width="8" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t
\t\t\t\t</tr>
\t\t\t\t</table>
\t\t\t</div>
\t\t\t<!-- // 종목 -->
\t\t\t<!-- //컨텐츠 -->
\t\t</div>
\t</div>






\t






\t<div id="footer">
\t\t<ul>
\t\t\t<li class="first">
\t\t\t\t<a href="https://www.naver.com/rules/service.html" onClick="clickcr(this, 'fot.service', '', '', event);" target="_blank">이용약관</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://finance.naver.com/rules.nhn" onClick="clickcr(this, 'fot.policy', '', '', event);" target="_blank">금융게시판 운영원칙</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/privacy.html" onClick="clickcr(this, 'fot.privacy', '', '', event);" target="_blank"><strong>개인정보처리방침</strong></a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/disclaimer.html" onClick="clickcr(this, 'fot.limit', '', '', event);" target="_blank">책임의 한계와 법적고지</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://help.naver.com/support/alias/contents2/finance/finance_1.naver" onclick="clickcr(this, 'fot.help', '', '', event);" target="_blank">금융 고객센터</a>
\t\t\t</li>
\t\t</ul>
\t\t<p class="desc">네이버(주)에서 제공하는 금융정보는 각 컨텐츠 제공업체<a href="javascript:;" onclick="togglePanelFooter('footerPanel0');" class="desc_help"><img src="https://ssl.pstatic.net/static/nfinance/2018/06/29/btn_help.png" width="17" height="17" alt="제공업체 상세설명"></a>부터 받는 정보로 투자 참고 사항이며, 오류가 발생할 수 있고 지연될 수<br>있습니다. 네이버(주)는 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다. 게시된 정보를 무단으로 배포할 수 없습니다.</p>
\t\t<div id="footerPanel0" class="provider_layer" style="display:none" tabindex="0" onblur="hidePannel('footerPanel0')">
\t\t\t<strong class="provider_layer__tit">컨텐츠 제공업체</strong>
\t\t\t<div class="provider_layer__txt">
\t\t\t\t<p><span>코스콤 : </span>실시간 주가정보 및 국내시세정보</p>
\t\t\t\t<p><span>에프앤가이드 : </span>기업 및 재무정보</p>
\t\t\t\t<p><span>이데일리 : </span>해외 시세 및 시장지표 정보</p>
\t\t\t\t<p><span>제로인 : </span>펀드정보</p>
\t\t\t\t<p><span>한국예탁결제원 : </span>주주총회일 및 전자투표 정보</p>
\t\t\t</div>
\t\t\t<span class="arrow"></span>
\t\t</div>
\t\t<address>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" class="logo" onClick="clickcr(this, 'fot.nhn', '', '', event);"><img src="https://ssl.pstatic.net/static/nfinance/2019/02/22/ci_naver.png" width="58" height="11" alt="NAVER" /></a>
\t\t\t<em>Copyright &copy;</em>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" onClick="clickcr(this, 'fot.nhn', '', '', event);">NAVER Corp.</a>
\t\t\t<span>All Rights Reserved.</span>
\t\t</address>
\t\t
\t\t
\t\t
\t</div>



<script type="text/javascript">
function isVisible(obj) {
    if (obj == document) return true
 
    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }
 
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }
 
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }
 
    return isVisible(obj.parentNode)
}

function isChildOf(myobj, containerObj) {
\twhile(myobj != undefined) {
\t\tif (myobj == document.body) {
\t\t\tbreak;
\t\t} 
\t\tif (myobj == containerObj) {
\t\t\treturn true;
\t\t}
\t\tmyobj = myobj.parentElement;
\t}
\treturn false;\t
}

function gnbLayerClose(e){
\tvar target = e.target ? e.target : e.srcElement;
\tif (isVisible(document.getElementById('gnb_service_lyr')) || isVisible(document.getElementById('gnb_notice_lyr')) ||isVisible(document.getElementById('gnb_my_lyr')) ) {
\t\tif (!isChildOf(target, document.getElementById('gnb'))) {
\t\t\tgnbAllLayerClose();
\t\t}
\t}\t
}

var isIE = (navigator.userAgent.toLowerCase().indexOf("msie")!=-1 && window.document.all) ? true:false;
if (isIE) {
\tdocument.attachEvent('onmousedown', gnbLayerClose);
} else {
\twindow.addEventListener('mousedown', gnbLayerClose);
}

function showPannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='block';

    if (layerId == "summary_lyr") {
        var layerHeight = jindo.$Element(layer).height();
        jindo.$Element("summary_ifr").height(layerHeight);
    }
}

function hidePannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='none';
}

function togglePanelFooter(layerId) {
    var elTargetLayer = jindo.$Element(jindo.$$.getSingle("#" + layerId));

    if (elTargetLayer != null) {
        if (elTargetLayer.visible()) {
            hidePannel(layerId);
        } else {
            showPannel(layerId);
        }
    }
}

// add data-useragent
document.documentElement.setAttribute('data-useragent',navigator.userAgent);
</script>
</div>
</body>
</html>
    `
  },
  1: {
    1: `








<!--  global include -->

\t
\t
\t
\t
\t
<html lang='ko'>
<head>


\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t<title>시가총액 : 네이버 금융</title>
\t\t\t
\t\t
\t





\t
\t
\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
\t


<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">




\t
    
        <meta property="og:url" content="http://finance.naver.com/sise/sise_market_sum.nhn"/>
        
\t\t\t
\t\t    
\t\t    \t<meta property="og:title" content="시가총액 : 네이버 금융"/>
\t\t     
\t\t
\t\t
\t\t\t
\t\t\t   <meta property="og:description" content="관심종목의 실시간 주가를 가장 빠르게 확인하는 곳"/>
\t\t    
\t\t    
\t\t
\t\t 
\t\t\t
\t\t\t    <meta property="og:image" content="https://ssl.pstatic.net/static/m/stock/im/2016/08/og_stock-200.png"/>
\t\t    
\t\t    
\t\t
    

<meta property="og:type" content="article"/>
<meta property="og:article:thumbnailUrl" content=""/>
<meta property="og:article:author" content="네이버금융"/>
<meta property="og:article:author:url" content="http://FINANCE.NAVER.COM"/>




<link rel='stylesheet' type='text/css' href='/css/finance_header.css?20191114133508'>

\t
\t
\t
\t
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/common.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/layout.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/main.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock2.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock3.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/world.css?20191114133508">
\t\t
\t\t
\t\t
\t\t

\t\t
\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindo.min.ns.1.5.3.euckr.js?20191114133508"></script>
\t\t\t
\t\t\t
\t\t\t\t<script type="text/javascript" src="/js/release/common.js?20191114133508"></script>
\t\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindoComponent/jindo.Component.1.0.3.js?20191114133508"></script>
\t\t\t<script type="text/javascript" src="/ac/nhn.autocomplete.stock.js?20191114133508"></script>
\t\t
\t\t
\t


\t<link rel="shortcut icon" href="https://www.naver.com/favicon.ico?20191114133508" type="image/x-icon">
\t
\t<script type="text/javascript">
    (function(){
        var sUserAgent = navigator.userAgent;
        if(/iPhone|iPad/.test(sUserAgent)){
            document.write(
                [
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_120X120_iphone.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_152x152_ipad.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="167x167" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_167x167_ipad_pro.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_180x180_iphone.png" />'
                ]
                .join('\\n')
            );
        }

        if(/Android/.test(sUserAgent)){
            document.write(
                [
                    '<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_72x72_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="96x96" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_96x96_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_144x144_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="192x192" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_192x192_xxxhpdi.png" />'
\t\t\t\t]
\t\t\t\t.join('\\n')
\t\t\t);
        }
    })();
    </script>
</head>




<body onload='getGNB();'>



<script type="text/javascript">
\tdocument.domain = 'naver.com';
\tvar nclk_evt = 3;
\tnclk_do();
</script>


<script type="text/javascript">




var nsc="finance.stock";





var ccsrv="cc.naver.com";


\t
\t
\tvar gnb_service='finance';
\t


var gnb_logout=document.URL; //GNB에서 로그아웃 후 redirect 될 URL
var gnb_searchbox='off'; //미니 검색창을 on 할지 off 할지. default는 off
var gnb_shortnick='off'; //닉네임 말줄임(10자)을 on할지 off 할지. default는 off.


var gnb_naverme_layer_open_callback = function(){
\t   var naverLayerSize = gnbNaverMeLayer.getLayerSize();
\t\t
\t\tvar me_layers = document.getElementById("me_layers");
\t\tme_layers.width=naverLayerSize.width;
\t\tme_layers.height=naverLayerSize.height;};

var gnb_naverme_layer_close_callback = function(){
\t\t
\t\t\tvar me_layers = document.getElementById("me_layers");
\t\t\tme_layers.width="0";
\t\t\tme_layers.height="0";};
</script>


<div id="u_skip">
\t<a href="#menu" tabindex="1"><span>메인 메뉴로 바로가기</span></a>

\t
\t
\t\t<a href="#start" tabindex="2"><span>본문으로 바로가기</span></a>
\t

</div>


<div id="header">
\t<div class="snb_area">
\t\t<div class="snb_inner">
\t\t\t<div id="gnb_area">
\t\t\t\t<div id="gnb">
\t\t\t\t\t<script charset="EUC-KR" type="text/javascript">
\t\t\t\t\tvar gnb_service = "gnbtest";
                    var gnb_template = location.protocol == "http:" ? "gnb_quirks_euckr" : "gnb_utf8" ;
\t\t\t\t\tvar gnb_dark = false;
\t\t\t\t\tvar gnb_brightness = 1;
\t\t\t\t\tvar gnb_logout=encodeURIComponent(location.href);
\t\t\t\t\tvar gnb_one_naver = 1;
\t\t\t\t\t</script>
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t<script type="text/javascript" charset="utf-8" src="https://ssl.pstatic.net/static.gn/templates/gnb_utf8.nhn?20191116">
                    \t\t</script>
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>

\t\t\t<div class="sta">
\t\t\t\t<h1 class="logo"> <a href="https://www.naver.com/" class="logo_naver" onClick="clickcr(this, 'STA.naver', '', '', event);"><span class="blind">네이버</span></a>
\t\t\t\t<a href="/" class="logo_service" onClick="clickcr(this, 'STA.finance', '', '', event);"><span class="blind">금융</span></a> </h1>
\t\t\t\t<form name="search" action="/search/search.nhn"  method="get"
\t\t\t\t\tonsubmit="return delayed_submit(this)" style="margin:0; padding:0;">
\t\t\t\t<fieldset>
\t\t\t\t\t<legend>검색</legend>
\t\t\t\t\t<div class="snb_search_box">
\t\t\t\t\t\t<div class="snb_search_box_sub">
\t\t\t\t\t\t\t<input id="stock_items" type="text" title="검색" name="query" value="종목명&middot;펀드명&middot;환율명&middot;원자재명 입력" accesskey="s" class="snb_search_text snb_default" autocomplete="off">
\t\t\t\t\t\t\t<a id="nautocomplete" href="#" onclick="return false" class="btn_arrow"><span class="blind">자동완성 펼치기</span></a>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="auto_area">
\t\t\t\t\t\t\t<h2 class="blind">자동완성</h2>
\t\t\t\t\t\t\t<iframe id="autoFrame" src="/ac/reatcmp.nhn?menu=sise&submenu=" scrolling="no" height="0" frameborder="0" width="400" style="display: none;" marginheight="0" marginwidth="0" title="자동완성"></iframe>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<button type="submit" class="snb_search_btn" onclick="clickcr(this, 'STA.search', '', '', event);" alt="검색"><span class="blind">검색</span></button>
\t\t\t\t\t\t<a href="#" target="_blank" class="snb_search_btn-total" onclick="itegrationSearch();clickcr(this, 'STA.nx', '', '', event);return false;">통합검색</a>
\t\t\t\t\t</div>
\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<div class="lnb_area ">
\t\t<div class="lnb_inner">
\t\t\t<div id="menu">
\t\t\t\t<ul class="menu">
\t\t\t\t\t<li class="m1 first "><a href="/" onClick="clickcr(this, 'LNB.home', '', '', event);"><span class="tx">금융 홈</span></a></li>
\t\t\t\t\t<li class="m2 on"><a href="/sise/" onClick="clickcr(this, 'LNB.sise', '', '', event);"><span class="tx">국내증시</span></a></li>
\t\t\t\t\t<li class="m3 "><a href="/world/" onClick="clickcr(this, 'LNB.world', '', '', event);"><span class="tx">해외증시</span></a></li>
\t\t\t\t\t<li class="m4 "><a href="/marketindex/" onClick="clickcr(this, 'LNB.market', '', '', event);"><span class="tx">시장지표</span></a></li>
\t\t\t\t\t<li class="m5 "><a href="/fund/" onClick="clickcr(this, 'LNB.fund', '', '', event);"><span class="tx">펀드</span></a>
\t\t\t\t\t\t
\t\t\t\t\t</li>
\t\t\t\t\t<li class="m6 "><a href="/research/" onClick="clickcr(this, 'LNB.research', '', '', event);"><span class="tx">투자전략</span></a></li>
\t\t\t\t\t<li class="m7 "><a href="/news/"><span class="tx">뉴스</span></a></li>
\t\t\t\t\t<li class="m8 "><a href="/mystock/" onClick="clickcr(this, 'LNB.mystock', '', '', event);"><span class="tx">MY</span></a></li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t</div>
\t
\t
\t
\t

\t
\t<script type="text/JavaScript">
\t\t/* lcs 집계 */
        ;(function(){
            var eventType = "onpageshow" in window ? "pageshow" : "load";
            jindo.$Fn(function(){
                lcs_do();
            }).attach(window, eventType);
        })();

\t\t/* 검색 자동완성 [ 인자1 : 검색input의 ID, 인자2 : iframe 태그 ID ]   */
\t\t// AutoComplete 생성
\t\tvar acDomain = "ac.finance.naver.com";
        if (location.hostname.indexOf("staging-") > -1) {
            acDomain = "staging-" + acDomain;
        }
        var acUrl = "https://" + acDomain + "/ac";

\t\tsmartSearch = new nhn.Autocomplete(
\t\t\t// InputManager 생성
\t\t\tnew nhn.AcInputManager(jindo.$("stock_items")),
\t\t\t// DataManager 생성
\t\t\tnew nhn.AcDataManager(acUrl, "jsonp", "get", {
                    st: "111",
                    r_lt : "111",
                    q_enc : "euc-kr",
                    r_enc : "euc-kr",
                    frm: "stock"}),
\t\t\t// ViewManager 생성
\t\t\tnew nhn.AcStockViewManager(jindo.$("autoFrame"), jindo.$("nautocomplete"), {
                                        strMax: 200,
                                        listMax: [7, 2, 2],
                                        aRedirectUrl : [
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com"]}),
\t\t\t// Autocomplete Option
            {formId:"search", cookieDomain:location.hostname, cookieName:"NaverCommonStock"});

\t\t\tsmartSearch.attach({
\t            onFocus: function () {
\t                var weInput = jindo.$Element('stock_items');
\t                if (weInput && weInput.hasClass("snb_default")) {
\t                        weInput.text("");
\t                        weInput.removeClass('snb_default');
\t                }
\t            }
\t        });

\t\t/* 통합검색  start ----->  */
\t\tdocument.domain = 'naver.com';
\t\tvar sSearchHintText = '종목명·펀드명·환율명·원자재명 입력';
\t\tfunction itegrationSearch() {
\t\t\tvar query = jindo.$('stock_items').value;

\t\t\tif ( query == ''  || encodeURIComponent(query) == encodeURIComponent(sSearchHintText))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}

            var url = location.protocol + "//search.naver.com/search.naver?sm=sta_hty.finance&where=nexearch&ie=UTF8&query=" + encodeURIComponent(query);
            window.open(url, "_blank");

\t\t\treturn false;
\t\t}

\t\tfunction delayed_submit(object) {
\t\t\tif (navigator.userAgent.indexOf('MSIE') == -1) {
\t\t\t\twindow.setTimeout(function() {stock_search(object)}, 300);
\t\t\t} else {
\t\t\t\tstock_search(object);
\t\t\t}
\t\t\treturn false;
\t\t}

\t\tfunction stock_search (object)
\t\t{
\t\t\tquery = object.query.value.replace(/^\\s*/,'').replace(/\\s*$/,'');\t// trim
\t\t\tobject.query.value=query;

\t\t\tif ( query == '' || query == sSearchHintText.replace(/^\\s*/,'').replace(/\\s*$/,''))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}
\t\t\telse {
\t\t\t\tobject.submit();
\t\t\t}
\t\t}
\t\t/* <---------- 통합검색  end */

\t\tfunction popup()
\t\t{
\t\t\twin = window.open('/template/group_limit_pop.jsp','finan_popup','width=569 height=278 scrollbars=no status=no');
\t\t\twin.focus();
\t\t}
\t</script>

\t<iframe id="me_layers" name="test" title="네이버미 영역" width="0" height="0" scrolling="no" frameborder="0" style="display:block;top: 22px; right: 209px; position: absolute; z-index: 15;"></iframe>
</div>
<div id="wrap"  >

<!-- //  global include -->
<script language="JavaScript">
function mouseOver(obj){
  obj.style.backgroundColor="#f6f4e5";
}
function mouseOut(obj){
  obj.style.backgroundColor="#ffffff";
}
</script>

\t<div id="newarea">
\t\t\t

\t\t\t<!-- leftmenu -->
\t\t\t<div class="snb snb2">
\t\t\t\t<h2 class="h_sise"><a href="/sise/"><span class="blind">국내증시</span></a></h2>
\t\t\t\t<ul class="nav1">
\t\t\t\t<li class="frst"><strong class="lst_sise"><span class="blind">주요시세정보</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst1_1"><a href="/sise/sise_index.nhn?code=KOSPI" onClick="clickcr(this,'siu.1','','',event);" class="off"><span class="blind">코스피</span></a></li> 
                     <li class="type1 lst1_2"><a href="/sise/sise_index.nhn?code=KOSDAQ" onClick="clickcr(this,'siu.2','','',event);" class="off"><span class="blind">코스닥</span></a></li>
                     <li class="type1 lst1_3"><a href="/sise/sise_index.nhn?code=FUT" onClick="clickcr(this,'siu.3','','',event);" class="off"><span class="blind">선물</span></a></li>
                     <li class="type1 lst1_26"><a href="/sise/sise_index.nhn?code=KPI200" onClick="clickcr(this,'siu.26','','',event);" class="off"><span class="blind">코스피200</span></a></li>
                     <li class="type1 lst1_31"><a href="/sise/konex.nhn" onClick="clickcr(this,'siu.konex','','',event);" class="off"><span class="blind">코넥스</span></a></li>
                     <li class="type1 lst1_16"><a href="/sise/sise_market_sum.nhn" onClick="clickcr(this,'siu.16','','',event);" class="on"><span class="blind">시가총액</span></a></li>
                     <li class="type1 lst1_32" ><a href="/sise/dividend_list.nhn" onClick="clickcr(this,'siu.dividend','','',event);" class="off"><span class="blind">배당</span></a></li>                     
                     <li class="type1 lst1_4"><a href="/sise/sise_group.nhn?type=upjong" onClick="clickcr(this,'siu.4','','',event);" class="off"><span class="blind">업종</span></a></li>
                     <li class="type1 lst1_5" ><a href="/sise/theme.nhn" onClick="clickcr(this,'siu.5','','',event);" class="off"><span class="blind">테마</span></a></li>
                     <li class="type1 lst1_30"><a href="/sise/sise_group.nhn?type=group"  onClick="clickcr(this,'siu.30','','',event);"  class="off"><span class="blind">그룹사</span></a></li>
\t\t\t\t\t <li class="type1 lst1_27 "><a href="/sise/etf.nhn" onClick="clickcr(this,'siu.27','','',event);" class="off"><span class="blind">ETF</span></a></li>
\t\t\t\t\t <li class="type1 lst1_34"><a href="/sise/etn.nhn" onClick="clickcr(this,'siu.34','','',event);" class="off"><span class="blind">ETN</span></a></li>
\t\t\t\t\t <li class="type1 lst1_8 "><a href="/sise/sise_rise.nhn" onClick="clickcr(this,'siu.8','','',event);" class="off"><span class="blind">ª?Ω?</span></a></li>
                     <li class="type1 lst1_9 "><a href="/sise/sise_steady.nhn" onClick="clickcr(this,'siu.9','','',event);" class="off"><span class="blind">보합</span></a></li>
                     <li class="type1 lst1_10"><a href="/sise/sise_fall.nhn" onClick="clickcr(this,'siu.10','','',event);" class="off"><span class="blind">하락</span></a></li>
                     <li class="type1 lst1_6"><a href="/sise/sise_upper.nhn" onClick="clickcr(this,'siu.6','','',event);" class="off"><span class="blind">상한가</span></a></li>
                     <li class="type1 lst1_7"><a href="/sise/sise_lower.nhn" onClick="clickcr(this,'siu.7','','',event);" class="off"><span class="blind">하한가</span></a></li>
                     <li class="type1 lst1_15 "><a href="/sise/sise_low_up.nhn" onClick="clickcr(this,'siu.15','','',event);" class="off"><span class="blind">급등</span></a></li>
                     <li class="type1 lst1_14 "><a href="/sise/sise_high_down.nhn" onClick="clickcr(this,'siu.14','','',event);" class="off"><span class="blind">급락</span></a></li>
                     <li class="type2 lst1_11"><a href="/sise/sise_quant.nhn" onClick="clickcr(this,'siu.11','','',event);" class="off"><span class="blind">거래상위</span></a></li>  
                     <li class="type1 lst1_12 "><a href="/sise/sise_quant_high.nhn" onClick="clickcr(this,'siu.12','','',event);" class="off"><span class="blind">급증</span></a></li> 
                     <li class="type1 lst1_13 "><a href="/sise/sise_quant_low.nhn" onClick="clickcr(this,'siu.13','','',event);" class="off"><span class="blind">급감</span></a></li>
                     <li class="lst1_23"><a href="/sise/sise_trans_style.nhn" onClick="clickcr(this,'siu.23','','',event);" class="off"><span class="blind">투자자별매매동향</span></a></li>  
                     <li class="type1 lst1_17"><a href="/sise/sise_deal_rank.nhn" onClick="clickcr(this,'siu.17','','',event);" class="off"><span class="blind">외국인매매</span></a></li> 
                     <li class="type1 lst1_18"><a href="/sise/sise_deal_rank.nhn?investor_gubun=1000" onClick="clickcr(this,'siu.18','','',event);" class="off"><span class="blind">기관매매</span></a></li> 
                     <li class="lst1_19"><a href="/sise/sise_program.nhn" onClick="clickcr(this,'siu.19','','',event);" class="off"><span class="blind">프로그램매매동향</span></a></li> 
                     <li class="lst1_22"><a href="/sise/sise_deposit.nhn" onClick="clickcr(this,'siu.22','','',event);" class="off"><span class="blind">증시자금동향</span></a></li>
                     <li class="lst1_21"><a href="/sise/sise_new_stock.nhn" onClick="clickcr(this,'siu.21','','',event);" class="off"><span class="blind">신규상장</span></a></li>  
                     <li class="lst1_24 "><a href="/sise/sise_foreign_hold.nhn" onClick="clickcr(this,'siu.24','','',event);" class="off"><span class="blind">외국인보유</span></a></li> 
                     <li class="lst1_25 "><a href="/sise/market3news_list.nhn" onClick="clickcr(this,'siu.25','','',event);" class="off"><span class="blind">장외시세</span></a></li>
                     <li class="lst1_33 "><a href="/sise/ipo.nhn" onClick="clickcr(this,'siu.33','','',event);" class="off"><span class="blind">IPO</span></a></li>
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><strong class="lst_prevent"><span class="blind">투자자보호</span></strong>
\t                <ul class="sub">
\t                 <li class="lst1_20"><a href="/sise/management.nhn" onClick="clickcr(this,'siu.20','','',event);" class="off"><span class="blind">관리종목</span></a></li>
\t                 <li class="lst1_29"><a href="/sise/trading_halt.nhn" onClick="clickcr(this,'siu.29','','',event);" class="off"><span class="blind">거래정지종목</span></a></li> 
\t                 <li class="lst1_28"><a href="/sise/investment_alert.nhn?type=caution" onClick="clickcr(this,'siu.28','','',event);" class="off"><span class="blind">시장경보종목</span></a></li>
\t                </ul>
            \t</li>
    \t\t\t<li><strong class="lst_search"><span class="blind">종목조건검색</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst2_2"><a href="/sise/item_gold.nhn" onClick="clickcr(this,'sih.2','','',event);" class="off"><span class="blind">골든크로스</span></a></li>
\t\t\t\t\t <li class="type1 lst2_1"><a href="/sise/item_gap.nhn" onClick="clickcr(this,'sih.1','','',event);" class="off"><span class="blind">갭상승</span></a></li>
\t\t\t\t\t <li class="type1 lst2_3"><a href="/sise/item_igyuk.nhn" onClick="clickcr(this,'sih.3','','',event);" class="off"><span class="blind">이격도과열</span></a></li>
\t\t\t\t\t <li class="type1 lst2_4"><a href="/sise/item_overheating_1.nhn" onClick="clickcr(this,'sih.4','','',event);" class="off"><span class="blind">투심과열</span></a></li>
\t\t\t\t\t <li class="lst2_5"><a href="/sise/item_overheating_2.nhn" onClick="clickcr(this,'sih.5','','',event);" class="off"><span class="blind">상대강도과열</span></a></li>  \t                 
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><a href="/sise/report.nhn"><strong class="lst_report"><span class="blind">기업 전자공시</span></strong></a></li>
\t\t\t\t<li class="last"><a href="/sise/short_trade.nhn"><strong class="lst_short"><span class="blind">공매도 종합 현황</span></strong></a></li>\t\t\t\t
\t\t\t\t</ul>
\t\t\t\t\t\t\t\t
\t\t\t</div>
\t\t\t<!-- //leftmenu -->
\t\t\t
\t\t\t<!-- //leftmenu -->
\t\t<div id="contentarea">
\t\t\t<!-- 컨텐츠 -->
\t\t\t<div id="contentarea_left" class="bnd_wid">
\t\t\t\t<!-- 로케이터 : 메뉴에 맞게 고쳐주세요 -->
\t\t\t\t<div class="sub_location tlt_bottom_line">
\t\t\t\t\t<a href="/">금융홈</a> &gt; <a href="/sise/">국내증시</a> &gt; <a href="#">시가총액</a>
\t\t\t\t</div>
\t\t\t\t<!-- //로케이터 -->

\t\t\t\t<h3 class="sub_tlt">시가총액<span class="tlt_page">항목을 자유롭게 변경하실 수 있습니다.&nbsp;&nbsp;<img src='https://ssl.pstatic.net/imgstock/images5/bar_C7C.gif'>&nbsp;&nbsp;최대 6개까지 설정 가능합니다.</span></h3>
\t\t\t<!-- 항목선택 -->
\t\t
\t\t
\t


 
 
 \t
 \t
 


<script language=javascript>
function fieldSubmit() {
\tvar chkcnt = 0;
\t
\tfor(i = 0; i < document.field_form.fieldIds.length ; i++) {
    \tif(document.field_form.fieldIds[i].checked == true) {
    \t\tchkcnt++;
    \t}
    }
    
    if(chkcnt > 6) {
    \talert('최대 6개까지만 가능합니다.');
    \treturn;
    }

\tdocument.field_form.action = 'field_submit.nhn';
\tdocument.field_form.submit();
}

function fieldDefault() {
\tdocument.field_form.action = 'field_del.nhn';
\tdocument.field_form.submit();

}
</script>
<!-- 항목선택 -->
<div class="box_type_m" style="margin-top:0">
<form name='field_form'>
<input type=hidden name=menu value="market_sum">
<input type=hidden name=returnUrl value="http://finance.naver.com/sise/sise_market_sum.nhn?sosok=1&page=1">
\t<div class="subcnt_sise_item sub810"><div class="subcnt_sise_item_top sub810t">
\t\t<table summary="원하시는 항목을 선택하여 결과를 보실 수 있습니다." cellpadding="0" cellspacing="0" class="item_list">
\t\t<caption>항목 선택표</caption>
\t\t<colgroup><col width=62><col width=84><col width=111><col width=97><col width=116><col width=85></colgroup>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option1" name="fieldIds" value="quant"  checked> <label for="option1">거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option2" name="fieldIds" value="ask_buy"  > <label for="option2">매수호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option3" name="fieldIds" value="amount"  > <label for="option3">거래대금</label>(백만)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option4" name="fieldIds" value="market_sum"  checked> <label for="option4">시가총액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option5" name="fieldIds" value="operating_profit"  > <label for="option5">영업이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option6" name="fieldIds" value="per"  checked> <label for="option6">PER</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option7" name="fieldIds" value="open_val"  > <label for="option7">시가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option8" name="fieldIds" value="ask_sell"  > <label for="option8">매도호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option9" name="fieldIds" value="prev_quant"  > <label for="option9">전일거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option10" name="fieldIds" value="property_total"  > <label for="option10">자산총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option11" name="fieldIds" value="operating_profit_increasing_rate"  > <label for="option11">영업이익증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option12" name="fieldIds" value="roe"  checked> <label for="option12">ROE</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option13" name="fieldIds" value="high_val"  > <label for="option13">고가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option14" name="fieldIds" value="buy_total"  > <label for="option14">매수총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option15" name="fieldIds" value="frgn_rate"  checked> <label for="option15">외국인비율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option16" name="fieldIds" value="debt_total"  > <label for="option16">부채총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option17" name="fieldIds" value="net_income"  > <label for="option17">당기순이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option18" name="fieldIds" value="roa"  > <label for="option18">ROA</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option19" name="fieldIds" value="low_val"  > <label for="option19">저가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option20" name="fieldIds" value="sell_total"  > <label for="option20">매도총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option21" name="fieldIds" value="listed_stock_cnt"  checked> <label for="option21">상장주식수</label>(천주)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option22" name="fieldIds" value="sales"  > <label for="option22">매출액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option23" name="fieldIds" value="eps"  > <label for="option23">주당순이익</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option24" name="fieldIds" value="pbr"  > <label for="option24">PBR</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option25" name="fieldIds" value="sales_increasing_rate"  > <label for="option25">매출액증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option26" name="fieldIds" value="dividend"  > <label for="option26">보통주배당금</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option27" name="fieldIds" value="reserve_ratio"  > <label for="option27">유보율</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t</table>
\t\t<div class="item_btn">
\t\t\t<a href="javascript:fieldSubmit()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_apply.gif" alt="적용하기" width="55" height="18"></a><a href="javascript:fieldDefault()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_initialize.gif" alt="초기항 목으로" width="76" height="18"></a>
\t\t</div>
\t</div></div>
</div>
</form>
<!-- //항목선택 끝 -->

\t\t\t<!-- //항목선택 끝 -->
\t\t\t</div>
\t\t\t<!--  right area -->
\t\t\t<div id="contentarea_right">
\t\t\t\t


\t

\t
\t\t<script>document.domain='naver.com';</script>
\t

\t\t\t</div>

\t\t\t<!-- 종목 -->
\t\t\t<div class="box_type_l">
\t\t\t\t<div class="tab_style_1">

\t
\t\t\t\t\t<div class="tab_smeun"><a href="?sosok=0">코스피</a></div>
\t\t\t\t\t<div class="tab_smeun choice"><div class="choice_lt"></div>코스닥</div>
\t
\t
\t

\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<!-- [D] 활성화된 탭메뉴에 따라 blind text 변경해주세요 -->

\t\t\t\t\t
\t\t\t\t<h4 class="blind">코스닥</h4>
\t\t\t\t<table summary="코스닥 시세정보를 선택한 항목에 따라 정보를 제공합니다." cellpadding="0" cellspacing="0" class="type_2">
\t\t\t\t<caption>코스닥</caption>
\t
\t


\t\t\t\t<colgroup>
\t\t\t\t<col width="2%">
\t\t\t\t<col width="*">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="9%">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t<col width="6%">
\t\t\t\t</colgroup>
\t\t\t\t<thead>
\t\t\t\t<tr>
\t\t\t\t\t<th scope="col">N</th>
\t\t\t\t\t<th scope="col">종목명</th>
\t\t\t\t\t<th scope="col">현재가</th>
\t\t\t\t\t<th scope="col" class="tr" style="padding-right:8px">전일비</th>
\t\t\t\t\t<th scope="col">등락률</th>
\t\t\t\t\t<th scope="col">액면가</th>
\t
\t\t\t\t\t<th scope="col">시가총액</th>
\t
\t\t\t\t\t<th scope="col">상장주식수</th>
\t
\t\t\t\t\t<th scope="col">외국인비율</th>
\t
\t\t\t\t\t<th scope="col">거래량</th>
\t
\t\t\t\t\t<th scope="col">PER</th>
\t
\t\t\t\t\t<th scope="col">ROE</th>
\t
\t\t\t\t\t<th scope="col">토론실</th>
\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t<tr><td colspan="10" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">1</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=091990" class="tltle">셀트리온헬스케어</a></td>
\t\t\t\t\t<td class="number">52,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.38%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">75,850</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">143,928</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.04</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">527,730</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">658.75</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0.68</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=091990"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">2</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=028300" class="tltle">에이치엘비</a></td>
\t\t\t\t\t<td class="number">146,300</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t9,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+6.55%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">58,590</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40,048</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.83</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2,012,355</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">217.06</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.12</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=028300"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">3</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=035760" class="tltle">CJ ENM</a></td>
\t\t\t\t\t<td class="number">151,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.48%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33,113</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21,929</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.52</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">52,368</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.11</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.58</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=035760"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">4</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=263750" class="tltle">펄어비스</a></td>
\t\t\t\t\t<td class="number">198,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t600
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.30%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25,838</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,023</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.41</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42,528</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.12</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42.87</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=263750"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">5</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=253450" class="tltle">스튜디오드래곤</a></td>
\t\t\t\t\t<td class="number">78,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.89%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21,970</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28,095</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.95</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">79,167</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">61.19</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.31</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=253450"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">6</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=084990" class="tltle">헬릭스미스</a></td>
\t\t\t\t\t<td class="number">99,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t900
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.92%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21,201</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21,415</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.43</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">545,567</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-70.06</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=084990"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">7</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=145020" class="tltle">휴젤</a></td>
\t\t\t\t\t<td class="number">394,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.25%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20,172</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,120</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">47.07</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,361</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.80</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=145020"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">8</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=032500" class="tltle">케이엠더블유</a></td>
\t\t\t\t\t<td class="number">49,850</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t750
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.53%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19,842</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">39,803</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.71</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">877,825</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-53.78</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-45.51</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=032500"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">9</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=140410" class="tltle">메지온</a></td>
\t\t\t\t\t<td class="number">226,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19,710</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,706</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.49</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">344,963</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-102.96</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-34.17</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=140410"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">10</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=036490" class="tltle">SK머티리얼즈</a></td>
\t\t\t\t\t<td class="number">177,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t900
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.51%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18,764</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,548</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.77</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14,482</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.65</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.57</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=036490"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">11</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=086900" class="tltle">메디톡스</a></td>
\t\t\t\t\t<td class="number">295,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t6,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.99%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17,155</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,815</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">42.53</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">45,999</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.52</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31.50</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=086900"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">12</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=034230" class="tltle">파라다이스</a></td>
\t\t\t\t\t<td class="number">18,850</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.05%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17,143</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">90,943</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.42</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">788,915</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-81.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-1.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=034230"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">13</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=240810" class="tltle">원익IPS</a></td>
\t\t\t\t\t<td class="number">32,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.92%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,149</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49,084</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.24</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">371,448</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.63</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.45</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=240810"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">14</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=056190" class="tltle">에스에프에이</a></td>
\t\t\t\t\t<td class="number">44,750</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t850
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.94%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,069</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35,909</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.46</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">192,497</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.17</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.22</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=056190"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">15</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=067630" class="tltle">에이치엘비생명과학</a></td>
\t\t\t\t\t<td class="number">29,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t950
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.28%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14,092</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">47,050</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.71</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3,039,073</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-293.63</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-2.26</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=067630"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">16</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=098460" class="tltle">고영</a></td>
\t\t\t\t\t<td class="number">102,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.00%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,987</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,699</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60.83</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31,082</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.03</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=098460"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">17</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=036830" class="tltle">솔브레인</a></td>
\t\t\t\t\t<td class="number">76,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.92%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,327</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17,398</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.70</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">90,352</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.39</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.53</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=036830"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">18</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=095700" class="tltle">제넥신</a></td>
\t\t\t\t\t<td class="number">57,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.24%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,312</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,273</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.56</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">93,863</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-36.48</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-15.68</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=095700"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">19</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=068760" class="tltle">셀트리온제약</a></td>
\t\t\t\t\t<td class="number">38,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.78%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,278</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34,089</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.23</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">88,830</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-141.12</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-3.33</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=068760"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">20</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=078340" class="tltle">컴투스</a></td>
\t\t\t\t\t<td class="number">102,300</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.68%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,162</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12,866</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.80</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35,245</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.15</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.15</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=078340"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">21</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=215600" class="tltle">신라젠</a></td>
\t\t\t\t\t<td class="number">18,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+12.80%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,145</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">71,052</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.38</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18,275,167</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-22.78</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-30.64</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=215600"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">22</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=039030" class="tltle">이오테크닉스</a></td>
\t\t\t\t\t<td class="number">89,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.11%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,964</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12,320</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.63</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">135,262</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">50.14</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.98</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=039030"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">23</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=247540" class="tltle">에코프로비엠</a></td>
\t\t\t\t\t<td class="number">50,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,950
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.98%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,463</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20,556</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.53</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">137,716</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.71</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.73</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=247540"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">24</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=214150" class="tltle">클래시스</a></td>
\t\t\t\t\t<td class="number">16,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.52%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,313</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">63,464</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">374,134</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">67.15</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34.51</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=214150"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">25</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=178920" class="tltle">SKC코오롱PI</a></td>
\t\t\t\t\t<td class="number">35,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.85%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,278</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29,366</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.02</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">183,997</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.39</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.80</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=178920"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">26</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=082270" class="tltle">젬백스</a></td>
\t\t\t\t\t<td class="number">27,550</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t2,250
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+8.89%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,169</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,913</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.98</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">590,911</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-84.77</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-11.85</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=082270"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">27</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=025980" class="tltle">아난티</a></td>
\t\t\t\t\t<td class="number">11,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-2.85%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,091</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">84,444</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.80</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3,035,954</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-48.58</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-6.21</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=025980"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">28</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=028150" class="tltle">GS홈쇼핑</a></td>
\t\t\t\t\t<td class="number">151,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.26%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">5,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,936</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,562</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27.02</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,254</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.41</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.46</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=028150"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">29</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=298380" class="tltle">에이비엘바이오</a></td>
\t\t\t\t\t<td class="number">21,350</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.91%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,672</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">45,303</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,027,543</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-5.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-330.20</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=298380"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">30</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=041510" class="tltle">에스엠</a></td>
\t\t\t\t\t<td class="number">39,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.76%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,166</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,442</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">136,871</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28.73</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.96</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=041510"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">31</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=041960" class="tltle">코미팜</a></td>
\t\t\t\t\t<td class="number">14,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.06%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,109</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">63,924</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.61</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">167,706</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-63.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-14.70</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=041960"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">32</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=067160" class="tltle">아프리카TV</a></td>
\t\t\t\t\t<td class="number">77,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.57%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,931</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11,495</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">46.48</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">130,714</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">41.02</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.60</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=067160"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">33</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=058470" class="tltle">리노공업</a></td>
\t\t\t\t\t<td class="number">58,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.21%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,902</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15,242</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">49,361</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.30</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.82</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=058470"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">34</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=030190" class="tltle">NICE평가정보</a></td>
\t\t\t\t\t<td class="number">14,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.70%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,622</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60,715</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32.61</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">193,444</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.71</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=030190"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">35</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=003380" class="tltle">하림지주</a></td>
\t\t\t\t\t<td class="number">8,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,376</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">93,584</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.24</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">81,834</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.36</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=003380"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">36</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=218410" class="tltle">RFHIC</a></td>
\t\t\t\t\t<td class="number">34,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t950
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.80%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,286</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,742</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">294,947</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32.28</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.22</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=218410"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">37</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=085660" class="tltle">차바이오텍</a></td>
\t\t\t\t\t<td class="number">15,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.95%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,239</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">52,481</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.45</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">315,967</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.55</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.75</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=085660"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">38</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=084850" class="tltle">아이티엠반도체</a></td>
\t\t\t\t\t<td class="number">36,050</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.14%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,228</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,823</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0.00</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,715,260</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.70</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.37</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=084850"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">39</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=214370" class="tltle">케어젠</a></td>
\t\t\t\t\t<td class="number">76,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,218</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,743</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27.24</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.76</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=214370"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">40</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=046890" class="tltle">서울반도체</a></td>
\t\t\t\t\t<td class="number">13,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t250
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.82%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,134</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">58,305</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.27</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">353,457</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.95</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.10</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=046890"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">41</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=035900" class="tltle">JYP Ent.</a></td>
\t\t\t\t\t<td class="number">22,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t600
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.71%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,057</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35,495</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.18</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">777,588</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">33.14</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.52</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=035900"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">42</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=200130" class="tltle">콜마비앤에이치</a></td>
\t\t\t\t\t<td class="number">27,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.18%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,051</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29,544</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.51</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34,764</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.65</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.89</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=200130"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">43</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=005290" class="tltle">동진쎄미켐</a></td>
\t\t\t\t\t<td class="number">15,450</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.32%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,944</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">51,414</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.93</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">888,362</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.65</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.85</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=005290"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">44</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=078130" class="tltle">국일제지</a></td>
\t\t\t\t\t<td class="number">6,340</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t60
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.96%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,683</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">121,181</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1.55</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26,771,301</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-333.68</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-3.98</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=078130"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">45</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=022100" class="tltle">포스코 ICT</a></td>
\t\t\t\t\t<td class="number">4,940</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,511</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">152,035</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.04</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">165,304</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-21.96</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-9.26</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=022100"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">46</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=200230" class="tltle">텔콘RF제약</a></td>
\t\t\t\t\t<td class="number">8,930</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t20
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.22%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,411</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">82,986</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.97</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,099,268</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-49.89</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-10.51</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=200230"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">47</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=000250" class="tltle">삼천당제약</a></td>
\t\t\t\t\t<td class="number">33,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.04%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,350</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,106</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.20</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">132,074</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">83.96</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.04</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=000250"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">48</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=090460" class="tltle">비에이치</a></td>
\t\t\t\t\t<td class="number">22,300</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t550
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.53%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,240</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32,465</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.31</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">654,338</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.55</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">47.93</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=090460"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">49</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=115450" class="tltle">지트리비앤티</a></td>
\t\t\t\t\t<td class="number">28,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.70%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,067</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24,711</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.73</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">157,652</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">148.19</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.54</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=115450"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">50</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=096530" class="tltle">씨젠</a></td>
\t\t\t\t\t<td class="number">26,850</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,650
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+15.73%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,044</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26,234</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.18</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,780,809</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">71.60</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.48</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=096530"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line_1"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t
\t



\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t<table summary="페이지 네비게이션 리스트" class="Nnavi" align="center">
\t\t\t\t<caption>페이지 네비게이션</caption>
\t\t\t\t<tr>\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t<td class="on">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=1"  >1</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=2"  >2</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=3"  >3</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=4"  >4</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=5"  >5</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=6"  >6</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=7"  >7</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=8"  >8</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=9"  >9</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=10"  >10</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=11"  >
\t\t\t\t다음<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarR.gif" width="3" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgRR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=28"  >맨뒤
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarRR.gif" width="8" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t
\t\t\t\t</tr>
\t\t\t\t</table>
\t\t\t</div>
\t\t\t<!-- // 종목 -->
\t\t\t<!-- //컨텐츠 -->
\t\t</div>
\t</div>






\t






\t<div id="footer">
\t\t<ul>
\t\t\t<li class="first">
\t\t\t\t<a href="https://www.naver.com/rules/service.html" onClick="clickcr(this, 'fot.service', '', '', event);" target="_blank">이용약관</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://finance.naver.com/rules.nhn" onClick="clickcr(this, 'fot.policy', '', '', event);" target="_blank">금융게시판 운영원칙</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/privacy.html" onClick="clickcr(this, 'fot.privacy', '', '', event);" target="_blank"><strong>개인정보처리방침</strong></a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/disclaimer.html" onClick="clickcr(this, 'fot.limit', '', '', event);" target="_blank">책임의 한계와 법적고지</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://help.naver.com/support/alias/contents2/finance/finance_1.naver" onclick="clickcr(this, 'fot.help', '', '', event);" target="_blank">금융 고객센터</a>
\t\t\t</li>
\t\t</ul>
\t\t<p class="desc">네이버(주)에서 제공하는 금융정보는 각 컨텐츠 제공업체<a href="javascript:;" onclick="togglePanelFooter('footerPanel0');" class="desc_help"><img src="https://ssl.pstatic.net/static/nfinance/2018/06/29/btn_help.png" width="17" height="17" alt="제공업체 상세설명"></a>부터 받는 정보로 투자 참고 사항이며, 오류가 발생할 수 있고 지연될 수<br>있습니다. 네이버(주)는 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다. 게시된 정보를 무단으로 배포할 수 없습니다.</p>
\t\t<div id="footerPanel0" class="provider_layer" style="display:none" tabindex="0" onblur="hidePannel('footerPanel0')">
\t\t\t<strong class="provider_layer__tit">컨텐츠 제공업체</strong>
\t\t\t<div class="provider_layer__txt">
\t\t\t\t<p><span>코스콤 : </span>실시간 주가정보 및 국내시세정보</p>
\t\t\t\t<p><span>에프앤가이드 : </span>기업 및 재무정보</p>
\t\t\t\t<p><span>이데일리 : </span>해외 시세 및 시장지표 정보</p>
\t\t\t\t<p><span>제로인 : </span>펀드정보</p>
\t\t\t\t<p><span>한국예탁결제원 : </span>주주총회일 및 전자투표 정보</p>
\t\t\t</div>
\t\t\t<span class="arrow"></span>
\t\t</div>
\t\t<address>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" class="logo" onClick="clickcr(this, 'fot.nhn', '', '', event);"><img src="https://ssl.pstatic.net/static/nfinance/2019/02/22/ci_naver.png" width="58" height="11" alt="NAVER" /></a>
\t\t\t<em>Copyright &copy;</em>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" onClick="clickcr(this, 'fot.nhn', '', '', event);">NAVER Corp.</a>
\t\t\t<span>All Rights Reserved.</span>
\t\t</address>
\t\t
\t\t
\t\t
\t</div>



<script type="text/javascript">
function isVisible(obj) {
    if (obj == document) return true
 
    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }
 
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }
 
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }
 
    return isVisible(obj.parentNode)
}

function isChildOf(myobj, containerObj) {
\twhile(myobj != undefined) {
\t\tif (myobj == document.body) {
\t\t\tbreak;
\t\t} 
\t\tif (myobj == containerObj) {
\t\t\treturn true;
\t\t}
\t\tmyobj = myobj.parentElement;
\t}
\treturn false;\t
}

function gnbLayerClose(e){
\tvar target = e.target ? e.target : e.srcElement;
\tif (isVisible(document.getElementById('gnb_service_lyr')) || isVisible(document.getElementById('gnb_notice_lyr')) ||isVisible(document.getElementById('gnb_my_lyr')) ) {
\t\tif (!isChildOf(target, document.getElementById('gnb'))) {
\t\t\tgnbAllLayerClose();
\t\t}
\t}\t
}

var isIE = (navigator.userAgent.toLowerCase().indexOf("msie")!=-1 && window.document.all) ? true:false;
if (isIE) {
\tdocument.attachEvent('onmousedown', gnbLayerClose);
} else {
\twindow.addEventListener('mousedown', gnbLayerClose);
}

function showPannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='block';

    if (layerId == "summary_lyr") {
        var layerHeight = jindo.$Element(layer).height();
        jindo.$Element("summary_ifr").height(layerHeight);
    }
}

function hidePannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='none';
}

function togglePanelFooter(layerId) {
    var elTargetLayer = jindo.$Element(jindo.$$.getSingle("#" + layerId));

    if (elTargetLayer != null) {
        if (elTargetLayer.visible()) {
            hidePannel(layerId);
        } else {
            showPannel(layerId);
        }
    }
}

// add data-useragent
document.documentElement.setAttribute('data-useragent',navigator.userAgent);
</script>
</div>
</body>
</html>
    `,
    2: `








<!--  global include -->

\t
\t
\t
\t
\t
<html lang='ko'>
<head>


\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t<title>시가총액 : 네이버 금융</title>
\t\t\t
\t\t
\t





\t
\t
\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
\t


<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">




\t
    
        <meta property="og:url" content="http://finance.naver.com/sise/sise_market_sum.nhn"/>
        
\t\t\t
\t\t    
\t\t    \t<meta property="og:title" content="시가총액 : 네이버 금융"/>
\t\t     
\t\t
\t\t
\t\t\t
\t\t\t   <meta property="og:description" content="관심종목의 실시간 주가를 가장 빠르게 확인하는 곳"/>
\t\t    
\t\t    
\t\t
\t\t 
\t\t\t
\t\t\t    <meta property="og:image" content="https://ssl.pstatic.net/static/m/stock/im/2016/08/og_stock-200.png"/>
\t\t    
\t\t    
\t\t
    

<meta property="og:type" content="article"/>
<meta property="og:article:thumbnailUrl" content=""/>
<meta property="og:article:author" content="네이버금융"/>
<meta property="og:article:author:url" content="http://FINANCE.NAVER.COM"/>




<link rel='stylesheet' type='text/css' href='/css/finance_header.css?20191114133508'>

\t
\t
\t
\t
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/common.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/layout.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/main.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock2.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/newstock3.css?20191114133508">
\t\t<link rel="stylesheet" type="text/css" href="/css/world.css?20191114133508">
\t\t
\t\t
\t\t
\t\t

\t\t
\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindo.min.ns.1.5.3.euckr.js?20191114133508"></script>
\t\t\t
\t\t\t
\t\t\t\t<script type="text/javascript" src="/js/release/common.js?20191114133508"></script>
\t\t\t
\t\t
\t\t\t<script type="text/javascript" src="/js/jindoComponent/jindo.Component.1.0.3.js?20191114133508"></script>
\t\t\t<script type="text/javascript" src="/ac/nhn.autocomplete.stock.js?20191114133508"></script>
\t\t
\t\t
\t


\t<link rel="shortcut icon" href="https://www.naver.com/favicon.ico?20191114133508" type="image/x-icon">
\t
\t<script type="text/javascript">
    (function(){
        var sUserAgent = navigator.userAgent;
        if(/iPhone|iPad/.test(sUserAgent)){
            document.write(
                [
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_120X120_iphone.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_152x152_ipad.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="167x167" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_167x167_ipad_pro.png" />',
\t\t\t\t\t'<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://ssl.pstatic.net/static/nfinance/ico/2018_ios_180x180_iphone.png" />'
                ]
                .join('\\n')
            );
        }

        if(/Android/.test(sUserAgent)){
            document.write(
                [
                    '<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_72x72_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="96x96" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_96x96_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_144x144_xxxhpdi.png" />',
                    '<link rel="apple-touch-icon-precomposed" sizes="192x192" href="https://ssl.pstatic.net/static/nfinance/ico/2018_android_192x192_xxxhpdi.png" />'
\t\t\t\t]
\t\t\t\t.join('\\n')
\t\t\t);
        }
    })();
    </script>
</head>




<body onload='getGNB();'>



<script type="text/javascript">
\tdocument.domain = 'naver.com';
\tvar nclk_evt = 3;
\tnclk_do();
</script>


<script type="text/javascript">




var nsc="finance.stock";





var ccsrv="cc.naver.com";


\t
\t
\tvar gnb_service='finance';
\t


var gnb_logout=document.URL; //GNB에서 로그아웃 후 redirect 될 URL
var gnb_searchbox='off'; //미니 검색창을 on 할지 off 할지. default는 off
var gnb_shortnick='off'; //닉네임 말줄임(10자)을 on할지 off 할지. default는 off.


var gnb_naverme_layer_open_callback = function(){
\t   var naverLayerSize = gnbNaverMeLayer.getLayerSize();
\t\t
\t\tvar me_layers = document.getElementById("me_layers");
\t\tme_layers.width=naverLayerSize.width;
\t\tme_layers.height=naverLayerSize.height;};

var gnb_naverme_layer_close_callback = function(){
\t\t
\t\t\tvar me_layers = document.getElementById("me_layers");
\t\t\tme_layers.width="0";
\t\t\tme_layers.height="0";};
</script>


<div id="u_skip">
\t<a href="#menu" tabindex="1"><span>메인 메뉴로 바로가기</span></a>

\t
\t
\t\t<a href="#start" tabindex="2"><span>본문으로 바로가기</span></a>
\t

</div>


<div id="header">
\t<div class="snb_area">
\t\t<div class="snb_inner">
\t\t\t<div id="gnb_area">
\t\t\t\t<div id="gnb">
\t\t\t\t\t<script charset="EUC-KR" type="text/javascript">
\t\t\t\t\tvar gnb_service = "gnbtest";
                    var gnb_template = location.protocol == "http:" ? "gnb_quirks_euckr" : "gnb_utf8" ;
\t\t\t\t\tvar gnb_dark = false;
\t\t\t\t\tvar gnb_brightness = 1;
\t\t\t\t\tvar gnb_logout=encodeURIComponent(location.href);
\t\t\t\t\tvar gnb_one_naver = 1;
\t\t\t\t\t</script>
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t<script type="text/javascript" charset="utf-8" src="https://ssl.pstatic.net/static.gn/templates/gnb_utf8.nhn?20191116">
                    \t\t</script>
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t</div>
\t\t\t</div>

\t\t\t<div class="sta">
\t\t\t\t<h1 class="logo"> <a href="https://www.naver.com/" class="logo_naver" onClick="clickcr(this, 'STA.naver', '', '', event);"><span class="blind">네이버</span></a>
\t\t\t\t<a href="/" class="logo_service" onClick="clickcr(this, 'STA.finance', '', '', event);"><span class="blind">금융</span></a> </h1>
\t\t\t\t<form name="search" action="/search/search.nhn"  method="get"
\t\t\t\t\tonsubmit="return delayed_submit(this)" style="margin:0; padding:0;">
\t\t\t\t<fieldset>
\t\t\t\t\t<legend>검색</legend>
\t\t\t\t\t<div class="snb_search_box">
\t\t\t\t\t\t<div class="snb_search_box_sub">
\t\t\t\t\t\t\t<input id="stock_items" type="text" title="검색" name="query" value="종목명&middot;펀드명&middot;환율명&middot;원자재명 입력" accesskey="s" class="snb_search_text snb_default" autocomplete="off">
\t\t\t\t\t\t\t<a id="nautocomplete" href="#" onclick="return false" class="btn_arrow"><span class="blind">자동완성 펼치기</span></a>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="auto_area">
\t\t\t\t\t\t\t<h2 class="blind">자동완성</h2>
\t\t\t\t\t\t\t<iframe id="autoFrame" src="/ac/reatcmp.nhn?menu=sise&submenu=" scrolling="no" height="0" frameborder="0" width="400" style="display: none;" marginheight="0" marginwidth="0" title="자동완성"></iframe>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<button type="submit" class="snb_search_btn" onclick="clickcr(this, 'STA.search', '', '', event);" alt="검색"><span class="blind">검색</span></button>
\t\t\t\t\t\t<a href="#" target="_blank" class="snb_search_btn-total" onclick="itegrationSearch();clickcr(this, 'STA.nx', '', '', event);return false;">통합검색</a>
\t\t\t\t\t</div>
\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<div class="lnb_area ">
\t\t<div class="lnb_inner">
\t\t\t<div id="menu">
\t\t\t\t<ul class="menu">
\t\t\t\t\t<li class="m1 first "><a href="/" onClick="clickcr(this, 'LNB.home', '', '', event);"><span class="tx">금융 홈</span></a></li>
\t\t\t\t\t<li class="m2 on"><a href="/sise/" onClick="clickcr(this, 'LNB.sise', '', '', event);"><span class="tx">국내증시</span></a></li>
\t\t\t\t\t<li class="m3 "><a href="/world/" onClick="clickcr(this, 'LNB.world', '', '', event);"><span class="tx">해외증시</span></a></li>
\t\t\t\t\t<li class="m4 "><a href="/marketindex/" onClick="clickcr(this, 'LNB.market', '', '', event);"><span class="tx">시장지표</span></a></li>
\t\t\t\t\t<li class="m5 "><a href="/fund/" onClick="clickcr(this, 'LNB.fund', '', '', event);"><span class="tx">펀드</span></a>
\t\t\t\t\t\t
\t\t\t\t\t</li>
\t\t\t\t\t<li class="m6 "><a href="/research/" onClick="clickcr(this, 'LNB.research', '', '', event);"><span class="tx">투자전략</span></a></li>
\t\t\t\t\t<li class="m7 "><a href="/news/"><span class="tx">뉴스</span></a></li>
\t\t\t\t\t<li class="m8 "><a href="/mystock/" onClick="clickcr(this, 'LNB.mystock', '', '', event);"><span class="tx">MY</span></a></li>
\t\t\t\t</ul>
\t\t\t</div>
\t\t</div>
\t</div>
\t
\t
\t
\t

\t
\t<script type="text/JavaScript">
\t\t/* lcs 집계 */
        ;(function(){
            var eventType = "onpageshow" in window ? "pageshow" : "load";
            jindo.$Fn(function(){
                lcs_do();
            }).attach(window, eventType);
        })();

\t\t/* 검색 자동완성 [ 인자1 : 검색input의 ID, 인자2 : iframe 태그 ID ]   */
\t\t// AutoComplete 생성
\t\tvar acDomain = "ac.finance.naver.com";
        if (location.hostname.indexOf("staging-") > -1) {
            acDomain = "staging-" + acDomain;
        }
        var acUrl = "https://" + acDomain + "/ac";

\t\tsmartSearch = new nhn.Autocomplete(
\t\t\t// InputManager 생성
\t\t\tnew nhn.AcInputManager(jindo.$("stock_items")),
\t\t\t// DataManager 생성
\t\t\tnew nhn.AcDataManager(acUrl, "jsonp", "get", {
                    st: "111",
                    r_lt : "111",
                    q_enc : "euc-kr",
                    r_enc : "euc-kr",
                    frm: "stock"}),
\t\t\t// ViewManager 생성
\t\t\tnew nhn.AcStockViewManager(jindo.$("autoFrame"), jindo.$("nautocomplete"), {
                                        strMax: 200,
                                        listMax: [7, 2, 2],
                                        aRedirectUrl : [
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com",
                            \t\t\t"https://finance.naver.com"]}),
\t\t\t// Autocomplete Option
            {formId:"search", cookieDomain:location.hostname, cookieName:"NaverCommonStock"});

\t\t\tsmartSearch.attach({
\t            onFocus: function () {
\t                var weInput = jindo.$Element('stock_items');
\t                if (weInput && weInput.hasClass("snb_default")) {
\t                        weInput.text("");
\t                        weInput.removeClass('snb_default');
\t                }
\t            }
\t        });

\t\t/* 통합검색  start ----->  */
\t\tdocument.domain = 'naver.com';
\t\tvar sSearchHintText = '종목명·펀드명·환율명·원자재명 입력';
\t\tfunction itegrationSearch() {
\t\t\tvar query = jindo.$('stock_items').value;

\t\t\tif ( query == ''  || encodeURIComponent(query) == encodeURIComponent(sSearchHintText))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}

            var url = location.protocol + "//search.naver.com/search.naver?sm=sta_hty.finance&where=nexearch&ie=UTF8&query=" + encodeURIComponent(query);
            window.open(url, "_blank");

\t\t\treturn false;
\t\t}

\t\tfunction delayed_submit(object) {
\t\t\tif (navigator.userAgent.indexOf('MSIE') == -1) {
\t\t\t\twindow.setTimeout(function() {stock_search(object)}, 300);
\t\t\t} else {
\t\t\t\tstock_search(object);
\t\t\t}
\t\t\treturn false;
\t\t}

\t\tfunction stock_search (object)
\t\t{
\t\t\tquery = object.query.value.replace(/^\\s*/,'').replace(/\\s*$/,'');\t// trim
\t\t\tobject.query.value=query;

\t\t\tif ( query == '' || query == sSearchHintText.replace(/^\\s*/,'').replace(/\\s*$/,''))
\t\t\t{
\t\t\t\talert ( '검색어를 입력해 주세요.' );
\t\t\t\treturn;
\t\t\t}
\t\t\telse {
\t\t\t\tobject.submit();
\t\t\t}
\t\t}
\t\t/* <---------- 통합검색  end */

\t\tfunction popup()
\t\t{
\t\t\twin = window.open('/template/group_limit_pop.jsp','finan_popup','width=569 height=278 scrollbars=no status=no');
\t\t\twin.focus();
\t\t}
\t</script>

\t<iframe id="me_layers" name="test" title="네이버미 영역" width="0" height="0" scrolling="no" frameborder="0" style="display:block;top: 22px; right: 209px; position: absolute; z-index: 15;"></iframe>
</div>
<div id="wrap"  >

<!-- //  global include -->
<script language="JavaScript">
function mouseOver(obj){
  obj.style.backgroundColor="#f6f4e5";
}
function mouseOut(obj){
  obj.style.backgroundColor="#ffffff";
}
</script>

\t<div id="newarea">
\t\t\t

\t\t\t<!-- leftmenu -->
\t\t\t<div class="snb snb2">
\t\t\t\t<h2 class="h_sise"><a href="/sise/"><span class="blind">국내증시</span></a></h2>
\t\t\t\t<ul class="nav1">
\t\t\t\t<li class="frst"><strong class="lst_sise"><span class="blind">주요시세정보</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst1_1"><a href="/sise/sise_index.nhn?code=KOSPI" onClick="clickcr(this,'siu.1','','',event);" class="off"><span class="blind">코스피</span></a></li> 
                     <li class="type1 lst1_2"><a href="/sise/sise_index.nhn?code=KOSDAQ" onClick="clickcr(this,'siu.2','','',event);" class="off"><span class="blind">코스닥</span></a></li>
                     <li class="type1 lst1_3"><a href="/sise/sise_index.nhn?code=FUT" onClick="clickcr(this,'siu.3','','',event);" class="off"><span class="blind">선물</span></a></li>
                     <li class="type1 lst1_26"><a href="/sise/sise_index.nhn?code=KPI200" onClick="clickcr(this,'siu.26','','',event);" class="off"><span class="blind">코스피200</span></a></li>
                     <li class="type1 lst1_31"><a href="/sise/konex.nhn" onClick="clickcr(this,'siu.konex','','',event);" class="off"><span class="blind">코넥스</span></a></li>
                     <li class="type1 lst1_16"><a href="/sise/sise_market_sum.nhn" onClick="clickcr(this,'siu.16','','',event);" class="on"><span class="blind">시가총액</span></a></li>
                     <li class="type1 lst1_32" ><a href="/sise/dividend_list.nhn" onClick="clickcr(this,'siu.dividend','','',event);" class="off"><span class="blind">배당</span></a></li>                     
                     <li class="type1 lst1_4"><a href="/sise/sise_group.nhn?type=upjong" onClick="clickcr(this,'siu.4','','',event);" class="off"><span class="blind">업종</span></a></li>
                     <li class="type1 lst1_5" ><a href="/sise/theme.nhn" onClick="clickcr(this,'siu.5','','',event);" class="off"><span class="blind">테마</span></a></li>
                     <li class="type1 lst1_30"><a href="/sise/sise_group.nhn?type=group"  onClick="clickcr(this,'siu.30','','',event);"  class="off"><span class="blind">그룹사</span></a></li>
\t\t\t\t\t <li class="type1 lst1_27 "><a href="/sise/etf.nhn" onClick="clickcr(this,'siu.27','','',event);" class="off"><span class="blind">ETF</span></a></li>
\t\t\t\t\t <li class="type1 lst1_34"><a href="/sise/etn.nhn" onClick="clickcr(this,'siu.34','','',event);" class="off"><span class="blind">ETN</span></a></li>
\t\t\t\t\t <li class="type1 lst1_8 "><a href="/sise/sise_rise.nhn" onClick="clickcr(this,'siu.8','','',event);" class="off"><span class="blind">ª?Ω?</span></a></li>
                     <li class="type1 lst1_9 "><a href="/sise/sise_steady.nhn" onClick="clickcr(this,'siu.9','','',event);" class="off"><span class="blind">보합</span></a></li>
                     <li class="type1 lst1_10"><a href="/sise/sise_fall.nhn" onClick="clickcr(this,'siu.10','','',event);" class="off"><span class="blind">하락</span></a></li>
                     <li class="type1 lst1_6"><a href="/sise/sise_upper.nhn" onClick="clickcr(this,'siu.6','','',event);" class="off"><span class="blind">상한가</span></a></li>
                     <li class="type1 lst1_7"><a href="/sise/sise_lower.nhn" onClick="clickcr(this,'siu.7','','',event);" class="off"><span class="blind">하한가</span></a></li>
                     <li class="type1 lst1_15 "><a href="/sise/sise_low_up.nhn" onClick="clickcr(this,'siu.15','','',event);" class="off"><span class="blind">급등</span></a></li>
                     <li class="type1 lst1_14 "><a href="/sise/sise_high_down.nhn" onClick="clickcr(this,'siu.14','','',event);" class="off"><span class="blind">급락</span></a></li>
                     <li class="type2 lst1_11"><a href="/sise/sise_quant.nhn" onClick="clickcr(this,'siu.11','','',event);" class="off"><span class="blind">거래상위</span></a></li>  
                     <li class="type1 lst1_12 "><a href="/sise/sise_quant_high.nhn" onClick="clickcr(this,'siu.12','','',event);" class="off"><span class="blind">급증</span></a></li> 
                     <li class="type1 lst1_13 "><a href="/sise/sise_quant_low.nhn" onClick="clickcr(this,'siu.13','','',event);" class="off"><span class="blind">급감</span></a></li>
                     <li class="lst1_23"><a href="/sise/sise_trans_style.nhn" onClick="clickcr(this,'siu.23','','',event);" class="off"><span class="blind">투자자별매매동향</span></a></li>  
                     <li class="type1 lst1_17"><a href="/sise/sise_deal_rank.nhn" onClick="clickcr(this,'siu.17','','',event);" class="off"><span class="blind">외국인매매</span></a></li> 
                     <li class="type1 lst1_18"><a href="/sise/sise_deal_rank.nhn?investor_gubun=1000" onClick="clickcr(this,'siu.18','','',event);" class="off"><span class="blind">기관매매</span></a></li> 
                     <li class="lst1_19"><a href="/sise/sise_program.nhn" onClick="clickcr(this,'siu.19','','',event);" class="off"><span class="blind">프로그램매매동향</span></a></li> 
                     <li class="lst1_22"><a href="/sise/sise_deposit.nhn" onClick="clickcr(this,'siu.22','','',event);" class="off"><span class="blind">증시자금동향</span></a></li>
                     <li class="lst1_21"><a href="/sise/sise_new_stock.nhn" onClick="clickcr(this,'siu.21','','',event);" class="off"><span class="blind">신규상장</span></a></li>  
                     <li class="lst1_24 "><a href="/sise/sise_foreign_hold.nhn" onClick="clickcr(this,'siu.24','','',event);" class="off"><span class="blind">외국인보유</span></a></li> 
                     <li class="lst1_25 "><a href="/sise/market3news_list.nhn" onClick="clickcr(this,'siu.25','','',event);" class="off"><span class="blind">장외시세</span></a></li>
                     <li class="lst1_33 "><a href="/sise/ipo.nhn" onClick="clickcr(this,'siu.33','','',event);" class="off"><span class="blind">IPO</span></a></li>
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><strong class="lst_prevent"><span class="blind">투자자보호</span></strong>
\t                <ul class="sub">
\t                 <li class="lst1_20"><a href="/sise/management.nhn" onClick="clickcr(this,'siu.20','','',event);" class="off"><span class="blind">관리종목</span></a></li>
\t                 <li class="lst1_29"><a href="/sise/trading_halt.nhn" onClick="clickcr(this,'siu.29','','',event);" class="off"><span class="blind">거래정지종목</span></a></li> 
\t                 <li class="lst1_28"><a href="/sise/investment_alert.nhn?type=caution" onClick="clickcr(this,'siu.28','','',event);" class="off"><span class="blind">시장경보종목</span></a></li>
\t                </ul>
            \t</li>
    \t\t\t<li><strong class="lst_search"><span class="blind">종목조건검색</span></strong>
\t\t\t\t\t<ul class="sub">
\t\t\t\t\t <li class="type1 lst2_2"><a href="/sise/item_gold.nhn" onClick="clickcr(this,'sih.2','','',event);" class="off"><span class="blind">골든크로스</span></a></li>
\t\t\t\t\t <li class="type1 lst2_1"><a href="/sise/item_gap.nhn" onClick="clickcr(this,'sih.1','','',event);" class="off"><span class="blind">갭상승</span></a></li>
\t\t\t\t\t <li class="type1 lst2_3"><a href="/sise/item_igyuk.nhn" onClick="clickcr(this,'sih.3','','',event);" class="off"><span class="blind">이격도과열</span></a></li>
\t\t\t\t\t <li class="type1 lst2_4"><a href="/sise/item_overheating_1.nhn" onClick="clickcr(this,'sih.4','','',event);" class="off"><span class="blind">투심과열</span></a></li>
\t\t\t\t\t <li class="lst2_5"><a href="/sise/item_overheating_2.nhn" onClick="clickcr(this,'sih.5','','',event);" class="off"><span class="blind">상대강도과열</span></a></li>  \t                 
\t\t\t\t\t</ul>
\t\t\t\t</li>
\t\t\t\t<li><a href="/sise/report.nhn"><strong class="lst_report"><span class="blind">기업 전자공시</span></strong></a></li>
\t\t\t\t<li class="last"><a href="/sise/short_trade.nhn"><strong class="lst_short"><span class="blind">공매도 종합 현황</span></strong></a></li>\t\t\t\t
\t\t\t\t</ul>
\t\t\t\t\t\t\t\t
\t\t\t</div>
\t\t\t<!-- //leftmenu -->
\t\t\t
\t\t\t<!-- //leftmenu -->
\t\t<div id="contentarea">
\t\t\t<!-- 컨텐츠 -->
\t\t\t<div id="contentarea_left" class="bnd_wid">
\t\t\t\t<!-- 로케이터 : 메뉴에 맞게 고쳐주세요 -->
\t\t\t\t<div class="sub_location tlt_bottom_line">
\t\t\t\t\t<a href="/">금융홈</a> &gt; <a href="/sise/">국내증시</a> &gt; <a href="#">시가총액</a>
\t\t\t\t</div>
\t\t\t\t<!-- //로케이터 -->

\t\t\t\t<h3 class="sub_tlt">시가총액<span class="tlt_page">항목을 자유롭게 변경하실 수 있습니다.&nbsp;&nbsp;<img src='https://ssl.pstatic.net/imgstock/images5/bar_C7C.gif'>&nbsp;&nbsp;최대 6개까지 설정 가능합니다.</span></h3>
\t\t\t<!-- 항목선택 -->
\t\t
\t\t
\t


 
 
 \t
 \t
 


<script language=javascript>
function fieldSubmit() {
\tvar chkcnt = 0;
\t
\tfor(i = 0; i < document.field_form.fieldIds.length ; i++) {
    \tif(document.field_form.fieldIds[i].checked == true) {
    \t\tchkcnt++;
    \t}
    }
    
    if(chkcnt > 6) {
    \talert('최대 6개까지만 가능합니다.');
    \treturn;
    }

\tdocument.field_form.action = 'field_submit.nhn';
\tdocument.field_form.submit();
}

function fieldDefault() {
\tdocument.field_form.action = 'field_del.nhn';
\tdocument.field_form.submit();

}
</script>
<!-- 항목선택 -->
<div class="box_type_m" style="margin-top:0">
<form name='field_form'>
<input type=hidden name=menu value="market_sum">
<input type=hidden name=returnUrl value="http://finance.naver.com/sise/sise_market_sum.nhn?sosok=1&page=2">
\t<div class="subcnt_sise_item sub810"><div class="subcnt_sise_item_top sub810t">
\t\t<table summary="원하시는 항목을 선택하여 결과를 보실 수 있습니다." cellpadding="0" cellspacing="0" class="item_list">
\t\t<caption>항목 선택표</caption>
\t\t<colgroup><col width=62><col width=84><col width=111><col width=97><col width=116><col width=85></colgroup>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option1" name="fieldIds" value="quant"  checked> <label for="option1">거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option2" name="fieldIds" value="ask_buy"  > <label for="option2">매수호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option3" name="fieldIds" value="amount"  > <label for="option3">거래대금</label>(백만)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option4" name="fieldIds" value="market_sum"  checked> <label for="option4">시가총액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option5" name="fieldIds" value="operating_profit"  > <label for="option5">영업이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option6" name="fieldIds" value="per"  checked> <label for="option6">PER</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option7" name="fieldIds" value="open_val"  > <label for="option7">시가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option8" name="fieldIds" value="ask_sell"  > <label for="option8">매도호가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option9" name="fieldIds" value="prev_quant"  > <label for="option9">전일거래량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option10" name="fieldIds" value="property_total"  > <label for="option10">자산총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option11" name="fieldIds" value="operating_profit_increasing_rate"  > <label for="option11">영업이익증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option12" name="fieldIds" value="roe"  checked> <label for="option12">ROE</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option13" name="fieldIds" value="high_val"  > <label for="option13">고가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option14" name="fieldIds" value="buy_total"  > <label for="option14">매수총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option15" name="fieldIds" value="frgn_rate"  checked> <label for="option15">외국인비율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option16" name="fieldIds" value="debt_total"  > <label for="option16">부채총계</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option17" name="fieldIds" value="net_income"  > <label for="option17">당기순이익</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option18" name="fieldIds" value="roa"  > <label for="option18">ROA</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option19" name="fieldIds" value="low_val"  > <label for="option19">저가</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option20" name="fieldIds" value="sell_total"  > <label for="option20">매도총잔량</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td class='choice'><input type="checkbox" id="option21" name="fieldIds" value="listed_stock_cnt"  checked> <label for="option21">상장주식수</label>(천주)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option22" name="fieldIds" value="sales"  > <label for="option22">매출액</label>(억)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option23" name="fieldIds" value="eps"  > <label for="option23">주당순이익</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option24" name="fieldIds" value="pbr"  > <label for="option24">PBR</label>(배)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t\t<tr>
\t\t\t
\t\t\t<td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td>

\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option25" name="fieldIds" value="sales_increasing_rate"  > <label for="option25">매출액증가율</label></td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option26" name="fieldIds" value="dividend"  > <label for="option26">보통주배당금</label>(원)</td>
\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t<td ><input type="checkbox" id="option27" name="fieldIds" value="reserve_ratio"  > <label for="option27">유보율</label>(%)</td>
\t\t\t
\t\t\t</tr>
\t\t
\t\t</table>
\t\t<div class="item_btn">
\t\t\t<a href="javascript:fieldSubmit()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_apply.gif" alt="적용하기" width="55" height="18"></a><a href="javascript:fieldDefault()"><img src="https://ssl.pstatic.net/imgstock/images5/btn_initialize.gif" alt="초기항 목으로" width="76" height="18"></a>
\t\t</div>
\t</div></div>
</div>
</form>
<!-- //항목선택 끝 -->

\t\t\t<!-- //항목선택 끝 -->
\t\t\t</div>
\t\t\t<!--  right area -->
\t\t\t<div id="contentarea_right">
\t\t\t\t


\t

\t
\t\t<script>document.domain='naver.com';</script>
\t

\t\t\t</div>

\t\t\t<!-- 종목 -->
\t\t\t<div class="box_type_l">
\t\t\t\t<div class="tab_style_1">

\t
\t\t\t\t\t<div class="tab_smeun"><a href="?sosok=0">코스피</a></div>
\t\t\t\t\t<div class="tab_smeun choice"><div class="choice_lt"></div>코스닥</div>
\t
\t
\t

\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<!-- [D] 활성화된 탭메뉴에 따라 blind text 변경해주세요 -->

\t\t\t\t\t
\t\t\t\t<h4 class="blind">코스닥</h4>
\t\t\t\t<table summary="코스닥 시세정보를 선택한 항목에 따라 정보를 제공합니다." cellpadding="0" cellspacing="0" class="type_2">
\t\t\t\t<caption>코스닥</caption>
\t
\t


\t\t\t\t<colgroup>
\t\t\t\t<col width="2%">
\t\t\t\t<col width="*">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="9%">
\t\t\t\t<col width="7%">
\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t\t<col width="8%">
\t
\t\t\t\t<col width="6%">
\t\t\t\t</colgroup>
\t\t\t\t<thead>
\t\t\t\t<tr>
\t\t\t\t\t<th scope="col">N</th>
\t\t\t\t\t<th scope="col">종목명</th>
\t\t\t\t\t<th scope="col">현재가</th>
\t\t\t\t\t<th scope="col" class="tr" style="padding-right:8px">전일비</th>
\t\t\t\t\t<th scope="col">등락률</th>
\t\t\t\t\t<th scope="col">액면가</th>
\t
\t\t\t\t\t<th scope="col">시가총액</th>
\t
\t\t\t\t\t<th scope="col">상장주식수</th>
\t
\t\t\t\t\t<th scope="col">외국인비율</th>
\t
\t\t\t\t\t<th scope="col">거래량</th>
\t
\t\t\t\t\t<th scope="col">PER</th>
\t
\t\t\t\t\t<th scope="col">ROE</th>
\t
\t\t\t\t\t<th scope="col">토론실</th>
\t\t\t\t</tr>
\t\t\t\t</thead>
\t\t\t\t<tbody>
\t\t\t\t<tr><td colspan="10" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">51</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=039840" class="tltle">디오</a></td>
\t\t\t\t\t<td class="number">45,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.78%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,001</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15,524</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.03</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">62,371</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">125.28</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.87</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=039840"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">52</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=267980" class="tltle">매일유업</a></td>
\t\t\t\t\t<td class="number">89,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t1,800
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.98%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,981</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,844</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.95</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24,020</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.82</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=267980"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">53</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=039200" class="tltle">오스코텍</a></td>
\t\t\t\t\t<td class="number">24,450</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.09%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,871</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28,102</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.92</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">127,609</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">192.52</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.28</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=039200"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">54</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=053800" class="tltle">안랩</a></td>
\t\t\t\t\t<td class="number">68,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.73%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,849</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,014</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.35</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">81,931</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.08</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=053800"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">55</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=151910" class="tltle">나노스</a></td>
\t\t\t\t\t<td class="number">5,910</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t860
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+17.03%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,580</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">111,345</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0.33</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,678,699</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-48.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-42.53</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=151910"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">56</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=007390" class="tltle">네이처셀</a></td>
\t\t\t\t\t<td class="number">10,750</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t200
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.90%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,578</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">61,190</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.15</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,542,017</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">275.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.41</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=007390"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">57</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=196170" class="tltle">알테오젠</a></td>
\t\t\t\t\t<td class="number">47,300</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t450
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.94%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,545</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13,838</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.74</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">164,464</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-92.20</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-12.91</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=196170"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">58</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=064760" class="tltle">티씨케이</a></td>
\t\t\t\t\t<td class="number">55,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t600
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.06%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,526</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11,675</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">57.86</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,834</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.93</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28.43</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=064760"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">59</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=086450" class="tltle">동국제약</a></td>
\t\t\t\t\t<td class="number">72,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t3,100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+4.47%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">2,500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,447</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,892</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.22</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">39,059</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.84</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16.27</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=086450"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">60</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=091700" class="tltle">파트론</a></td>
\t\t\t\t\t<td class="number">11,750</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.29%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,363</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">54,156</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">32.08</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">764,010</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">68.31</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.09</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=091700"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">61</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=069080" class="tltle">웹젠</a></td>
\t\t\t\t\t<td class="number">17,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.39%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,056</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35,311</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28.22</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,611</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.03</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.28</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=069080"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">62</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=108320" class="tltle">실리콘웍스</a></td>
\t\t\t\t\t<td class="number">37,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.77%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,042</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,264</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">286,161</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.34</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.40</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=108320"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">63</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=048260" class="tltle">오스템임플란트</a></td>
\t\t\t\t\t<td class="number">42,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,450
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.57%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,014</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14,286</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36.23</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">171,358</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">47.41</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.45</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=048260"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">64</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=083790" class="tltle">크리스탈</a></td>
\t\t\t\t\t<td class="number">14,750</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.08%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,968</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">40,462</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.72</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">262,124</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">82.40</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.01</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=083790"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">65</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=038540" class="tltle">상상인</a></td>
\t\t\t\t\t<td class="number">10,700</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.47%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,920</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">55,328</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.05</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">542,782</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.93</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=038540"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">66</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=278280" class="tltle">천보</a></td>
\t\t\t\t\t<td class="number">59,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,900</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">2.13</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">44,644</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.86</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.53</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=278280"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">67</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=058820" class="tltle">CMG제약</a></td>
\t\t\t\t\t<td class="number">4,240</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t250
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-5.57%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,889</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">138,892</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.40</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24,098,359</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">81.54</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6.01</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=058820"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">68</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=141080" class="tltle">레고켐바이오</a></td>
\t\t\t\t\t<td class="number">52,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.19%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,575</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10,600</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.67</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">57,481</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-21.82</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-34.39</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=141080"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">69</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=213420" class="tltle">덕산네오룩스</a></td>
\t\t\t\t\t<td class="number">23,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t800
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+3.58%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">200</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,558</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24,010</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.59</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">249,549</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.53</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.28</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=213420"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">70</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=033640" class="tltle">네패스</a></td>
\t\t\t\t\t<td class="number">24,000</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+5.96%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,534</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">23,059</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.83</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,312,938</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">21.94</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.00</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=033640"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">71</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=230360" class="tltle">에코마케팅</a></td>
\t\t\t\t\t<td class="number">34,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t750
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.25%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,532</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,199</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.21</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">111,559</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">35.99</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.46</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=230360"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">72</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=092040" class="tltle">아미코젠</a></td>
\t\t\t\t\t<td class="number">28,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.42%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,493</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19,207</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.13</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">132,568</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.66</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.11</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=092040"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">73</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=048410" class="tltle">현대바이오</a></td>
\t\t\t\t\t<td class="number">15,450</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.32%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,351</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34,637</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.41</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,400,609</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">193.12</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.34</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=048410"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">74</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=031390" class="tltle">녹십자셀</a></td>
\t\t\t\t\t<td class="number">44,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t750
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.71%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,332</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11,982</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.48</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">98,393</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">37.39</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=031390"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">75</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=033290" class="tltle">코웰패션</a></td>
\t\t\t\t\t<td class="number">5,830</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.87%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,276</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">90,500</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.94</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">228,376</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.50</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.80</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=033290"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">76</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=272290" class="tltle">이녹스첨단소재</a></td>
\t\t\t\t\t<td class="number">56,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t600
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.08%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,207</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,232</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.66</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">60,063</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.08</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.40</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=272290"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">77</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=078160" class="tltle">메디포스트</a></td>
\t\t\t\t\t<td class="number">33,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.53%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,185</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15,618</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.37</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">70,388</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-257.36</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-1.74</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=078160"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">78</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=066970" class="tltle">엘앤에프</a></td>
\t\t\t\t\t<td class="number">20,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.48%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,150</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24,759</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.37</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">174,709</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.46</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.83</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=066970"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">79</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=029960" class="tltle">코엔텍</a></td>
\t\t\t\t\t<td class="number">10,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t100
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-0.98%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,075</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">50,000</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.69</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">257,838</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.71</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=029960"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">80</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=060250" class="tltle">NHN한국사이버결제</a></td>
\t\t\t\t\t<td class="number">21,850</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.69%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,019</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,971</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.21</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">277,945</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">29.09</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.47</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=060250"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">81</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=042000" class="tltle">카페24</a></td>
\t\t\t\t\t<td class="number">53,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t600
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.12%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5,017</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,431</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.73</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">62,952</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-16.89</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-45.87</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=042000"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">82</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=023890" class="tltle">한국아트라스비엑스</a></td>
\t\t\t\t\t<td class="number">53,800</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t900
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.70%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">1,000</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,923</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,150</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">3.22</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">551</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.85</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.32</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=023890"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">83</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=950160" class="tltle">코오롱티슈진</a></td>
\t\t\t\t\t<td class="number">8,010</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">0</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,896</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">61,118</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.07</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-14.35</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-22.06</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=950160"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">84</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=036540" class="tltle">SFA반도체</a></td>
\t\t\t\t\t<td class="number">3,430</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t220
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+6.85%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,881</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">142,292</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.40</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9,790,373</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38.54</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=036540"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">85</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=183490" class="tltle">엔지켐생명과학</a></td>
\t\t\t\t\t<td class="number">61,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,841</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,858</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.20</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">36,687</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-32.34</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=183490"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">86</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=035600" class="tltle">KG이니시스</a></td>
\t\t\t\t\t<td class="number">17,200</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t50
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.29%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27,904</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.49</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">93,532</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.62</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.61</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=035600"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">87</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=268600" class="tltle">셀리버리</a></td>
\t\t\t\t\t<td class="number">61,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" width="7" height="6" style="margin-right:4px;" alt="하락"><span class="tah p11 nv01">
\t\t\t\t700
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 nv01">
\t\t\t\t-1.13%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,778</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,820</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">0.39</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">420,099</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-58.81</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=268600"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">88</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=112040" class="tltle">위메이드</a></td>
\t\t\t\t\t<td class="number">28,100</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t350
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.26%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,721</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">16,800</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.57</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34,863</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-35.71</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-4.76</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=112040"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">89</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=265520" class="tltle">AP시스템</a></td>
\t\t\t\t\t<td class="number">32,250</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t900
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.87%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,670</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14,480</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">12.89</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">677,169</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19.53</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">25.75</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=265520"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">90</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=178320" class="tltle">서진시스템</a></td>
\t\t\t\t\t<td class="number">25,650</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.99%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,643</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18,101</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.72</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">469,583</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.21</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17.95</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=178320"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">91</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=122870" class="tltle">와이지엔터테인먼트</a></td>
\t\t\t\t\t<td class="number">25,400</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,622</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18,198</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.84</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">99,843</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">27.88</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">5.07</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=122870"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">92</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=215000" class="tltle">골프존</a></td>
\t\t\t\t\t<td class="number">72,900</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,000
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+1.39%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,575</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">6,275</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.79</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14,498</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22.40</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.63</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=215000"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">93</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=097520" class="tltle">엠씨넥스</a></td>
\t\t\t\t\t<td class="number">25,650</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t1,300
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+5.34%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,552</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">17,745</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">15.08</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1,074,092</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">14.52</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">26.19</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=097520"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">94</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=006730" class="tltle">서부T&D</a></td>
\t\t\t\t\t<td class="number">8,210</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,552</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">55,439</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.02</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">66,436</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-43.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-1.58</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=006730"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">95</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=086520" class="tltle">에코프로</a></td>
\t\t\t\t\t<td class="number">20,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t500
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.49%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,551</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">22,090</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.64</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">154,200</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11.57</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">24.03</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=086520"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_06"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_08"></td></tr>
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">96</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=228760" class="tltle">지노믹트리</a></td>
\t\t\t\t\t<td class="number">22,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t450
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+2.03%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,517</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">19,986</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">1.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">149,485</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-143.04</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-25.64</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=228760"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">97</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=122990" class="tltle">와이솔</a></td>
\t\t\t\t\t<td class="number">15,950</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t150
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.95%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,491</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">28,157</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7.34</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">264,148</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8.49</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">18.89</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=122990"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">98</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=263050" class="tltle">유틸렉스</a></td>
\t\t\t\t\t<td class="number">61,500</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.65%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,484</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">7,290</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">30.21</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">38,173</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">-30.42</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t\t\t<td class="number">N/A</td>
\t\t\t
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=263050"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">99</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=215200" class="tltle">메가스터디교육</a></td>
\t\t\t\t\t<td class="number">37,600</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11">0.00%</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">100</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,445</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">11,822</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">34.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">52,865</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">10.74</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">20.86</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=215200"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t


\t\t\t\t<tr  onMouseOver="mouseOver(this)" onMouseOut="mouseOut(this)">
\t\t\t\t\t<td class="no">100</td>
\t\t\t\t\t<td><a href="/item/main.nhn?code=243070" class="tltle">휴온스</a></td>
\t\t\t\t\t<td class="number">49,150</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif" width="7" height="6" style="margin-right:4px;" alt="상승"><span class="tah p11 red02">
\t\t\t\t400
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">
\t\t\t\t<span class="tah p11 red01">
\t\t\t\t+0.82%
\t\t\t\t</span>
\t\t\t</td>
\t\t\t\t\t<td class="number">500</td>
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">4,416</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">8,984</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">13.90</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">62,228</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">9.76</td>
\t\t\t
\t\t
\t
\t\t
\t\t\t
\t\t\t
\t\t\t
\t\t\t\t\t\t\t\t\t<td class="number">31.64</td>
\t\t\t
\t\t
\t
\t\t\t\t\t<td class="center"><a href="/item/board.nhn?code=243070"><img src="https://ssl.pstatic.net/imgstock/images5/ico_debatebl2.gif" width="15" height="13" alt="토론실"></a></td>
\t\t\t\t</tr>
\t\t\t
\t
\t\t
\t\t
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t\t\t<tr><td colspan="13" class="division_line_1"></td></tr>
\t\t\t\t<tr><td colspan="13" class="blank_09"></td></tr>
\t\t
\t



\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t<table summary="페이지 네비게이션 리스트" class="Nnavi" align="center">
\t\t\t\t<caption>페이지 네비게이션</caption>
\t\t\t\t<tr>\t\t
\t\t\t\t\t
\t\t\t\t\t<td class="pgLL">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=1"  >
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarLL.gif" width="7" height="5" alt="">맨앞
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t
\t\t\t\t\t<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=1"  >1</a>
\t\t\t\t</td>
<td class="on">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=2"  >2</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=3"  >3</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=4"  >4</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=5"  >5</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=6"  >6</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=7"  >7</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=8"  >8</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=9"  >9</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=10"  >10</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=11"  >
\t\t\t\t다음<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarR.gif" width="3" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t<td class="pgRR">
\t\t\t\t<a href="/sise/sise_market_sum.nhn?sosok=1&amp;page=28"  >맨뒤
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarRR.gif" width="8" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t\t\t
\t\t\t\t</tr>
\t\t\t\t</table>
\t\t\t</div>
\t\t\t<!-- // 종목 -->
\t\t\t<!-- //컨텐츠 -->
\t\t</div>
\t</div>






\t






\t<div id="footer">
\t\t<ul>
\t\t\t<li class="first">
\t\t\t\t<a href="https://www.naver.com/rules/service.html" onClick="clickcr(this, 'fot.service', '', '', event);" target="_blank">이용약관</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://finance.naver.com/rules.nhn" onClick="clickcr(this, 'fot.policy', '', '', event);" target="_blank">금융게시판 운영원칙</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/privacy.html" onClick="clickcr(this, 'fot.privacy', '', '', event);" target="_blank"><strong>개인정보처리방침</strong></a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://www.naver.com/rules/disclaimer.html" onClick="clickcr(this, 'fot.limit', '', '', event);" target="_blank">책임의 한계와 법적고지</a>
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<a href="https://help.naver.com/support/alias/contents2/finance/finance_1.naver" onclick="clickcr(this, 'fot.help', '', '', event);" target="_blank">금융 고객센터</a>
\t\t\t</li>
\t\t</ul>
\t\t<p class="desc">네이버(주)에서 제공하는 금융정보는 각 컨텐츠 제공업체<a href="javascript:;" onclick="togglePanelFooter('footerPanel0');" class="desc_help"><img src="https://ssl.pstatic.net/static/nfinance/2018/06/29/btn_help.png" width="17" height="17" alt="제공업체 상세설명"></a>부터 받는 정보로 투자 참고 사항이며, 오류가 발생할 수 있고 지연될 수<br>있습니다. 네이버(주)는 제공된 정보에 의한 투자결과에 대한 법적인 책임을 지지 않습니다. 게시된 정보를 무단으로 배포할 수 없습니다.</p>
\t\t<div id="footerPanel0" class="provider_layer" style="display:none" tabindex="0" onblur="hidePannel('footerPanel0')">
\t\t\t<strong class="provider_layer__tit">컨텐츠 제공업체</strong>
\t\t\t<div class="provider_layer__txt">
\t\t\t\t<p><span>코스콤 : </span>실시간 주가정보 및 국내시세정보</p>
\t\t\t\t<p><span>에프앤가이드 : </span>기업 및 재무정보</p>
\t\t\t\t<p><span>이데일리 : </span>해외 시세 및 시장지표 정보</p>
\t\t\t\t<p><span>제로인 : </span>펀드정보</p>
\t\t\t\t<p><span>한국예탁결제원 : </span>주주총회일 및 전자투표 정보</p>
\t\t\t</div>
\t\t\t<span class="arrow"></span>
\t\t</div>
\t\t<address>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" class="logo" onClick="clickcr(this, 'fot.nhn', '', '', event);"><img src="https://ssl.pstatic.net/static/nfinance/2019/02/22/ci_naver.png" width="58" height="11" alt="NAVER" /></a>
\t\t\t<em>Copyright &copy;</em>
\t\t\t<a href="https://www.navercorp.com/" target="_blank" onClick="clickcr(this, 'fot.nhn', '', '', event);">NAVER Corp.</a>
\t\t\t<span>All Rights Reserved.</span>
\t\t</address>
\t\t
\t\t
\t\t
\t</div>



<script type="text/javascript">
function isVisible(obj) {
    if (obj == document) return true
 
    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }
 
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }
 
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }
 
    return isVisible(obj.parentNode)
}

function isChildOf(myobj, containerObj) {
\twhile(myobj != undefined) {
\t\tif (myobj == document.body) {
\t\t\tbreak;
\t\t} 
\t\tif (myobj == containerObj) {
\t\t\treturn true;
\t\t}
\t\tmyobj = myobj.parentElement;
\t}
\treturn false;\t
}

function gnbLayerClose(e){
\tvar target = e.target ? e.target : e.srcElement;
\tif (isVisible(document.getElementById('gnb_service_lyr')) || isVisible(document.getElementById('gnb_notice_lyr')) ||isVisible(document.getElementById('gnb_my_lyr')) ) {
\t\tif (!isChildOf(target, document.getElementById('gnb'))) {
\t\t\tgnbAllLayerClose();
\t\t}
\t}\t
}

var isIE = (navigator.userAgent.toLowerCase().indexOf("msie")!=-1 && window.document.all) ? true:false;
if (isIE) {
\tdocument.attachEvent('onmousedown', gnbLayerClose);
} else {
\twindow.addEventListener('mousedown', gnbLayerClose);
}

function showPannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='block';

    if (layerId == "summary_lyr") {
        var layerHeight = jindo.$Element(layer).height();
        jindo.$Element("summary_ifr").height(layerHeight);
    }
}

function hidePannel(layerId){
    var layer = jindo.$(layerId);
    layer.style.display='none';
}

function togglePanelFooter(layerId) {
    var elTargetLayer = jindo.$Element(jindo.$$.getSingle("#" + layerId));

    if (elTargetLayer != null) {
        if (elTargetLayer.visible()) {
            hidePannel(layerId);
        } else {
            showPannel(layerId);
        }
    }
}

// add data-useragent
document.documentElement.setAttribute('data-useragent',navigator.userAgent);
</script>
</div>
</body>
</html>
    `
  },
  3: {
  }
}