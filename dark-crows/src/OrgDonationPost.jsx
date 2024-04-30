
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Button from "./generalButton";
import { Link } from 'react-router-dom';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import { useState } from 'react';
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import {Tabs, Tab} from "@nextui-org/react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegistrationForm = () => {

  const [isVisible, setIsVisible] =useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formData, setFormData] = useState({
   
    title: '',
    description:'',
    category: '',
    docs:'',
    maxDonateAmount:0,
    services:''

  });



  function handleInputChange(e){
      const value = e.target ? e.target.value : e;
      const name = e.target ? e.target.name : 'gender';
        setFormData({
          ...formData,
          [name]: value
        });

  
    }
  

  const [posts, setPosts] = useState([]);

  function handleSubmit(e){
  e.preventDefault();
  const newPosts = [...posts, formData];
  setPosts(newPosts);
  localStorage.setItem('posts', JSON.stringify(newPosts));
  setFormData({
    title: '',
    description:'',
    category: '',
    docs:'',
    maxDonateAmount:0,
    services:''
  });

  setUploadtext('');
  toast.success('Request Posted Successfully! 🎉🥳');


console.log("ALL REGISTERED USERS", localStorage.getItem("posts"));

  }



function handleTabChange() {
  console.log(selectedTab);
}

function handleFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    localStorage.setItem('file', reader.result);
    console.log('Selected file:', file);
  }
  reader.readAsDataURL(file);

  
  setUploadtext('Photo uploaded successfully! ✔');
}

const fileInputRef = React.useRef();

function downloadFile() {
  const fileDataUrl = localStorage.getItem('file');
  if (!fileDataUrl) {
    console.log('No file to download');
    return;
  }

  const link = document.createElement('a');
  link.href = fileDataUrl;
  link.download = 'document'; 


  document.body.appendChild(link);


  link.click();


  setTimeout(() => document.body.removeChild(link), 0);

}

const [uploadText, setUploadtext] = useState('');



// TODO check that pw and confirm pw are the same
//TODO change behaviour of hide/show pw to be exclusive to each input


  return (  
    <div className="register-form-container"  >

<div className="register-image flex justify-center items-center">

        <img
            className=""
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYSFRYYGBQZGRoaGBgYHBwZHBwZGhoeGRwaGBkcIS4nIR4rIRwaJkYnLC8xNTU1HSQ7QDszPy40NTEBDAwMEA8QHxISHjUrISs/NDQ0NjQ0NDQ0NDE2NDQ3MTExPTQ0NDQ0NDY0NDQ2NDQxNDQ0NDQ0MTQ0NDQxNDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAQMEAgj/xABHEAACAQIDBQQFBwoFAwUAAAABAgADEQQSIQUGMUFREyJhcQcyUoGRFDNykqGy0hcjJEJic4KxwdEVFmOT8FNU8SU0Q7PC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EACgRAAICAQQBAwQDAQAAAAAAAAABAgMRBBIhMUEUUWEFIoGhMpGxE//aAAwDAQACEQMRAD8A2aIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIBF7c2ouGotWe5C2sBxLE2A+NpWcN6QqPZhqiMKvNFFx5hjYW+2T29mA7fC1qfPLmH0kIcfdtMUvzl4pM5+rvsqksdM1PZ/pAw7m1QNS6FhmHvK3t5nSWTC7XoVDZKqMeisCfhMHn148+vTykuJ54a+a/ksn6EvEyLY2+2Io2V/zqDk2jAeDc/fLZhvSBhWHeFRD0K5vgUJldrPdDV1yXeC5XiUyh6QsMz5GWoi8nYDL5kAkgSwvtrDquc1qYW1wc66jw1kYZqroPpkiTI/au1qeHVXqkqrMEFgT3jc8uA0Osp239/lAanhlLGxHaNoAeF1HE+ZsPOVrYe0sxbCYhi1Ctpmc3K1D6rAnx/mJODCerintjyy+7b3vTDVlpPTcqVDB1tY39kHjb+okzsnatLEJ2lJsy3sdLEHjYg8OImN1tn1xXGEYlqitkVSxK62IK34KRrJfFbTGDRsJh2btQ4atW4DOlu4g9kWtr4+cnaYx1ck25dGu3nN5Utg7ytWwj1rIa1MEugJXurcjrbMAbcpB430jEr+ao5WPNyCB5BeMjaz1PUwjFNvs0i8XmV4L0hYhNKqJUHUdw/ZcTtp791qmIo90U6OcB1HeLBjl1Yjle+nSMMotbU8cl/2ntAUgNLsQSBewAXVmZraKBxPiOsj8NvBmuSUdQMz5MwZV9rI4BZRzI+E53gQhWa11alUp35Kz2KluikixPLu8rkR9NOzdSr9sXw5RVLK7Byy6KFHqHUluHdEg1cnngtyNfWfU6MHSyoqXvlVR8Ba/wBk75BscxEQBERAEREAREQBERAKzvttj5Ph2t69TuKPMd5vcL/ZMemmelDAlqVOsOFNiG8nsL/ECZnNI9HF1zk7MP8ABxERLnhEREA5BjScRBKYn1ynzEMJmgNhHrY7D4qn8zkV+0AuLIpDI37RuR7/AAlN2zilq16tVBZWdmA/r77X98lNzdqvRxFOmCeyqNkZCe73tAwHW9vdeeLefBrRxVamosoa6joGAa32mVXZ67GpV5XvySe51E1Ex1FTZ3oWUdfXBHlqB/FK06kEggggkEHQgjSxE7sFjGoutVDZkII8bcVPUHhJrfDD3dMUoATEKrjwYKoYH7DHkzeJVprtFcnIgwJY86Nu3Zx3b4alUOrFQG+kvdb7RJKnh1X1VC342AF/O0zT0fbeWm5wrmyu10PIORqp6A2Hv85qAmLWGfQaexWQTOQJzESD0CIiAIiIAiIgCIiAIiIBE7x4cPhq6cbo3xAuPtEw4cJve0/mqn0G+6Zga8JeJyfqK5TERE0OaIiIBzEm9jbr4jEjMiZE9t9Afojif+az17wbn1cNT7UujqCA2VSpW+gOpNxeVyjZaebjuxwViIiWMSX3ZwxqYugAP1wx8FTvEn4WnO9mJFTF12XVc2UH6ACn7QZM7E/RsBWxi/PVG7NGP6ovluPtPuHSVAmVXLPTP7a1H35OJfq+GGM2XRFLvVKAUFR610XKy26218ZQZcPRvjQmIamTYVE0HV1Nx77XhjTNbtr6fBUDPmXn0ibGSmy4pAFztlcAaZrFg3mQDKNJTyZ3VOuTiz0YLDPUdKaeu7AKeh4g+61/dN7og5VubmwueptrMk9H2CL4tW/VpqznzIKD7Tf3TXxM5dnT0EcQb9zmIiVOgIiIAiIgCIiAIiIAiIgEfto2w9Y/6b/dMwlF09wm7bYF6Fb92/3TIT0f4dBgqZAF2zFj1OYjXyAtLJ4PDqaf+s1HOODI4mubd3TwlXvELRc6B1IW58VvZv5zPNu7u1sKbsM9M8Ki+r4ZvZMupZOfdpJV89ohhLzujukGUYvEgBAMyI3Ajjne/LmB8ekityNiDEV8zi9KnZm6M1+6vlxJ8potZPlFTs//AIEa1TpUcahB+yvPqdOTSJM30mnTW6X4PXgMSXN1TLRt3WOhboVW2i25nj0kfvzb5FXv7It55haT9rcJm3pE26HYYSmbhSDUI4FuSe7ifdKrs918lCt5KJERNTgFuxZ/9Io2/wCsb/WeVKXHZCfKNmYjDqL1KTh1UcSNG087OJTyJVHpuWVGXjCPmdlGoVYOpKspBUjiCOBE64ljzrjk0bA7dobRpDCYi6VWtYjQF14MhPBv2T4ym7e2O+Fqmm2q8UcaBl/uOBEj6blSrDipDD3EGbbi8DQxdJc6q6sAynmLjirDUHylOme+C9TF5/kv8Kl6Lqa5cQ2ufMgPTLa4set83wE0ORew9jUsLTNOmDYsWJY3JJ6nwGnukpKN5OlRDZBRZzERINhERAEREAREQBERAEREA8W1vmav0H+6ZT/RvtemaPyVmAdSxUHS6Mb6eRJFpcNq/M1foP8AdMwReA90vFZR4NVc6pppH6ArUlYWZQw6MAR9s8GJ2YMrKgGVgQ1NtUYHlY+r7vgZj+H21iU0SvUA6Zif53neN5sZ/wBw/wAR/aNrKeura5TNE2Hgxg8LXYKQQ1RwG4926qpPP1QL+Mn9nYbs6apxIHePMsdWY+JJJlQ2Rtx8Vg6gqW7RXRGYC2ZWdbNbra87t6d8xQzUaID1hoxOqp4Hq3hy59JGMnojbXGG7wejfTeUYdOzpm9dhoPZU8XP9Jk7tc3JJPMk3JPUmfdeu7szuxZmN2Y8SZ1y6WDlX3u2WfB7aOzmdO0XU3sq6d4AhWbVr2BIB006zu/wDE3tkF/pp1Ue1+0vxnzg9rMgUZEcoHVWbNcK5uy91gCL3OvUz3DempmzdnSvx/X6qfb6osFUq8cs+MCmJwrdtT7rANnXukFVsT3b99e8DdeHUSexmEGNUhqa0caubLlKlahUAsjZSbMAR3W1F+khqW20ytUdAaoWoqIFYKO0UKe/nvl0uQQTfgRI+vteozh0CowqGqMmbWo3FjmJPAWtwtfrIwbRnGKxnK9jwOhBIIsQbEHQg34ET4ls3rw6VqdLaFNbLVGWqBycXFz8Le4SsLSYrmCsVHFspyjzYCwlkzCytp4XJ1S9ejrbhV/krnuMCad+TDUqPAjW3hKMZ2YesyOtRDZlIZT0I1ENZQotdc00foAGfUhd29rjE0FqgWb1XXo44+7n5GTUyZ9BCSlFSXk5iIkFhERAEREAREQBERAEREA8W0/mqv7tvumYInATfNp/NVfoN90zAxwHlLxOT9R7j+ROROImhzS4bskpgMdUtyAHnl0I8swPulRZibk6km5J4kniZfdmUMux67+32jfB8n/5lCMqj1XrbGK+CU3ZwdOtiEo1QSrZh3TlIIFwb+6SNPZtBqGNq5GvQcqneNrE5Rm62IvPLuYP02j5t9xpZ9k7KYJi6dTKoq11YXddUFS7Xs2ml9JD7L0wUorj3KqcJQw4Xtw71WUMaaEKqK2o7RiD3iNbAaTtx2zaLUPleGzhFYJVpvYspPBgw4jUT07Z2BiKletUXIVZ3KntEHdvZdL9LT27M2PVTCYqk2TPUy5F7RNbcdb6QFDMnFrgiaWzqFKgmIxGdzVJ7Okhyd1TYszfDTynztbZVMUaeLoMxpOxQq+rI4vpfmNDJbbWxqr0MGiZC1KmyuO0QWYlSBqdeBnj2vXSjg6eCDK1XOalTIcyrx7uYaE8PhAlFJNNcJfs6Ng7xDDo9CpSFai5zBWto3kQQQbAyyYHeGp2TYmqiJg8pSlRVRd2OgCnoLEXsBM9lxxA+UbLplNXwzWdRxsLqW+qc3xhoUWSaaz0uCmnj/Tp4ReDEueNvnktG4m2hh6xpubUquhJ4B/1T7+HwmuBp+e5ru4e02r4YZzd0JRieJA1Un+Ej4TOS8nU0N+fsZaROZwJzKHTEREAREQBERAEREAREQDx7T+aq/u2+6Zga8B5TfdpfNVPoN90zAl4CXicr6j3H8iIhjoZocxGnGnl2Lb/AEb/AFmzf1mZma3tqlk2W6ezQUfACZ/uvsVMXUekzspC51KgG4Bsb38xKR6OhqYOTjFex6t2cdhsMj4lyzYkZlSmOABAsx005i5PAStP3mLMAWYkk9STc/bLNsLd6hiHrp2jqKTd0gL3kBIuehuD7pF7G2U2JqFKZsg7zO3BU5FvG3Lz6STKUZuKjweOpgXWmtZkIpMbKxGhI/8AB5cjOgKvMac9Be3h4y0Lg8JUIwwx1Q2ayZkPZZuHd8zz4ecg9sbNfD1Go1AMwFwRwZTwYf8AORkFJVtcrolt5N3qWFSi6uzGpqAVUWQAEnTn3h9sbw7v08NSo1EqM/a6qCqgZSua9xz1EkvSB8zgv3bfdpzjfb/2uA/dj7iQjecI/dx0kUuSewtsNhamddVOjryZeY8/GRs78Fhmq1FpL6zsFHvPGWZ5K21JY7JXezZ6Ua4NMWp1VWog6Zr3A9/LleQUs+/lRflCUVNxRpIhPjqbedsvxlYhFr0lN4OZObqbcOFrBifzT2WoPDk48R/K8gpyIaKQm4SUl4P0DRqBgGBBUgEEcCDqCJ2zM9yN7EpKMNiGyqD+bY3IAPFW6AHgfG00im4YBgbg6gjgRMmsH0FNsbI5TO2IiQaiIiAIiIAiIgCIiAeTaPzVT6DfdMwJeAm/Y/5up9Bv5GYCvAS8Tk/Ue4/kThuB8pzDDQ+U0OcuzZt6h+gVh/pf2lH9Gx/S2/dN95Zdd4K6vs6q4Nw1HNfwIBla3F2S9A1MXXGRAhC5tCQbMW8BYD4zNdHVtTdsWvCOncM/nMaf2W+808m6mOw9PCYhHrKlSsrIAb6DIVUkgdSZ7tm7cdlV/lGGol3ZWU0gGVBmIZjmHGw42GsiK+9NcMygYdgCQGFIWYDmNeBkmUpRik89Z/ZWs+nHUf8ANJcvSQwL4duZpG566j+5kd/m3EexQ/2h/efVTfHEtYstFrCwvTB06DWMNsxjOCi1nv4JTf8AH5jA/u2+7TnG+o/RcB+7H/1pIHam362IVUq5Cqm65Vy20tbQ8PCNqbwVsQi06mTKpuuVcpFhYC9+n8owy07ovPykRE7KNdkYVENmQ5lPQjhOuS+7exmxVZU4IO9UbovTzPCWZ5q4uUlgld+cEA1HFgW7dFLDowUG48wfslTlj3y2utesEQ/maQypbgSNGYeHADylchdF72nN4EREkwJndNVbF0kqKrI5KlWFxqpyn4gTaaVJVUKoAUCwAFgB0AEwbZ2J7KqlX2HVvgbmbpgsWlRFqIQysAQRM5HW+nyW1ryeuJwDOZQ6QiIgCIiAIiIAiIgHlx/zdT6DfyMwFeAn6CrUwwKngQQfIi0qC+j7Ce1VP8Q/DLxeDw6uiVrW0y2cTVvye4TrV+sPwwfR7g/aq/WH4ZO5HjWht+DO6e2660Wwwc9iwKlSAbA8QCdQJxjdtV6yinUqMUAACjRdOFwOPDnNF/J5hPaq/WH4YPo+wntVfrD8MjKLekv6z+zK7ziar+T3Ce1V+sPwzj8nuE9qr9Yfhk5RX0NvwZXE1Uej3Ce1V+sPwx+TzCdav1h+GNyHoLfgyqJqo9HuE9qr9YfhnfgdyMLSdagDsVNwHa4vyNrC8bkTHQWZ5wVnC0k2bQWvUQPi6t8itwRbX16cr+JtPDtDelTSelhqAoGob1GUi5J1IW3W5104y+7X3Ww+IftKmfNa2jsBboBwE8Y3BwXR/rtIyj0SotX2xwkZLE1r/IOC9l/rtA3CwXsv9dpO5Hm9Bb8GTRNb/wAhYL2X+u0+TuHgvZf67RuQ9BZ7oyYST2Vt7EYYMtJ7KeKsMy36gHgZop3BwXSoP4z/AFnw3o9wnJqo/iH9RG5Fo6O6DzFr+zv3O3l+VJkcgV09cDS4vYMB/Pp75ahKps3cqhQqLWR6uZTp3ha3MEBdR4S0rwlHg6VO9RxPs+4iJBsIiIAiIgCIiAeLaNdkpVHVczKrMFHMgXAlU3e2yqtVDVKTKKVN1KkoCbNde+7XtYC/jrLsRI7H7Io1QA6KSCCDlUnQ3tdgdDJTMpxk3mJFJvShTDOQgasLsucdy1Nn1NtdQF1tx908OI3pZ6aslqemFd2DBsoq1sro1xb1QdfHlJ+hsDDKoXsKbWAGZkUsbc2OXUz0ps2iqsi0qYRvWUIoVvpACx98ngqo2PtkLj96UR3RQjhVpENnAuajlCNAfVAze/lxnlxO3AWpVu4iLiKtEktfMliodTp+tlvxtfjJ/wDwTDf9vR/20/tPupsugwVWo0yq6KCikKDxCgjT3RwNtj8kDuxtCrUY53LD5NSfl6zPVBbQcwq/CdOB29ehgs9UF6hy1GDKpH5tyWYWPAgaaa+Vpa6eGRTdUUGwW4AByjgNOQudJ5TsTDE3OHpXPE5F/tGRskksMiMHvDTVa2Zy5SqKad5WZyVQDKAF0LE9RxN+nZiN6aa08wX87n7I02ZUKvzztcgKLetqJIPsHDEW+T0teYRVPuIFxFPYOGUW7CmeOrIrE31N2YEn3xwSo2e5BbI3rGSoa7Kciq6kWDMrF1y5QT3wVtodQynS8ndn7XWoKmZTTamQHWoVGXMoYG4JFiD1n02wcKQQcPSsf2E/tOzC7Ko00ZFprlY3YEZsx4d6/HgJHAjGxds6Np7T7MUsoDCpVWlcNbLmzXbgbkFbWkTtDa7U3ShmICPh81RiLstQvcMMoA9UfHlJzGbMp1E7MrlW+YZO6Va98yleDX1vOrCbFoorqV7TOQXar3yxHDMW6dOUCUZN8MjsTvQi1GpgIcr0UzZwL9oe8eH6o/4J1/5jDpSYEKz4kU8quCSoqMmY3XVSBmtYaHjJn/A8N/0KP+2n9p9U9lUEOZaNNWHAqigjyIEngbbPLKbjt4a1nVagD0xiwcuWxCKGpPbXkR4XvPdvRj2UUkJRQaVRw7hiHcKFFNQrL3mDMb+HCT2H2LRVqhCLZxYrkUALaxWwHA8dZIdmLWsLctIyVVcmnllfw28afoq3Q9qhLsHACFUB4a8SbceXOd2F3loswQgqrZsjsVCPkbK2XX+YF52/5cw2fP2aam5TKuXgBwy+/wAzPpN3cKCT2FM35FQVF9TlU6Lc9BI4JSt90Q2C21nXDOKjFqlUIUzoSAGfvmyXIIA000trpc29eE8eH2XQRsyUaat7SooPxAvPaIZpBSXZ9RESC4iIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgH/2Q=="
            alt="ShareLelKheir"
        />
    </div>
<div className="register-page-slider-container">
<ToastContainer />
  <div className="flex flex-wrap gap-4">
       
        </div>
        </div>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Post Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Enter the post details.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            

          


            <div className="sm:col-span-4">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
               Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  placeholder=" Enter post title"
                  value={formData.title}
                  onChange={handleInputChange}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

         
            
            {/* category dropdown */}
            <div className="sm:col-span-3">
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
              </label>
            <Select
            name="category"
      className="max-w-xs"
      label="Select category"
    value={formData.category}
       onChange={handleInputChange}
    >
      <SelectItem
        key="Food"
        startContent={<Avatar alt="Food" className="w-6 h-6" src="https://www.reshot.com/preview-assets/icons/Z7Q824U59M/food-and-drink-Z7Q824U59M.svg" />}
      >
        Food
      </SelectItem>
      <SelectItem
        key="Toys"
        startContent={<Avatar alt="Toys" className="w-6 h-6" src="data:image/png;base64,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" />}
      >
        Toys
      </SelectItem>
      <SelectItem
        key="Appliances"
        startContent={<Avatar alt="Appliances" className="w-6 h-6" src="https://static.vecteezy.com/system/resources/previews/020/274/718/non_2x/electric-appliance-icon-for-your-website-design-logo-app-ui-free-vector.jpg" />}
      >
        Appliances
      </SelectItem>
      <SelectItem
        key="Clothes"
        startContent={
          <Avatar alt="Clothes" className="w-6 h-6" src="data:image/png;base64,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" />
        }
      >
        Clothes
      </SelectItem>
      <SelectItem
        key="Medical Supplies"
        startContent={
          <Avatar alt="Medical Supplies" className="w-6 h-6" src="https://www.shutterstock.com/image-vector/medical-equipment-icon-260nw-1078945886.jpg" />
        }
      >
        Medical Supplies
      </SelectItem>
      <SelectItem
        key="School Supplies"
        startContent={
          <Avatar alt="School Supplies" className="w-6 h-6" src="https://www.reshot.com/preview-assets/icons/L2WZTMQH4D/school-L2WZTMQH4D.svg" />
        }
      >
        School Supplies
      </SelectItem>
      <SelectItem
        key="Blood Donation"
        startContent={
          <Avatar alt="Blood Donation" className="w-6 h-6" src="https://www.reshot.com/preview-assets/icons/PVXSZJLM9Y/blood-donation-PVXSZJLM9Y.svg" />
        }
      >
        Blood Donation
      </SelectItem>
      <SelectItem
        key="Services"
        startContent={<Avatar alt="Services" className="w-6 h-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8AAAABAQFQUFDW1tb8/Pw5OTnT09Pz8/OJiYk+Pj7Q0ND29vb5+fnv7+/m5ube3t7o6Oipqam4uLh4eHjHx8cxMTGUlJTAwMBWVlahoaGsrKxFRUUdHR07OzsiIiJvb29lZWUWFhaFhYUqKipra2tdXV2YmJgNDQ1KSkpUVFQyMjJ+fn6Hh4e7u7utvlvoAAAOWUlEQVR4nO2di5qqKhSARaOxLNPKNLWym9VMM+//eFtESxMUi5T25/rO2TNjhvyCC1gXlKROOumkk0466aSTTjrppJNOOhFF9J52k94Etl0d/mIFK3CTs+LpbVeItzgHkJPzSW27SnwF/gA5J2BjtV0nvmKBiPDeguh3e9R2pTgKlGwggwwhQjyabVeLo0BpnuNDiECZtF0trhLmOmlM+GO0XSmuMiwS7nptV4qrbIq9FGhtV4qn6LtHwkictmtVXyCkzcV6ZwLhlHI2vRhhBUp/oEAog8H400jU2XVgkYbxseQWGjAiDEZjwslwYl9dMdWstkMVXxYrB3WzMBwiQr9nFu+HOog/dQWc8MTzsohjpeX73kSbHg+A1EujFYZtGbl2hEaQFCPenM7ZxFNrNM5N7wujsTbdxosmWS4Q4gOK7dxPh853/AH6bCDUQxqpkp944hkjnq8TKa7e2Nn7ZDyQOXw4uiYuRHL76UGE2C5TTqDkLNJ+GE+wQwPV1zkuMAeRLwO5W7oq+sJ8dwcUChFK1ureTvHPgyVN4u5ZhpeBPCuOpC/BQymiIMJYyWQ0SfzbNvuwVSDGP5bxxE7OHR2QhpMW5AEw/Utm4ktoil+If7eFQNTlQl/ER1gBAX5YH78QF/rXNh1p+Z62Rg1AkI40j8dAKIJJbluPpY7IYCOCqSNkUJhPAgpBCKXfYi/lR/gtQi/V2QaFpwDBrG06CTWi9x5EVOReEMP44B2IqMBQFIPjOOCvbFCBQ3FsVcaSNyIqbiXCQ5gItPp8FWpc2EmoFaK7K67iXyQMhQKUpD0/PIy4EgxQggrfNgSJnUAc0RaVhDkHaSWh2zbRg4yOFYAyYWlU1YhCyWxTMuinjbYbhsH1Ot9eDrcmpQLKYN42U07MoESVYpJV4Fm9ianr+sTQ/vZ9UGoFiD44C2X4dnbUyuKV7c419KzmUCczJb4plK+J1oj6tQQwNimpRcUIZ6tHA0/+xojkJNao/U1OJ9BE1T+nqxyRrInRzNumA8pgN1DJfNFBb0FHlMFSGHWq9ymE8fyZ5giNxfKpNn8ANsJMvS2KIo3r7pV9E5YjCuKdgdKVoi5Q1U9V3/67uTyKiARnZDtyoBKCbaXRGp7OVMJN28EMSUSBTu2kYMeiK5aUMePWxdsMXYBwrE/mND3DZCqDknEmF4C0qTMZtYQHVcPyBoGySFmIFQxZ7Lk46I12jyKN6m+vrtPTmwWFVphDoXQyRm0/oUzecuX2vUYti1Yce3Bb7JHqhwzWrKqwENeXFpFbTzYZvDC6ZPztFEHxFGwdixhQ9NiY0eUODWpWjcHsVMcaaJLC3h7bk/mOvS7Ijl9tHZWBz2rQheqS4Y7J4NqUmwZKUybCLWuF4HjAYMaKFoyiEV7Zi5xV8glIWGt5Z30moc1eJJvq6gi5SUeYyp69yA99DufMAzScfiJhDUMSHNGsBK0Rzpgemz5zdprqs5QHrs2tLgwmd+h5ylrepLo8uVl31HgO7isnepUY7zmU3FKfQHqlS5NpRMY2rQB1fYi66RdjcX2qNTLjbWxy8RSJ6SqrDAuxflG3YgkPhY/pl8TCFnujYXsNHI10w3Gv4XBHs0FEjcimTRW6sQ0clLk900yVmH3yVsncUJpmlZkSf+KoMRrgfpw5rw2BSCSVTsiSgTdZ05twhq/xfpIKudBt3ofKfqoGlCaMDv6Ike8NpRPVJFy90FftkudYmGRo6gQAHZ2X1nLkUkMcUNxXUwRVoi9L/IcgoMb+QAnaqxLv8U/bjpmbQI/aiKj6NMNwxH0sZjJkmnArTv6aQXMC4/rLlGxCbVXqx98JFBY1sqlTZzxzXVuFYIxRD8fg0L4HgC9CFHsq2k9Z8A/6aOkZ5h0ymg7Nz2UhQ+iwMHoGyei3ZGqZzJ0Px9PMQdvvWH/T6xCUhn3FbgqRmjBqxHXpEi9F2fSH/vpwzh6inu+KFX4JKyNoc0SVAZgyWIijSLHotKnbAyVTeClgm9E2K8aac4zwTKxOKukh39ynqDBRYmmwjH8Bk3GKHVAwXTp2z3xTSmSWZUlzAqFz4J8zE/0/EEadTgo7CPFhXJVG/TUpyjuySFGRP0IMGXFI07vyD8XYD8wCXNVoHlGIhPyAb9paFlEGQxEsNZSQLS6IYCUC4fGdbbgQgZBgsk52jagFQ95ToUGXIV2gX2jExL7EjCiTNtKIZ25CDBeSusm3YlpR1q0xMmdlf43+34mSjqD6WcS4+daOAhgWuvdz1l66B9Yd8CDAziaxQMlc3hFRLc/HaNLsKbvkzzJKDDUcRF84ZXcqQl1UlBZEYoQpIvpnY+to+aq7VRspJR/5gx7OEfLTfooAxcmYiQUj4h7Xn6VrAnN2vSVTFukwzS50b85wbZtoKZTIUBPQcAcVcnrNk2V8p4RKNqBAt9xwlzRKgTCSi+1kp57mr5wo4rrbDVh+tVZbMweHEMX0cTGPHjFo9rxgUxw6kJX4pE0eloAjlNgfyaqmklFXmXKzP3M/Xur4ELs6zy5hiIaQEAMsg6VJsDVBCxmLlbrjIGErp8IFkR/sRbPBuGdAkoUMb/BSIJyPyNY086t+Pb5Z4tBeDsmBt38KH1iE55DrykhhmV3IwGeN8KktBmkPWo+jQZSR8H1hVSNSQgXPMASmPSuiNrQmkbxlVV1IUYz+5NljGAl3yjKS4B0pVP5jL4rmLDyN2vX2Hdnt+Ztit8U2HDZOmHEMMUXc1RBCqjAKIearaZhbMJ7VczbixRGkuTrInGOaa/VS+R1+n17eCx53FJ7es3rPYXRuPGyMVDUf9PhKlb4zj0H8KPhch6baOxyhq0/s6/W6H9gn15s5tynys4GCvTB/hbXD1QH6FKG2SP86rxZ+GOxPsy/cok/VbTKbK+ufvn9ZhqHybff4enifIvx69FufN+tlcNLGz0KqJhZdNwmbsb8mzxGm8eW56AJ5dwjdWAvWhkw6OIqI5e6if40wQZMz6vAw+CLsqdOi8CBMMdPm/BloZjuOoZE56WmW9WVM7rsQcCPMQyqu1rhbARrOYInf/yX3j7cK8CSMy04hV8ep1mRvHVunS64mq8Az30GYQqJf/OusEe9JdCNHf9c1SE16qfbbbdHI+gZCjBlfY7M8mc9PBdj5ptvD7Zq3mxz9gWzj7yJMr3dezN8awRTxQbt/zvFlKnBW30h4t6H51hsb0bimPITry8B+K+HdPn/5e88eMroWZK5Cunz4ZsJkNoAYPf4JZsZfCB7mG4WLL99OeI9ovrhcLZLwa7rMlE65Mtg3QJheK3oebT6MSLtYgwsgaJfcRfFythnCG+Nv7+VkOvT1WdAH5e2X5DrsYWOE6VRncaXtBcneftNL5Xtqks+QabAxwrszNHh+ooPcx/Ymy1AGuI5N5w0S3hkHz1rPVTz60bXn7TpRb7HxnWyUEKRxJpuTQWWMVkBGLxKj4EM0k9Gvwh8Y8+2OWvI0NE2YDs/9U1avJizjieZ4dvC9PqxWBz9wrextMLwtKBnd84DK9PbVxglvfdU/9aSM0tG1mfu7He6yZy72RsqvnapGv6RsVLONnZkLt0AIUj2o2NiAblqefd36h9tnd/PPxYr5rDQbqqrc+L8w96rFdgiTey37g9P1qAwXm3N6+CFBCL3IAv49rI3KCwXTvK5uifBWneyB4vIHoM6MX7JXfUX89eWjz6M1wls7yvRgxXugV7WnOjEr/BXmEy0SJg1TMXKTwktJJyLCn4FenC+1SlgtMqHzEs+LQ2KI7n/BCZkE34ThjOx1/HzCZA4woLnkPp0w0VIK8W3D/wdhXJNTicPqswnxQLMtjS34aEI8JZiWL6k/mDAZAqtsBh9LiDVoEC2wKmwiH0qYzGE8BhfeRxImQ+CVFEn8XxDiadzCYjP2fB5h4oCNhkA2o+THESZ2JvawqU8jxHYmr4Y18qMIE8fuoJbP9YMIEw16rBn29jmEeBFxmNaNPf0YQryICOpHDxMJb+YRwmftEOKarJ7JUiAR3mPxCDaSNDaRxXrCTRIN85RfjkCIDsj+dqusSBxJGwLQGCS+z6tAe87xWCREHX7hfumq4X0TbH2IsKccFj+7piDjJ1DxKC+he4ZQBuckA65H2BQBEaqaZVl/v5WeZh54WMPYz4cdEQm99HZpm8LH9+mS2vMSfxBL7tSzgKjoJeMkm5UQHFK7DhztSwijz/Wva3JT3sKIG3BXewisJAzuoXbFlxE9TnlHLlY7DK6F2oDxv1vjtegNEuH1TujkCeUCYey9nJND514FROX5L28tQCIMbzftcYNVGawKljt0rummLj5ukDjaYP96gCqJ8GymiPo2/Tj1yv5SbK/jv4HCsSHxKjBwOGzWTdSlcxyZI6VpyPdahyVau+fNN4AhVoIFD13x8pqGKSVMreTTA4ZLT/mxyzPX9K9TPynhlaZMXC2cghlJhNEVQtfSvCDdjVkGwz8jksdNAIoynjjblPFZPuwr03jlzpDmpejIebXa3bzntTKdoTE4ZwqqzYfnMJWG3jqEZESQrjnrEiJxlqukOWoDRt84b3nmanwTe5Oc386pJiG6+72BkqqdWnxokj3jmv3E8ioeUHsbe1RB3WMM88kCooA7znm4vWwQEk3A+akdwseaG6ZjJEO0SAx45P/OA5Y3RoGnk9Qnzh5Pdqrj7VBnWrO4WuoKtOb+sFTW4SvJPdFCGkdkl+nW5A7s35R8MlYr5MWRCY6+jpiDxogb8Idv/m+2Bi+fUP31ketTNyNPjtV4n56AEkdQzoeJ2pGLeIej0dYbcXgJqv3ktF2kWJkYUpTGZ306HxJEoDr29vDQSfuB22gq5rsFTizvdzuMXxGwW1yOp5kmzM7V/EQ1DaP3pX31jElLGdENyv/UPTvppJNOOumkk0466aSTTj5Z/gH6JtnohnyXogAAAABJRU5ErkJggg==" />}
      >
        Services
      </SelectItem>
     
    </Select>
    </div>
    
    {(formData.category==="Services")?(
<>
 <div className="sm:col-span-4">
              <label htmlFor="services" className="block text-sm font-medium leading-6 text-gray-900">
                Services
              </label>
              <div className="mt-2">
              <RadioGroup
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange} 
                  required
                  defaultValue="male">
              <Radio value="Pro-bono Doctor">Pro-bono Doctor</Radio>
              <Radio value="Pro-bono Teacher">Pro-bono Teacher</Radio>
            </RadioGroup>
              </div>
            </div> 
            </>
    ):null}


<div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Post Description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="Images" className="block text-sm font-medium leading-6 text-gray-900">
                Images
              </label>
             
                
              <p className="mt-1 text-sm leading-6 text-gray-600">Upload relevant images to your post and needs, to inform donors of exactly what you require! </p>
              
            
            {/* <p className="mt-1 text-sm leading-6 text-gray-600">Upload relevant documents proving your legitimacy as an Organization</p> */}
            
              <div className="mt-2 flex items-center gap-x-3">
           

                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} required />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload Image
                </button>

               <div className="uploaded-text">
                <p className="mt-1 text-sm leading-6 ">{uploadText}</p>
                </div>

                {/* <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={downloadFile}
                >
                  Download Document
                </button> */}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="maxDonateAmount" className="block text-sm font-medium leading-6 text-gray-900">
               Donation Goal
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="maxDonateAmount"
                  id="maxDonateAmount"
                  placeholder=" Enter maximum donation amount"
                  value={formData.maxDonateAmount}
                  onChange={handleInputChange}
                  autoComplete="1000"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            

            

            
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900"> 
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        </Link>
        <Button
          type="submit"
          text="Post"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
       
      </div>
    </form>

    </div>
  );
}
 
export default RegistrationForm;