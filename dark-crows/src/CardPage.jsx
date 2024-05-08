import { useState } from 'react'

const Organization = {
  name: 'Masr El Kheir',

  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://omneyanabil.com/wp-content/uploads/2020/05/Misr-El-Kheir-Foundation-Logo.png',
      alt: '',
    },
    {
      src: 'https://th.bing.com/th/id/R.b5ddbd1e4e825446311e943ddbc8e89f?rik=MfoD4FAfwnPhKA&pid=ImgRaw&r=0',
      alt: '',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.dAHMLqvFpnOfeof6is5lSAHaGB?rs=1&pid=ImgDetMain',
      alt: 'poor kid smiling',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.3Sbv8cnk7IXx9dvTKsodwQHaFj?rs=1&pid=ImgDetMain',
      alt: '',
    },
  ],

 
  description:
    'Misr El-Kheir Foundation was established in 2007 with the aim of continuing for more than 500 years, based on an institutional structure that does not depend on people, but rather on institutional work, where we work with the latest methodologies of institutional development and craftsmanship for human development in five basic areas (social solidarity, education, health, scientific research and walks of life) under one umbrella is Misr El-Kheir Foundation, and Misr El-Kheir Foundation is a non-profit civil institution registered under No. 555 of 2007 in accordance with the provisions of Law No. 84 of 2002 and aims to serve, develop and empower the Egyptian society in order to return to a decent life in all parts of Egypt. Misr El-Kheir Foundation does not have any political, religious or partisan orientation, and receives zakat funds, alms and donations, as it disburses zakat funds in its legitimate banks and Misr El-Kheir Foundation invests charity funds to obtain a return to be spent on development projects.',
  
  
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CardPage() {


  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav> */}

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={Organization.images[0].src}
              alt={Organization.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={Organization.images[1].src}
                alt={Organization.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={Organization.images[2].src}
                alt={Organization.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={Organization.images[3].src}
              alt={Organization.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        {/* mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 */}
        <div className="lg:max-w-7xllg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{Organization.name}</h1>
          </div>

         

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="">
                <p className="text-base text-gray-900">{Organization.description}</p>
              </div>
            </div>

            

           
          </div>
        </div>
      </div>
    </div>
  )
}