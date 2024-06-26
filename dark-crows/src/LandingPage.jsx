import Button from "./generalButton";
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { ToastContainer, toast } from 'react-toastify';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon , WifiIcon, SignalIcon, GlobeAltIcon , BoltIcon } from '@heroicons/react/20/solid'

const features = [
    {
      name: 'Seamless Communication.',
      description:
        'ShareLelkheir utilizes the most modern networking technologies to ensure smooth, easy, and fast communication between Donors and Organizations.',
      icon: SignalIcon,
    },
    {
      name: 'Speed.',
      description: 'Through ShareLelkheir you can reach those in need in speeds never before possible.',
      icon: BoltIcon,
    },
    {
      name: 'Global Reach.',
      description: 'Using SharelelKheir you are able to reach a wide net of Donors/Reciepients, so whether you are a donor or an organization, Sharelelkheir is designed for you!',
      icon: GlobeAltIcon,
    },
  ]

  const stats = [
    { id: 1, name: 'Donations every 24 hours', value: '44 million' },
    { id: 2, name: 'Recepients Reached', value: '100 million' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
const LandingPage = () => {

const [isVisible1, setVisible1] = useState(false);
const domRef1 = useRef();

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!isVisible1) {
        setVisible1(entry.isIntersecting);
      }
    });
  });

  observer.observe(domRef1.current);
  return () => observer.unobserve(domRef1.current);
}, [isVisible1]);

const [isVisible2, setVisible2] = useState(false);
const domRef2 = useRef();

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!isVisible2) {
        setVisible2(entry.isIntersecting);
      }
    });
  });

  observer.observe(domRef2.current);
  return () => observer.unobserve(domRef2.current);
}, [isVisible2]);


const [isVisible3, setVisible3] = useState(false);
const domRef3 = useRef();

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!isVisible3) {
        setVisible3(entry.isIntersecting);
      }
    });
  });

  observer.observe(domRef3.current);
  return () => observer.unobserve(domRef3.current);
}, [isVisible3]);


const [isVisible4, setVisible4] = useState(false);
const domRef4 = useRef();

useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!isVisible4) {
                setVisible4(entry.isIntersecting);
            }
        });
    });

    observer.observe(domRef4.current);
    return () => observer.unobserve(domRef4.current);
}, [isVisible4]);


    // const [isVisible2, setVisible2] = useState(false);
    // const domRef2 = useRef();
  
    // useEffect(() => {
    //   const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => setVisible2(entry.isIntersecting));
    //   });
  
    //   observer.observe(domRef2.current);
    //   return () => observer.unobserve(domRef2.current);
    // }, []);




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
<div>

<div className="overflow-hidden bg-white mt-20">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-500">Revolutionizing the donation process</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introducing "ShareLelKheir"</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                An International Platform that connects Donors to People in Need from across the globe. With your help we can make a difference. "ShareLelKheir" Aims to Streamline the Donation process, making it more efficient and responsive for both donors and recipients alike. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

           <img
            src="https://image.cnbcfm.com/api/v1/image/106806533-1607102792308-gettyimages-1283072124-20200930_fooddrive2_sdil0383.jpeg?v=1607102809&w=740&h=416&ffmt=webp&vtcrop=y"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl mt-20 ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 fade-in"
            width={2432}
            height={1500}
          /> 
        </div>
      </div>
    </div>
</div>

<div className={`bg-white mt-20 ${isVisible1 ? 'fade-in' : ''}`} ref={domRef1}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-green-500">
          Trusted by the world’s most Reputable Humanitarian Organizations
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

    <div className={`bg-white mt-32 ${isVisible2 ? 'fade-in' : ''}`} ref={domRef2}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 font-semibold text-grey-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-green-500 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>


    <div className={`bg-white mt-28 ${isVisible3 ? 'fade-in' : ''}`} ref={domRef3}>
    <section className="relative isolate overflow-hidden bg-white px-6 lg:px-8">
      <div  />
      <div />
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <img className="mx-auto h-20" src="https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
            <p>
              “Humanity is strongest when we stand together”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://www.onthisday.com/images/people/antonio-guterres.jpg?w=360"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">António Guterres</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">United Nations Secretary-General</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </div>
    
    <div className={`bg-white mt-20 flex flex-col gap-2 mb-50 ${isVisible4 ? 'fade-in' : ''}`} ref={domRef4}>
    <h2 className="order-first text-3xl font-bold tracking-tight text-green-500 sm:text-5xl text-center">
          Join us!
        </h2>
        <h2 className="text-center text-lg font-semibold leading-8 text-green-500">
          Join us and the millions of other users who have helped make a difference in the world!
        </h2>
        <h2 className="text-center text-lg font-semibold leading-8 text-green-500">
        Whether youre a donor or an organization, ShareLelKheir is designed for you!
        </h2>

        <div className=" text-white font-bold py-2 px-4 rounded flex justify-center">
            <Link to="/Register">
        <Button text="Register Now!" className="w-auto rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline "/>
        </Link>
        </div>

    </div>

<br/>
<br/>
<br/>


</div>

      );
}
 
export default LandingPage;