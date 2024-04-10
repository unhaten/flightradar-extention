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
            selectValue: "Aircraft",
            valueStringToSearch:
                "Q4,K35R,C130,C30J,B52,B742,V22,B2,C5M,DC10,EUFI,K35R,R135,F18,F15,F16,f22,f35,A330,DC10,K35R,R135,C17,E3TF,a124,a125,a140,a148,a2rt,a50,an1",
        };
    } else if (type === 2) {
        filterSettings = {
            placeholder: "eg. DLH or UAL,BAW",
            selectValue: "Airline",
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
        const clearButton = document.getElementsByClassName(
            "w-full rounded-md px-6 py-2 transition-colors disabled:cursor-not-allowed border font-semibold text-red-500 bg-transparent border-red-500 hover:bg-transparent hover:text-red-400 hover:border-red-400 disabled:border-gray-700 disabled:text-gray-700"
        );
        if (clearButton[0]) {
            clearButton[0].click();
            setTimeout(async function () {
                const clearConfirm = document.getElementsByClassName(
                    "w-full rounded-md px-6 py-2 transition-colors disabled:cursor-not-allowed font-semibold text-white bg-red-500 hover:bg-red-400 disabled:bg-gray-700"
                );
                clearConfirm[0].click();
                const closeFilters = document.getElementsByClassName(
                    "absolute right-0 mr-2 rounded-md p-2"
                );
                closeFilters[0].click();
            }, 1000);
        }
        const addNewFilterButton = document.getElementsByClassName(
            "w-full rounded-md px-6 py-2 transition-colors font-semibold text-white bg-blue-500 hover:bg-blue-400 disabled:bg-gray-700 flex justify-center disabled:cursor-not-allowed disabled:opacity-75"
        );

        await addNewFilterButton[0].click();
        setTimeout(async function () {
            const filterButtonList = document.getElementsByClassName(
                "flex h-12 w-full items-center justify-between border border-gray-700 bg-gray-600 py-2.5 pl-2 pr-0.5 font-semibold text-gray-1300 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
            );
            if (type === 1) {
                const filterBtn = filterButtonList[1];
                await filterBtn.click();
            } else if (type === 2) {
                const filterBtn = filterButtonList[0];
                await filterBtn.click();
            }

            setTimeout(async function () {
                const aircraftLabel = document.getElementsByClassName(
                    "fr24-key-nav mr-10 block h-10 w-full !rounded-md border-gray-600 pl-10 leading-8 text-gray-1300 placeholder:text-gray-800 focus:border-yellow-500 focus:ring-yellow-500"
                );
                aircraftLabel[0].value = filterSettings.valueStringToSearch;

                // const overflow =
                //     document.getElementsByClassName("overflow-hidden");
            }, 1000);
        }, 1000);
    }, 1000);
    //    aircraftButton.click();
    // p.click();
    // a.value = filterSettings.valueStringToSearch;
    // b.disabled = false;
    // b.click();

    document.body.onkeyup = function (e) {
        if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
            const selectAll = document.getElementsByClassName(
                "text-blue-500 hover:text-blue-400"
            );
            selectAll[0].click();
            const continueButton = document.getElementsByClassName(
                "flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 font-semibold text-white disabled:bg-gray-700"
            );
            continueButton[0].disabled = false;
            continueButton[0].click();
            setTimeout(async function () {
                const saveButton = document.getElementsByClassName(
                    "absolute right-0 mr-2 rounded-md p-2"
                );
                saveButton[0].click();
            }, 1000);
        }
    };
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "first-filter") {
        filter(1);
    } else if (message.type === "second-filter") {
        filter(2);
    }
});
