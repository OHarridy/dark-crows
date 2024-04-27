import {Avatar, Card, CardBody, CardFooter, CardHeader, Image, Progress} from "@nextui-org/react";
import {useState} from "react";


export default function ThisThing() {
    var [blogs, setBlogs] = useState(
        [
            {title: 'They need to be fed 3 chickens a day',     body: 'Prove you\'re not racist through donating to our token black children, guaranteed to boost your PR levels by at least 69%.', author: 'Feeders',   id: 1, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1, source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
            {title: 'Cleanliness is key',       body: 'I\'m the garbage man, I EAT GARBAGE.',author: 'Garbage Man',   id: 2, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2, source: 'https://static.demilked.com/wp-content/uploads/2021/09/615174557e36d-6149dc29aada1_ooee48bo1kl71__700.jpg'},
            {title: 'The ocean could use some help',    body: 'Dolphins are known to torture small animals, bully the weak and sexually assault divers, donate if you think all of that is cool and want them to continue living.', author: 'Dolphin Lives Matter',   id: 3, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/marine_debris_hawaii_NOAAphoto.jpg?h=607ea137&itok=ozgMBxq0'},
            {title: 'Nuclear bad boohoo',       body: 'Nuclear Energy cool and all but the waste it produces is almost unmanageable.',author: 'Nukes Are Rad',   id: 4, donatedAmount: 20000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmKYMOU6cpz4XUWpn5D77N1WPDpi9iSXeCwWgwZCkw&s'},
            {title: 'It resurfaced', body: 'Fifth lorem', author: 'example', id: 5, donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 5, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMS06kJdjE7IED7dqcClRGhQ7Ty2o9hnJXsYuxKMd7g&s'},
            {title: 'It stayed',     body: 'Sixth lorem', author: 'chapter', id: 6, donatedAmount: 70000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 6, source: 'https://cdn.britannica.com/02/154202-050-001D9E0A/Bulldozer-sanitary-landfill-waste-garbage.jpg'},
            {title: 'It stayed',     body: 'Seventh lorem',author: 'chapter',id: 7, donatedAmount: 90000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 7, source: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/Poverty_1672659305.webp'},
            {title: 'It stayed',     body: 'Eighth lorem', author: 'chapter',id: 8, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw37Fje-w8cnkt5HhMmq6PsMnCLqoUIhXEdvHeESyydg&s'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
        ]);
    return (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {blogs.map(blog => (
                <div id={"blog" + blog.id} className="blog-preview " key={blog.id}>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <Card
                            className="w-[300px] h-[500px] hover:shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out"
                            style={{borderRadius: 0}} isHoverable={true}>
                            <Image
                                radius="none"
                                isZoomed={true}
                                src={blog.source}
                                style={{width: 300, height: 278, borderRadius: 0}}/>
                            <CardHeader className="justify-between pb-0">
                                <Avatar className="mr-3 mb-1" showFallback
                                        src='https://ucarecdn.com/a79eb9e5-7dc3-4f37-aeee-6bbab322c28c/-/format/auto/-/preview/3000x3000/-/quality/lighter/1200634207984820-Lael%20Group-1x1-MCC-1.07.png'></Avatar>
                                <h1 className="text-medium font-semibold leading-none text-default-900 mr-auto">{blog.author}</h1>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small h-[69px]">
                                <p>{blog.body}</p>
                            </CardBody>
                            <Progress
                                style={{fontFamily: 'Roboto Condensed, sans-serif'}}
                                className="max-w-md gap-0 p-1"
                                label={blog.maximumAmount + " requested"}
                                valueLabel={blog.donatedAmount / blog.maximumAmount * 100 + "%"}
                                showValueLabel={true}
                                aria-label="Donation progress" color="success"
                                classNames={{
                                    track: "drop-shadow-md border border-default p-0",
                                    indicator: "bg-gradient-to-r from-green-400 to-blue-600 p-0",
                                    label: "text-xl text-green-700 p-0",
                                    value: "text-default-600",
                                }}
                                maxValue={blog.maximumAmount} value={blog.donatedAmount}/>

                            <CardFooter className="py-0 mx-0 px-1.5">
                                <div className="flex gap-1 p-0 my-auto mx-0">
                                    <img className="w-5 h-5 my-1 p-0 mx-0"
                                         src="https://i.pinimg.com/236x/a5/2b/88/a52b8861e57c7ba5fd593c6f2fa61e11.jpg"></img>
                                    <h1 className="font-semibold p-0 mx-0 my-1 text-default-400 text-small">{blog.donatorCount}</h1>
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
