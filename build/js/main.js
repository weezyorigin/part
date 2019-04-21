$(function () {
  $('.example').click(function () {
      $(this).toggleClass('active');
  });
});

var obj = {
  travelata: {
    links: {
      main: 'https://c18.travelpayouts.com/click?shmarker=222372.text-main&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2F',
      hot: 'https://c18.travelpayouts.com/click?shmarker=222372.text-main&promo_id=767&source_type=link&type=click',
      ru: 'https://c18.travelpayouts.com/click?shmarker=222372.text-main&promo_id=770&source_type=link&type=click',
      tu: 'https://c18.travelpayouts.com/click?shmarker=222372.text-main&promo_id=769&source_type=link&type=click',
      eg: 'https://c18.travelpayouts.com/click?shmarker=222372.text-main&promo_id=768&source_type=link&type=click',
      dubai: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D68%26toCity%3D1379%26dateFrom%3D26.04.2019%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D152uu1gqf3%26sort%3Drecommend',
      oa: 'https://travelata.ru/search?sub_id=ee23c3d5a4684b96bae8e56c4-222372&utm_medium=cpa&utm_source=advcake&utm_campaign=travelpayout&advcake=1&utm_content=222372#?fromCity=2&toCountry=68&&nightFrom=7&nightTo=8&adults=2&hotelClass=all&meal=all&priceFrom=6000&priceTo=1000000&sid=jnco4ir24d&sort=recommend',
      mo: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D104%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D7oif5nkpq2%26sort%3Drecommend',
      praga: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D105%26toCity%3D2535%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D0k594bhf6p%26sort%3Drecommend',
      ch: 'https://travelata.ru/search?sub_id=ee23c3d5a4684b96bae8e56c4-222372&utm_medium=cpa&utm_source=advcake&utm_campaign=travelpayout&advcake=1&utm_content=222372#?fromCity=2&toCountry=105&toCity=2535&nightFrom=7&nightTo=8&adults=2&hotelClass=all&meal=all&priceFrom=6000&priceTo=1000000&sid=0k594bhf6p&sort=recommend'
    },
    calendar: {
      ru: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=76&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=92&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=29&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=68&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=104&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    search: {
      ru: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=76&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=92&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=29&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=68&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=104&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    hot: {
      tu: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=6&cellWidth=150&countries=92&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      in: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=6&cellWidth=150&countries=33&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=6&cellWidth=150&countries=68&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      ki: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=6&cellWidth=150&countries=43&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    }
  },

  level: {
    links: {
      main: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=554&source_type=link&type=click',
      ru: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=611&source_type=link&type=click',
      tu: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=606&source_type=link&type=click',
      eg: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=256&source_type=link&type=click',
      oa: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=257&source_type=link&type=click',
      mo: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=614&source_type=link&type=click',
    },
    calendar: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=RU&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=TR&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=EG&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=AE&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=ME&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    search: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=RU&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=TR&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=EG&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=AE&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=ME&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    hot: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=RU&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=TR&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=EG&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=AE&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=ME&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    best: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=RU&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=TR&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=EG&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=AE&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=ME&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    }
  },

  roomguru: {
    links: {
      main: 'http://www.roomguru.ru/?a_aid=213417',
      ru: 'http://www.roomguru.ru/Place/Russia.htm?a_aid=213417',
      tu: 'http://www.roomguru.ru/Place/Turkey.htm?a_aid=213417',
      eg: 'http://www.roomguru.ru/Place/Egypt.htm?a_aid=213417',
      oa: 'http://www.roomguru.ru/Place/United_Arab_Emirates.htm?a_aid=213417',
      mo: 'http://www.roomguru.ru/Place/Montenegro.htm?a_aid=213417',
    },
    search: {
      ru: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458265"&gt;&lt;/script&gt;',
      tu: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458403"&gt;&lt;/script&gt;',
      eg: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458404"&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458405"&gt;&lt;/script&gt;',
      mo: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458406"&gt;&lt;/script&gt;',
    },
  },

  tripster: {
    links: {
      kal: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1738&source_type=link&type=click',
      stamb: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1740&source_type=link&type=click',
      pat: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=138&source_type=link&type=click',
      phu: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=123&source_type=link&type=click',
    },
    search: {
      kal: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Kaliningrad&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      stamb: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Istanbul&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      pat: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Pattaya&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      phu: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Phuket&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    }
  },

  aviasales: {
    links: {
      main: 'http://www.aviasales.ru/?marker=222372',
      stamb: 'http://www.aviasales.ru/route/MOW/IST/?marker=222372',
      sharm: 'http://www.aviasales.ru/route/MOW/SSH/?marker=222372',
      dub: 'http://www.aviasales.ru/route/MOW/DXB/?marker=222372',
      ban: 'http://www.aviasales.ru/route/MOW/BKK/?marker=222372',
    },
    search: {
      main: '&lt;script src="//www.travelpayouts.com/widgets/553a0062bf3116671079a4e38486a71e.js?v=1657" charset="utf-8" async&gt;&lt;/script&gt;',
      stamb: '&lt;script src="//www.travelpayouts.com/widgets/9d7fd0adc9bbaa4ae6bfeea749cab961.js?v=1703" charset="utf-8" async&gt;&lt;/script&gt;',
      sharm: '&lt;script src="//www.travelpayouts.com/widgets/a58816c9302d47caef18d2d510fbb05c.js?v=1703" charset="utf-8" async&gt;&lt;/script&gt;',
      dub: '&lt;script src="//www.travelpayouts.com/widgets/c5a1b76adf73db2bd4bbeb0b0811c893.js?v=1703" charset="utf-8" async&gt;&lt;/script&gt;',
      phu: '&lt;script src="//www.travelpayouts.com/widgets/04df590ea21eefb5ae7bc27c091bcf5d.js?v=1703" charset="utf-8" async&gt;&lt;/script&gt;',
    }
  }
}

// TRAVELATA LINKS

var travelataLinksTitle = $('#nav-travelta-links .output span');
var travelataLinksLink = $('#nav-travelta-links .output pre');

$('#nav-travelta-links .links__item div').click(function () {
  if ($(this).hasClass('MAIN')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.main);}
  if ($(this).hasClass('HOT')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.hot);}
  if ($(this).hasClass('RU')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.ru);}
  if ($(this).hasClass('TU')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.tu);}
  if ($(this).hasClass('EG')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.eg);}
  if ($(this).hasClass('MO')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.mo);}
  if ($(this).hasClass('CH')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.ch);}
  if ($(this).hasClass('OA')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.oa);}
  if ($(this).hasClass('praga')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.praga);}
  if ($(this).hasClass('dubai')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.dubai);}
});

// TRAVELATA CALENDAR

var travelataCalendarTitle = $('#nav-travelta-calendar .output span');
var travelataCalendarLink = $('#nav-travelta-calendar .output pre');

$('#nav-travelta-calendar .links__item div').click(function () {
  if ($(this).hasClass('RU')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.ru); }
  if ($(this).hasClass('TU')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.tu); }
  if ($(this).hasClass('EG')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.eg); }
  if ($(this).hasClass('MO')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.mo); }
  if ($(this).hasClass('OA')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.oa); }
});

// TRAVELATA SEARCH

var travelataSearchTitle = $('#nav-travelta-search .output span');
var travelataSearchLink = $('#nav-travelta-search .output pre');

$('#nav-travelta-search .links__item div').click(function () {
  if ($(this).hasClass('RU')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.ru); }
  if ($(this).hasClass('TU')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.tu); }
  if ($(this).hasClass('EG')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.eg); }
  if ($(this).hasClass('MO')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.mo); }
  if ($(this).hasClass('OA')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.oa); }
});

// TRAVELATA HOT

var travelataHotTitle = $('#nav-travelta-hot .output span');
var travelataHothLink = $('#nav-travelta-search .output pre');

$('#nav-travelta-hot .links__item div').click(function () {
  if ($(this).hasClass('TU')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.tu); }
  if ($(this).hasClass('IN')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.in); }
  if ($(this).hasClass('KI')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.ki); }
  if ($(this).hasClass('OA')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.oa); }
});

// LEVEL.TRAVEL LINKS

var levelLinksTitle = $('#nav-level-links .output span');
var levelLinksLink = $('#nav-level-links .output pre');

$('#nav-level-links .links__item div').click(function () {
  if ($(this).hasClass('MAIN')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.main); }
  if ($(this).hasClass('RU')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.ru); }
  if ($(this).hasClass('TU')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.tu); }
  if ($(this).hasClass('EG')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.eg); }
  if ($(this).hasClass('MO')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.mo); }
  if ($(this).hasClass('OA')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.oa); }
});

// LEVEL CALENDAR

var levelCalendarTitle = $('#nav-level-calendar .output span');
var levelCalendarLink = $('#nav-level-calendar .output pre');

$('#nav-level-calendar .links__item div').click(function () {
  if ($(this).hasClass('RU')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.ru); }
  if ($(this).hasClass('TU')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.tu); }
  if ($(this).hasClass('EG')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.eg); }
  if ($(this).hasClass('MO')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.mo); }
  if ($(this).hasClass('OA')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.oa); }
});

// LEVEL SEARCH

var levelSearchTitle = $('#nav-level-search .output span');
var levelSearchLink = $('#nav-level-search .output pre');

$('#nav-level-search .links__item div').click(function () {
  if ($(this).hasClass('RU')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.ru); }
  if ($(this).hasClass('TU')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.tu); }
  if ($(this).hasClass('EG')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.eg); }
  if ($(this).hasClass('MO')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.mo); }
  if ($(this).hasClass('OA')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.oa); }
});

// LEVEL HOT

var levelHotTitle = $('#nav-level-hot .output span');
var levelHotLink = $('#nav-level-hot .output pre');

$('#nav-level-hot .links__item div').click(function () {
  if ($(this).hasClass('RU')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.ru); }
  if ($(this).hasClass('TU')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.tu); }
  if ($(this).hasClass('EG')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.eg); }
  if ($(this).hasClass('MO')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.mo); }
  if ($(this).hasClass('OA')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.oa); }
});

// LEVEL BEST

var levelBestTitle = $('#nav-level-best .output span');
var levelBestLink = $('#nav-level-best .output pre');

$('#nav-level-best .links__item div').click(function () {
  if ($(this).hasClass('RU')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.ru); }
  if ($(this).hasClass('TU')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.tu); }
  if ($(this).hasClass('EG')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.eg); }
  if ($(this).hasClass('MO')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.mo); }
  if ($(this).hasClass('OA')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.oa); }
});

// ROOMGURU LINKS

var roomguruLinksTitle = $('#nav-roomguru-links .output span');
var roomguruLinksLink = $('#nav-roomguru-links .output pre');

$('#nav-roomguru-links .links__item div').click(function () {
  if ($(this).hasClass('MAIN')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.main); }
  if ($(this).hasClass('RU')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.ru); }
  if ($(this).hasClass('TU')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.tu); }
  if ($(this).hasClass('EG')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.eg); }
  if ($(this).hasClass('MO')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.mo); }
  if ($(this).hasClass('OA')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.oa); }
});

// ROOMGURU SEARCH

var roomguruSearchTitle = $('#nav-roomguru-search .output span');
var roomguruSearchLink = $('#nav-roomguru-search .output pre');

$('#nav-roomguru-search .links__item div').click(function () {
  if ($(this).hasClass('MAIN')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.main); }
  if ($(this).hasClass('RU')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.ru); }
  if ($(this).hasClass('TU')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.tu); }
  if ($(this).hasClass('EG')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.eg); }
  if ($(this).hasClass('MO')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.mo); }
  if ($(this).hasClass('OA')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.oa); }
});

// TRIPSTER LINKS

var tripsterLinksTitle = $('#nav-tripster-links .output span');
var tripsterLinksLink = $('#nav-tripster-links .output pre');

$('#nav-tripster-links .links__item div').click(function () {
  if ($(this).hasClass('kal')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.kal); }
  if ($(this).hasClass('stamb')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.stamb); }
  if ($(this).hasClass('pat')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.pat); }
  if ($(this).hasClass('phu')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.phu); }
});

// TRIPSTER SEARCH

var tripsterSearchTitle = $('#nav-tripster-search .output span');
var tripsterSearchLink = $('#nav-tripster-search .output pre');

$('#nav-tripster-search .links__item div').click(function () {
  if ($(this).hasClass('kal')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.kal); }
  if ($(this).hasClass('stamb')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.stamb); }
  if ($(this).hasClass('pat')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.pat); }
  if ($(this).hasClass('phu')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.phu); }
});

// AVIASALES LINKS

var aviasalesLinksTitle = $('#nav-aviasales-links .output span');
var aviasalesLinksLink = $('#nav-aviasales-links .output pre');

$('#nav-aviasales-links .links__item div').click(function () {
  if ($(this).hasClass('MAIN')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.main); }
  if ($(this).hasClass('stamb')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.stamb); }
  if ($(this).hasClass('sharm')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.sharm); }
  if ($(this).hasClass('dub')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.dub); }
  if ($(this).hasClass('ban')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.ban); }
});

// AVIASALES SEARCH

var aviasalesSearchTitle = $('#nav-aviasales-search .output span');
var aviasalesSearchLink = $('#nav-aviasales-search .output pre');

$('#nav-aviasales-search .links__item div').click(function () {
  if ($(this).hasClass('kal')) { aviasalesSearchTitle.text($(this).text()); aviasalesSearchLink.html(obj.aviasales.search.kal); }
  if ($(this).hasClass('stamb')) { aviasalesSearchTitle.text($(this).text()); aviasalesSearchLink.html(obj.aviasales.search.stamb); }
  if ($(this).hasClass('sharm')) { aviasalesSearchTitle.text($(this).text()); aviasalesSearchLink.html(obj.aviasales.search.sharm); }
  if ($(this).hasClass('phu')) { aviasalesSearchTitle.text($(this).text()); aviasalesSearchLink.html(obj.aviasales.search.phu); }
  if ($(this).hasClass('dub')) { aviasalesSearchTitle.text($(this).text()); aviasalesSearchLink.html(obj.aviasales.search.dub); }
});