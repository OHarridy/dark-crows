import {Avatar, Card, CardBody, CardFooter, CardHeader, Image, Progress} from "@nextui-org/react";
import {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OrgDonationPost from "./OrgDonationPost";
import CardPage from "./CardPage";

//TODO 1: Add tags to cards
export default function ThisThing() {
    var [fa2erniggaalert] = useState(
        [
            {tag:'Fruits and Vegetables', title: 'They need to be fed 3 chickens a day', body: 'Prove you\'re not racist through donating to our token black children, guaranteed to boost your PR levels by at least 69%.', author: 'Feeders',   id: 1, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1,                                                       source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
            {tag:'School', title: 'Cleanliness is key',                  body: 'I\'m the garbage man, I EAT GARBAGE.',                                           author: 'Garbage Man',   id: 2, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2,                                                                                               source: 'https://static.demilked.com/wp-content/uploads/2021/09/615174557e36d-6149dc29aada1_ooee48bo1kl71__700.jpg'},
            {tag:'Medication', title: 'The ocean could use some help',   body: 'Dolphins are known to torture small animals, bully the weak and sexually assault divers, donate if you think all of that is cool and want them to continue living.', author: 'Dolphin Lives Matter',   id: 3, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/marine_debris_hawaii_NOAAphoto.jpg?h=607ea137&itok=ozgMBxq0'},
            {tag:'Medical Devices', title: 'Nuclear bad boohoo',         body: 'Nuclear Energy cool and all but the waste it produces is almost unmanageable.',  author: 'Nukes Are Rad',   id: 4, donatedAmount: 20000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4,                                                                                            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmKYMOU6cpz4XUWpn5D77N1WPDpi9iSXeCwWgwZCkw&s'},
            {tag:'Stationery', title: 'It resurfaced',                   body: 'Fifth lorem',                                                                    author: 'example', id: 5,  donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 5,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMS06kJdjE7IED7dqcClRGhQ7Ty2o9hnJXsYuxKMd7g&s'},
            {tag:'Clothes', title: 'It stayed',                          body: 'Sixth lorem',                                                                    author: 'chapter', id: 6,  donatedAmount: 700 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 6,                                                                                                    source: 'https://cdn.britannica.com/02/154202-050-001D9E0A/Bulldozer-sanitary-landfill-waste-garbage.jpg'},
            {tag:'Board Games', title: 'It stayed',                      body: 'Seventh lorem',                                                                  author: 'chapter', id: 7,  donatedAmount: 900 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 7,                                                                                                    source: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/Poverty_1672659305.webp'},
            {tag:'Clothes', title: 'It stayed',                          body: 'Eighth lorem',                                                                   author: 'chapter', id: 8,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw37Fje-w8cnkt5HhMmq6PsMnCLqoUIhXEdvHeESyydg&s'},
            {tag:'Books', title: 'It stayed',                            body: 'Ninth lorem',                                                                    author: 'chapter', id: 9,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Toys', title: 'It stayed',                             body: 'Tenth lorem',                                                                    author: 'chapter', id: 10, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Medical Equipment', title: 'It stayed',                body: 'Eleventh lorem',                                                                 author: 'chapter', id: 11, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Blood', title: 'It stayed',                            body: 'Twelveth lorem',                                                                 author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Blood', Area:"", Governorate:"", Hospital:"", title: 'It stayed',         body: 'Thirteenth lorem',                                                               author: 'chapter', id: 13, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Canned', title: 'It stayed',                           body: 'Fourteenth lorem',                                                               author: 'chapter', id: 14, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Stuffed Toys', title: 'It stayed',                     body: 'Fifteenth lorem',                                                                author: 'chapter', id: 15, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Sports', title: 'It stayed',                           body: 'Ninth lorem',                                                                    author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {tag:'Fresh', title: 'It stayed',                            body: 'Ninth lorem',                                                                    author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
        ]);
    return (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {fa2erniggaalert.map(fa2ernigga => (
                <div id={"fa2ernigga" + fa2ernigga.id} className="fa2ernigga-preview " key={fa2ernigga.id}>
                    <a href="/DonationPage" rel="noopener noreferrer">
                        <Card
                            className="w-[300px] h-[500px] hover:shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out"
                            style={{borderRadius: 0}} isHoverable={true}>
                            <Image
                                radius="none"
                                isZoomed={true}
                                src={fa2ernigga.source}
                                style={{width: 300, height: 278, borderRadius: 0}}/>
                            <CardHeader className="justify-between pb-0">
                                <Avatar className="mr-3" showFallback
                                        src='https://ucarecdn.com/a79eb9e5-7dc3-4f37-aeee-6bbab322c28c/-/format/auto/-/preview/3000x3000/-/quality/lighter/1200634207984820-Lael%20Group-1x1-MCC-1.07.png'></Avatar>
                                <h1 className="text-medium font-semibold leading-none text-default-900 mr-auto">{fa2ernigga.author}</h1>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small h-[69px]">
                                <p>{fa2ernigga.body}</p>
                            </CardBody>
                            <Progress
                                style={{fontFamily: 'Roboto Condensed, sans-serif'}}
                                className="max-w-md gap-0 p-1"
                                label={fa2ernigga.maximumAmount + " requested"}
                                valueLabel={fa2ernigga.donatedAmount / fa2ernigga.maximumAmount * 100 + "%"}
                                showValueLabel={true}
                                aria-label="Donation progress" color="success"
                                classNames={{
                                    track: "drop-shadow-md border border-default p-0",
                                    indicator: "bg-gradient-to-r from-green-400 to-blue-600 p-0",
                                    label: "text-xl text-green-700 p-0",
                                    value: "text-default-600",
                                }}
                                maxValue={fa2ernigga.maximumAmount} value={fa2ernigga.donatedAmount}/>
                            <CardFooter className="py-0 mx-0 px-1.5">
                                <div className="flex gap-1 p-0 my-auto mx-0">
                                    <img className="w-5 h-5 my-1 p-0 mx-0"
                                         src="https://i.pinimg.com/236x/a5/2b/88/a52b8861e57c7ba5fd593c6f2fa61e11.jpg"></img>
                                    <h1 className="font-semibold p-0 mx-0 my-1 text-default-400 text-small">{fa2ernigga.donatorCount}</h1>
                                    <h1 className=" text-default-400 p-0 my-1 text-small">Donated</h1>
                                </div>
                            </CardFooter>
                        </Card>
                      </a>  
                </div>
            ))}
        </ul>
    );
}
