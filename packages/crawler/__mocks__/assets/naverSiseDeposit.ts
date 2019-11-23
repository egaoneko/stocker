export default `







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
\t\t\t\t<title>증시자금동향 : 네이버 금융</title>
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
    
        <meta property="og:url" content="http://finance.naver.com/sise/sise_deposit.nhn"/>
        
\t\t\t
\t\t    
\t\t    \t<meta property="og:title" content="증시자금동향 : 네이버 금융"/>
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
\t\t\t\t\t\t\t<script type="text/javascript" charset="utf-8" src="https://ssl.pstatic.net/static.gn/templates/gnb_utf8.nhn?20191123">
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

<script language=javascript>

function tab_index(num)
{
        var pst = new Array();

        pst[0] = 'type_0';
        pst[1] = 'type_1';
        pst[2] = 'type_2';
        pst[3] = 'type_3';
        pst[4] = 'type_4';

        for(var i=0;i<pst.length;i++)
        {
                if(i == num) {
                        document.getElementById(pst[i]).style.display = '';
                } else {
                        document.getElementById(pst[i]).style.display = 'none';
                }
        }
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
                     <li class="type1 lst1_16"><a href="/sise/sise_market_sum.nhn" onClick="clickcr(this,'siu.16','','',event);" class="off"><span class="blind">시가총액</span></a></li>
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
                     <li class="lst1_22"><a href="/sise/sise_deposit.nhn" onClick="clickcr(this,'siu.22','','',event);" class="on"><span class="blind">증시자금동향</span></a></li>
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
\t\t<div id="contentarea">
\t\t\t<!-- 컨텐츠 -->
\t\t\t<div id="contentarea_left">
\t\t\t\t<!-- 로케이터 -->\t\t\t\t
\t\t\t\t<div class="sub_location tlt_bottom_line">
\t\t\t\t\t<a href="/">금융홈</a> &gt; <a href="/sise/">국내증시</a> &gt; <a href="#">증시자금동향</a>
\t\t\t\t</div>
\t\t\t\t<!-- //로케이터 -->
\t\t\t\t<h3 class="sub_tlt">증시자금동향</h3>
\t\t\t\t<div class="box_top_sub">
\t\t\t\t\t<div id=type_0>
\t\t\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rt"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lt">
\t\t\t\t\t\t<div class="subtop_sise_graph2">
\t\t\t\t\t\t\t<ul class="term"><!-- 활성화 탭에는 on 클래스가 붙습니다 -->
\t\t\t\t\t\t\t\t<li class="other_1 on"><a href="javascript:tab_index(0)" class="other">고객예탁금</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(1)" class="other">신용잔고</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(2)" class="other">주식형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(3)" class="other">혼합형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(4)" class="other">채권형</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<ul class="subtop_chart_note">
\t\t\t\t\t\t\t\t<li><img src="https://ssl.pstatic.net/imgstock/images5/bul_graph_03.gif" width="9" height="9" border="0" alt=""> 고객예탁금<span class="tah">&nbsp;&nbsp;|&nbsp;&nbsp;2019.11.20</span></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<div class="subtop_graph"><img src="https://ssl.pstatic.net/imgfinance/chart/sise/deposit_customer_deposit.png" border="0" alt=""></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div id=type_1 style='display:none'>
\t\t\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rt"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lt">
\t\t\t\t\t\t<div class="subtop_sise_graph2">
\t\t\t\t\t\t\t<ul class="term"><!-- 활성화 탭에는 on 클래스가 붙습니다 -->
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(0)" class="other">고객예탁금</a></li>
\t\t\t\t\t\t\t\t<li class="other_1 on"><a href="javascript:tab_index(1)" class="other">신용잔고</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(2)" class="other">주식형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(3)" class="other">혼합형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(4)" class="other">채권형</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<ul class="subtop_chart_note">
\t\t\t\t\t\t\t\t<li><img src="https://ssl.pstatic.net/imgstock/images5/bul_graph_03.gif" width="9" height="9" border="0" alt=""> 신용잔고<span class="tah">&nbsp;&nbsp;|&nbsp;&nbsp;2019.11.20</span></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<div class="subtop_graph"><img src="https://ssl.pstatic.net/imgfinance/chart/sise/deposit_credit_loan.png" border="0" alt=""></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div id=type_2 style='display:none'>
\t\t\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rt"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lt">
\t\t\t\t\t\t<div class="subtop_sise_graph2">
\t\t\t\t\t\t\t<ul class="term"><!-- 활성화 탭에는 on 클래스가 붙습니다 -->
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(0)" class="other">고객예탁금</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(1)" class="other">신용잔고</a></li>
\t\t\t\t\t\t\t\t<li class="other_1 on"><a href="javascript:tab_index(2)" class="other">주식형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(3)" class="other">혼합형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(4)" class="other">채권형</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<ul class="subtop_chart_note">
\t\t\t\t\t\t\t\t<li><img src="https://ssl.pstatic.net/imgstock/images5/bul_graph_03.gif" width="9" height="9" border="0" alt=""> 주식형<span class="tah">&nbsp;&nbsp;|&nbsp;&nbsp;2019.11.20</span></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<div class="subtop_graph"><img src="https://ssl.pstatic.net/imgfinance/chart/sise/deposit_beneficiary_certificate_stock.png" border="0" alt=""></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div id=type_3 style='display:none'>
\t\t\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rt"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lt">
\t\t\t\t\t\t<div class="subtop_sise_graph2">
\t\t\t\t\t\t\t<ul class="term"><!-- 활성화 탭에는 on 클래스가 붙습니다 -->
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(0)" class="other">고객예탁금</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(1)" class="other">신용잔고</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(2)" class="other">주식형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1 on"><a href="javascript:tab_index(3)" class="other">혼합형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(4)" class="other">채권형</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<ul class="subtop_chart_note">
\t\t\t\t\t\t\t\t<li><img src="https://ssl.pstatic.net/imgstock/images5/bul_graph_03.gif" width="9" height="9" border="0" alt=""> 혼합형<span class="tah">&nbsp;&nbsp;|&nbsp;&nbsp;2019.11.20</span></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<div class="subtop_graph"><img src="https://ssl.pstatic.net/imgfinance/chart/sise/deposit_beneficiary_certificate_mixing.png" border="0" alt=""></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div id=type_4 style='display:none'>
\t\t\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lb"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="rt"><img src="https://ssl.pstatic.net/imgstock/images5/blank.gif" alt="" class="lt">
\t\t\t\t\t\t<div class="subtop_sise_graph2">
\t\t\t\t\t\t\t<ul class="term"><!-- 활성화 탭에는 on 클래스가 붙습니다 -->
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(0)" class="other">고객예탁금</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(1)" class="other">신용잔고</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(2)" class="other">주식형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1"><a href="javascript:tab_index(3)" class="other">혼합형</a></li>
\t\t\t\t\t\t\t\t<li class="other_1 on"><a href="javascript:tab_index(4)" class="other">채권형</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<ul class="subtop_chart_note">
\t\t\t\t\t\t\t\t<li><img src="https://ssl.pstatic.net/imgstock/images5/bul_graph_03.gif" width="9" height="9" border="0" alt=""> 채권형<span class="tah">&nbsp;&nbsp;|&nbsp;&nbsp;2019.11.20</span></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t<div class="subtop_graph"><img src="https://ssl.pstatic.net/imgfinance/chart/sise/deposit_beneficiary_certificate_bond.png" border="0" alt=""></div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<!-- 시간별시세 -->
\t\t\t\t<div class="box_type_m">
\t\t\t\t\t<h4 class="top_tlt">&nbsp;<span class="top_tlt_guide">(단위:억원)</span></h4>
\t\t\t\t\t<table summary="증시자금동향에 관한 표이며 날짜별로 정보를 제공합니다." cellpadding="0" cellspacing="0" class="type_1">
\t\t\t\t\t<caption>증시자금동향</caption>
\t\t\t\t\t<col width="10%"><col width="10%"><col width="8%"><col width="10%"><col width="8%"><col width="10%"><col width="8%"><col width="10%"><col width="8%"><col width="10%"><col width="8%">
\t\t\t\t\t<tr class="udline">
\t\t\t\t\t\t<th rowspan="2">날짜</th>
\t\t\t\t\t\t<th rowspan="2" colspan="2">고객예탁금</th>
\t\t\t\t\t\t<th rowspan="2" colspan="2">신용잔고</th>
\t\t\t\t\t\t<th colspan="6" class="eb">펀드</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr class="udline">
\t\t\t\t\t\t<th class="sub" colspan="2">주식형</th>
\t\t\t\t\t\t<th class="sub" colspan="2">혼합형</th>
\t\t\t\t\t\t<th class="sub" colspan="2">채권형</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr><td colspan="11" class="blank_07"></td></tr>
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.20</td>
\t\t\t\t\t\t<td class="rate_up">259,406</td>
\t\t\t\t\t\t<td class="rate_up">8,111</td>
\t\t\t\t\t\t<td class="rate_up">94,705</td>
\t\t\t\t\t\t<td class="rate_up">540</td>
\t\t\t\t\t\t<td class="rate_down">816,984</td>
\t\t\t\t\t\t<td class="rate_down">3,804</td>
\t\t\t\t\t\t<td class="rate_down">256,790</td>
\t\t\t\t\t\t<td class="rate_down">554</td>
\t\t\t\t\t\t<td class="rate_down">1,214,669</td>
\t\t\t\t\t\t<td class="rate_down">1,633</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.19</td>
\t\t\t\t\t\t<td class="rate_up">251,295</td>
\t\t\t\t\t\t<td class="rate_up">5,224</td>
\t\t\t\t\t\t<td class="rate_down">94,164</td>
\t\t\t\t\t\t<td class="rate_down">331</td>
\t\t\t\t\t\t<td class="rate_up">820,788</td>
\t\t\t\t\t\t<td class="rate_up">1,414</td>
\t\t\t\t\t\t<td class="rate_down">257,344</td>
\t\t\t\t\t\t<td class="rate_down">109</td>
\t\t\t\t\t\t<td class="rate_up">1,216,302</td>
\t\t\t\t\t\t<td class="rate_up">1,432</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.18</td>
\t\t\t\t\t\t<td class="rate_down">246,071</td>
\t\t\t\t\t\t<td class="rate_down">2,073</td>
\t\t\t\t\t\t<td class="rate_down">94,495</td>
\t\t\t\t\t\t<td class="rate_down">71</td>
\t\t\t\t\t\t<td class="rate_down">819,374</td>
\t\t\t\t\t\t<td class="rate_down">322</td>
\t\t\t\t\t\t<td class="rate_down">257,453</td>
\t\t\t\t\t\t<td class="rate_down">82</td>
\t\t\t\t\t\t<td class="rate_up">1,214,870</td>
\t\t\t\t\t\t<td class="rate_up">2,292</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.15</td>
\t\t\t\t\t\t<td class="rate_down">248,145</td>
\t\t\t\t\t\t<td class="rate_down">12,905</td>
\t\t\t\t\t\t<td class="rate_up">94,566</td>
\t\t\t\t\t\t<td class="rate_up">619</td>
\t\t\t\t\t\t<td class="rate_up">819,696</td>
\t\t\t\t\t\t<td class="rate_up">4,069</td>
\t\t\t\t\t\t<td class="rate_down">257,535</td>
\t\t\t\t\t\t<td class="rate_down">895</td>
\t\t\t\t\t\t<td class="rate_down">1,212,578</td>
\t\t\t\t\t\t<td class="rate_down">1,509</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.14</td>
\t\t\t\t\t\t<td class="rate_up">261,050</td>
\t\t\t\t\t\t<td class="rate_up">8,748</td>
\t\t\t\t\t\t<td class="rate_up">93,948</td>
\t\t\t\t\t\t<td class="rate_up">262</td>
\t\t\t\t\t\t<td class="rate_up">815,627</td>
\t\t\t\t\t\t<td class="rate_up">3,525</td>
\t\t\t\t\t\t<td class="rate_up">258,430</td>
\t\t\t\t\t\t<td class="rate_up">122</td>
\t\t\t\t\t\t<td class="rate_down">1,214,087</td>
\t\t\t\t\t\t<td class="rate_down">53</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t<tr><td colspan="11" class="blank_08"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="division_line"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.13</td>
\t\t\t\t\t\t<td class="rate_up">252,301</td>
\t\t\t\t\t\t<td class="rate_up">1,603</td>
\t\t\t\t\t\t<td class="rate_up">93,685</td>
\t\t\t\t\t\t<td class="rate_up">585</td>
\t\t\t\t\t\t<td class="rate_down">812,102</td>
\t\t\t\t\t\t<td class="rate_down">2,283</td>
\t\t\t\t\t\t<td class="rate_down">258,308</td>
\t\t\t\t\t\t<td class="rate_down">50</td>
\t\t\t\t\t\t<td class="rate_down">1,214,140</td>
\t\t\t\t\t\t<td class="rate_down">1,726</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.12</td>
\t\t\t\t\t\t<td class="rate_down">250,699</td>
\t\t\t\t\t\t<td class="rate_down">2,573</td>
\t\t\t\t\t\t<td class="rate_up">93,101</td>
\t\t\t\t\t\t<td class="rate_up">226</td>
\t\t\t\t\t\t<td class="rate_up">814,385</td>
\t\t\t\t\t\t<td class="rate_up">2,184</td>
\t\t\t\t\t\t<td class="rate_down">258,358</td>
\t\t\t\t\t\t<td class="rate_down">233</td>
\t\t\t\t\t\t<td class="rate_down">1,215,866</td>
\t\t\t\t\t\t<td class="rate_down">2,066</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.11</td>
\t\t\t\t\t\t<td class="rate_down">253,272</td>
\t\t\t\t\t\t<td class="rate_down">2,198</td>
\t\t\t\t\t\t<td class="rate_up">92,875</td>
\t\t\t\t\t\t<td class="rate_up">752</td>
\t\t\t\t\t\t<td class="rate_up">812,201</td>
\t\t\t\t\t\t<td class="rate_up">763</td>
\t\t\t\t\t\t<td class="rate_down">258,591</td>
\t\t\t\t\t\t<td class="rate_down">156</td>
\t\t\t\t\t\t<td class="rate_up">1,217,932</td>
\t\t\t\t\t\t<td class="rate_up">147</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.08</td>
\t\t\t\t\t\t<td class="rate_up">255,469</td>
\t\t\t\t\t\t<td class="rate_up">2,750</td>
\t\t\t\t\t\t<td class="rate_up">92,123</td>
\t\t\t\t\t\t<td class="rate_up">527</td>
\t\t\t\t\t\t<td class="rate_down">811,438</td>
\t\t\t\t\t\t<td class="rate_down">2,637</td>
\t\t\t\t\t\t<td class="rate_down">258,747</td>
\t\t\t\t\t\t<td class="rate_down">403</td>
\t\t\t\t\t\t<td class="rate_down">1,217,785</td>
\t\t\t\t\t\t<td class="rate_down">461</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.07</td>
\t\t\t\t\t\t<td class="rate_up">252,719</td>
\t\t\t\t\t\t<td class="rate_up">2,062</td>
\t\t\t\t\t\t<td class="rate_up">91,595</td>
\t\t\t\t\t\t<td class="rate_up">407</td>
\t\t\t\t\t\t<td class="rate_up">814,075</td>
\t\t\t\t\t\t<td class="rate_up">372</td>
\t\t\t\t\t\t<td class="rate_down">259,150</td>
\t\t\t\t\t\t<td class="rate_down">62</td>
\t\t\t\t\t\t<td class="rate_up">1,218,246</td>
\t\t\t\t\t\t<td class="rate_up">1,640</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t<tr><td colspan="11" class="blank_08"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="division_line"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.06</td>
\t\t\t\t\t\t<td class="rate_up">250,657</td>
\t\t\t\t\t\t<td class="rate_up">4,564</td>
\t\t\t\t\t\t<td class="rate_up">91,188</td>
\t\t\t\t\t\t<td class="rate_up">373</td>
\t\t\t\t\t\t<td class="rate_up">813,703</td>
\t\t\t\t\t\t<td class="rate_up">4,160</td>
\t\t\t\t\t\t<td class="rate_up">259,212</td>
\t\t\t\t\t\t<td class="rate_up">62</td>
\t\t\t\t\t\t<td class="rate_down">1,216,606</td>
\t\t\t\t\t\t<td class="rate_down">489</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.05</td>
\t\t\t\t\t\t<td class="rate_down">246,093</td>
\t\t\t\t\t\t<td class="rate_down">8,488</td>
\t\t\t\t\t\t<td class="rate_up">90,814</td>
\t\t\t\t\t\t<td class="rate_up">221</td>
\t\t\t\t\t\t<td class="rate_up">809,543</td>
\t\t\t\t\t\t<td class="rate_up">2,011</td>
\t\t\t\t\t\t<td class="rate_down">259,150</td>
\t\t\t\t\t\t<td class="rate_down">394</td>
\t\t\t\t\t\t<td class="rate_up">1,217,095</td>
\t\t\t\t\t\t<td class="rate_up">3,214</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.04</td>
\t\t\t\t\t\t<td class="rate_up">254,581</td>
\t\t\t\t\t\t<td class="rate_up">650</td>
\t\t\t\t\t\t<td class="rate_up">90,593</td>
\t\t\t\t\t\t<td class="rate_up">190</td>
\t\t\t\t\t\t<td class="rate_up">807,532</td>
\t\t\t\t\t\t<td class="rate_up">5,139</td>
\t\t\t\t\t\t<td class="rate_down">259,544</td>
\t\t\t\t\t\t<td class="rate_down">68</td>
\t\t\t\t\t\t<td class="rate_down">1,213,881</td>
\t\t\t\t\t\t<td class="rate_down">550</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.11.01</td>
\t\t\t\t\t\t<td class="rate_up">253,931</td>
\t\t\t\t\t\t<td class="rate_up">3,478</td>
\t\t\t\t\t\t<td class="rate_up">90,403</td>
\t\t\t\t\t\t<td class="rate_up">437</td>
\t\t\t\t\t\t<td class="rate_up">802,393</td>
\t\t\t\t\t\t<td class="rate_up">4,679</td>
\t\t\t\t\t\t<td class="rate_down">259,612</td>
\t\t\t\t\t\t<td class="rate_down">130</td>
\t\t\t\t\t\t<td class="rate_up">1,214,431</td>
\t\t\t\t\t\t<td class="rate_up">2,369</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.10.31</td>
\t\t\t\t\t\t<td class="rate_down">250,454</td>
\t\t\t\t\t\t<td class="rate_down">370</td>
\t\t\t\t\t\t<td class="rate_up">89,966</td>
\t\t\t\t\t\t<td class="rate_up">391</td>
\t\t\t\t\t\t<td class="rate_down">797,714</td>
\t\t\t\t\t\t<td class="rate_down">1,381</td>
\t\t\t\t\t\t<td class="rate_down">259,742</td>
\t\t\t\t\t\t<td class="rate_down">384</td>
\t\t\t\t\t\t<td class="rate_down">1,212,062</td>
\t\t\t\t\t\t<td class="rate_down">5,101</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t<tr><td colspan="11" class="blank_08"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="division_line"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="blank_08"></td></tr>
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.10.30</td>
\t\t\t\t\t\t<td class="rate_down">250,824</td>
\t\t\t\t\t\t<td class="rate_down">2,254</td>
\t\t\t\t\t\t<td class="rate_down">89,575</td>
\t\t\t\t\t\t<td class="rate_down">318</td>
\t\t\t\t\t\t<td class="rate_down">799,095</td>
\t\t\t\t\t\t<td class="rate_down">2,476</td>
\t\t\t\t\t\t<td class="rate_down">260,126</td>
\t\t\t\t\t\t<td class="rate_down">78</td>
\t\t\t\t\t\t<td class="rate_up">1,217,163</td>
\t\t\t\t\t\t<td class="rate_up">725</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.10.29</td>
\t\t\t\t\t\t<td class="rate_down">253,078</td>
\t\t\t\t\t\t<td class="rate_down">1,034</td>
\t\t\t\t\t\t<td class="rate_up">89,893</td>
\t\t\t\t\t\t<td class="rate_up">185</td>
\t\t\t\t\t\t<td class="rate_down">801,571</td>
\t\t\t\t\t\t<td class="rate_down">1,488</td>
\t\t\t\t\t\t<td class="rate_down">260,204</td>
\t\t\t\t\t\t<td class="rate_down">449</td>
\t\t\t\t\t\t<td class="rate_down">1,216,438</td>
\t\t\t\t\t\t<td class="rate_down">2,466</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.10.28</td>
\t\t\t\t\t\t<td class="rate_up">254,112</td>
\t\t\t\t\t\t<td class="rate_up">3,121</td>
\t\t\t\t\t\t<td class="rate_up">89,708</td>
\t\t\t\t\t\t<td class="rate_up">15</td>
\t\t\t\t\t\t<td class="rate_down">803,059</td>
\t\t\t\t\t\t<td class="rate_down">410</td>
\t\t\t\t\t\t<td class="rate_up">260,653</td>
\t\t\t\t\t\t<td class="rate_up">603</td>
\t\t\t\t\t\t<td class="rate_up">1,218,904</td>
\t\t\t\t\t\t<td class="rate_up">3,011</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.10.25</td>
\t\t\t\t\t\t<td class="rate_down">250,991</td>
\t\t\t\t\t\t<td class="rate_down">298</td>
\t\t\t\t\t\t<td class="rate_up">89,692</td>
\t\t\t\t\t\t<td class="rate_up">376</td>
\t\t\t\t\t\t<td class="rate_down">803,469</td>
\t\t\t\t\t\t<td class="rate_down">338</td>
\t\t\t\t\t\t<td class="rate_down">260,050</td>
\t\t\t\t\t\t<td class="rate_down">935</td>
\t\t\t\t\t\t<td class="rate_down">1,215,893</td>
\t\t\t\t\t\t<td class="rate_down">3,605</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="date">19.10.24</td>
\t\t\t\t\t\t<td class="rate_up">251,289</td>
\t\t\t\t\t\t<td class="rate_up">5,073</td>
\t\t\t\t\t\t<td class="rate_down">89,317</td>
\t\t\t\t\t\t<td class="rate_down">117</td>
\t\t\t\t\t\t<td class="rate_up">803,807</td>
\t\t\t\t\t\t<td class="rate_up">3,604</td>
\t\t\t\t\t\t<td class="rate_down">260,985</td>
\t\t\t\t\t\t<td class="rate_down">103</td>
\t\t\t\t\t\t<td class="rate_down">1,219,498</td>
\t\t\t\t\t\t<td class="rate_down">1,998</td>
\t\t\t\t\t</tr>\t\t\t\t\t
\t\t\t\t
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t<tr><td colspan="11" class="blank_09"></td></tr>
\t\t\t\t\t<tr><td colspan="11" class="division_line_1"></td></tr>
\t\t\t\t\t</table>\t\t\t\t\t
\t\t\t\t\t<!--- 페이지 네비게이션 시작--->
\t\t\t\t\t<table summary="페이지 네비게이션 리스트" class="Nnavi" align="center">
\t\t\t\t\t<caption>페이지 네비게이션</caption>
\t\t\t\t\t<tr>\t\t
\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t                
\t\t\t                <td class="on">
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=1"  >1</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=2"  >2</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=3"  >3</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=4"  >4</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=5"  >5</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=6"  >6</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=7"  >7</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=8"  >8</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=9"  >9</a>
\t\t\t\t</td>
<td>
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=10"  >10</a>
\t\t\t\t</td>

\t\t\t                <td class="pgR">
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=11"  >
\t\t\t\t다음<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarR.gif" width="3" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t                <td class="pgRR">
\t\t\t\t<a href="/sise/sise_deposit.nhn?&amp;page=217"  >맨뒤
\t\t\t\t<img src="https://ssl.pstatic.net/static/n/cmn/bu_pgarRR.gif" width="8" height="5" alt="" border="0">
\t\t\t\t</a>
\t\t\t\t</td>

\t\t\t            
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
\t\t\t\t\t<!--- 페이지 네비게이션 끝--->
\t\t\t\t</div>
\t\t\t\t<!-- //시간별시세 -->
\t\t\t</div>
\t\t\t<!-- //컨텐츠 -->
\t\t\t<!--  right area -->
\t\t\t<div id="contentarea_right">\t\t\t\t\t\t\t\t\t\t
\t\t\t\t


\t

\t
\t\t<script>document.domain='naver.com';</script>
\t
\t
\t\t\t\t

\t<script language=javascript>
\tfunction naver_login()
\t{
\t\tlocation.replace ('https://nid.naver.com/nidlogin.login?mode=form&url='+location.href);
\t}
\t</script>
\t

\t
\t\t<iframe name='recent' title="최근조회 영역" src='/template/right_item.nhn?code=&width=200' width=200  height=305 marginheight=0 bottommargin=0 topmargin=0 SCROLLING=no frameborder=0></iframe>
\t
\t
\t\t
\t\t\t\t



    \t\t\t\t<!-- 인기검색어 -->
\t\t\t\t<div class="box_type_r"><div class="box_type_r_top">
\t\t\t\t\t<h2 class="r_subtlt tlt_bottom_line"><img src="https://ssl.pstatic.net/imgstock/images5/rtlt_best_keyword.gif" alt="인기검색어" width="51" height="11"><span class="tlt_more"><a href="/sise/lastsearch2.nhn" onClick="clickcr(this, 'rpk.keyword', '', '', event);">더보기</a></span></h2>
\t\t\t\t\t<table summary="인기검색어 리스트" cellpadding="0" cellspacing="0" class="type_r1">
\t\t\t\t\t<caption>인기검색어</caption>
\t\t\t\t\t<col width="11%"><col width="*"><col width="30%"><col width="13%">

\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="tr" align="right"><img src="https://ssl.pstatic.net/imgstock/images5/ico_n01.gif" alt="01" width="11" height="11"></td>
\t\t\t\t\t\t<td><a href="/item/main.nhn?code=052260" onClick="clickcr(this, 'rpk.list', '052260', '1', event);" class="company">SK바이오랜드</a></td>
\t\t\t\t\t\t<td class="number">19,850</td>
\t\t\t\t\t\t<td class="tc">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up02.gif"  alt="uplimit" width="7" height="11" class="updown">
\t\t\t</td>
\t\t\t\t\t</tr>

\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="tr" align="right"><img src="https://ssl.pstatic.net/imgstock/images5/ico_n02.gif" alt="01" width="11" height="11"></td>
\t\t\t\t\t\t<td><a href="/item/main.nhn?code=005930" onClick="clickcr(this, 'rpk.list', '005930', '2', event);" class="company">삼성전자</a></td>
\t\t\t\t\t\t<td class="number">51,600</td>
\t\t\t\t\t\t<td class="tc">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif"  alt="up" width="7" height="6" class="updown">
\t\t\t</td>
\t\t\t\t\t</tr>

\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="tr" align="right"><img src="https://ssl.pstatic.net/imgstock/images5/ico_n03.gif" alt="01" width="11" height="11"></td>
\t\t\t\t\t\t<td><a href="/item/main.nhn?code=028300" onClick="clickcr(this, 'rpk.list', '028300', '3', event);" class="company">에이치엘비</a></td>
\t\t\t\t\t\t<td class="number">125,100</td>
\t\t\t\t\t\t<td class="tc">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif"  alt="down" width="7" height="6" class="updown">
\t\t\t</td>
\t\t\t\t\t</tr>

\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="tr" align="right"><img src="https://ssl.pstatic.net/imgstock/images5/ico_n04.gif" alt="01" width="11" height="11"></td>
\t\t\t\t\t\t<td><a href="/item/main.nhn?code=078130" onClick="clickcr(this, 'rpk.list', '078130', '4', event);" class="company">국일제지</a></td>
\t\t\t\t\t\t<td class="number">6,720</td>
\t\t\t\t\t\t<td class="tc">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif"  alt="up" width="7" height="6" class="updown">
\t\t\t</td>
\t\t\t\t\t</tr>

\t\t\t\t\t<tr>
\t\t\t\t\t\t<td class="tr" align="right"><img src="https://ssl.pstatic.net/imgstock/images5/ico_n05.gif" alt="01" width="11" height="11"></td>
\t\t\t\t\t\t<td><a href="/item/main.nhn?code=115960" onClick="clickcr(this, 'rpk.list', '115960', '5', event);" class="company">연우</a></td>
\t\t\t\t\t\t<td class="number">22,550</td>
\t\t\t\t\t\t<td class="tc">
\t\t\t\t<img src="https://ssl.pstatic.net/imgstock/images/images4/ico_up.gif"  alt="up" width="7" height="6" class="updown">
\t\t\t</td>
\t\t\t\t\t</tr>

\t\t\t\t\t</table>
\t\t\t\t</div></div>
\t\t\t\t<!-- //인기검색어 -->
\t\t\t\t



\t\t\t\t<!-- 가장 많이 본 뉴스 -->
\t\t\t\t<div class="box_type_r"><div class="box_type_r_top">
\t\t\t\t\t<h2 class="r_subtlt tlt_bottom_line"><img src="https://ssl.pstatic.net/imgstock/images5/rtlt_best_news.gif" alt="가장 많이 본 뉴스" width="86" height="11"><span class="tlt_more"><a href="/news/news_list.nhn?mode=RANK" onClick="clickcr(this, 'rnw.more', '', '', event)">더보기</a></span></h2>
\t\t\t\t\t<ul class="right_list_1_2">
\t\t\t\t\t

\t\t\t\t\t\t<li><a href="/news/news_read.nhn?article_id=0004522761&office_id=018&mode=RANK" title="22일 장 마감 후 주요 종목 뉴스" onClick="clickcr(this, 'rnw.list', '0004522761', '1', event)">22일 장 마감 후 주요 종목 뉴스</a></li>
\t\t\t\t\t\t

\t\t\t\t\t

\t\t\t\t\t\t<li><a href="/news/news_read.nhn?article_id=0001398030&office_id=057&mode=RANK" title="SK '뇌전증 신약' FDA 승인&hellip;국내 첫 독자 신약" onClick="clickcr(this, 'rnw.list', '0001398030', '2', event)">SK '뇌전증 신약' FDA 승인…국내 첫 독자 신약</a></li>
\t\t\t\t\t\t

\t\t\t\t\t

\t\t\t\t\t\t<li><a href="/news/news_read.nhn?article_id=0003655840&office_id=011&mode=RANK" title="장 마감 후 기업공시[11월 22일]" onClick="clickcr(this, 'rnw.list', '0003655840', '3', event)">장 마감 후 기업공시[11월 22일]</a></li>
\t\t\t\t\t\t

\t\t\t\t\t

\t\t\t\t\t\t<li><a href="/news/news_read.nhn?article_id=0004246077&office_id=015&mode=RANK" title="22일, 외국인 코스닥에서 에이치엘비생명과학(-1.17%), 네패스(+0.22%) 등 순매수" onClick="clickcr(this, 'rnw.list', '0004246077', '4', event)">22일, 외국인 코스닥에서 에이치엘비생명과학(-1.17%), 네패스(+0.22%) 등 순매수</a></li>
\t\t\t\t\t\t

\t\t\t\t\t

\t\t\t\t\t\t<li><a href="/news/news_read.nhn?article_id=0004332045&office_id=014&mode=RANK" title="[fn마켓워치]한림건설, 3555억에 레이크힐스 '일송개발' 품었다" onClick="clickcr(this, 'rnw.list', '0004332045', '5', event)">[fn마켓워치]한림건설, 3555억에 레이크힐스 '일송개발' 품었다</a></li>
\t\t\t\t\t\t

\t\t\t\t\t
\t\t\t\t\t</ul>
\t\t\t\t</div></div>
\t\t\t\t<!-- //가장 많이 본 뉴스 -->
\t\t\t</div>
\t\t\t<!--  right area -->
\t\t\t<div class="c"></div>
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
</html>\t\t\t\t\t
`;