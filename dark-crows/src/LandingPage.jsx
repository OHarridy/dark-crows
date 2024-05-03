import Button from "./generalButton";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from 'react-toastify';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Seamless Communication.',
      description:
        'ShareLelkheir utilizes the most modern networking technologies to ensure smooth, easy , and fast communication between Donors and Organizations.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Speed.',
      description: 'Through ShareLelkheir you can reach those in need in speeds never before thought possible.',
      icon: LockClosedIcon,
    },
    {
      name: 'Global Reach.',
      description: 'Using SharelelKheir you are able to reach a wide net of Donors/Reciepients, so whether you are a donor or an organization, Sharelelkheir is designed for you!',
      icon: ServerIcon,
    },
  ]

  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
const LandingPage = () => {
    return (
<div className="landing-page-container">
            <div className="fixed top-0 left-0">
  <img src="transparentLogo.png" alt="Logo" width={150}/>
</div>

<div className="fixed top-0 right-0 mt-4 text-white font-bold py-2 px-4 rounded">
  <Link to="/Login">
  <Button text="Login" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline "/>
  </Link>
</div>
<div style={{height: "100vh"}}>

<div className="overflow-hidden bg-white mt-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">Revolutionizing the donation process</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introducing "ShareLelKheir"</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A Worldwide Platform that connects Donors to People in Need from across the globe. With your help we can make a difference. "ShareLelKheir" Aims to Streamline the Donation process it, making it more efficient and responsive for both donors and recipients alike. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

           <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl mt-8 ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 fade-in"
            width={2432}
            height={1500}
          /> 
        </div>
      </div>
    </div>
</div>

<div className="bg-white mt-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-green-600">
          Trusted by the world’s most Reputable Organizations
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Emblem_of_the_ICRC.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/3/38/IFRC_logo_2020.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/World_Food_Programme_Logo_Simple.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://seeklogo.com/images/C/CARE_Australia-logo-463155D120-seeklogo.com.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>

    <div className="bg-white mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>


</div>

      );
}
 
export default LandingPage;