import {Progress} from "@nextui-org/react";


export default function ThisThing() {

    return (
        <div className=" min-w-300px min-h-300px max-w-300px max-h-300px mx-auto">
            <ul className="grid grid-cols-6 grid-rows-4 gap-2">
                <li className=" row-span-2 col-span-6 bg-blue-950 shadow-xl">
                    <div className=""></div>
                    <img style={{width: "100%", height: "200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4m9n-jPoFYCBDvaw-GS6gZwozDhssdSjQYsC5bGtIw&amp;s"/>
                </li>
                <li className="bg-white shadow-xl">
                    <div className="h-24 w-24"></div>
                </li>
                <li className="col-span-3 row-span-2 bg-teal-300 shadow-xl">
                    <div className="h-24 w-24"></div>
                </li>
                <li className="row-span-2 bg-red-600 shadow-xl">
                    <div className="h-24 w-24"></div>
                </li>
                <li className="row-span-2 bg-white shadow-xl ">

                    <div
                        className="w-full h-12 bg-gray-200 dark:bg-neutral-700">
                    </div>

                </li>
                <li className="bg-white shadow-xl">
                    <div className="h-24 w-24"></div>
                </li>
            </ul>
        </div>
    );
}
