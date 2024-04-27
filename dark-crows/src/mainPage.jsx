import {useState} from "react";
import {Avatar, Card, CardBody, CardFooter, CardHeader, Progress, Image, Divider} from "@nextui-org/react";
import ThisThing from "./singleThing.jsx";
const Home = () => {
    var [blogs, setBlogs] = useState(
        [
            {title: 'They need to be fed 3 chickens a day',     body: 'Prove you\'re not racist through donating to our token black children, guaranteed to boost your PR levels by at least 69%.', author: 'Feeders',   id: 1, isFollowed: false, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1, source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
            {title: 'Cleanliness is key',       body: 'I\'m the garbage man, I EAT GARBAGE.',author: 'Garbage Man',   id: 2, isFollowed: false, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2, source: 'https://static.demilked.com/wp-content/uploads/2021/09/615174557e36d-6149dc29aada1_ooee48bo1kl71__700.jpg'},
            {title: 'The ocean could use some help',    body: 'Dolphins are known to torture small animals, bully the weak and sexually assault divers, donate if you think all of that is cool and want them to continue living.', author: 'Dolphin Lives Matter',   id: 3, isFollowed: false, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/marine_debris_hawaii_NOAAphoto.jpg?h=607ea137&itok=ozgMBxq0'},
            {title: 'Nuclear bad boohoo',       body: 'Nuclear Energy cool and all but the waste it produces is almost unmanageable.',author: 'Nukes Are Rad.',   id: 4, isFollowed: false, donatedAmount: 20000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmKYMOU6cpz4XUWpn5D77N1WPDpi9iSXeCwWgwZCkw&s'},
            {title: 'It resurfaced', body: 'Fifth lorem', author: 'example', id: 5, isFollowed: false, donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 5, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMS06kJdjE7IED7dqcClRGhQ7Ty2o9hnJXsYuxKMd7g&s'},
            {title: 'It stayed',     body: 'Sixth lorem', author: 'chapter', id: 6, isFollowed: false, donatedAmount: 70000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 6, source: 'https://cdn.britannica.com/02/154202-050-001D9E0A/Bulldozer-sanitary-landfill-waste-garbage.jpg'},
            {title: 'It stayed',     body: 'Seventh lorem',author: 'chapter',id: 7, isFollowed: false, donatedAmount: 90000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 7, source: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/Poverty_1672659305.webp'},
            {title: 'It stayed',     body: 'Eighth lorem', author: 'chapter', id: 8,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw37Fje-w8cnkt5HhMmq6PsMnCLqoUIhXEdvHeESyydg&s'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
        ]);

    return (
        <div className="home min-h-screen flex items-end mx-auto" style={{width:1400}}>

            <div className="flex flex-col">
                <div className="h-[700px] w-[1000px]">

                </div>
                <ThisThing/>
            </div>
        </div>
    )
}
export default Home;