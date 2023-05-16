function filter(type) {
    const b = document.querySelector(".add");
    const r = document
        .querySelector("#fr24_FilterList")
        .querySelector(".remove");
    if (r) r.click();
    let filterSettings;
    if (type === 1) {
        filterSettings = {
            placeholder: "eg. B744,A321 or B73",
            selectValue: "aircraft",
            valueStringToSearch:
                "Q4,K35R,C130,C30J,B52,B742,V22,B2,C5M,DC10,EUFI,K35R,R135,F18,F15,F16,f22,f35,A330,DC10,K35R,R135,C17,E3TF,a124,a125,a140,a148,a2rt,a50,an1",
        };
    } else if (type === 2) {
        filterSettings = {
            placeholder: "eg. DLH or UAL,BAW",
            selectValue: "callsign",
            valueStringToSearch:
                "RCH, RRF, PLF, RRR, MMF, ASY, RFF, HVK, CFC, HRZ, EEF, FNF, AYB, BAF, GAF, GAM, RFR, NVY, NOH, WAD, PAT, CNV, CHD, DOD, GKA, JPA, AAC, SHF, CBY, SUI, SVF, AME, SIV, SQF, ROF, AFP, PNY, NOW, KIW, KRC, NAF, LAF, IAF, IFC, HUF, HAF, DCN, FAF, FMY, FNY, EEF, DAF, CEF, THN, ALF, ASF, ADV, RSD, SPD, ADB",
        };
    }
    const a = document.querySelector(
        `.form-control[placeholder='${filterSettings.placeholder}']`
    );
    const p = document.querySelector(
        `[data-value='${filterSettings.selectValue}']`
    );
    setTimeout(function () {
        p.click();
        a.value = filterSettings.valueStringToSearch;
        b.disabled = false;
        b.click();
    }, 500);
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "first-filter") {
        filter(1);
    } else if (message.type === "second-filter") {
        filter(2);
    }
});
