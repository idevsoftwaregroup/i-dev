import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/logo/i-dev.png";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const style = {
    alignRTL: 'RTL',
    alignLTR: 'LTR',
    surface: 'surface'
  }

  return (
    <>
      {/* TOP HEADER */}

      <header className="padding">
        <nav className={`${style.surface}`} dir={ `${style.alignRTL}` }>
          {/* RIGHT SIDE */}
          <div className="row ">
            <button
              className="circle left-round large transparent grey4"
              onClick={() => setOpen(true)}
            >
              <i className="large ">apps</i>
            </button>

            <button className="circle right-round transparent grey4 large">
              <i className="large">account_circle</i>
            </button>
          </div>

          {/* PUSH LOGO TO LEFT */}

          <div className="max"></div>

          {/* LEFT SIDE LOGO */}

          <img src={logo} className="circle right-round top-round" alt="i-dev" />
        </nav>
      </header>

      {/* RIGHT DRAWER */}

      <dialog className="left" open={open}>
        <header>
          <nav>
            <img src={logo} className="circle large" alt="logo" />

            <h6 className="max small ">گروه نرم فزاری  <sup className="bold"> آی دِو </sup></h6>

            <button
              className="transparent circle large"
              onClick={() => setOpen(false)}
            >
              <i>close</i>
            </button>
          </nav>
        </header>

        <div className="space"></div>

        <ul className="list">
          <li className="wave round" dir={ style.alignRTL } onClick={() => setOpen(false)}>
            <NavLink to="/">
              <i>home</i>

              <span className="max">خانه</span>
            </NavLink>
          </li>

          <li className="wave round" dir={ style.alignRTL } onClick={() => setOpen(false)}>
            <NavLink to="/academy">
              <i>school</i>

              <span>آکادمی</span>
            </NavLink>
          </li>

          <li className="wave round" dir={ style.alignRTL } onClick={() => setOpen(false)}>
            <NavLink to="/consulting">
              <i>psychology</i>

              <span>مشاوره تکنولوژی</span>
            </NavLink>
          </li>

          <li className="wave round" dir={ style.alignRTL } onClick={() => setOpen(false)}>
            <NavLink to="/projects">
              <i>rocket_launch</i>

              <span>پروژه ها</span>
            </NavLink>
          </li>

          <div className="space"></div>
          <hr className="max spav" />
          <div className="space"></div>

          <li className="wave round" dir={ style.alignRTL } onClick={() => setOpen(false)}>
            <NavLink to="/about">
              <i>info</i>

              <span>درباره ما</span>
            </NavLink>
          </li>


          <li className="wave round" dir={ style.alignRTL } onClick={() => setOpen(false)}>
            <NavLink to="/about">
              <i>call</i>

              <span>تماس با ما</span>
            </NavLink>
          </li>


        </ul>
      </dialog>
    </>
  );
}
