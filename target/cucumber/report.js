$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "Search a flight inbetween destination, select the cheapest and  purchase it.",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify home and search results page with source and destination",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;verify-home-and-search-results-page-with-source-and-destination",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search with source \"\u003csource\u003e\" and destination \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify from departure \"\u003csource\u003e\" and desitnation \"\u003cdestination\u003e\" on results page",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;verify-home-and-search-results-page-with-source-and-destination;",
  "rows": [
    {
      "cells": [
        "source",
        "destination"
      ],
      "line": 10,
      "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;verify-home-and-search-results-page-with-source-and-destination;;1"
    },
    {
      "cells": [
        "Boston",
        "London"
      ],
      "line": 11,
      "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;verify-home-and-search-results-page-with-source-and-destination;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8320029700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify home and search results page with source and destination",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;verify-home-and-search-results-page-with-source-and-destination;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search with source \"Boston\" and destination \"London\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify from departure \"Boston\" and desitnation \"London\" on results page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.user_on_home_page()"
});
formatter.result({
  "duration": 1544632600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 25
    },
    {
      "val": "London",
      "offset": 50
    }
  ],
  "location": "HomeSteps.user_search_with_source_Paris_and_destination_London(String,String)"
});
formatter.result({
  "duration": 1626789100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 23
    },
    {
      "val": "London",
      "offset": 48
    }
  ],
  "location": "HomeSteps.verify_Flights_Search_Page(String,String)"
});
formatter.result({
  "duration": 218140100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Select Cheapest Flight",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;select-cheapest-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User search with source \"\u003csource\u003e\" and destination \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Choose cheapest flight from search results",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;select-cheapest-flight;",
  "rows": [
    {
      "cells": [
        "source",
        "destination"
      ],
      "line": 20,
      "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;select-cheapest-flight;;1"
    },
    {
      "cells": [
        "Boston",
        "London"
      ],
      "line": 21,
      "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;select-cheapest-flight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 571493200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Select Cheapest Flight",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;select-cheapest-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User search with source \"Boston\" and destination \"London\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Choose cheapest flight from search results",
  "keyword": "And "
});
formatter.match({
  "location": "HomeSteps.user_on_home_page()"
});
formatter.result({
  "duration": 33576100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 25
    },
    {
      "val": "London",
      "offset": 50
    }
  ],
  "location": "HomeSteps.user_search_with_source_Paris_and_destination_London(String,String)"
});
formatter.result({
  "duration": 932127700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.choose_Cheapest_Flight_From_Search_Results()"
});
formatter.result({
  "duration": 929479800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Purchase Cheapest Flight by entering pax details",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;purchase-cheapest-flight-by-entering-pax-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User search with source \"\u003csource\u003e\" and destination \"\u003cdestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter Pax details name \"\u003cname\u003e\" , address \"\u003caddress\u003e\" , city \"\u003ccity\u003e\" , state \"\u003cstate\u003e\" , zipcode \"\u003czipcode\u003e\" , ccType \"\u003cccType\u003e\" , ccNumber \"\u003cccNumber\u003e\" , ccMonth \"\u003cccMonth\u003e\" , ccYear \"\u003cccYear\u003e\" and purchase flight",
  "keyword": "When "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;purchase-cheapest-flight-by-entering-pax-details;",
  "rows": [
    {
      "cells": [
        "source",
        "destination",
        "name",
        "address",
        "city",
        "state",
        "zipcode",
        "ccType",
        "ccNumber",
        "ccMonth",
        "ccYear"
      ],
      "line": 30,
      "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;purchase-cheapest-flight-by-entering-pax-details;;1"
    },
    {
      "cells": [
        "Boston",
        "London",
        "Chandra Mowli Katta",
        "Koramangala 1st Block",
        "Bangalore",
        "Karnataka",
        "560034",
        "amex",
        "340765673757859",
        "12",
        "2022"
      ],
      "line": 31,
      "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;purchase-cheapest-flight-by-entering-pax-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 539609800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Purchase Cheapest Flight by entering pax details",
  "description": "",
  "id": "search-a-flight-inbetween-destination,-select-the-cheapest-and--purchase-it.;purchase-cheapest-flight-by-entering-pax-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User search with source \"Boston\" and destination \"London\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter Pax details name \"Chandra Mowli Katta\" , address \"Koramangala 1st Block\" , city \"Bangalore\" , state \"Karnataka\" , zipcode \"560034\" , ccType \"amex\" , ccNumber \"340765673757859\" , ccMonth \"12\" , ccYear \"2022\" and purchase flight",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.match({
  "location": "HomeSteps.user_on_home_page()"
});
formatter.result({
  "duration": 36581800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 25
    },
    {
      "val": "London",
      "offset": 50
    }
  ],
  "location": "HomeSteps.user_search_with_source_Paris_and_destination_London(String,String)"
});
formatter.result({
  "duration": 701369400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chandra Mowli Katta",
      "offset": 24
    },
    {
      "val": "Koramangala 1st Block",
      "offset": 56
    },
    {
      "val": "Bangalore",
      "offset": 87
    },
    {
      "val": "Karnataka",
      "offset": 107
    },
    {
      "val": "560034",
      "offset": 129
    },
    {
      "val": "amex",
      "offset": 147
    },
    {
      "val": "340765673757859",
      "offset": 165
    },
    {
      "val": "12",
      "offset": 193
    },
    {
      "val": "2022",
      "offset": 207
    }
  ],
  "location": "HomeSteps.enter_Pax_Details_And_Purchase_Flight(String,String,String,String,long,String,long,int,long)"
});
formatter.result({
  "duration": 4248129000,
  "status": "passed"
});
});