import {useState} from "react";
import {Avatar, Card, CardBody, CardFooter, CardHeader, Progress} from "@nextui-org/react";
const Home = () => {
    var [blogs, setBlogs] = useState(
        [
            {title: 'It begins',     body: 'First lorem', author: 'mario',   id: 1, isFollowed: false, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1, source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
            {title: 'It ends',       body: 'Second lorem',author: 'yoshi',   id: 2, isFollowed: false, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2, source: 'https://static.demilked.com/wp-content/uploads/2021/09/615174557e36d-6149dc29aada1_ooee48bo1kl71__700.jpg'},
            {title: 'It returns',    body: 'Third lorem', author: 'maboi',   id: 3, isFollowed: false, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/marine_debris_hawaii_NOAAphoto.jpg?h=607ea137&itok=ozgMBxq0'},
            {title: 'It left',       body: 'Fourth lorem',author: 'again',   id: 4, isFollowed: false, donatedAmount: 200 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmKYMOU6cpz4XUWpn5D77N1WPDpi9iSXeCwWgwZCkw&s'},
            {title: 'It resurfaced', body: 'Fifth lorem', author: 'example', id: 5, isFollowed: false, donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 5, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMS06kJdjE7IED7dqcClRGhQ7Ty2o9hnJXsYuxKMd7g&s'},
            {title: 'It stayed',     body: 'Sixth lorem', author: 'chapter', id: 6, isFollowed: false, donatedAmount: 70000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 6, source: 'https://cdn.britannica.com/02/154202-050-001D9E0A/Bulldozer-sanitary-landfill-waste-garbage.jpg'},
            {title: 'It stayed',     body: 'Seventh lorem',author: 'chapter',id: 7, isFollowed: false, donatedAmount: 90000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 7, source: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/Poverty_1672659305.webp'},
            {title: 'It stayed',     body: 'Eighth lorem', author: 'chapter', id: 8,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8, source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw37Fje-w8cnkt5HhMmq6PsMnCLqoUIhXEdvHeESyydg&s'},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9, source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
        ]);

    const toggleFollow = (id) => {
        setBlogs(blogs.map(blog => blog.id === id ? {...blog, isFollowed: !blog.isFollowed} : blog));
    }

    return (
        <div className="home min-h-screen flex items-end mx-auto" style={{width:1400}}>
            <div className="flex" >
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {blogs.map(blog => (
                        <div id={"blog" + blog.id} className="blog-preview max-w-[300px] " key={blog.id}>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <Card className="w-[300px] h-[300px] rounded-e-small">
                                    <img
                                        src={blog.source}
                                        style={{width: 300, height: 130}}/>
                                    <Progress
                                        classNames={{
                                            track: "drop-shadow-md drop-shadow-md border-2",
                                            indicator: "bg-gradient-to-r from-green-400 to-blue-600",
                                            value: "text-foreground/60 text-default-600 text-blue-700",
                                        }}
                                        maxValue={blog.maximumAmount} value={blog.donatedAmount}
                                        className="max-w-md m-0 p-0"/>
                                    <CardHeader className="justify-between">
                                        <div className="flex gap-1">
                                            <Avatar showFallback src='https://images.unsplash.com/broken'></Avatar>
                                            <div className="flex flex-col gap-1 items-start justify-center">
                                                <h4 className="text-small font-semibold leading-none text-default-900">{blog.author}</h4>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-3 py-0 text-small ">
                                        <p>
                                            {blog.body}
                                        </p>
                                    </CardBody>
                                    <CardFooter className="gap-3">
                                        <div className="flex gap-1">
                                            <p className="font-semibold text-default-400 text-small">{blog.donatorCount}</p>
                                            <p className=" text-default-400 text-small">Donated</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </a>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Home;