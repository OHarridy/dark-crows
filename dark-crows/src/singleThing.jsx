import {Avatar, Card, CardBody, CardFooter, CardHeader, Image, Progress} from "@nextui-org/react";
import {useState} from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BuildingOffice2Icon } from "@heroicons/react/20/solid";

export default function ThisThing(props) {
    
    ThisThing.propTypes = {
        fna: PropTypes.array.isRequired,
    };

    const fna = props.fna;
    const [possibledonation, setPossibledonation] = useState(["DonationPage","DonationPage2", "DonationPage3", "DonationPage4", "DonationPage5", "DonationPage6", "DonationPage7", "DonationPage8", "DonationPage9"]);
    return (
        <ul className="grid lg:grid-cols-3 gap-3">
            {fna.map(request => (
                <div id={"fn" + request.id} className="fn-preview" key={request.id}>
                    <Link to={"/"+possibledonation[request.id%9]}>
                        <Card
                            className="w-[300px] h-[500px] hover:shadow-lg hover:scale-105 transform transition-all duration-200 ease-in-out"
                            style={{borderRadius: 0}} isHoverable={true}>
                            <Image
                                radius="none"
                                isZoomed={true}
                                src={request.source}
                                style={{width: 300, height: 278, borderRadius: 0}}/>
                            <CardHeader className="p-2">
                                <Avatar className="mr-3 min-w-10" showFallback
                                        src='https://ucarecdn.com/a79eb9e5-7dc3-4f37-aeee-6bbab322c28c/-/format/auto/-/preview/3000x3000/-/quality/lighter/1200634207984820-Lael%20Group-1x1-MCC-1.07.png'>    
                                        </Avatar>
                                <div className="mr-auto">
                                    <h1 className="text-medium font-semibold text-default-900 ">{request.title}</h1>
                                    <h1 className="text-small text-default-600 font-light">By: {request.author}</h1>
                                </div>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small h-[69px]">
                                <p>{request.body}</p>
                            </CardBody>
                            <Progress
                                style={{fontFamily: 'Roboto Condensed, sans-serif'}}
                                className="max-w-md gap-0 p-1"
                                label={request.maximumAmount + " requested"}
                                valueLabel={request.donatedAmount / request.maximumAmount * 100 + "%"}
                                showValueLabel={true}
                                aria-label="Donation progress" color="success"
                                classNames={{
                                    track: "drop-shadow-md border border-default p-0",
                                    indicator: "bg-gradient-to-r from-green-400 to-blue-600 p-0",
                                    label: "text-xl text-green-700 p-0",
                                    value: "text-default-600",
                                }}
                                maxValue={request.maximumAmount} value={request.donatedAmount}/>
                            <CardFooter className="py-0 mx-0 px-1.5">
                                <div className="flex gap-1 p-0 my-auto mx-0">
                                    <img className="w-5 h-5 my-1 p-0 mx-0"
                                         src="https://i.pinimg.com/236x/a5/2b/88/a52b8861e57c7ba5fd593c6f2fa61e11.jpg"></img>
                                    <h1 className="font-semibold p-0 mx-0 my-1 text-default-400 text-small">{request.donatorCount}</h1>
                                    <h1 className=" text-default-400 p-0 my-1 text-small">Donated</h1>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                </div>
            ))}
        </ul>
    );
}
