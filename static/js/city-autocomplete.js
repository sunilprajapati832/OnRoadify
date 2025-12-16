console.log("City autocomplete JS loaded");
document.addEventListener("DOMContentLoaded", function () {

    const cities = [
    "Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool",
    "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa",
    "Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi",
    "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Upper Siang",
    "Lower Siang", "Namsai", "Changlang", "Tirap", "Longding",
    "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang",
    "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi",
    "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj",
    "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar",
    "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong",
      "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur",
    "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad",
    "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani",
    "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa",
    "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul",
    "Vaishali", "West Champaran",
  "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur",
  "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa",
  "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya",
  "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon",
  "Sukma", "Surajpur", "Surguja",  "North Goa", "South Goa",
  "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch",
  "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka",
  "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch",
  "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal",
  "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Tapi",
  "Vadodara", "Valsad",
  "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram",
  "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra",
  "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari",
  "Rohtak", "Sirsa", "Sonipat", "Yamunanagar",
  "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu",
  "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una",
  "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum",
  "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara",
  "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu",
  "Ramgarh", "Ranchi", "Sahebganj", "Saraikela Kharsawan", "Simdega",
  "West Singhbhum",
  "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban",
  "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga",
  "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri",
  "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur",
  "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura",
  "Yadgir",
  "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam",
  "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta",
  "Thiruvananthapuram", "Thrissur", "Wayanad",
  "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani",
  "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara",
  "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda",
  "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone",
  "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen",
  "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol",
  "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh",
  "Ujjain", "Umaria", "Vidisha",
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara",
  "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli",
  "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
  "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar",
  "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg",
  "Solapur", "Thane", "Wardha", "Washim", "Yavatmal",
  "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West",
  "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl",
  "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul",
  "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills",
  "Ri-Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills",
  "West Garo Hills", "West Jaintia Hills", "West Khasi Hills",
  "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai",
  "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip",
  "Chümoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung",
  "Mon", "Noklak", "Peren", "Phek", "Tuensang", "Wokha", "Zünheboto",
  "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh",
  "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur",
  "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Keonjhar",
  "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh",
  "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh",
  "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka",
  "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana",
  "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar",
  "Sangrur", "SAS Nagar", "Tarn Taran",
  "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara",
  "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur",
  "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu",
  "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand",
  "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur",
  "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim", "Pakyong", "Soreng",
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
  "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur",
  "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur",
  "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
  "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur",
  "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram",
  "Virudhunagar",
  "Adilabad", "Bhadradri Kothagudem", "Hanamkonda", "Hyderabad", "Jagtial",
  "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy",
  "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad",
  "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu",
  "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli",
  "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet",
  "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri",
  "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala",
  "South Tripura", "Unakoti", "West Tripura",
  "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya",
  "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur",
  "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor",
  "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah",
  "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
  "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur",
  "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj",
  "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri",
  "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri",
  "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar",
  "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur",
  "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti",
  "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi",
  "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar",
  "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal",
  "Udham Singh Nagar", "Uttarkashi",
  "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur",
  "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong",
  "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas",
  "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur",
  "Purulia", "South 24 Parganas", "Uttar Dinajpur",
  "Nicobar", "North and Middle Andaman", "South Andaman",
  "Chandigarh",
  "Dadra and Nagar Haveli", "Daman", "Diu",
  "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi",
  "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi",
  "West Delhi",
  "Kargil", "Leh",
  "Agatti", "Amini", "Androth", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kavaratti", "Minicoy",
  "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu",
  "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri",
  "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur",
  "Karaikal", "Mahe", "Puducherry", "Yanam"
];

    const cityInput = document.getElementById("cityInput");
    const suggestionBox = document.getElementById("citySuggestions");

    if (!cityInput || !suggestionBox) {
        console.error("City autocomplete elements not found");
        return;
    }

    cityInput.addEventListener("input", function () {
        const query = this.value.trim().toLowerCase();
        suggestionBox.innerHTML = "";

        if (query.length < 2) return;

        const matches = cities.filter(city =>
            city.toLowerCase().startsWith(query)
        );

        matches.forEach(city => {
            const li = document.createElement("li");
            li.textContent = city;

            li.addEventListener("click", function () {
                cityInput.value = city;
                suggestionBox.innerHTML = "";
            });

            suggestionBox.appendChild(li);
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".city-autocomplete")) {
            suggestionBox.innerHTML = "";
        }
    });

});
