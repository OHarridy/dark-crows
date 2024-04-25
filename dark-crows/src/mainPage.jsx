import {useState} from "react";
import {Avatar, Button, Card, CardBody, CardFooter, CardHeader, Progress} from "@nextui-org/react";
const Home = () => {
    var [blogs, setBlogs] = useState(
        [
            {title: 'It begins',     body: 'First lorem', author: 'mario',   id: 1, isFollowed: false, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1},
            {title: 'It ends',       body: 'Second lorem',author: 'yoshi',   id: 2, isFollowed: false, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2},
            {title: 'It returns',    body: 'Third lorem', author: 'maboi',   id: 3, isFollowed: false, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3},
            {title: 'It left',       body: 'Fourth lorem',author: 'again',   id: 4, isFollowed: false, donatedAmount: 200 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4},
            {title: 'It resurfaced', body: 'Fifth lorem', author: 'example', id: 5, isFollowed: false, donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 5},
            {title: 'It stayed',     body: 'Sixth lorem', author: 'chapter', id: 6, isFollowed: false, donatedAmount: 70000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 6},
            {title: 'It stayed',     body: 'Seventh lorem',author: 'chapter',id: 7, isFollowed: false, donatedAmount: 90000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 7},
            {title: 'It stayed',     body: 'Eighth lorem', author: 'chapter', id: 8,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8},
            {title: 'It stayed',     body: 'Ninth lorem', author: 'chapter', id: 9,isFollowed: false, donatedAmount: 100000 , maximumAmount: 100000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9},
        ]);

    const toggleFollow = (id) => {
        setBlogs(blogs.map(blog => blog.id === id ? {...blog, isFollowed: !blog.isFollowed} : blog));
    }
    return (
        <div className="home min-h-screen flex items-end mx-auto" style={{width:1400}}>
            <div className="flex" >
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {blogs.map(blog => (
                <div id={"blog" + blog.id} className="blog-preview max-w-[300px] "   key={blog.id}>
                    <Card  className="w-[300px] h-[200px] " style={{
                        borderRadius: '0px',
                        backgroundImage: `url('https://example.com/path/to/your/image.jpg')`, // replace with your image URL
                        backgroundSize: 'cover', // cover ensures the image covers the entire card
                        backgroundPosition: 'center', // center ensures the image is centered in the card
                    }} >
                       <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar showFallback src='https://images.unsplash.com/broken'></Avatar>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-900">{blog.author}</h4>
                                </div>
                            </div>
                           <Button
                                color="success"
                                radius="full"
                                size="sm">
                                Donate
                            </Button>
                        </CardHeader>
                        <Progress label={`EGP ${blog.donatedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}

                                  formatOptions={{style: "currency", currency: "EGP"}}
                                  aria-label="Donation progress" color="success"
                                  classNames={{
                                      base: "max-w-md p-1",
                                      track: "drop-shadow-md border border-default",
                                      indicator: "bg-gradient-to-r from-green-400 to-blue-600",
                                      label: "text-xl font-bold text-default-600 text-green-700",
                                      value: "text-foreground/60 text-default-600 text-blue-700",
                                  }}
                                  maxValue={blog.maximumAmount} value={blog.donatedAmount} className="max-w-md p-1"/>
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
                </div>
            ))}
            </ul>
        </div>
        </div>
    )
}
export default Home;