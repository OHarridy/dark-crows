import TheBAR from "./TheBAR.jsx";
import ThisThing from "./singleThing.jsx";
import DropDownniiga from "./DropDownskillissue.jsx";
import {Avatar, Card, CardBody, CardFooter, CardHeader, Image, Progress} from "@nextui-org/react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GeneralButton from "./generalButton.jsx";
const Home = () => {
    
    const [fa2erniggaalert] = useState(
            [{Type:"Doctoring", Specialty:"Embryology",tag:'', Area:"First Settlement", Governorate:"Cairo", title: 'Healing Hands',                            body: 'Support health: donate medical help today and save lives. We need to make 1000 medical examinations!',                                                                    author: 'chapter', id: 0, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueLkltbO4DL1fACKGvADCMmZdGemIx30sjw&usqp=CAU'},
            {Type:"Food",tag:'Fruits and Vegetables', Area:"Mokattam", Governorate:"Cairo", title: 'Donation meals', body: 'Food is the moral right of all who are born into this world. Help us provide that right to others! We need 1000 lunch meals', author: 'Feeders',   id: 1, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1,                                                       source: 'https://www.efsa.europa.eu/sites/default/files/news/food-donations.jpg'},
            {Type:"Toys",tag:'Dolls', Age:11, Gender:"Female", Area:"First Settlement", Governorate:"Cairo", title: 'Dolls for Joy',                            body: "Bring smiles to little faces! Donate your dolls today and make a child's day brighter.Help us gather a 1000 doll!",                                                                    author: 'chapter', id: 2, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://images-cdn.ubuy.co.in/6501fa4388355829ec0221b5-prextex-baby-twin-dolls-set-12-boy.jpg'},
            {Type:"Medical",tag:'Medical Devices', Area:"First Settlement", Governorate:"Gharbeya", title: 'Patient helper',         body: 'It is health that is real wealth and not pieces of gold and silver.We need 10000 Xrays , 10000 ventilators',  author: 'Treaters',   id: 3, donatedAmount: 20000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4,                                                                                            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnXuixskkn3RJTSpRAbTbGdBIXyhZmNIeQA&usqp=CAU'},
            {Type:"School",tag:'Stationery', Area:"Third Settlement", Governorate:"Giza", title: 'School Supplies',                  body: 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today. help us provide|500 pens, 300 pencils, 200 rulers',                                           author: 'Education Suppliers',   id: 4, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2,                                                                                               source: 'https://stationers.pk/cdn/shop/articles/7_Must_Have_Student_Stationery_Supplies_In_High_School.jpg?v=1635331870'},
            {Type:"Medical",tag:'Medication', Area:"Fifth Settlement", Governorate:"Ismailia", title: 'Human Angels',   body: 'He who has health, has hope; and he who has hope, has everything.We need 7000 medications either for headaches  or stomach pain', author: 'Healers',   id: 5, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j5CT4bLTJtCbmvq0-yIwIUzXAgNaagoZqQ&usqp=CAU'},
            {Type:"School",tag:'Books', Area:"First Settlement", Governorate:"Cairo", title: 'Book Sharers',                            body: 'Share the joy of reading: donate your books today and open new worlds for others! we need thousand books',                                                                    author: 'chapter', id: 6,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://5.imimg.com/data5/SELLER/Default/2021/7/KY/FK/GG/133645048/school-books.jpg'},  
            {Type:"School",tag:'Stationery', Area:"6th October", Governorate:"Damietta", title: 'School Supplies #2',                   body: 'The beautiful thing about learning is that no one can take it away from you. Try to give the chance to learn to others we need 50 notebooks and 50 paper piles',                                                                    author: 'Education Suppliers', id: 7,  donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 5,                                                                                                    source: 'https://i.insider.com/5f5a68bee6ff30001d4e81af?width=1200&format=jpeg'},
            {Type:"Clothes",tag:'Clothes',Season:"Winter",  Age:9, Gender:"Male", Area:"First Settlement", Governorate:"Alexandria", title: 'Warmth Spreaders',                          body: 'Donate your gently used clothes today and give someone in need the gift of warmth and comfort.we need 1000 jackets.',                                                                    author: 'chapter', id: 8,  donatedAmount: 700 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 6,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_2yn1q7zS3lFwEnrr8CCXt4H4hubfeZE-Q&usqp=CAU'},
            {Type:"Teaching",tag:'', Subject:["History","English"], Area:"First Settlement", Governorate:"Cairo", title: 'Teach Forward',                           body: 'Empower minds: donate teaching materials today and inspire futures. Help us give 1000 lessons!',                                                                    author: 'chapter', id: 9, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://miro.medium.com/v2/resize:fit:600/1*IOex_y_0JCxpDcZV2cvSBg.jpeg'},
            {Type:"Blood",tag:'Blood', Hospital:"Shifa", Area:"First Settlement", Governorate:"Cairo", title: 'Lifesavers',                body: 'Give the gift of life: donate blood today and be a hero. we need 1000 litres',                                                               author: 'chapter', id: 10, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhKJOylqS_Ff3PaizBWwtDi91uWtlhOtxsA&usqp=CAU'},
            
            {Type:"Doctoring", Specialty:"Neurology",tag:'', Area:"First Settlement", Governorate:"Cairo", title: 'Healing Hands',                            body: 'Support health: donate medical help today and save lives. We need to make 1000 medical examinations!',                                                                    author: 'chapter', id: 11, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueLkltbO4DL1fACKGvADCMmZdGemIx30sjw&usqp=CAU'},
            
            {Type:"Food",tag:'Canned Foods', Area:"First Settlement", Governorate:"Cairo", title: 'Canned Kindness',                           body: 'Fight hunger: donate canned goods today and nourish those in need. We need 1000 food cans!',                                                               author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://media.istockphoto.com/id/459027539/photo/large-assortment-of-canned-foods.jpg?s=612x612&w=0&k=20&c=nfZYRUbyrvtbazqfF3_BVE5w_7Ml4wbTKhNmI4DJYRY='},
            
            {Type:"Toys",tag:'Board Games', Age:12, Gender:"Male", Area:"First Settlement", Governorate:"Cairo", title: 'Joy Providers',                      body: "Bring joy to a child's life! Donate toys today and make a difference in a child's happiness. We need thousand toys",                                                                  author: 'Joy Spreaders', id: 13,  donatedAmount: 900 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 7,                                                                                                    source: 'https://m.media-amazon.com/images/I/91sW5EfqA+L.jpg'},
            
            {Type:"Medical",tag:'Medical Equipment', title: 'Combat Diabetes', Area:"First Settlement", Governorate:"Cairo",               body: 'Help save lives: donate your medical equipment today and support healthcare access for all.we need 1000 blood pressure and sugar level monitors ',                                                                 author: 'chapter', id: 14, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://img.choice.com.au/-/media/490d470c8e98407482d9c90a8b72b67f.ashx'},
            {Type:"School",tag:'Books', Area:"First Settlement", Governorate:"Cairo", title: 'Book Sharers',                            body: 'Share the joy of reading: donate your books today and open new worlds for others! we need thousand books',                                                                    author: 'chapter', id: 15,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://5.imimg.com/data5/SELLER/Default/2021/7/KY/FK/GG/133645048/school-books.jpg'},  
            {Type:"School",tag:'Stationery', Area:"6th October", Governorate:"Damietta", title: 'School Supplies #2',                   body: 'The beautiful thing about learning is that no one can take it away from you. Try to give the chance to learn to others we need 50 notebooks and 50 paper piles',                                                                    author: 'Education Suppliers', id: 16,  donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 5,                                                                                                    source: 'https://i.insider.com/5f5a68bee6ff30001d4e81af?width=1200&format=jpeg'},
            
            
            
            {Type:"Clothes",tag:'Clothes',Season:"Summer",  Age:10, Gender:"Female", Area:"First Settlement", Governorate:"Cairo", title: 'Warmth Spreaders #2',                          body: 'Give your clothes a new purpose: donate today and help those in need! We need 500 sweaters and 500 jackets',                                                                   author: 'chapter', id: 17,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8,                                                                                                    source: 'https://www.shutterstock.com/image-photo/woman-holds-bright-warm-winter-600nw-2278327583.jpg'},
          
            {Type:"Teaching",tag:'', Subject:["History","English"], Area:"Manyal", Governorate:"Giza", title: 'Teach Forward',                           body: 'Empower minds: donate teaching materials today and inspire futures. Help us give 1000 lessons!',                                                                    author: 'chapter', id: 18, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://miro.medium.com/v2/resize:fit:600/1*IOex_y_0JCxpDcZV2cvSBg.jpeg'},
            
            
            {Type:"Blood",tag:'Blood', Hospital:"57357", Area:"First Settlement", Governorate:"Cairo", title: 'Blood Drive',                            body: 'Save lives with a single donation: give blood today and make a difference." we need 1000 litres of blood',                                                                 author: 'chapter', id: 19, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/media/images/Blog/Woman%20finished%20donating%20blood.jpg'},
          
        ]);

      
        const [searchTerm, setSearchTerm] = useState("");
        const [AreaTerm, setAreaTerm] = useState("");
        const [HospitalTerm, setHospitalTerm] = useState("");
        const [AgeTerm, setAgeTerm] = useState(0);
        const [SeasonTerm, setSeasonTerm] = useState("");
        const [TypeTerm, setTypeTerm] = useState("");
        const [CategoryTerm, setCategoryTerm] = useState([""]);
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

    function deletethis (){
        console.log("DELETE INSIDE");
        setArea("");
        setCategory("");
        setGender("");
        setAge(0);
        setSeason("");
        setHospital("");
        setGovernorate("");
        setSubject("");
        setSpecial("");
        setType("");
      }
    const filter3adeyagedan = fa2erniggaalert.filter(fa2erniggaalert => {

        switch (TypeTerm.toLowerCase()) {
            case "toys":
                return (AgeTerm != 0 ? (fa2erniggaalert.Age && fa2erniggaalert.Age == AgeTerm) : true)
                    && fa2erniggaalert.Gender && fa2erniggaalert.Gender.includes(GenderTerm)
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true)
                    && fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase());
            case "blood":
                return fa2erniggaalert.Area && fa2erniggaalert.Area.toLowerCase().includes(AreaTerm.toLowerCase())
                    && fa2erniggaalert.Hospital && fa2erniggaalert.Hospital.toLowerCase().includes(HospitalTerm.toLowerCase())
                    && fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && fa2erniggaalert.Governorate && fa2erniggaalert.Governorate.toLowerCase().includes(GovernorateTerm.toLowerCase());
            case "teaching":
                return fa2erniggaalert.Area && fa2erniggaalert.Area.toLowerCase().includes(AreaTerm.toLowerCase())
                    && fa2erniggaalert.Subject && fa2erniggaalert.Subject.some(subject => subject.toLowerCase().includes(SubjectTerm.toLowerCase()))
                    && fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && fa2erniggaalert.Governorate && fa2erniggaalert.Governorate.toLowerCase().includes(GovernorateTerm.toLowerCase());
            case "doctoring":
                return fa2erniggaalert.Area && fa2erniggaalert.Area.toLowerCase().includes(AreaTerm.toLowerCase())
                    && (fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase()))
                    && (fa2erniggaalert.Specialty && fa2erniggaalert.Specialty.toLowerCase().includes(SpecialTerm.toLowerCase()))
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && fa2erniggaalert.Governorate && fa2erniggaalert.Governorate.toLowerCase().includes(GovernorateTerm.toLowerCase());
            case "clothes":
                return (AgeTerm != 0 ? (fa2erniggaalert.Age && fa2erniggaalert.Age == AgeTerm) : true)
                    && (fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase()))
                    && fa2erniggaalert.Gender && fa2erniggaalert.Gender.includes(GenderTerm)
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && fa2erniggaalert.Season && fa2erniggaalert.Season.toLowerCase().includes(SeasonTerm.toLowerCase());
            case "food":
                return (fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase()))
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true);
            case "school":
                return fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true);
            case "medical":
                return fa2erniggaalert.Type && fa2erniggaalert.Type.toLowerCase().includes(TypeTerm.toLowerCase())
                    && fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    && (CategoryTerm.length?fa2erniggaalert.tag && CategoryTerm.some(category => fa2erniggaalert.tag.includes(category)):true);
            default:
                return fa2erniggaalert.Type && (fa2erniggaalert.Type.toLowerCase().includes(searchTerm.toLowerCase())
                    |fa2erniggaalert.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
    });





    return (
    <div className="home h-full w-full grid grid-col-3 grid-row-3 items-start">
        <TheBAR TypeTerm={TypeTerm} setTerm={setTerm}/>
        <div className="w-screen flex flex-row justify-start items-start">
            <DropDownniiga setArea={setArea} setAge={setAge} setCategory={setCategory} setSubject={setSubject} setSpecial={setSpecial}
             setHospital={setHospital} setSeason={setSeason} setType={setType} setGender={setGender} setGovernorate={setGovernorate}/>
             <button
                            className="bin-button z-20 h-12 mt-[130px] mb-auto ml-[30px] text-2xl font-bold"
                            onClick={deletethis}
                                                     
                        >X</button>
            <div className="home h-screen grid place-items-center mt-20 ml-[63px] w-[1000px]">
                <ThisThing  fa2erniggaalert={filter3adeyagedan}/>
            </div>  
        </div>
    </div>
)
}
export default Home;