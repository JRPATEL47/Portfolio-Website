import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_icons">
        <Icon
          icon="uil:github-alt"
          onClick={() => window.open("https://github.com/JRPATEL47", "_blank")}
        />
        <Icon
          icon="la:linkedin-in"
          onClick={() =>
            window.open("http://www.linkedin.com/in/jenish-patel2011", "_blank")
          }
        />
        <Icon
          icon="bxl:instagram"
          onClick={() =>
            window.open("https://www.instagram.com/_jenish_111/", "_blank")
          }
        />
      </div>

      <div className="footer_remarks">
        <h4>
          Built & designed with j
          <Icon
            icon="ant-design:heart-outlined"
            style={{ verticalAlign: "middle" }}
          />
          y by Jenish Patel
        </h4>
        <span>©</span>
        <h5> 2022 Jenish Patel. All rights reserved.</h5>
      </div>
    </footer>
  );
}

export default Footer;
