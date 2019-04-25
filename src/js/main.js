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
      ch: 'https://travelata.ru/search?sub_id=ee23c3d5a4684b96bae8e56c4-222372&utm_medium=cpa&utm_source=advcake&utm_campaign=travelpayout&advcake=1&utm_content=222372#?fromCity=2&toCountry=105&toCity=2535&nightFrom=7&nightTo=8&adults=2&hotelClass=all&meal=all&priceFrom=6000&priceTo=1000000&sid=0k594bhf6p&sort=recommend',
      KU: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D48%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3Dtr8mfkx6lk%26sort%3Drecommend',
      KI: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D44%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3Dio3iz4b6i2%26sort%3Drecommend',
      TA: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D87%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3Drkfewzqzom%26sort%3Drecommend',
      VE: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D22%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D1hxyo329pd%26sort%3Drecommend',
      AB: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D1%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3Dauha39hy8o%26sort%3Drecommend',
      IS: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D38%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D0lwx7mxuhh%26sort%3Drecommend',
      PO: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D75%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D3dipia2usd%26sort%3Drecommend',
      YU: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D116%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3D1g79kkc2gf%26sort%3Drecommend',
      IT: 'https://c18.travelpayouts.com/click?shmarker=222372&promo_id=771&source_type=customlink&type=click&custom_url=https%3A%2F%2Ftravelata.ru%2Fsearch%23%3FfromCity%3D2%26toCountry%3D39%26nightFrom%3D7%26nightTo%3D8%26adults%3D2%26hotelClass%3Dall%26meal%3Dall%26priceFrom%3D6000%26priceTo%3D1000000%26sid%3Djnn60cyn2r%26sort%3Drecommend',
    },
    calendar: {
      ru: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=76&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=92&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=29&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=68&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=104&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KU: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=48&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KI: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=44&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=87&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=22&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      AB: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=1&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=38&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      PO: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=75&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=105&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IT: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1493&shmarker=222372&countries=39&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    search: {
      ru: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=76&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=92&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=29&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=68&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=104&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KU: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=48&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KI: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=44&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=87&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=22&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      AB: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=1&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=38&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      PO: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=75&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=105&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IT: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1492&shmarker=222372&countries=39&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    hot: {
      tu: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=92&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      in: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=33&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=68&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      ki: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=43&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=87&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=22&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=38&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="https://c18.travelpayouts.com/content?promo_id=1490&shmarker=222372&table=true&rows=1&columns=3&cellWidth=150&countries=105&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
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
      KU: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=1232&source_type=link&type=click',
      KI: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=609&source_type=link&type=click',
      TA: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=258&source_type=link&type=click',
      VE: 'https://c26.travelpayouts.com/click?shmarker=222372&promo_id=608&source_type=link&type=click',
    },
    calendar: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=RU&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=TR&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=EG&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=AE&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=ME&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      KU: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=CU&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      KI: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=CN&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=TH&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=VN&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      AB: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=AB&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=ES&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=CZ&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
      IT: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1495&shmarker=222372&from_country=RU&to_country=IT&nights=7&adults=2&stars_from=1&stars_to=5&title_size=15&days_count=31&flex_dates=true&flex_nights=false&countries_list=true&departures=true&shown_nights=true&graph_label=true&week_labels=true&month_labels=true&months_switcher=true&tooltip=true&best_price=true&lines=true&medium_line=true&full_month=true&background=false&minimal=true&focus_target=false&powered_by=false" charset=" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    search: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=RU&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=TR&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=EG&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=AE&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=ME&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KU: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=CU&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KI: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=CN&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=TH&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=VN&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      AB: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=AB&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=ES&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=CZ&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IT: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1150&shmarker=222372&from_country=RU&to_country=IT&nights=7&adults=2&flex_dates=true&flex_nights=false&stars_from=1&stars_to=5&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    hot: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=RU&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=TR&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=EG&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=AE&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=ME&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KU: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=CU&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KI: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=CN&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=TH&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=VN&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      AB: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=AB&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=ES&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=CZ&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IT: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1494&shmarker=222372&country=IT&adults=0&scroll=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    },
    best: {
      ru: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=RU&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tu: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=TR&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      eg: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=EG&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      oa: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=AE&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mo: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=ME&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KU: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=CU&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      KI: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=CN&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      TA: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=TH&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      VE: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=VN&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      AB: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=AB&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IS: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=ES&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      CH: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=CZ&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      IT: '&lt;script src="//c26.travelpayouts.com/content?promo_id=1151&shmarker=222372&popular=true&title=%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5%20%D1%86%D0%B5%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D1%82%D1%83%D1%80%D1%8B&city_from=Moscow&country_to=IT&minimized=true&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
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
      KU: 'http://www.roomguru.ru/Place/Cuba.htm?a_aid=213417',
      KI: 'http://www.roomguru.ru/Place/China.htm?a_aid=213417',
      TA: 'http://www.roomguru.ru/Place/Thailand.htm?a_aid=213417',
      VE: 'http://www.roomguru.ru/Place/Vietnam.htm?a_aid=213417',
      AB: 'http://www.roomguru.ru/Place/Abkhazia.htm?a_aid=213417',
      IS: 'http://www.roomguru.ru/Place/Spain.htm?a_aid=213417',
      PO: 'http://www.roomguru.ru/Place/Portugal.htm?a_aid=213417',
      CH: 'http://www.roomguru.ru/Place/Czech_Republic.htm?a_aid=213417',
      IT: 'http://www.roomguru.ru/Place/Italy.htm?a_aid=213417',
    },
    search: {
      ru: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458504"&gt;&lt;/script&gt;',
      tu: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458503"&gt;&lt;/script&gt;',
      eg: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458502"&gt;&lt;/script&gt;',
      oa: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458501"&gt;&lt;/script&gt;',
      mo: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458500"&gt;&lt;/script&gt;',
      KU: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458499"&gt;&lt;/script&gt;',
      KI: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458505"&gt;&lt;/script&gt;',
      TA: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458506"&gt;&lt;/script&gt;',
      VE: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458508"&gt;&lt;/script&gt;',
      AB: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458509"&gt;&lt;/script&gt;',
      IS: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458510"&gt;&lt;/script&gt;',
      PO: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458511"&gt;&lt;/script&gt;',
      CH: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458512"&gt;&lt;/script&gt;',
      IT: '&lt;script src="https://sbhc.portalhc.com/213417/searchbox/458681"&gt;&lt;/script&gt;',
    },
  },

  tripster: {
    links: {
      main: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=652&source_type=customlink&type=click&custom_url=https%3A%2F%2Fexperience.tripster.ru',
      kal: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1738&source_type=link&type=click',
      stamb: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1740&source_type=link&type=click',
      pat: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=138&source_type=link&type=click',
      phu: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=123&source_type=link&type=click',
      rim: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1751&source_type=link&type=click',
      par: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1750&source_type=link&type=click',
      sp: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1749&source_type=link&type=click',
      mos: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1748&source_type=link&type=click',
      bars: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1747&source_type=link&type=click',
      prag: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1746&source_type=link&type=click',
      tbi: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1745&source_type=link&type=click',
      liss: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1744&source_type=link&type=click',
      flo: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1743&source_type=link&type=click',
      ven: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1742&source_type=link&type=click',
      ams: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1741&source_type=link&type=click',
      vena: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1739&source_type=link&type=click',
      arg: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=1093&source_type=link&type=click',
      dub: 'https://c11.travelpayouts.com/click?shmarker=222372&promo_id=652&source_type=customlink&type=click&custom_url=https%3A%2F%2Fexperience.tripster.ru%2Fexperience%2FDubai%2F',
    },
    search: {
      kal: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Kaliningrad&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      stamb: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Istanbul&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      pat: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Pattaya&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      phu: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Phuket&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      rim: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Rome&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      par: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Paris&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      sp: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Saint_Petersburg&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      mos: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=moscow&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      bars: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Barcelona&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      prag: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Prague&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      tbi: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=tbilisi&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      liss: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Lisbon&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      flo: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Florence&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      ven: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Venice&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      ams: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Amsterdam&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      vena: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=Vienna&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
      dub: '&lt;script src="https://c11.travelpayouts.com/content?promo_id=1499&shmarker=222372&wtype=geo&city=dubai&order=top&num=3&widget_template=horizontal&width=100%25&logo=true&widgetbar=false&powered_by=false" charset="utf-8" async&gt;&lt;/script&gt;',
    }
  },

  aviasales: {
    links: {
      main: 'http://www.aviasales.ru/?marker=222372',
      stamb: 'http://www.aviasales.ru/route/MOW/IST/?marker=222372',
      sharm: 'http://www.aviasales.ru/route/MOW/SSH/?marker=222372',
      dub: 'http://www.aviasales.ru/route/MOW/DXB/?marker=222372',
      ban: 'http://www.aviasales.ru/route/MOW/BKK/?marker=222372',
      pat: 'http://www.aviasales.ru/route/MOW/UTP/?marker=222372',
      phu: 'http://www.aviasales.ru/route/MOW/HKT/?marker=222372',
      rim: 'http://www.aviasales.ru/route/MOW/ROM/?marker=222372',
      par: 'http://www.aviasales.ru/route/MOW/PAR/?marker=222372',
      sp: 'http://www.aviasales.ru/route/MOW/LED/?marker=222372',
      bars: 'http://www.aviasales.ru/route/MOW/BCN/?marker=222372',
      prag: 'http://www.aviasales.ru/route/MOW/PRG/?marker=222372',
      tbi: 'http://www.aviasales.ru/route/MOW/TBS/?marker=222372',
      liss: 'http://www.aviasales.ru/route/MOW/LIS/?marker=222372',
      flo: 'http://www.aviasales.ru/route/MOW/FLR/?marker=222372',
      ven: 'http://www.aviasales.ru/route/MOW/VIE/?marker=222372',
      ams: 'http://www.aviasales.ru/route/MOW/AMS/?marker=222372',
      vena: 'http://www.aviasales.ru/route/MOW/VIE/?marker=222372',
    },
    search: {
      main: '&lt;script src="//www.travelpayouts.com/widgets/553a0062bf3116671079a4e38486a71e.js?v=1703" charset="utf-8" async&gt;&lt;/script&gt;',
      stamb: '&lt;script src="//www.travelpayouts.com/widgets/9d7fd0adc9bbaa4ae6bfeea749cab961.js?v=1703" charset="utf-8" async&gt;&lt;/script&gt;',
      sharm: '&lt;script src="//www.travelpayouts.com/widgets/a58816c9302d47caef18d2d510fbb05c.js?v=1657" charset="utf-8" async&gt;&lt;/script&gt;',
      dub: '&lt;script src="//www.travelpayouts.com/widgets/c5a1b76adf73db2bd4bbeb0b0811c893.js?v=1657" charset="utf-8" async&gt;&lt;/script&gt;',
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
  if ($(this).hasClass('KU')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.KU);}
  if ($(this).hasClass('KI')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.KI);}
  if ($(this).hasClass('TA')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.TA);}
  if ($(this).hasClass('VE')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.VE);}
  if ($(this).hasClass('AB')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.AB);}
  if ($(this).hasClass('IS')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.IS);}
  if ($(this).hasClass('PO')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.PO);}
  if ($(this).hasClass('YU')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.YU);}
  if ($(this).hasClass('IT')) {travelataLinksTitle.text($(this).text());travelataLinksLink.text(obj.travelata.links.IT);}
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
  if ($(this).hasClass('KU')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.KU); }
  if ($(this).hasClass('KI')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.KI); }
  if ($(this).hasClass('TA')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.TA); }
  if ($(this).hasClass('VE')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.VE); }
  if ($(this).hasClass('AB')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.AB); }
  if ($(this).hasClass('IS')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.IS); }
  if ($(this).hasClass('PO')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.PO); }
  if ($(this).hasClass('CH')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.CH); }
  if ($(this).hasClass('IT')) { travelataCalendarTitle.text($(this).text()); travelataCalendarLink.html(obj.travelata.calendar.IT); }
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
  if ($(this).hasClass('KU')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.KU); }
  if ($(this).hasClass('KI')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.KI); }
  if ($(this).hasClass('TA')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.TA); }
  if ($(this).hasClass('VE')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.VE); }
  if ($(this).hasClass('AB')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.AB); }
  if ($(this).hasClass('IS')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.IS); }
  if ($(this).hasClass('PO')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.PO); }
  if ($(this).hasClass('CH')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.CH); }
  if ($(this).hasClass('IT')) { travelataSearchTitle.text($(this).text()); travelataSearchLink.html(obj.travelata.search.IT); }
});

// TRAVELATA HOT

var travelataHotTitle = $('#nav-travelta-hot .output span');
var travelataHothLink = $('#nav-travelta-hot .output pre');

$('#nav-travelta-hot .links__item div').click(function () {
  if ($(this).hasClass('TU')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.tu); }
  if ($(this).hasClass('IN')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.in); }
  if ($(this).hasClass('KI')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.ki); }
  if ($(this).hasClass('OA')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.oa); }
  if ($(this).hasClass('TA')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.TA); }
  if ($(this).hasClass('VE')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.VE); }
  if ($(this).hasClass('IS')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.IS); }
  if ($(this).hasClass('CH')) { travelataHotTitle.text($(this).text()); travelataHothLink.html(obj.travelata.hot.CH); }
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
  if ($(this).hasClass('KU')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.KU); }
  if ($(this).hasClass('KI')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.KI); }
  if ($(this).hasClass('TA')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.TA); }
  if ($(this).hasClass('VE')) { levelLinksTitle.text($(this).text()); levelLinksLink.text(obj.level.links.VE); }
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
  if ($(this).hasClass('KU')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.KU); }
  if ($(this).hasClass('KI')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.KI); }
  if ($(this).hasClass('TA')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.TA); }
  if ($(this).hasClass('VE')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.VE); }
  if ($(this).hasClass('AB')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.AB); }
  if ($(this).hasClass('IS')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.IS); }
  if ($(this).hasClass('CH')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.CH); }
  if ($(this).hasClass('IT')) { levelCalendarTitle.text($(this).text()); levelCalendarLink.html(obj.level.calendar.IT); }
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
  if ($(this).hasClass('KU')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.KU); }
  if ($(this).hasClass('KI')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.KI); }
  if ($(this).hasClass('TA')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.TA); }
  if ($(this).hasClass('VE')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.VE); }
  if ($(this).hasClass('AB')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.AB); }
  if ($(this).hasClass('IS')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.IS); }
  if ($(this).hasClass('CH')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.CH); }
  if ($(this).hasClass('IT')) { levelSearchTitle.text($(this).text()); levelSearchLink.html(obj.level.search.IT); }
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
  if ($(this).hasClass('KU')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.KU); }
  if ($(this).hasClass('KI')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.KI); }
  if ($(this).hasClass('TA')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.TA); }
  if ($(this).hasClass('VE')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.VE); }
  if ($(this).hasClass('AB')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.AB); }
  if ($(this).hasClass('IS')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.IS); }
  if ($(this).hasClass('CH')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.CH); }
  if ($(this).hasClass('IT')) { levelHotTitle.text($(this).text()); levelHotLink.html(obj.level.hot.IT); }
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
  if ($(this).hasClass('KU')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.KU); }
  if ($(this).hasClass('KI')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.KI); }
  if ($(this).hasClass('TA')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.TA); }
  if ($(this).hasClass('VE')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.VE); }
  if ($(this).hasClass('AB')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.AB); }
  if ($(this).hasClass('IS')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.IS); }
  if ($(this).hasClass('CH')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.CH); }
  if ($(this).hasClass('IT')) { levelBestTitle.text($(this).text()); levelBestLink.html(obj.level.best.IT); }
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
  if ($(this).hasClass('KU')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.KU); }
  if ($(this).hasClass('KI')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.KI); }
  if ($(this).hasClass('TA')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.TA); }
  if ($(this).hasClass('VE')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.VE); }
  if ($(this).hasClass('AB')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.AB); }
  if ($(this).hasClass('IS')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.IS); }
  if ($(this).hasClass('PO')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.PO); }
  if ($(this).hasClass('CH')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.CH); }
  if ($(this).hasClass('IT')) { roomguruLinksTitle.text($(this).text()); roomguruLinksLink.text(obj.roomguru.links.IT); }
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
  if ($(this).hasClass('KU')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.KU); }
  if ($(this).hasClass('KI')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.KI); }
  if ($(this).hasClass('TA')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.TA); }
  if ($(this).hasClass('VE')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.VE); }
  if ($(this).hasClass('AB')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.AB); }
  if ($(this).hasClass('IS')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.IS); }
  if ($(this).hasClass('PO')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.PO); }
  if ($(this).hasClass('CH')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.CH); }
  if ($(this).hasClass('IT')) { roomguruSearchTitle.text($(this).text()); roomguruSearchLink.html(obj.roomguru.search.IT); }
});

// TRIPSTER LINKS

var tripsterLinksTitle = $('#nav-tripster-links .output span');
var tripsterLinksLink = $('#nav-tripster-links .output pre');

$('#nav-tripster-links .links__item div').click(function () {
  if ($(this).hasClass('kal')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.kal); }
  if ($(this).hasClass('stamb')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.stamb); }
  if ($(this).hasClass('pat')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.pat); }
  if ($(this).hasClass('phu')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.phu); }
  if ($(this).hasClass('rim')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.rim); }
  if ($(this).hasClass('par')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.par); }
  if ($(this).hasClass('sp')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.sp); }
  if ($(this).hasClass('mos')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.mos); }
  if ($(this).hasClass('bars')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.bars); }
  if ($(this).hasClass('prag')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.prag); }
  if ($(this).hasClass('tbi')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.tbi); }
  if ($(this).hasClass('liss')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.liss); }
  if ($(this).hasClass('flo')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.flo); }
  if ($(this).hasClass('ven')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.ven); }
  if ($(this).hasClass('ams')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.ams); }
  if ($(this).hasClass('vena')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.vena); }
  if ($(this).hasClass('arg')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.arg); }
  if ($(this).hasClass('dub')) { tripsterLinksTitle.text($(this).text()); tripsterLinksLink.text(obj.tripster.links.dub); }
});

// TRIPSTER SEARCH

var tripsterSearchTitle = $('#nav-tripster-search .output span');
var tripsterSearchLink = $('#nav-tripster-search .output pre');

$('#nav-tripster-search .links__item div').click(function () {
  if ($(this).hasClass('kal')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.kal); }
  if ($(this).hasClass('stamb')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.stamb); }
  if ($(this).hasClass('pat')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.pat); }
  if ($(this).hasClass('phu')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.phu); }
  if ($(this).hasClass('rim')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.rim); }
  if ($(this).hasClass('par')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.par); }
  if ($(this).hasClass('sp')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.sp); }
  if ($(this).hasClass('mos')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.mos); }
  if ($(this).hasClass('bars')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.bars); }
  if ($(this).hasClass('prag')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.prag); }
  if ($(this).hasClass('tbi')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.tbi); }
  if ($(this).hasClass('liss')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.liss); }
  if ($(this).hasClass('flo')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.flo); }
  if ($(this).hasClass('ven')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.ven); }
  if ($(this).hasClass('ams')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.ams); }
  if ($(this).hasClass('vena')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.vena); }
  if ($(this).hasClass('dub')) { tripsterSearchTitle.text($(this).text()); tripsterSearchLink.html(obj.tripster.search.dub); }
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
  if ($(this).hasClass('pat')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.pat); }
  if ($(this).hasClass('phu')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.phu); }
  if ($(this).hasClass('rim')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.rim); }
  if ($(this).hasClass('par')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.par); }
  if ($(this).hasClass('sp')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.sp); }
  if ($(this).hasClass('bars')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.bars); }
  if ($(this).hasClass('prag')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.prag); }
  if ($(this).hasClass('tbi')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.tbi); }
  if ($(this).hasClass('liss')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.liss); }
  if ($(this).hasClass('flo')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.flo); }
  if ($(this).hasClass('ven')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.ven); }
  if ($(this).hasClass('ams')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.ams); }
  if ($(this).hasClass('vena')) { aviasalesLinksTitle.text($(this).text()); aviasalesLinksLink.text(obj.aviasales.links.vena); }
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