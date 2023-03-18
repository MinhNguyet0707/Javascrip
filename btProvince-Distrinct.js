async function getProvinceList() {
    let response = await fetch("https://provinces.open-api.vn/api/p?depth=2");
    let data = await response.json();
    renderProvince(data);

}

function renderProvince(provinces) {
    districtSelect.innerHTML = ' ';
    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
    let provinceSelect = document.getElementById('province');
    for (let key in provinces) {
        let option = document.createElement('option');
        option.innerText = provinces[key].name;
        option.value = provinces[key].code;
        provinceSelect.appendChild(option);
    }
}

getProvinceList();



// chọn quận huyện 
let districtSelect = document.getElementById('district');
let provinceSelect = document.getElementById('province');

async function getDistrictList(provinceCode) {
    let response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
    let data = await response.json();
    renderDistrict(data.districts);
}

function renderDistrict(districts) {
    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
    for (let district of districts) {
        let option = document.createElement('option');
        option.innerText = district.name;
        option.value = district.code;
        districtSelect.appendChild(option);
    }
}
provinceSelect.addEventListener('change', async function () {
    let provinceCode = provinceSelect.value;
    await getDistrictList(provinceCode);

});

getDistrictList();


// chon xa phuong
let communeSelect = document.getElementById('commune');
async function getCommuneList(districtCode) {
    let response = await fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
    let data = await response.json();
    renderCommune(data.wards);
}

function renderCommune(communes) {
    communeSelect.innerHTML = '<option value="">Chọn xã/phường</option>';
    for (let key in communes) {
        let option = document.createElement('option');
        option.innerText = communes[key].name;
        option.value = communes[key].code;
        communeSelect.appendChild(option);
    }
}

districtSelect.addEventListener('change', async function () {
    let districtCode = districtSelect.value;
    await getCommuneList(districtCode);
});
getCommuneList();













