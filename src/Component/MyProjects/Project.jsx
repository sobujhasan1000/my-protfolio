import React from "react";

const Project = () => {
  return (
   <> 
   <h1 className="text-center text-white text-3xl font-medium my-4 mt-8">My project</h1>
    <div className="grid lg:grid-cols-2 gap-6 p-6 opacity-80">
      <div className="bg-green-400 p-4 rounded-md">
         <div className="gap-2">
          <img  
          style={{
            animation: 'scroll 10s linear infinite',
            transformOrigin: 'left center'
          }}
          className="w-full rounded-md" src="https://i.ibb.co/PGbtRFp/project1.png" alt="" />
          <div className="p-6 ">
            <p>
            My website is sport realted and name  Ultrapower sport accademy.website features: first top side navigate menu. users to easily navigate through different pages or sections.our website is Responsive Design. user use it any device sceen size and mobile responsive.class section see you all posted class and if you select button auto save your selected class page.instractor section have a all instractor in this school and there contrac information.
            </p>
          </div>
         </div>
         <div className="flex items-center justify-center gap-4 my-2">
         <a href="https://ultrapower-sports.web.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Link</a>
          <button className="btn">server site</button>
         </div>
      </div>
      <div className="bg-green-400 p-4 rounded-md">
         <div className="gap-2">
          <img className="w-full rounded-md" src="https://i.ibb.co/nPymKZp/chef1.png" alt="" />
          <div className="p-6">
            <p>
            -this website is a ecommerce site and only buy animals toy.first there is a nave bar and here is a company logo,name, home page, all toy page, blog page and user profile.then have a carusel there is a 4 photo if you click then show another photo see you.and gallary section have a many toys photo. this toy photo only this company selling.another section is a discount section when some times have a many offer only this time show this offer.and finally you see products photo and buy this toys.
            </p>
          </div>
         </div>
         <div className="flex items-center justify-center gap-4 my-2">
         <a href="https://the-yemmy-chef.web.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Link</a>
          <button className="btn">server site</button>
         </div>
      </div>
    </div>
   </>
  );
};

export default Project;
