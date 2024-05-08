import TheBAR from "./TheBAR.jsx";
import ThisThing from "./singleThing.jsx";
import DropDownniiga from "./DropDownskillissue.jsx";
import {Avatar, Card, CardBody, CardFooter, CardHeader, Image, Progress} from "@nextui-org/react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [fa2erniggaalert] = useState(
        [
            {Type:"Food",tag:'Fruits and Vegetables', Area:"Mokattam", Governorate:"Cairo", title: 'They need to be fed 3 chickens a day', body: 'Prove you\'re not racist through donating to our token black children, guaranteed to boost your PR levels by at least 69%.', author: 'Feeders',   id: 1, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1,                                                       source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
            {Type:"School",tag:'Stationery', Area:"Third Settlement", Governorate:"Giza", title: 'Cleanliness is key',                  body: 'I\'m the garbage man, I EAT GARBAGE.',                                           author: 'Garbage Man',   id: 2, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2,                                                                                               source: 'https://static.demilked.com/wp-content/uploads/2021/09/615174557e36d-6149dc29aada1_ooee48bo1kl71__700.jpg'},
            {Type:"Medical",tag:'Medication', Area:"Fifth Settlement", Governorate:"Ismailia", title: 'The ocean could use some help',   body: 'Dolphins are known to torture small animals, bully the weak and sexually assault divers, donate if you think all of that is cool and want them to continue living.', author: 'Dolphin Lives Matter',   id: 3, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/marine_debris_hawaii_NOAAphoto.jpg?h=607ea137&itok=ozgMBxq0'},
            {Type:"Medical",tag:'Medical Devices', Area:"First Settlement", Governorate:"Gharbeya", title: 'Nuclear bad boohoo',         body: 'Nuclear Energy cool and all but the waste it produces is almost unmanageable.',  author: 'Nukes Are Rad',   id: 4, donatedAmount: 20000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4,                                                                                            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmKYMOU6cpz4XUWpn5D77N1WPDpi9iSXeCwWgwZCkw&s'},
            {Type:"School",tag:'Stationery', Area:"6th October", Governorate:"Damietta", title: 'It resurfaced',                   body: 'Fifth lorem',                                                                    author: 'example', id: 5,  donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 5,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMS06kJdjE7IED7dqcClRGhQ7Ty2o9hnJXsYuxKMd7g&s'},
            {Type:"Clothes",tag:'Clothes',Season:"Winter",  Age:9, Gender:"Male", Area:"First Settlement", Governorate:"Alexandria", title: 'It stayed',                          body: 'Sixth lorem',                                                                    author: 'chapter', id: 6,  donatedAmount: 700 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 6,                                                                                                    source: 'https://cdn.britannica.com/02/154202-050-001D9E0A/Bulldozer-sanitary-landfill-waste-garbage.jpg'},
            {Type:"Toys",tag:'Board Games', Age:12, Gender:"Male", Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                      body: 'Seventh lorem',                                                                  author: 'chapter', id: 7,  donatedAmount: 900 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 7,                                                                                                    source: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/Poverty_1672659305.webp'},
            {Type:"Clothes",tag:'Clothes',Season:"Summer",  Age:10, Gender:"Female", Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                          body: 'Eighth lorem',                                                                   author: 'chapter', id: 8,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw37Fje-w8cnkt5HhMmq6PsMnCLqoUIhXEdvHeESyydg&s'},
            {Type:"School",tag:'Books', Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                            body: 'Ninth lorem',                                                                    author: 'chapter', id: 9,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Toys",tag:'Dolls', Age:11, Gender:"Male", Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                            body: 'Tenth lorem',                                                                    author: 'chapter', id: 10, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Medical",tag:'Medical Equipment', title: 'It stayed', Area:"First Settlement", Governorate:"Cairo",               body: 'Eleventh lorem',                                                                 author: 'chapter', id: 11, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Blood",tag:'Blood', Hospital:"57357", Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                            body: 'Twelveth lorem',                                                                 author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Blood",tag:'Blood', Hospital:"Shifa", Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                body: 'Thirteenth lorem',                                                               author: 'chapter', id: 13, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Food",tag:'Canned Foods', Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                           body: 'Fourteenth lorem',                                                               author: 'chapter', id: 14, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Toys",tag:'Stuffed Toys', Gender:"Female", Age:12, Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                     body: 'Fifteenth lorem',                                                                author: 'chapter', id: 15, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Teaching",tag:'', Subject:["History","English"], Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                           body: 'Sixteenth lorem',                                                                    author: 'chapter', id: 16, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Doctoring", Specialty:"Neurology",tag:'', Area:"First Settlement", Governorate:"Cairo", title: 'It stayed',                            body: 'Seventeenth lorem',                                                                    author: 'chapter', id: 17, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {Type:"Teaching",tag:'', Subject:["Math","Science"], Area:"Manyal", Governorate:"Giza", title: 'It stayed',                           body: 'Eighteenth lorem',                                                                    author: 'chapter', id: 18, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
        ]);
        const [searchTerm, setSearchTerm] = useState("");
        const [AreaTerm, setAreaTerm] = useState("");
        const [HospitalTerm, setHospitalTerm] = useState("");
        const [AgeTerm, setAgeTerm] = useState(0);
        const [SeasonTerm, setSeasonTerm] = useState("");
        const [TypeTerm, setTypeTerm] = useState("");
        const [CategoryTerm, setCategoryTerm] = useState([""]);
        const [MedicalTerm, setMedicalTerm] = useState([""]);
        const [GenderTerm, setGenderTerm] = useState("");
        const [GovernorateTerm, setGovernorateTerm] = useState("");
        const [SubjectTerm, setSubjectTerm] = useState("");
        const [SpecialTerm, setSpecialTerm] = useState("");
    function setTerm(searchItem){
        setSearchTerm(searchItem);
        console.log(searchItem);
    }

    function setArea(searchItem){
        setAreaTerm(searchItem);
        console.log(searchItem);
    }
    function setAge(searchItem){
        setAgeTerm(searchItem);
        console.log(searchItem);
    }
    function setHospital(searchItem){
        setHospitalTerm(searchItem);
        console.log(searchItem);
    }
    function setSeason(searchItem){
        setSeasonTerm(searchItem);
        console.log(searchItem);
    }
    function setCategory (searchItem){
        setCategoryTerm(searchItem);
        console.log(searchItem);
    }
    function setGender (searchItem){
        setGenderTerm(searchItem);
        console.log(searchItem);
    }
    function setType (searchItem){
        setTypeTerm(searchItem);
        console.log(searchItem);
    }
    function setGovernorate (searchItem){
        setGovernorateTerm(searchItem);
        console.log(searchItem);
    }
    function setSubject (searchItem){
        setSubjectTerm(searchItem);
        console.log(searchItem);
    }
    function setSpecial (searchItem){
        setSpecialTerm(searchItem);
        console.log(searchItem);
    }
    function setMedical (searchItem){
        setMedicalTerm(searchItem);
        console.log(searchItem);
    }


    const filter3adeyagedan = fa2erniggaalert.filter(fa2erniggaalert => {

        switch (TypeTerm.toLowerCase()) {
            case "toys":
                return (AgeTerm != 0 ? (fa2erniggaalert.Age && fa2erniggaalert.Age == AgeTerm) : true)
                    && fa2erniggaalert.Gender && fa2erniggaalert.Gender.includes(GenderTerm)
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true)
                    && fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase());
            case "blood":
                return fa2erniggaalert.Area && fa2erniggaalert.Area.toLowerCase().includes(AreaTerm.toLowerCase())
                    && fa2erniggaalert.Hospital && fa2erniggaalert.Hospital.toLowerCase().includes(HospitalTerm.toLowerCase())
                    && fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && fa2erniggaalert.Governorate && fa2erniggaalert.Governorate.toLowerCase().includes(GovernorateTerm.toLowerCase());
            case "teaching":
                return fa2erniggaalert.Area && fa2erniggaalert.Area.toLowerCase().includes(AreaTerm.toLowerCase())
                    && fa2erniggaalert.Subject && fa2erniggaalert.Subject.some(subject => subject.toLowerCase().includes(SubjectTerm.toLowerCase()))
                    && fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && fa2erniggaalert.Governorate && fa2erniggaalert.Governorate.toLowerCase().includes(GovernorateTerm.toLowerCase());
            case "doctoring":
                return fa2erniggaalert.Area && fa2erniggaalert.Area.toLowerCase().includes(AreaTerm.toLowerCase())
                    && (fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase()))
                    && (fa2erniggaalert.Specialty && fa2erniggaalert.Specialty.toLowerCase().includes(SpecialTerm.toLowerCase()))
                    && fa2erniggaalert.Governorate && fa2erniggaalert.Governorate.toLowerCase().includes(GovernorateTerm.toLowerCase());
            case "clothes":
                return (AgeTerm != 0 ? (fa2erniggaalert.Age && fa2erniggaalert.Age == AgeTerm) : true)
                    && (fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase()))
                    && fa2erniggaalert.Gender && fa2erniggaalert.Gender.includes(GenderTerm)
                    && fa2erniggaalert.Season && fa2erniggaalert.Season.toLowerCase().includes(SeasonTerm.toLowerCase());
            case "food":
                return (fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase()))
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true);
            case "school":
                return fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true);
            case "medical":
                return fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true);
            default:
                return true;
        }
    });





    return (
    <div className="home min-h-screen w-screen grid grid-col-3 grid-row-3 items-start">
        <TheBAR setTerm={setTerm}/>
        <div className="w-screen flex flex-row justify-start items-start">
            <DropDownniiga setArea={setArea} setAge={setAge} setCategory={setCategory} setSubject={setSubject} setSpecial={setSpecial}
             setHospital={setHospital} setSeason={setSeason} setType={setType} setGender={setGender} setGovernorate={setGovernorate} setMedical={setMedical}/>
            <div className="home h-screen grid place-items-center mt-20 mx-auto w-[1400px]">
                <ThisThing fa2erniggaalert={filter3adeyagedan}/>
            </div>  
        </div>
    </div>
)
}
export default Home;