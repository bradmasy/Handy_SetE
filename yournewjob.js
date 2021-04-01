let params = (new URL(document.location)).searchParams;
let jobPosition = params.get("pos");
let jobLocation = params.get("loc");
let businessName = params.get("bus");