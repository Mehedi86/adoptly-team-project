"use client"

import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";


const blogsData = [
    {
        "title": "Adopting a Pet Can Change Your Life",
        "description": "Discover how bringing a furry friend into your life can improve your happiness, health, and sense of purpose. Learn real stories from Adoply adopters.",
        "date": "2025-10-04",
        "image": "/blog/img1.jpg",
        "user": {
            "name": "Sarah Johnson",
            "image": "/blog/img1.jpg"
        }
    },
    {
        "title": "Tips for First-Time Pet Parents",
        "description": "New to pet adoption? Here are the most important things to prepare before bringing your new pet home — from food to vet visits.",
        "date": "2025-09-27",
        "image": "/blog/img2.jpg",
        "user": {
            "name": "Michael Lee",
            "image": "/blog/img2.jpg"
        }
    },
    {
        "title": "Inside Adoply’s Rescue Mission",
        "description": "A look inside Adoply’s rescue network, from shelter partnerships to volunteer stories making a difference every day.",
        "date": "2025-09-18",
        "image": "/blog/img3.jpg",
        "user": {
            "name": "Emily Carter",
            "image": "/blog/img3.jpg"
        }
    },
    {
        "title": "Pets and Mental Health",
        "description": "Studies show pets reduce stress and loneliness. See how Adoply adopters have found joy and comfort through their pets.",
        "date": "2025-08-30",
        "image": "/blog/img4.jpg",
        "user": {
            "name": "David Kim",
            "image": "/blog/img4.jpg"
        }
    },
    {
        "title": "Preparing Your Home for a Rescue Pet",
        "description": "Before adopting, make your home a safe and welcoming space for your new furry family member with these simple tips.",
        "date": "2025-08-22",
        "image": "/blog/img5.jpg",
        "user": {
            "name": "Anna Rodriguez",
            "image": "/blog/img5.jpg"
        }
    },
    {
        "title": "Why Senior Pets Deserve Love",
        "description": "Older pets often get overlooked, but they make wonderful, calm companions. Learn why adopting a senior pet can be so rewarding.",
        "date": "2025-08-10",
        "image": "/blog/img6.jpg",
        "user": {
            "name": "James Walker",
            "image": "/blog/img6.jpg"
        }
    },
    {
        "title": "Pet Vaccination & Vet Guide",
        "description": "Keeping your pet healthy means regular vet visits and vaccinations. Here's a complete checklist for responsible pet care.",
        "date": "2025-07-29",
        "image": "/blog/img7.jpg",
        "user": {
            "name": "Olivia Brown",
            "image": "/blog/img7.jpg"
        }
    },
    {
        "title": "Meet Adoply’s Volunteer Heroes",
        "description": "Meet the heroes behind Adoply — the volunteers who dedicate their time and love to helping animals find forever homes.",
        "date": "2025-07-10",
        "image": "/blog/img8.jpg",
        "user": {
            "name": "Ethan Davis",
            "image": "/blog/img8.jpg"
        }
    },
    {
        "title": "Pet Nutrition Basics",
        "description": "Confused about pet food labels? Learn how to choose the best diet for your pet’s age, breed, and health condition.",
        "date": "2025-06-25",
        "image": "/blog/img9.jpg",
        "user": {
            "name": "Sophia Martinez",
            "image": "/blog/img9.jpg"
        }
    },
    {
        "title": "Happy Adoption Stories",
        "description": "Read inspiring stories of animals rescued through Adoply who are now living happily with their forever families.",
        "date": "2025-06-05",
        "image": "/blog/img10.jpg",
        "user": {
            "name": "Daniel Green",
            "image": "/blog/img10.jpg"
        }
    }
]



const blogCards = () => {
    return (
        <div className="lg:mx-10 mx-3 my-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                blogsData.map(blog => (
                    <div className="group shadow-2xl rounded-xl">
                        <div className=" h-72 overflow-hidden rounded-t-2xl">
                            <Image className="group-hover:scale-110 group-hover:rotate-3 duration-300 w-full h-full rounded-t-xl" src={blog.image} width={500} height={300} alt="blog.title" />
                        </div>
                        <div className="p-5 space-y-2">
                            <div>
                                <p className="text-right font-lato text-[#E76F51]">{blog.date}</p>
                            </div>
                            <h1 className="text-xl font-bold font-truculenta">{blog.title}</h1>
                            <p className="font-lato text-[#757575]">{blog.description.slice(0, 110)}...</p>
                            <button className="btn w-32 rounded-xl bg-[#E76F51] text-white">
                                Read More
                                <FaAnglesRight />
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default blogCards;