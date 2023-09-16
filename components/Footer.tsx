import Image from "next/image";
import "public/css/Footer.css";

export default function Footer() {
  return (
    <footer className="px-5">
        <div className="flex flex-wrap justify-between  ">
          <div className="my-3 xxl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-11/12 sm:w-11/12 xs:w-11/12 w-11/12 description">
            <Image
              src="/images/logo.png"
              className="logo-footer"
              alt="logo"
              width={100}
              height={100}
            ></Image>
            <br />
            <br />
            <span>221 Main Street, Suite 1856</span>
            <br />
            <span>Los Altos Hills, CA 94022</span>
            <br />
            <span>MAIN  (650) 948-8830</span>
            <br />
            <span className="mb-5">FAX  (650) 948-3396 </span>
            <span className=" divider-h  footer-sub-title-mail2">
              info@arrowheadeconomics.com
            </span>
            <div className="w-12/12  text-center color-divider divider-h border-t border-gray-100 w-100 mt-5  "></div>
          </div>
          <div className="w-1/12 divider-v color-divider border-r border-gray-300 h-100  "></div>
          <div className="  xxl:w-3/5 xl:w-3/5 lg:w-3/5 flex flex-wrap justify-start   ">
            <div className="my-3  xxl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-11/12 sm:w-11/12 xs:w-11/12 w-11/12">
              <span className="footer-title">Solutions</span>
              <br />
              <span className="footer-sub-title">Our software</span>
              <br />
              <span className="footer-sub-title">Consulting</span>
              <br />
              <span className="footer-sub-title">Training </span>
            </div>
            <div className=" my-3 xxl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-11/12 sm:w-11/12 xs:w-11/12 w-11/12">
              <span className="footer-title">Segments</span>
              <br />
              <span className="footer-sub-title">Oil & Gasare</span>
              <br />
              <span className="footer-sub-title">Power & Electricity</span>
              <br />
              <span className="footer-sub-title">Green Energy/Renewables </span>
              <br />
              <span className="footer-sub-title">Mining </span>
              <br />
              <span className="footer-sub-title">Manufacturing </span>
              <br />
              <span className="footer-sub-title">Water </span>
            </div>
            <div className=" my-3  xxl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-11/12 sm:w-11/12 xs:w-11/12 w-11/12">
              <span className="footer-title">About us</span>
              <br />
              <span className="footer-title">Case studies</span>
              <br />
              <span className="footer-title">Blog</span>
              <br />
              <div className="  mt-5 ">
                <button className="bg-primary rounded-3xl px-3 py-2 footer-title">
                  Contact Us
                </button>
              </div>
            </div>
            <div className=" my-3 xxl:w-4/4 xl:w-4/4 lg:w-4/4 md:w-11/12 sm:w-11/12 xs:w-11/12 w-11/12  divider-v">
              <span className="divider-v footer-sub-title-mail">
                info@arrowheadeconomics.com
              </span>
            </div>
          </div>
        </div>
    </footer>
  );
}
