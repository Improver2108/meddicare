"use client"
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState, useRef } from "react";

const Blogcol = () => {
    return (
    <div className="grid grid-cols-1 gap-4">
    <div className="flex-auto">
    <img className="float-right" src="https://via.placeholder.com/150" alt="placeholder" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi atque incidunt reiciendis, blanditiis cumque perferendis provident explicabo? Quibusdam odio repellat accusantium enim atque porro dolore possimus reprehenderit ipsa optio.


    </div>
    <div className="flex-auto" > <img className="float-right" src="https://via.placeholder.com/150" alt="placeholder" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, cupiditate ab in tenetur, ipsam, nam aut voluptates commodi consequuntur veniam doloribus ut explicabo delectus quo quia sapiente sunt dolorum dolore.
    </div>
    <div className="flex-auto">
    <img className="float-right" src="https://via.placeholder.com/150" alt="placeholder" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab modi atque incidunt reiciendis, blanditiis cumque perferendis provident explicabo? Quibusdam odio repellat accusantium enim atque porro dolore possimus reprehenderit ipsa optio.


    </div>
    <div className="flex-auto" > <img className="float-right" src="https://via.placeholder.com/150" alt="placeholder" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, cupiditate ab in tenetur, ipsam, nam aut voluptates commodi consequuntur veniam doloribus ut explicabo delectus quo quia sapiente sunt dolorum dolore.
    </div>
  </div>



)
}
export default Blogcol;