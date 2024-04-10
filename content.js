async function filter(type) {
    let addNewFilterButton;
    let aircraftButton;
    const applyFilterButton = document.getElementById(
        "bottom-panel__filters-button"
    );

    // const b = document.querySelector(".add");
    // const r = document.getElementsByClassName(
    //     "w-full rounded-md px-6 py-2 transition-colors font-semibold text-white bg-blue-500 hover:bg-blue-400 disabled:bg-gray-700 flex justify-center disabled:cursor-not-allowed disabled:opacity-75"
    // );
    // .querySelector(".remove");
    // if (r[0]) r[0].click();
    applyFilterButton.click();

    let filterSettings;
    // Enter airline name or ICAO code
    // Enter aircraft ICAO code
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
    // const a = document.querySelector(
    //     `.form-control[placeholder='${filterSettings.placeholder}']`
    // );
    // const p = document.querySelector(
    //     `[data-value='${filterSettings.selectValue}']`
    // );
    setTimeout(async function () {
        const addNewFilterButtonList = document.getElementsByClassName(
            "w-full rounded-md px-6 py-2 transition-colors font-semibold text-white bg-blue-500 hover:bg-blue-400 disabled:bg-gray-700 flex justify-center disabled:cursor-not-allowed disabled:opacity-75"
        );
        addNewFilterButtonList.forEach((item) => {
            if (item.innerText === "Add new filter") {
                addNewFilterButton = item;
            }
        });
        await addNewFilterButton.click();
        setTimeout(async function () {
            const filterButtonList = document.getElementsByClassName(
                "flex h-12 w-full items-center justify-between border border-gray-700 bg-gray-600 py-2.5 pl-2 pr-0.5 font-semibold text-gray-1300 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
            );
            filterButtonList.forEach((item) => {
                if (item.innerText === "Aircraft") {
                    aircraftButton = item;
                }
            });
            await aircraftButton.click();
            setTimeout(async function () {
                const aircraftLabel = document.getElementsByClassName(
                    "fr24-key-nav mr-10 block h-10 w-full !rounded-md border-gray-600 pl-10 leading-8 text-gray-1300 placeholder:text-gray-800 focus:border-yellow-500 focus:ring-yellow-500"
                );
                aircraftLabel[0].value =
                    "Q4,K35R,C130,C30J,B52,B742,V22,B2,C5M,DC10,EUFI,K35R,R135,F18,F15,F16,f22,f35,A330,DC10,K35R,R135,C17,E3TF,a124,a125,a140,a148,a2rt,a50,an1";
                const continueButton = document.getElementsByClassName(
                    "flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 font-semibold text-white disabled:bg-gray-700"
                );
                continueButton[0].disabled = false;
                // const overflow =
                //     document.getElementsByClassName("overflow-hidden");
            }, 500);
        }, 500);
        //    aircraftButton.click();
        // p.click();
        // a.value = filterSettings.valueStringToSearch;
        // b.disabled = false;
        // b.click();
    }, 500);
}

// chrome.runtime.onMessage.addListener((message) => {
//     if (message.type === "first-filter") {
//         filter(1);
//     } else if (message.type === "second-filter") {
//         filter(2);
//     }
// });
