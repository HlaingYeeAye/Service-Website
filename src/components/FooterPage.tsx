import React from "react";
import Services from './Services';

const FooterPage = () => {
  return (
   <section id="footer" className="bg-yellow-400 text-black text-center py-6">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} ServicePro. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterPage;